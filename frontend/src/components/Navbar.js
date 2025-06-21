import { useNavigate, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollTo = (id) => {
    if (location.pathname !== '/') {
      navigate('/'); // Navigate home first
      setTimeout(() => {
        scrollToSection(id);
      }, 100); // wait for Home to render
    } else {
      scrollToSection(id);
    }
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <img src="/acres.png" alt="Acres Logo" />
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <button onClick={() => handleScrollTo('about')} className="nav-btn">About</button>
          <button onClick={() => handleScrollTo('group')} className="nav-btn">Services</button>
          <button onClick={() => handleScrollTo('contact')} className="nav-btn">Contact</button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
