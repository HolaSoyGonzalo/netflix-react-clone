import './App.css';
import Row from "./Components/Row"
import requests from "./requests"

function App() {
  return (
    <div className="App">
     <h1>Hello World</h1>
     <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
