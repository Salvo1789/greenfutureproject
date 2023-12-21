import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logoutAction, getUserDataAction } from "../redux/actions";

const Navbar = () => {
  const userCurrent = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserDataAction());
  }, []);
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar w/ text
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {userCurrent && (
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                   Benvenuto, {userCurrent.username}
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#" onClick={() => {
                      dispatch(logoutAction());
                      navigate("/");
                      // sto dispatchando un'action creator
                      // è la stessa cosa che dispatchare l'action
                      // perchè l'action creator è una funzione che torna l'action
                    }}>
                      Logout
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            )}
            <li class="nav-item">
              <a class="nav-link" href="#">
                Features
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
          <span class="navbar-text">Navbar text with an inline element</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
