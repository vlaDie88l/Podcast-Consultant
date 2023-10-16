import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcastFeedUrl, fetchRssFeedData } from '../../api/api.jsx';
import './PodcastEpisodeDetails.scss';

const PodcastEpisodeDetails = () => {
  const { id } = useParams();
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const feedUrl = await fetchPodcastFeedUrl(id);
        const parsedEpisode = await fetchRssFeedData(feedUrl);
        // console.log(parsedEpisode);
        setEpisodes([parsedEpisode]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching podcast episode data:', error);
        setError('Failed to fetch episode media. Please try again.');
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="episode-details">
      {episodes.map(episode => (
        <div key={episode.id} className="episode">
          <h2 className="episode-title">{episode.title}</h2>
          <audio src={episode.audioUrl} controls />
          <div
            className="episode-description"
            dangerouslySetInnerHTML={{ __html: episode.description }}
          />
        </div>
      ))}
    </div>
  );
};

export default PodcastEpisodeDetails;
