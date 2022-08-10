import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  index element ={Home/>} />
        <Route path="teams" element />

      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
