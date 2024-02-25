// src/SubredditSearch.js
import React, { useState } from 'react';

function SubredditSearch({ onSearch }) {
  const [subreddit, setSubreddit] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const sanitizedSubreddit = subreddit.trim().replace(/\s+/g, '');
    if (sanitizedSubreddit) {
      onSearch(sanitizedSubreddit);
    } else {
      alert('Please enter a valid subreddit name.');
    }
  };

  return (
    <form onSubmit={handleSearch} className="form-inline my-4">
      <input
        type="text"
        className="form-control mr-sm-2"
        placeholder="Enter subreddit name"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">Search</button>
    </form>
  );
}

export default SubredditSearch;
