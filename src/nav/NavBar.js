import React, { useContext } from "react";
import UserContext from "../UserContext";
import { NavLink, Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);

  return (
    <Navbar className="nav-container" expand="md">
      <NavbarBrand href="/">Petfinder</NavbarBrand>
      <div className="nav-links">
        {currentUser ? (
          <>
            <NavLink href="/pets">Pets</NavLink>
            <NavLink href="/user/favorites">Favorites</NavLink>
            <NavLink href="/user/profile">Profile</NavLink>
            <Link className="nav-link" to="/" onClick={logout}>
              Logout {currentUser.firstName}
            </Link>
          </>
        ) : (
          <>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/signup">Signup</NavLink>
          </>
        )}
      </div>
    </Navbar>
  );
}

export default NavBar;
