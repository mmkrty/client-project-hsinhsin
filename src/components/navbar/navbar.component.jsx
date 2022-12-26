import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="flex justify-around items-center bg-secondary py-4 px-2 position: fixed w-screen z-10">
        <div className="w-36">
          <Link to="/">
            {/* <img src="" alt="logo" class="w-full" /> */}
            <p className="font-pacifacto text-3xl">HsinHsin</p>
          </Link>
        </div>
        <ul className="flex justify-between items-center">
          <li>
            <Link className="p-2" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="p-2" to="/feature">
              Features
            </Link>
          </li>
          <li>
            <a className="p-2" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default NavBar;
