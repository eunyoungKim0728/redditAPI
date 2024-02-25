// src/storage.js
export const addFavorite = (postId) => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(postId)) {
      favorites.push(postId);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  };
  
  export const removeFavorite = (postId) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites = favorites.filter(id => id !== postId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  export const getFavorites = () => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  };
  