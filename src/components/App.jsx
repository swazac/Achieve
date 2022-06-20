import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import Main from "../components/main/main";
import Choice from "../components/choice/choice"
import SelectGame from "../components/game2/selectGame"
import DragAndDrop from "../components/game1/dragAndDrop";
import Footer from "./footer";
import Signup from "./signup/signup";
import Header from "./header";

function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        {/* <Route path="/" element={<Signup />} /> */}
        <Route path="/Achieve" element={<Main />} />
        {/* <Route path="/choice" element={<Choice />} /> */}
        {/* <Route path="/game1" element={<DragAndDrop />} /> */}
        <Route path="/game2" element={<SelectGame />} />
      </Routes>

      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
