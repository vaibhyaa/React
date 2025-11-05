import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

/* this will move to another page without reloading the whole page thats what SPA is
      <Link to="/pricing">Pricing</Link> */

/* this will also reload the whole page 
      <a href="/pricing">Pricing</a> */

const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink className={styles.navlink} to="/pricing">
            Pricing
          </NavLink>
        </li>
        {/* <li className="li"> */}
        <li>
          <NavLink className={styles.navlink} to="/product">
            Product
          </NavLink>
        </li>{" "}
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            Login in
          </NavLink>
        </li>
        {/* </div> */}
      </ul>
    </nav>
  );
};

export default PageNav;

// React Router way (no reload)
// Instead, React Router gives you the <Link> component:
// <Link to="/pricing">Pricing</Link>
// It updates the URL in the address bar
// But doesn’t reload the page
// React Router just swaps out the <Route> element inside your <Routes>

//NavLink element:-
// <NavLink> is like <Link>, but it gives you extra styling power when the link matches the current route. It’s perfect for navigation menus
// It automatically applies an active class (or a custom style) to the link if the current URL matches its to.
// Useful for highlighting the “current page” in your navbar
