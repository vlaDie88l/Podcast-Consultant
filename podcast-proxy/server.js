import express from 'express';
import axios from 'axios';
import cors from 'cors';
import xml2js from 'xml2js';

const app = express();
const PORT = 5000; //CHOOSE A PORT THAT IS DIFFERENT FROM THE REACT APP

app.use(cors());

app.get('/podcast-details', async (req, res) => {
  try {
    const { id } = req.query; // Extracting the podcast ID from the query parameters
    const response = await axios.get(
      `https://itunes.apple.com/lookup?id=${id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch podcast details.' });
  }
});

app.get('/podcast-feed-url', async (req, res) => {
  try {
    const { id } = req.query; // Extracting the podcast ID from the query parameters
    const response = await axios.get(
      `https://itunes.apple.com/lookup?id=${id}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch podcast feed URL.' });
  }
});

app.get('/feed', async (req, res) => {
  const feedUrl = req.query.url;
  if (!feedUrl) {
    return res.status(400).send({ error: 'URL is required' });
  }

  try {
    const response = await axios.get(feedUrl);
    const xml = response.data;

    xml2js.parseString(xml, (err, result) => {
      if (err) {
        return res.status(500).send({ error: 'Error parsing XML' });
      }

      const episodes = result.rss.channel[0].item;

      res.send(episodes);
    });
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch the feed' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
