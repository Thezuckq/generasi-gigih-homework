import './App.css';
import data from './data.js';

function App() {
  console.log(process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY);

  return (
    <div className="App">
    <header>
      <h1>Favorite Tracks</h1>
    </header>
    <body>
        <div class='boxPlaylist'>
            <img src={data.album.images[0].url} className='albumCover' alt="album-cover"/>
            <p className='text' id="trackTitle">{data.name}</p>
            <p className='text'>{data.album.artists[0].name}</p>
            <p className='text'>{data.album.name}</p>
            <input type='button' value='Select' className='buttonSelect'/>
        </div>
    </body>
    </div>
  );
}

export default App;
