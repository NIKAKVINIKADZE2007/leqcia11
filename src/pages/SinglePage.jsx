import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const SinglePage = () => {
  console.log(useParams());

  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/posts/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);
  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <h1>{post.id}</h1>
          <Link to={`/posts/${Number(id) - 1}`}>Go Prev Post</Link>
          <Link to={`/posts/${Number(id) + 1}`}>Go Next Post</Link>
        </>
      )}
    </div>
  );
};

export default SinglePage;
