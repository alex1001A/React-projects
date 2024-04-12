// React hooks
import {Link} from 'react-router-dom'

//Styles
import '../../style/components/nav.scss'

export default function Nav() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <Link className="nav-list__link" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav-list__link" to="/about">About</Link>
        </li>
        <li>
          <Link className="nav-list__link" to="/Tours">Tours</Link>
        </li>
      </ul>
    </nav>
  );
}
