import { Link } from "react-router-dom";
const Navbar = () => {
  return ( 
    <nav>
      <div className="navbar">
        <h1>Page title</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
        </div>
      </div>
    </nav>
   );
}
 
export default Navbar;