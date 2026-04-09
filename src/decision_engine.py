# Decision engine module

def decide_balancing_mode(cell_voltages, soh, temp):
    """
    Decide balancing mode based on cell voltages, SoH, and temperature.

    Args:
        cell_voltages (list): List of cell voltages
        soh (float): Predicted SoH
        temp (float): Temperature

    Returns:
        str: Balancing mode
    """
    if not cell_voltages:
        return "NO_DATA"

    delta_v = max(cell_voltages) - min(cell_voltages)

    # Rule 1: No balancing
    if delta_v < 0.010:
        return "NO_BALANCING"

    # Rule 2: Passive balancing
    if 0.010 <= delta_v < 0.020:
        if temp < 50:  # Safe temperature
            return "PASSIVE_BALANCING"

    # Rule 3: Active balancing
    if delta_v >= 0.020:
        if soh > 60:  # Healthy enough
            return "ACTIVE_BALANCING"

    # Rule 4: Protect weak cell
    if soh < 60 or temp > 50:
        return "PROTECT_WEAK_CELL"

    return "UNKNOWN"

# Example
if __name__ == "__main__":
    print(decide_balancing_mode([3.7, 3.72, 3.68], 82.6, 30))  # ACTIVE_BALANCING