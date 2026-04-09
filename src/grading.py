# Grading module

def grade_battery(soh):
    """
    Grade battery health based on SoH.

    Args:
        soh (float): State of Health percentage

    Returns:
        str: Grade (A, B, or C)
    """
    if soh >= 80:
        return "A"
    elif 60 <= soh < 80:
        return "B"
    else:
        return "C"

# Example
if __name__ == "__main__":
    print(grade_battery(87.4))  # A
    print(grade_battery(72.1))  # B
    print(grade_battery(54.8))  # C