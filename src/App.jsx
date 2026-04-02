import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink,  useLocation } from 'react-router-dom';

import { translations } from './translations';
import './App.css';

import Home from './pages/Home';
import Faq from './pages/Faq';
import Problems from './pages/Problems';
import Participate from './pages/Participate';
import KaIOL from './pages/KaIOL'
import About from './pages/About';
import PastComp from './pages/Pastcomp';
import Preparation from './pages/Preparation';


function AppContent() {
  const [lang, setLang] = useState('en');
  const t = translations[lang];
  const location = useLocation();

  const problemsActive =
    location.pathname === '/past' || location.pathname === '/preparation';

  return (
    <div>
      <div id="menu">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              {t.home || "Home"}
            </NavLink>
          </li>

          <li className="dropdown">
            <span className={`dropbtn ${problemsActive ? 'active' : ''}`}>
              {t.problems || "Problems"}
              <span className="dropdown-arrow">▾</span>
            </span>

            <div className="dropdown-content">
              <NavLink to="/past" className={({ isActive }) => isActive ? "active" : ""}>
                {t.past || "Past Competitions"}
              </NavLink>
              <NavLink to="/preparation" className={({ isActive }) => isActive ? "active" : ""}>
                {t.preparation || "Preparation"}
              </NavLink>
            </div>
          </li>

          <li>
            <NavLink to="/participate" className={({ isActive }) => isActive ? "active" : ""}>
              {t.participate}
            </NavLink>
          </li>

          <li>
            <NavLink to="/kziol" className={({ isActive }) => isActive ? "active" : ""}>
              {t.kziol}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              {t.about}
            </NavLink>
          </li>
        </ul>

        <div id="langs">
          <ul>
            <li><button onClick={() => setLang('kz')}>KZ</button></li>
            <li><button onClick={() => setLang('ru')}>RU</button></li>
            <li><button onClick={() => setLang('en')}>EN</button></li>
          </ul>
        </div>
      </div>

      <div className="menu-spacer"></div>

      <Routes>
        <Route path="/" element={<Home t={t} />} />
        <Route path="/faq" element={<Faq t={t} />} />
        <Route path="/problems" element={<Problems t={t} />} />
        <Route path="/past" element={<PastComp t={t} />} />
        <Route path="/preparation" element={<Preparation t={t} />} />
        <Route path="/participate" element={<Participate t={t} />} />
        <Route path="/kziol" element={<KaIOL t={t} />} />
        <Route path="/about" element={<About t={t} />} />
      </Routes>

      <footer>
        <p>Email: kazling.contact@gmail.com</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;