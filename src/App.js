import NavComponent from './components/NavComponent/NavComponent'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CharactersComponent from './components/CharactersComponent/CharactersComponent';
import LocationsComponent from './components/LocationsComponent/LocationsComponent';
import EpisodesComponent from './components/EpisodesComponent/EpisodesComponent';

function App() {
  return (
    <div className="App">
      <NavComponent/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/characters' element={<CharactersComponent/>}></Route>
        <Route exact path='/locations' element={<LocationsComponent/>}></Route>
        <Route exact path='/episodes' element={<EpisodesComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
