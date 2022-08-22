import './App.css';
import OriginalPage from '../src/Pages/OriginalPage'
import RandomQuote from '../src/Pages/RandomQuotePage'
import Header from '../src/components/Header'

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
        <Route path="/randomquote" element={<><Header/><RandomQuote/></>} />
        <Route path="/" element={<><Header/><OriginalPage /></>} />
        </Routes>

      </Router>
   

    </div>

  );
}

export default App;