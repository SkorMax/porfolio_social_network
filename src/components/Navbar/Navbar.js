import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav>
      <ul className={styles.listStyle}>
        <li>
          <NavLink to="/Profile">Profile</NavLink>
        </li>
        <li>
          <NavLink to="/Friends">Friends</NavLink>
        </li>
        <li>
          <NavLink to="/Messanger">Messanger</NavLink>
        </li>
        <li>
          <NavLink to="/News">News</NavLink>
        </li>
        <li>
          <NavLink to="/Music">Music</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
