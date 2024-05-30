import './App.css';
import { BrowserRouter} from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import Hamburger from './components/navbar/hamburger.js';
import MovieCard from './components/movie-cards/moviecard';
import Search from './components/pages/search';
import Fav from './components/pages/fav';
import Home from './components/pages/home';
import SelectedCard from './components/movie-cards/selected-card.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Hamburger/>
        <Routes>
          <Route path="/" element={<Home />}> </Route>
          <Route path="/card" element={<MovieCard />}> </Route>
          <Route path="/search" element={<Search />}> </Route>
          <Route path="/fav" element={<Fav />}> </Route>
          <Route path="/detail-card" element={<SelectedCard />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
