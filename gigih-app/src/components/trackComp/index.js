import './index.css';
import data from '../../data/playlists';

const TrackComp = () => {

    return (
        <div>
            <div class='boxPlaylist'>
                <img src={data[0].album.images[0].url} className='albumCover' alt="album-cover"/>
                <p className='text' id="trackTitle">{data[0].name}</p>
                <p className='text'>{data[0].album.artists[0].name}</p>
                <p className='text'>{data[0].album.name}</p>
                <input type='button' value='Select' className='buttonSelect'/>
            </div>
        </div>
    );
};

export default TrackComp;
    
