from flask import Flask, request
from flask_cors import CORS
from dotenv import load_dotenv
from data import recommend_songs
import random

load_dotenv(".env")
app = Flask(__name__)

cors = CORS(app)
app.config.from_pyfile("settings.py")

@app.route("/api/recommendsong", methods=["POST"])
def route_recommend_songs():
    genre = request.json["genre"]
    recommendation_count = request.json["recommendationCount"]
    recommended_songs = recommend_songs(genre, recommendation_count)
    track_id = random.choice(recommended_songs)
    return track_id


if __name__ == "__main__":
    app.run(debug=True)