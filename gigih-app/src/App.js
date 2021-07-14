import './App.css';
import { TrackComp } from '../src/components';

function App() {
  console.log(process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY);

  return (
    <div className="App">
      <header>
        <h1>Favorite Tracks</h1>
      </header>
      <body>
        <TrackComp />
      </body>
    </div>
  );
}

export default App;
