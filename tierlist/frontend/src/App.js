import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Principal from './pages/principal.js'
import Categoria from './pages/categorias/categoria.js'


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/principal"/>}/>
        <Route path="/principal" element={<Principal/>}/>
        <Route path="/categorias/:categoria" element={<Categoria/>}/>
      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
