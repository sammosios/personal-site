import { NavLink } from 'react-router-dom';
import './Header.css';
import { profile } from '@/user';
import { pages } from '@/pages';

const Header = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        {profile.name} | {profile.role}
      </div>

      <nav className="navbar-links">
        {pages
          .filter((page) => page.nav !== false)
          .map(({ id, path, label }) => (
            <NavLink
              key={id}
              to={path}
              end={path === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {label}
            </NavLink>
          ))}
      </nav>
    </header>
  );
};

export default Header;
