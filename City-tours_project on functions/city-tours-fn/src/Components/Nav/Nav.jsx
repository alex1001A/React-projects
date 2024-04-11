//Styles
import '../../style/components/nav.scss'

export default function Nav() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        <li>
          <a className="nav-list__link" href="">Home</a>
        </li>
        <li>
          <a className="nav-list__link" href="">About</a>
        </li>
        <li>
          <a className="nav-list__link" href="">Tours</a>
        </li>
      </ul>
    </nav>
  );
}
