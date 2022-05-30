import React from 'react'
import './choice.css'
import { useNavigate } from "react-router-dom";

const Choice = () => {
  let navigate = useNavigate();
  return (
    <div className="cards">
      <h2
        className="card btn btn-primary"
        onClick={() => {
          navigate("/game1");
        }}
      >
        Drag & Drop
      </h2>
      <h2
        className="card btn btn-primary"
        onClick={() => {
          navigate("/game2");
        }}
      >
        Select
      </h2>
    </div>
  );
}

export default Choice