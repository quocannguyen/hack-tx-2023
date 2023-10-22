import axios from "axios";

export async function recommendSongs(
    genre: string,
    recommendationCount: number,
) {
    return axios.post(
        "http://127.0.0.1:5000/api/recommendsongs", {
            genre, recommendationCount
        }
    ).then((response) => {
        console.log(response.data)
        return response.data
    })
}