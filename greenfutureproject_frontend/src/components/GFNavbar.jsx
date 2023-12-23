import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logoutAction, getUserDataAction } from "../redux/actions";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const GFNavbar = () => {
  const userCurrent = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUserDataAction());
  }, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">GreenFutureProject</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {userCurrent && (
              <NavDropdown title={userCurrent.username} id="basic-nav-dropdown">
                <NavDropdown.Item
                  onClick={() => {
                    dispatch(logoutAction());
                    navigate("/");
                  }}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default GFNavbar;
