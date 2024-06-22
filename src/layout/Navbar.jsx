import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink>
        <h1>React Toolbox</h1>
      </NavLink>

      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/profile">Profile</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
