import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Sardines from "./Sardines";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Navbar from "./Navbar";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<VendingMachine />} />
          <Route exact path="/soda" element={<Soda />} />
          <Route exact path="/chips" element={<Chips />} />
          <Route exact path="/sardines" element={<Sardines />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
