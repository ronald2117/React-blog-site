import React from 'react';
import ReactDOm from 'react-dom';
import BlogList from './blogList';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error } = useFetch('http://localhost:3000/blogs');
  return (
    <div className="home">
      <h2 className="headline">All Blogs</h2>
      { error && <div className="error">{ error }</div> }
      {isPending && <div className="loading">Loading...</div> }
      {blogs && <BlogList blogs={blogs} />}
    </div>
  )
}

export default Home;
