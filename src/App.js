import "./App.css";
import Row from "./Row";
import requests from "./Requests";

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
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