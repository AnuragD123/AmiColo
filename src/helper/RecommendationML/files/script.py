import sys
import numpy as np
import pandas as pd
from sklearn.preprocessing import OneHotEncoder, MinMaxScaler
import pickle
from datetime import datetime
from dateutil.parser import parse
import json

def calculate_age(dob):
    # Parse the date, ignoring timezone
    dob_datetime = parse(dob, fuzzy=True)
    today = datetime.today()
    age = today.year - dob_datetime.year - ((today.month, today.day) < (dob_datetime.month, dob_datetime.day))
    return age

def train_and_export_with_ids(csv_path):
    try:
        # Read data from CSV file
        data = pd.read_csv(csv_path)
        

        data['age'] = data['dob'].apply(calculate_age)
        columns_to_check = ['id', 'gender', 'occupation', 'cleanliness', 'bedtime', 'diet', 'nationality', 'education', 'smoker', 'age', 'count_friends']
        data.dropna(subset=columns_to_check, inplace=True)

        # Assuming 'ID' is the column name for user IDs
        user_ids = data['id'].values.reshape(-1, 1)
        
        # Define feature columns
        categorical_features = ['gender', 'occupation', 'cleanliness', 'bedtime', 'diet', 'nationality', 'education']
        boolean_features = ['smoker']
        numeric_features = ['age', 'count_friends']
        permissible_values = {feature: data[feature].unique().tolist() for feature in categorical_features + boolean_features}
        
        with open("permissible_values.json", 'w') as f:
            json.dump(permissible_values, f)

        modes = {feature: data[feature].mode()[0] for feature in categorical_features}
        modes.update({'smoker': 0, 'count_friends': 50, 'gender':"Male"})
        with open("mode.json", 'w') as f:
            json.dump(modes, f)
        
        # One-hot encode categorical data
        encoder = OneHotEncoder(sparse=False)
        encoded_categorical = encoder.fit_transform(data[categorical_features])
        
        # Convert boolean to numeric and normalize numeric data
        data[boolean_features] = data[boolean_features].astype(int)
        scaler = MinMaxScaler()
        normalized_numeric = scaler.fit_transform(data[numeric_features])
        
        # Combine IDs with preprocessed data
        preprocessed_data_with_ids = np.hstack((user_ids, encoded_categorical, data[boolean_features].values, normalized_numeric))
        
        # Export preprocessing tools and the preprocessed data
        with open('preprocessing_tools_with_ids.pkl', 'wb') as f:
            pickle.dump({'encoder': encoder, 'scaler': scaler}, f)
        
        np.save('preprocessed_data_with_ids.npy', preprocessed_data_with_ids)
        print("Training completed and data (including IDs) exported.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: script.py <path_to_csv>")
        sys.exit(1)
    csv_path = sys.argv[1]
    train_and_export_with_ids(csv_path)
