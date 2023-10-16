import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainView from './views/MainView/MainView';
import PodcastDetails from './views/PodcastDetails/PodcastDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainView />} />
        <Route path="/podcast/:id" exact element={<PodcastDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
