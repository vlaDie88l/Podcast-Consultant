import './MainView.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTopPodcasts } from '../../api/api.jsx';

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

const MainView = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [filter, setFilter] = useState('');
  const [filteredPodcasts, setFilteredPodcasts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem('podcastData');
      const storedTimestamp = localStorage.getItem('podcastDataTimestamp');

      if (
        storedData &&
        storedTimestamp &&
        Date.now() - storedTimestamp <= ONE_DAY_IN_MS
      ) {
        const parsedData = JSON.parse(storedData);
        console.log(parsedData);
        setPodcasts(parsedData);
        setFilteredPodcasts(parsedData);
      } else {
        try {
          const data = await fetchTopPodcasts();
          setPodcasts(data);
          setFilteredPodcasts(data);

          localStorage.setItem('podcastData', JSON.stringify(data));
          localStorage.setItem('podcastDataTimestamp', Date.now());
        } catch (error) {
          console.error('Error fetching podcasts:', error);
          setError('Error fetching podcasts. Please try again later.');
        }
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const result = podcasts.filter(
      podcast =>
        podcast.title.label.toLowerCase().includes(filter.toLowerCase()) ||
        podcast['im:artist'].label.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredPodcasts(result);
  }, [filter, podcasts]);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="podcast-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search podcasts..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="podcast-grid">
        {filteredPodcasts.map(podcast => (
          <Link
            key={podcast.id.attributes['im:id']}
            to={`/podcast/${podcast.id.attributes['im:id']}`}
            className="podcast-item"
          >
            <img
              src={podcast['im:image'][2].label}
              alt={podcast.title.label}
              className="podcast-image"
            />
            <div className="podcast-info">
              <h3 className="podcast-artist">{podcast['im:artist'].label}</h3>
              <h4 className="podcast-name">{podcast['im:name'].label}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainView;
