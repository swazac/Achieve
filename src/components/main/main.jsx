import React from 'react';
import './main.css';
import {useNavigate} from 'react-router-dom';

const Main = () => {
  let navigate = useNavigate();
  return (
    <div className="landing-page">
      <h1>Welcome to Achieve!</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate("/choice");
        }}
      >
        Let's begin
      </button>
    </div>
  );
}

export default Main