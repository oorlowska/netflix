import "./App.css";
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Popularne" fetchUrl={requests.fetchTrending} />
      <Row title="Najwyżej Oceniane" fetchUrl={requests.fetchTopRated} />
      <Row title="Filmy Akcji" fetchUrl={requests.fetchAction} />
      <Row title="Komedie" fetchUrl={requests.fetchComedy} />
      <Row title="Horrory" fetchUrl={requests.fetchHorror} />
      <Row title="Romanse" fetchUrl={requests.fetchRomance} />
      <Row title="Filmy Dokumentalne" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;