import { Link } from "react-router-dom";

export default function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <h3>What do you want?</h3>
      <ul>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/chips">Chips</Link>
        </li>
        <li>
          <Link to="/sardines">Sardines</Link>
        </li>
      </ul>
    </div>
  );
}
