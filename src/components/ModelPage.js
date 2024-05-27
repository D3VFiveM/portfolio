import React from 'react';
import { useParams } from 'react-router-dom';

function ModelPage() {
  const { id } = useParams();
  const model = {
    1: {
      name: 'Model 1',
      images: ['model1-1.jpg', 'model1-2.jpg'],
      videos: ['model1-1.mp4'],
    },
    2: {
      name: 'Model 2',
      images: ['model2-1.jpg', 'model2-2.jpg'],
      videos: ['model2-1.mp4'],
    },
    // Ajoutez d'autres modèles ici
  }[id];

  return (
    <div className="main-content">
      <h1>{model.name}</h1>
      <div className="media-gallery">
        {model.images.map((image, index) => (
          <img src={image} alt={`${model.name} ${index + 1}`} key={index} />
        ))}
        {model.videos.map((video, index) => (
          <video controls key={index}>
            <source src={video} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  );
}

export default ModelPage;
