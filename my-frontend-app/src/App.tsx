import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Create from './components/pages/Create';
import Edit from './components/pages/Edit';


const App = () => {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/Create">Create</a>
            </li>
            <li>
              <a href="/Edit">Edit</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<Create />} />
          <Route path="/Edit" element={<Edit />}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;

