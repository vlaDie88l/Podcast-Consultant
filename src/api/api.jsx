import axios from 'axios';

const BASE_URL = 'https://itunes.apple.com';
const PROXY_URL = 'http://localhost:5000';

export const fetchTopPodcasts = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
    );
    return response.data.feed.entry;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export const fetchPodcastDetails = async id => {
  try {
    const response = await axios.get(`${PROXY_URL}/podcast-details?id=${id}`);
    return response.data.results[0];
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export const fetchPodcastFeedUrl = async id => {
  try {
    const response = await axios.get(`${PROXY_URL}/podcast-feed-url?id=${id}`);
    const podcast = response.data.results[0];
    return podcast.feedUrl;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};

export const fetchRssFeedData = async feedUrl => {
  try {
    const response = await axios.get(`${PROXY_URL}/feed`, {
      params: {
        url: feedUrl,
      },
    });
    const recentEpisode = response.data[0]; // Get the 1 recent episode
    // console.log(response.data);
    // console.log(response.data[0]);

    const parsedEpisode = {
      id: recentEpisode.guid[0],
      title: recentEpisode.title[0],
      audioUrl: recentEpisode.enclosure[0].$.url,
      description: recentEpisode.description[0],
    };

    return parsedEpisode;
  } catch (error) {
    throw new Error(
      error.response ? error.response.data.message : error.message
    );
  }
};
