/**
 * Frontend proxy logic for BMS.
 * In a production scenario, these functions would be replaced by a backend API call
 * to the Python ML model.
 */

export const analyzeBatteryData = (data) => {
  const { cell1, cell2, cell3, cell4, temp = 25 } = data;
  
  const voltages = [
    parseFloat(cell1), 
    parseFloat(cell2), 
    parseFloat(cell3), 
    parseFloat(cell4)
  ];
  
  // Calculate Delta V
  const maxV = Math.max(...voltages);
  const minV = Math.min(...voltages);
  const deltaV = maxV - minV;
  
  // Identify weakest cell (1-indexed)
  const weakestCellIndex = voltages.indexOf(minV) + 1;
  
  // Placeholder SoH Simulation based on average voltage and mock drift
  // (In reality, ML model predicts this based on usage history/cycles)
  const avgV = voltages.reduce((a, b) => a + b, 0) / voltages.length;
  // Let's just make a mock formula: 4.2V is 100%, 3.0V is 0%, with some random noise.
  // We'll normalize between 3.2V and 4.2V.
  const sohRaw = ((avgV - 3.2) / (4.2 - 3.2)) * 100;
  // Subtract penalty for high imbalance
  let estimatedSoH = sohRaw - (deltaV * 50); 
  estimatedSoH = Math.max(0, Math.min(100, estimatedSoH)); // clamp 0-100
  
  // Grade
  let grade = 'C';
  if (estimatedSoH >= 80) grade = 'A';
  else if (estimatedSoH >= 60) grade = 'B';
  
  // Balancing Recommendation Logic
  let recommendation = '';
  let rationale = '';
  
  if (estimatedSoH < 60 || temp > 45) {
    recommendation = 'Protect Weak Cell';
    rationale = `Critical condition: ${temp > 45 ? 'Temperature too high' : 'SoH severely degraded'}. Stop cycling to prevent thermal runaway.`;
  } else if (deltaV < 0.010) {
    recommendation = 'No Balancing';
    rationale = `Delta V is ${(deltaV).toFixed(3)}V (acceptable range < 0.010V). Cells are well balanced.`;
  } else if (deltaV >= 0.010 && deltaV < 0.020) {
    recommendation = 'Passive Balancing';
    rationale = `Delta V is ${(deltaV).toFixed(3)}V. Minor imbalance detected. Bleed excess voltage from higher cells via resistors.`;
  } else if (deltaV >= 0.020 && temp <= 45) {
    recommendation = 'Active Balancing';
    rationale = `Delta V is ${(deltaV).toFixed(3)}V. Significant imbalance. Transfer energy actively to Cell ${weakestCellIndex} using capacitors/inductors.`;
  } else {
    recommendation = 'Protect Weak Cell';
    rationale = 'Unknown state or out of bounds conditions.';
  }

  return {
    deltaV,
    weakestCellIndex,
    estimatedSoH: Math.round(estimatedSoH * 10) / 10,
    grade,
    recommendation,
    rationale,
    voltages
  };
};

// -----------------------------------------------------
// Example of how to connect actual backend later:
// -----------------------------------------------------
// export const analyzeBatteryDataAsync = async (data) => {
//   const response = await fetch('https://your-api-url/analyze', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
//   return await response.json();
// };
