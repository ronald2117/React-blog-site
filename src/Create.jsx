import React from 'react';
import ReactDOm from 'react-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [ title, setTitle] = useState('');
  const [ body, setBody] = useState('');
  const [ author, setAuthor ] = useState('Ronald');
  const [ isPending, setIsPending ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:3000/blogs', {
      method: 'POST',
      headers: { "Content-type": "application/json"},
      body: JSON.stringify(blog)
    })
      .then(() => {
        setIsPending(false);
        navigate('/');
      })
  }
  return (
    <div>
      <h2 className="headline">Create Blog</h2>
      <form onSubmit={ handleSubmit }>
        <label>Blog Title:</label><br/>
        <input
          type="text"
          required
          value={ title }
          onChange={(e) => setTitle(e.target.value)}
        /><br/>
        <label>Blog Body:</label><br/>
        <textarea
          required
          value={ body }
          onChange={(e) => setBody(e.target.value)}
        ></textarea><br/>
        <label>Blog Author:</label><br/>
        <select
          value={ author }
          onChange={(e) => setBody(e.target.value)}
        >
          <option value="Ronald">Ronald</option>
          <option value="Ela">Ela</option>
        </select><br/>
        { !isPending && <button>Submit</button> }
        { isPending && <button disabled>Submiting blog...</button> }
      </form>
    </div>
  )
}

export default Create;