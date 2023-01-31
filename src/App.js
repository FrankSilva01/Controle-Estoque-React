import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Calcas from "./components/Calcas";
import Camisetas from "./components/Camisetas";
import Protetor from "./components/Protetor";


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}></Route>

          <Route path="/Calcas" element={<Calcas />}></Route>

          <Route path="/Camisetas" element={<Camisetas />}></Route>

          <Route
            path="/Protetor"
            element={<Protetor />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
