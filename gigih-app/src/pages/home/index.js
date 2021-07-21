import React from "react";
import { CardTrackComp, SpotifySearch, TrackListComp } from "../../components";
import axios from 'axios';
import './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: "",
      token: "",
      artistList: [],
      trackList: [],
      albumList: []
    }
  }

  getHashParam = () => {
    let hashUrl = document.location.hash.substr(1).split('&')
    let hashComponent = hashUrl.reduce((init, item) => {
      if (item) {
        var parts = item.split('=')
        init[parts[0]] = decodeURIComponent(parts[1])
      }
      return init
    }, {})
    return hashComponent
  }

  getApiCall = async (query, token, tokenType) => {
    const response = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        'Authorization': `${tokenType} ${token}`,
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
      params: {
        q: query,
        type: "album,track,artist",
        limit: 3
      }
    })
    this.setState({
      artistList: response.data.artists.items,
      trackList: response.data.tracks.items,
      albumList: response.data.albums.items
    });
    console.log(response.data);
  }

  checkImageAvailability = (list) => {
    let image = [];
    if (list.images.length > 0) {
      list.images.forEach((item) => {
        image.push(item.url)
      })
    } else {
      image = ""
    }
    return image;
  }

  getArtistList = (list) => {
    return list.map((item) => {
      let image = this.checkImageAvailability(item);

      return (
        <CardTrackComp 
          imgUrl={image[1]}
          altImg={image[0] > 0 ? "An Artist Image" : "No Image Available"}
          artistName={item.type}
          trackTitle={item.name}
          btnName="Follow"
          btnUrl={item.external_urls.spotify}
          key={item.id}
        />
      );
    })
  }

  getAlbumList = (list) => {
    return list.map((item) => {
      let image = this.checkImageAvailability(item);

      return (
        <CardTrackComp 
          imgUrl={image[1]}
          altImg={image[0] > 0 ? "An Artist Image" : "No Image Available"}
          artistName={item.artists[0].name}
          trackTitle={item.name}
          btnName="Select"
          btnUrl={item.external_urls.spotify}
          key={item.id}
        />
      );
    })
  }

  getTrackList = (list) => {
    return list.map((item) => {
      let artist = "";
      if (item.artists.length > 1) {
        item.artists.forEach((value) => {
          artist += `${value.name} ft. `
        })
      } else {
        artist = item.artists[0].name;
      }

      let image = this.checkImageAvailability(item.album);

      return (
          <CardTrackComp 
            imgUrl={image[1]}
            altImg={image[0] > 0 ? "An Track Image" : "No Image Available"}
            artistName={artist}
            trackTitle={item.name}
            btnName="Select"
            btnUrl={item.external_urls.spotify}
            key={item.id}
          />        
      );
    })
  }

  handleChange = (event) => {
    this.setState({
      query: event.target.value
    })
  }

  handleClick = async () => {
    let token = this.getHashParam().access_token;
    let tokenType = this.getHashParam().token_type;

    this.setState({
      token
    });

    if (this.state.query === "") {
      alert("Please fill the search input first");
    } else {
      await this.getApiCall(this.state.query, this.state.token, tokenType);
    }
  }

  render() {
    let condition;
    if (this.state.artistList.length > 0) {
      condition = () => {
        return (
          <div>
              <div>
                <TrackListComp title="Artists" list={this.getArtistList(this.state.artistList)}/>
                <TrackListComp title="Albums" list={this.getAlbumList(this.state.albumList)}/>
                <TrackListComp title="Tracks" list={this.getTrackList(this.state.trackList)}/>
              </div>
          </div>
        );
      }
    } else {
      condition = () => <h1 className="NoDataPlaceholder">No Data Available</h1>
    }

    return (
      <div>
        <h1>Spotify Clone</h1>
        <SpotifySearch handleChange={this.handleChange} inputValue={this.state.query} handleClick={this.handleClick}/>
        <div className="SearchResult">
          { condition() }
        </div>
      </div>
    );
  }
}

export default Home;