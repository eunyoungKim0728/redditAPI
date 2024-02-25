export const fetchTopPosts = async (subreddit) => {
    // Ensure the subreddit name does not contain invalid characters
    const sanitizedSubreddit = subreddit.replace(/[^a-z0-9_]/gi, '');
  
    try {
      const url = `https://www.reddit.com/r/${sanitizedSubreddit}/hot.json?limit=10`;
      console.log(`Fetching: ${url}`); // Confirm the correct URL is being requested
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`Network response was not ok, status: ${response.status}`);
      }
  
      const json = await response.json();
      if (!json.data || !json.data.children) {
        throw new Error('Malformed response data');
      }
  
      return json.data.children.map(post => ({
        id: post.data.id,
        score: post.data.score,
        title: post.data.title,
        commentsLink: `https://reddit.com${post.data.permalink}`
      })).slice(0, 10);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      // Update this to handle the error more gracefully
      alert('Failed to fetch posts. Please try again later.');
      return []; // Return an empty array to reset the posts state
    }
  };
  