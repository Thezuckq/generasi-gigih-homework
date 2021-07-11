import logo from './logo.svg';
import './App.css';

function App() {
  console.log(process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Generasi Gigih App by Dzakky Hazimy - GFE01087.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
