import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';

const Dog = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.toUpperCase() === "FAUX") {
      navigate("/code");
    }
  };

  return (
    <div className="horror-mystique-content">
      <h1>Bonjour je suis le chien bleu :D</h1>
      <div>
        <img src='/bleu.webp' alt="Blue Dog" className='blue'/>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Posez votre question ici..."
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default Dog;
