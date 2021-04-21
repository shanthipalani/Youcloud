
import React from "react";
import { Link, useHistory } from "react-router-dom";


export default function(props) {

  const { isOpen} = props;

  const links = HeaderLinks(currentUser, true);
  const history = useHistory();



  return (
    <div
      className={`default-sidebar${
        isOpen && isOpen === true ? " sidebar-open" : ""
      }`}
    >
      <div
        onClick={() => controllers.toggleSidebar()}
        className="sidebar-backdrop d-md-none"
      ></div>
      {/* <div className="sidebar d-md-none">
        <div className="header p-2">
          <SearchBar onSearch={HandleSearch} />
        </div>
        <div className="sidebar-content text-center">
          <ul className="nav flex-column pt-3">
            {links
              .filter(l => l.shouldRender())
              .map((link, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    history.location.pathname &&
                    history.location.pathname === link.to
                      ? "selected"
                      : ""
                  }`}
                >
                  <Link
                    to={link.to}
                    onClick={() => controllers.toggleSidebar()}
                    className="nav-link"
                  >
                    {t(link.title)}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="sidebar-footer p-2">
          <div className="sign-up pb-3">
            {isAuthenticated === true ? (
              <div className="current-user-name text-center">
                <span>
                  {t("Howdy,")}{" "}
                  {(currentUser && currentUser.name) || "Fellow Traveller"}
                </span>
              </div>
            ) : (
              <Link
                to="/auth/register"
                onClick={() => controllers.toggleSidebar()}
                className="btn btn-success-gradient btn-block mt-2"
              >
                {t("Sign up")}
              </Link>
            )}
          </div>
          {isAuthenticated === true ? (
            <button
              onClick={() => controllers.logoutCurrentUser()}
              type="button"
              className="btn btn-danger btn-block mt-2"
            >
              {t("Logout")}
            </button>
          ) : (
            <Link
              onClick={() => controllers.toggleSidebar()}
              to="/auth/login"
              className="btn btn-light btn-block mt-2"
            >
              {t("Sign In")}
            </Link>
          )}
        </div>
      </div> */}
    </div>
  );
}
