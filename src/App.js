import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Technologies from './Pages/Technologies';
import Nav from './Pages/Nav';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <span className="front">
          <Link
            style={{ color: 'brown', textDecoration: 'none', fontSize: '40px' }}
            to="Home"
          >
            Preeti Chauhan
          </Link>
        </span>

        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Technologies" element={<Technologies />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
