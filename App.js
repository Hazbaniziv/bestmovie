import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import MovieData from "./components/MovieData";
import TopThreeMovies from "./components/TopThreeMovies";
import { Provider } from "./contextApi";

function App() {
  return (
    <Provider>
      <div className="App">
        <h1>BM</h1>
        <hr />
        <TopThreeMovies />
        <hr />
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/:name" element={<MovieData />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
