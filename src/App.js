import React, { useState, useEffect } from 'react';
import SubredditSearch from './Components/SubredditSearch';
import PostsList from './Components/PostsList';
import FavoritesList from './Components/FavoritesList';
import { fetchTopPosts } from './RedditAPI';
import { addFavorite, removeFavorite, getFavorites } from './storage';

function App() {
  const [subreddit, setSubreddit] = useState('reactjs');
  const [posts, setPosts] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchTopPosts(subreddit).then(posts => setPosts(posts.slice(0, 10)));
  }, [subreddit]);

  useEffect(() => {
    setFavorites(getFavorites().map(favoriteId => {
      const post = posts.find(post => post.id === favoriteId);
      return post || { id: favoriteId, title: 'Loading...', score: 'Loading...', commentsLink: '#' };
    }));
  }, [posts]);

  const handleSearch = (subreddit) => {
    setSubreddit(subreddit);
  };

  const handleToggleFavorite = (postId) => {
    const isFavorite = favorites.some(favorite => favorite.id === postId);
    if (isFavorite) {
      removeFavorite(postId);
    } else {
      addFavorite(postId);
    }
    setFavorites(getFavorites().map(favoriteId => {
      const post = posts.find(post => post.id === favoriteId);
      return post || { id: favoriteId, title: 'Loading...', score: 'Loading...', commentsLink: '#' };
    }));
  };

  const handleRemoveFavorite = (postId) => {
    removeFavorite(postId);
    setFavorites(favorites.filter(favorite => favorite.id !== postId));
  };

  return (
    <div>
      <h1>Reddit</h1>
      <SubredditSearch onSearch={handleSearch} />
      <h2>Top Posts in "{subreddit}"</h2>
      <PostsList posts={posts} onToggleFavorite={handleToggleFavorite} />
      <h2>My Favorites</h2>
      <FavoritesList favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />
    </div>
  );
}

export default App;
