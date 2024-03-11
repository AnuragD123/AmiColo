import sys
import json
import numpy as np
import pandas as pd
from sklearn.preprocessing import OneHotEncoder, MinMaxScaler
from sklearn.metrics.pairwise import cosine_similarity
import pickle
from dateutil.parser import parse
from datetime import datetime

from sklearn.impute import SimpleImputer

import json

def preprocess_new_user_data(new_user_data, defaults_json_path, permissible_values_path):
    with open(defaults_json_path, 'r') as file:
        default_values = json.load(file)

    with open(permissible_values_path, 'r') as file:
        permissible_values = json.load(file)

    new_user_data['age'] = new_user_data['dob'].apply(calculate_age)
    new_user_data.drop(columns=['dob'], inplace=True)

    for column in new_user_data.columns:
        if column in default_values:
            if column in permissible_values:
                # Replace values not in permissible values with the mode (default)
                new_user_data[column] = new_user_data[column].apply(
                    lambda x: x if x in permissible_values[column] else default_values[column])
            new_user_data[column] = new_user_data[column].fillna(default_values[column])
        elif column == 'count_friends':
            new_user_data[column] = new_user_data[column].replace("", default_values[column]).fillna(default_values[column]).astype(int)
        elif column == 'smoker':
            new_user_data[column] = new_user_data[column].fillna(default_values[column]).astype(int)

    return new_user_data





def calculate_age(dob):
    dob_datetime = parse(dob, fuzzy=True)
    today = datetime.today()
    age = today.year - dob_datetime.year - ((today.month, today.day) < (dob_datetime.month, dob_datetime.day))
    return age

def find_similar_users_with_ids(json_file_path, defaults_json_path,permissible_values_path, num_return):
    with open(json_file_path, 'r') as file:
        new_user_dict = json.load(file)
    
    new_user_data = pd.DataFrame([new_user_dict])
    # Example - calculating modes (this should be adjusted to your actual dataset)
    new_user_data = preprocess_new_user_data(new_user_data, defaults_json_path,permissible_values_path)

    # Now pass `categorical_modes` to your preprocessing function


# Preprocess the new user data to handle nulls and specific column adjustments
    # Iterate through each row in the DataFrame
    for index, row in new_user_data.iterrows():
        print(f"Row {index}:")
        for col_name in new_user_data.columns:
            print(f"{col_name}: {row[col_name]}")
        print("-" * 20)  
    
    # Load preprocessing tools and preprocessed data with IDs
    with open('preprocessing_tools_with_ids.pkl', 'rb') as f:
        tools = pickle.load(f)
    encoder = tools['encoder']
    scaler = tools['scaler']
    
    preprocessed_data_with_ids = np.load('preprocessed_data_with_ids.npy')
    
    # Separate IDs from the features
    user_ids = preprocessed_data_with_ids[:, 0]
    preprocessed_data = preprocessed_data_with_ids[:, 1:]
    
    # Assume the column names in the JSON match the expected columns for encoding and scaling
    encoded_categorical = encoder.transform(new_user_data[['gender', 'occupation', 'cleanliness', 'bedtime', 'diet', 'nationality', 'education']])
    new_user_data[['smoker']] = new_user_data[['smoker']].astype(int)
    normalized_numeric = scaler.transform(new_user_data[['age', 'count_friends']])
    print(encoded_categorical.shape)
    print(new_user_data[['smoker']].values.shape)
    print(normalized_numeric.shape)
    new_user_preprocessed = np.hstack((encoded_categorical, new_user_data[['smoker']].values, normalized_numeric))
    
    # Calculate cosine similarity
    similarities = cosine_similarity(new_user_preprocessed.reshape(1, -1), preprocessed_data)[0]
    
    # Find indices of the top N similar users
    top_n_indices = np.argsort(similarities)[-num_return:]
    
    # Map indices back to user IDs
    top_similar_user_ids = user_ids[top_n_indices]
    
    return top_similar_user_ids[::-1]  # Return IDs in descending order of similarity

if __name__ == "__main__":
    if len(sys.argv) != 5:
        print("Usage: script.py <path_to_new_user_json> <path_to_defaults_json> <path to permissible file> <num_return>")
        sys.exit(1)
    
    json_file_path = sys.argv[1]
    defaults_json_path = sys.argv[2]
    permissible_values_path=sys.argv[3]
    num_return = int(sys.argv[4])
    
    
    # Preprocess the new user data
    
    
    # Continue with the rest of your processing...


    similar_user_ids = find_similar_users_with_ids(json_file_path,defaults_json_path,permissible_values_path, num_return)
    print(similar_user_ids)
    ranked_similar_user_ids = {idx + 1: int(user_id) for idx, user_id in enumerate(similar_user_ids)}

# Export to sim.json
    with open('sim.json', 'w') as f:
        json.dump(ranked_similar_user_ids, f)

