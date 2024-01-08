import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();

// Enable CORS for all routes
app.use(cors());

app.get("/link-preview", async (req, res) => {
  const url = req.query.url;
  try {
    const response = await axios.get(
      `https://rlp-proxy.herokuapp.com/v2?url=${url}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
