import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Dog from './Dog';
import Code from './Code'; // Importez la page CodePage

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dog" element={<Dog />} /> {/* Assurez-vous d'ajouter l'élément ou composant correspondant à la route */}
        <Route path="/code" element={<Code />} /> {/* Ajoutez l'élément ou composant pour la page code */}
      </Routes>
    </Router>
  );
};

export default App;
