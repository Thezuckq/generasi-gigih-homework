import './index.css';
import data from '../../data.js';

const TrackComp = () => {

    return (
        <div>
            <div class='boxPlaylist'>
                <img src={data.album.images[0].url} className='albumCover' alt="album-cover"/>
                <p className='text' id="trackTitle">{data.name}</p>
                <p className='text'>{data.album.artists[0].name}</p>
                <p className='text'>{data.album.name}</p>
                <input type='button' value='Select' className='buttonSelect'/>
            </div>
        </div>
    );
};

export default TrackComp;
    
