import { NavLink } from "react-router-dom";

import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/soda">Soda</NavLink>
      <NavLink to="/chips">Chips</NavLink>
      <NavLink to="/sardines">Sardines</NavLink>
    </nav>
  );
}
