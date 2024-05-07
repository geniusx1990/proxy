const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
};

function createURL(baseURL, params) {
  let url = new URL(baseURL);

  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.append(key, value);
    }
  }

  return url.toString();
}

export default async function fetchMoviesByParams(req, res) {
  if (req.method !== "GET") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const params = req.query;

    const baseURL = "https://api.themoviedb.org/3/discover/movie";
    const url = createURL(baseURL, params);

    const data = await fetch(url, options).then((response) => response.json());
    res.status(200).json(data);
  } catch (err) {
    console.error("error during load from TMDB:", err);
  }
}
