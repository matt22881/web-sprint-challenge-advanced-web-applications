import React, { useState } from "react";
import axios from 'axios';

const initialState = {
    username: '',
    password: ''
};

const Login = (props) => {
  
  const [creds, setCreds] = useState(initialState)

  const onChange = (e) =>{
    setCreds({
        ...creds, 
        [e.target.name]: e.target.value
    })
  }
  // make a post request to retrieve a token from the api
  const onSubmit = (e) =>{
    e.preventDefault();
    axios 
    .post("http://localhost:5000/api/login", creds)
    // when you have handled the token, navigate to the BubblePage route
    .then((res) => {
      if (res.data.payload.length > 0) {
        localStorage.setItem("token", res.data.payload)
        props.history.push('/protected')
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={creds.username}
            onChange={onChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={creds.password}
            onChange={onChange}
          />
          <button>Log in</button>
        </form>
    </>
  );
};

export default Login;
