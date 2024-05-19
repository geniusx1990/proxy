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
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization, Content-Type, Accept"
  );

  try {
    const { poster_path } = req.query;

    if (!poster_path) {
      res
        .status(400)
        .json({ error: "poster_path query parameter is required" });
      return;
    }

    const url = `https://image.tmdb.org/t/p/original${poster_path}`;
    const response = await fetch(url, options);

    if (!response.ok) {
      console.error(`Failed to fetch image. Status: ${response.status}`);
      res.status(response.status).json({ error: "Failed to fetch image" });
      return;
    }

    const contentType = response.headers.get("content-type");
    const imageBuffer = await response.arrayBuffer();

    res.setHeader("Content-Type", contentType);
    res.status(200).send(Buffer.from(imageBuffer));
  } catch (err) {
    console.error("Error during load from TMDB:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
