const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFkM2I0MTZiZjdhMzNlMWU0YzllNDA4NjFhMDIyOSIsInN1YiI6IjY2MzlkNWMzZTMyM2YzMDEyOGRhOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iDJUpKfU0-wons7uWhxeAmd3QdwufEInWe0TvcFQJK0",
  },
};

export default async function details(req, res) {
  try {
    const { movie_id } = req.body;
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
