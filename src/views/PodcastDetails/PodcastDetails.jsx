import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPodcastDetails } from '../../api/api.jsx';
import PodcastEpisodeDetails from '../PodcastEpisodeDetails/PodcastEpisodeDetails.jsx';
import './PodcastDetails.scss';

const PodcastDetails = () => {
  const { id } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcastDetails(id);
        console.log(data);
        setPodcast(data);
      } catch (error) {
        console.error('Error fetching podcast details:', error);
        setError('Failed to fetch podcast details. Please try again.');
      }
    };

    fetchData();
  }, [id]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }
  if (!podcast) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="podcast-details">
      <div className="podcast-info">
        {/* <h2 className="podcast-info-artist">{podcast.artistName}</h2> */}
        <button className="go-back-btn" onClick={() => window.history.back()}>
          Go Back
        </button>
        <h1 className="podcast-info-title">{podcast.collectionName}</h1>

        <img
          className="podcast-info-image"
          src={podcast.artworkUrl600}
          alt={podcast.collectionName}
        />
      </div>
      <PodcastEpisodeDetails />
    </div>
  );
};

export default PodcastDetails;
