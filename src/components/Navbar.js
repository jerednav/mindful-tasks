import { Link } from "react-router-dom";

//styles
import "./navbar.css";
import Temple from "../assets/temple.svg";

export default function Navbar() {
  return (
    <div className='navbar'>
      <ul>
        <li class='logo'>
          <img src={Temple} alt='mindful task logo' />
          <span>Mindful Tasks</span>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/signup'>Signup</Link>
        </li>
        <li>
          <button class='btn'>Logout</button>
        </li>
      </ul>
    </div>
  );
}
