// src/FavoritesList.js
import React from 'react';

function FavoritesList({ favorites, onRemoveFavorite }) {
  return (
    <ul className="list-group">
      {favorites.map((favorite) => (
        <li key={favorite.id} className="list-group-item d-flex justify-content-between align-items-center">
          <span>
            {favorite.title} - Score: {favorite.score}
            <a href={favorite.commentsLink} className="ml-2 badge badge-primary" target="_blank" rel="noopener noreferrer">Link</a>
          </span>
          <button onClick={() => onRemoveFavorite(favorite.id)} className="btn btn-danger btn-sm">Remove Favorite</button>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList;
