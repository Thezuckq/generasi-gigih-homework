import './App.css';
import MyRouter from "./config/routes";


function App() {
  // eslint-disable-next-line no-undef
  console.log(process.env.REACT_APP_YOUR_GIGIH_APP_API_KEY);

  return (
    <div className="App">
      <MyRouter />
    </div>
  );
}

export default App;
