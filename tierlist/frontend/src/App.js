import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import Login from './pages/principal.js'



function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/principal"/>}/>
        <Route path="/principal" element={<Login/>}/>

      </Routes>
    </div>
    </Router>
    
  );
}

export default App;
