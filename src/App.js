import './App.css';
import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Candidato from './components/candidato';
import Estudiante from './components/estudiante';
import Voto from './components/voto';
import Home from './components/home';
import Resultados from './components/resultados';
import AdministrarCandidato from './components/administrar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/estudiante" element={<Estudiante />}></Route>
          <Route path="/candidato"  element={<Candidato />}></Route>
          <Route path="/voto" element={<Voto />} ></Route>
          <Route path="/resultados" element={<Resultados />} ></Route>
          <Route path="/administrar" element={<AdministrarCandidato />} ></Route>
          <Route path="*"  element={<Navigate replace to="/" />}></Route>
          </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
