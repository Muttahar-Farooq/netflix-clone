import './App.css';
import { Row } from './Components/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
    <Row title="Netflix Orignals" fetchUrl={requests.fetchNetflixOrignals}></Row>
    <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
    </div>
  );
}

export default App;
