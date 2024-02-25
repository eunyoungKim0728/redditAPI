// src/PostsList.js
import React from 'react';

function PostsList({ posts, onToggleFavorite }) {
  return (
    <ul className="list-group">
    {posts.map((post) => (
      <li key={post.id} className="list-group-item d-flex justify-content-between align-items-center">
        <span>
          {post.title} - Score: {post.score}
          <a href={post.commentsLink} className="ml-2 badge badge-primary" target="_blank" rel="noopener noreferrer">Link</a>
        </span>
        <button onClick={() => onToggleFavorite(post.id)} className="btn btn-outline-secondary btn-sm">Favorite</button>
      </li>
    ))}
  </ul>
  );
}

export default PostsList;
