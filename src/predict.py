# Prediction module

import joblib
import pandas as pd

# Load the trained model
model = joblib.load('../models/soh_model.pkl')

def predict_soh(features):
    """
    Predict SoH from features.

    Args:
        features (dict): Dictionary with keys 'cycle', 'capacity', 'internal_resistance', 'temperature_avg'

    Returns:
        float: Predicted SoH percentage
    """
    # Convert to DataFrame
    df = pd.DataFrame([features])
    prediction = model.predict(df)[0]
    return prediction

# Example usage
if __name__ == "__main__":
    sample_features = {
        "cycle": 120,
        "capacity": 0.8,
        "internal_resistance": 0.06,
        "temperature_avg": 25
    }
    soh = predict_soh(sample_features)
    print(f"Predicted SoH: {soh:.2f}%")