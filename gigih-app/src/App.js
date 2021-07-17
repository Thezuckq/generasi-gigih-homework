import './App.css';
import Playlists from './pages/playlists';

function App() {
  console.log(process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY);

  return (
    <div className="App">
      <Playlists />
    </div>
  );
}

export default App;
