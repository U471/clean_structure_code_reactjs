// src/containers/ApiContainer.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, postData } from '../redux/actions/apiActions';

const ApiContainer = () => {
  const dispatch = useDispatch();
  const { data, postResponse, loading, error } = useSelector((state) => state.api);

  // Fetch data on component mount
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handlePost = () => {
    const postDataPayload = {
      title: 'foo',
      body: 'bar',
      userId: 1,
    };
    dispatch(postData(postDataPayload));
  };

  return (
    <div>
      <h1>Redux-Saga API Example</h1>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <h2>GET Request Data</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>

      <h2>POST Request Response</h2>
      {postResponse && <p>{`Created new post with ID: ${postResponse.id}`}</p>}

      <button onClick={handlePost}>Send POST Request</button>
    </div>
  );
};

export default ApiContainer;
