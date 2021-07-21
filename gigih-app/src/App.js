import './App.css';
// import Playlists from './pages/playlists';
import Home from './pages/home';
import Login from './pages/login';
import { Route } from "react-router-dom";


function App() {
  console.log(process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY);

  return (
    <div className="App">
      <Route exact path="/" component={Login} />
      <Route path="/callback" component={Home} />
    </div>
  );
}

export default App;
