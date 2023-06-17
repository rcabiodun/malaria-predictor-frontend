import './css/App.css';
import NavBar from './nav';
import Home from './Home';
import Examine from './Examine';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Subscription from './Subscribe';
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/examine" element={<Examine />} />
          <Route path="/subscription" element={<Subscription />} />

        </Routes>

      </BrowserRouter>

    </div>


  );
}

export default App;
