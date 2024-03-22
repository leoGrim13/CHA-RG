import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const Code = () => {
  const [password, setPassword] = useState(""); // État pour stocker le mot de passe entré par l'utilisateur
  const [showText, setShowText] = useState(false); // État pour contrôler l'affichage du texte

  const correctPassword = "toctoc"; // Mot de passe correct

  const handleChange = (event) => {
    setPassword(event.target.value); // Mettre à jour le mot de passe lorsque l'utilisateur saisit quelque chose dans le champ
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêcher le comportement de soumission par défaut du formulaire

    // Vérifier si le mot de passe entré correspond au mot de passe correct
    if (password === correctPassword) {
      // Si le mot de passe est correct, afficher le texte souhaité
      setShowText(true);
    } else {
      // Si le mot de passe est incorrect, afficher un message d'erreur ou effectuer une autre action
      console.log("Mot de passe incorrect !");
    }
  };

  return (
    <div className="horror-mystique-content">
      <h1>face à la porte du secret :</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
      {showText && (
        <div>
          <p>Dernière étape !</p>
          <p>oenib cbhe nibve erhffv zba p he w rfcrer dhr gh g rf nzhfr wr g nvzr gerf sbeg wr gr fbhunvgr ha wblrhk naavirefnver</p>
        </div>
      )}
      <Link to="/">Retour à la page d'accueil</Link> {/* Lien pour revenir à la page d'accueil */}
    </div>
  );
};

export default Code;
