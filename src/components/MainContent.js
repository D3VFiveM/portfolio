import React from 'react';
import { Link } from 'react-router-dom';

function MainContent() {
  const models = [
    { id: 1, name: 'Model 1', image: 'model1.jpg' },
    { id: 2, name: 'Model 2', image: 'model2.jpg' },
    // Ajoutez d'autres modèles ici
  ];

  return (
    <div className="main-content">
      <h1>Nos Designs</h1>
      <div className="model-list">
        {models.map((model) => (
          <Link to={`/model/${model.id}`} key={model.id} className="model-card">
            <img src={model.image} alt={model.name} />
            <h2>{model.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
