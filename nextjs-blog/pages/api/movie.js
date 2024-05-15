const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};

export default async function details(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Access-Control-Allow-Methods", "GET");

  res.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type, Accept");

  try {
    const { movie_id } = req.query;
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}`,
      options
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    console.error("error during load from TMDB:", err);
  }
}
