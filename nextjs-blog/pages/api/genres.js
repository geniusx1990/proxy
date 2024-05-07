const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};
export default async function handler(req, res) {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    ).then((response) => response.json());
    const genres = data.genres;
    res.status(200).json(genres);
  } catch (err) {
    console.error("error during load from TMDB:", err);
  }
}
