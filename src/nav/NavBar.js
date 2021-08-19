import React, { useContext } from "react";
import UserContext from "../UserContext";
import { NavLink, Navbar, NavbarBrand } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar({ logout }) {
  const { currentUser } = useContext(UserContext);
  const location = useLocation();

  return (
    <Navbar className="nav-container" expand="md">
      <NavbarBrand>Furriends</NavbarBrand>
      <div className="nav-links">
        {currentUser ? (
          <>
            <NavLink
              className={location.pathname === "/pets" ? "selected" : null}
              href="/pets"
            >
              Pets
            </NavLink>
            <NavLink
              className={
                location.pathname === "/user/favorites" ? "selected" : null
              }
              href="/user/favorites"
            >
              Favorites
            </NavLink>
            <NavLink
              className={
                location.pathname === "/user/profile" ? "selected" : null
              }
              href="/user/profile"
            >
              Profile
            </NavLink>
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
