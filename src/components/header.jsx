import React from "react";
import {FaHome} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

export default function Header() {
  let navigate = useNavigate();
  return (
    <div class="header">
      <h3>
        <FaHome
          size={"1.5rem"}
          onClick={() => {
            navigate("/");
          }}
        />
      </h3>
    </div>
  );
}
