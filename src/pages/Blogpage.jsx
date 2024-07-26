import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogpage = () => {
  const [posts, setPosts] = useState([]);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <ul>
          <li>
            <Link key={post.id} to={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Blogpage;
