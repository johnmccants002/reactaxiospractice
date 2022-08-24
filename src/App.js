import './App.css';
import OriginalPage from '../src/Pages/OriginalPage'
import RandomQuote from '../src/Pages/RandomQuotePage'
import Header from '../src/components/Header'
import RobosPage from '../src/Pages/RobosPage'
import PokemonPage from '../src/Pages/PokemonPage'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
        <Route path="/randomquote" element={<><Header/><RandomQuote/></>} />
        <Route path="/" element={<><Header/><OriginalPage /></>} />
        <Route path="/robos" element={<><Header /><RobosPage/></>} />
        <Route path="pokemon" element={<><Header/><PokemonPage/></>}/>
        </Routes>

      </Router>
   

    </div>

  );
}

export default App;