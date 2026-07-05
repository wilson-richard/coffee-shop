import{Link} from 'react-router-dom';
import{FaCoffee} from 'react-icons/fa';

export default function Navbar() {
    return(
        <nav className="navbar">
          <h2 >
            CoffeeHub <FaCoffee />
          </h2>
          <div>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>
    );
}