const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFkM2I0MTZiZjdhMzNlMWU0YzllNDA4NjFhMDIyOSIsInN1YiI6IjY2MzlkNWMzZTMyM2YzMDEyOGRhOTQ0ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iDJUpKfU0-wons7uWhxeAmd3QdwufEInWe0TvcFQJK0",
  },
};
export default async function handler(req, res) {
  try {
    const data = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?language=en",
      options
    ).then((response) => response.json());
    const genres = data.genres;
    res.status(200).json(genres)
  } catch (err) {
    console.error("error during load from TMDB:", err);
  }
}
