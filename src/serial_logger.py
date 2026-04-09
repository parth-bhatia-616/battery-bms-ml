# Serial logger module

import serial
import time
from predict import predict_soh
from grading import grade_battery
from decision_engine import decide_balancing_mode

def process_esp32_data(cell_voltages, current, temp):
    """
    Process ESP32 data and make decisions.

    Args:
        cell_voltages (list): Cell voltages
        current (float): Pack current
        temp (float): Temperature
    """
    # Simulate features (in real implementation, compute from data)
    features = {
        "cycle": 100,  # Would be tracked
        "capacity": 0.85,  # Would be measured
        "internal_resistance": 0.055,
        "temperature_avg": temp
    }

    soh = predict_soh(features)
    grade = grade_battery(soh)
    delta_v = max(cell_voltages) - min(cell_voltages)
    weakest_cell = cell_voltages.index(min(cell_voltages)) + 1
    mode = decide_balancing_mode(cell_voltages, soh, temp)

    print(f"SoH: {soh:.1f}%")
    print(f"Grade: {grade}")
    print(f"Delta V: {delta_v:.3f}V")
    print(f"Weakest Cell: Cell {weakest_cell}")
    print(f"Balancing Mode: {mode}")
    print("Recommended Action: Transfer energy toward weakest cell" if mode == "ACTIVE_BALANCING" else "Monitor")

def demo():
    """Demo with simulated data"""
    print("ESP32 Data Integration Demo")
    print("=" * 30)

    # Simulated data
    cell_voltages = [3.65, 3.72, 3.68, 3.70]
    current = 1.2
    temp = 28

    process_esp32_data(cell_voltages, current, temp)

if __name__ == "__main__":
    demo()