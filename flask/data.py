import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity

# Load the user and song datasets
user_data = pd.read_csv('./flask/dataset_end.csv')
song_data = pd.read_csv('./flask/tracks_with_audio_features.csv')
song_data["Track ID"] = song_data["URL"].str.split('/').str[-1]

merged_data = user_data.merge(song_data, left_on='Music preference', right_on='Genre', how='inner')
user_data['Income per annum'] = user_data['Income per annum'].str.replace('$', '').astype(int)
user_data['Net worth'] = user_data['Net worth'].str.replace('$', '').astype(int)

user_data['Financial_Profile'] = user_data['Income per annum'] / user_data['Net worth']
user_item_matrix = pd.crosstab(merged_data['Email ID'], merged_data['Track'])
user_similarity = cosine_similarity(user_item_matrix)

# def recommend_songs(email, num_recommendations=10):
#     user_index = user_item_matrix.index.get_loc(email)
#     user_row = user_similarity[user_index]
#     user_row_sorted_indices = user_row.argsort()[::-1]

#     user_songs = user_item_matrix.columns[user_item_matrix.loc[email] == 1]
#     recommended_songs = []

#     for idx in user_row_sorted_indices:
#         song_name = user_item_matrix.index[idx]
#         if song_name not in user_songs:
#             recommended_songs.append(song_name)
#         if len(recommended_songs) >= num_recommendations:
#             break

#     return recommended_songs

def recommend_songs(genre: str, num_recommendation: int=10):
    songs_by_genre = song_data.loc[song_data["Genre"] == genre]
    track_ids = [track_id for track_id in songs_by_genre["Track ID"]]
    return track_ids

# email = 'nmartinez@example.org'  
# recommendations = recommend_songs(email, num_recommendations=10)
# print("Recommended Songs:", recommendations)