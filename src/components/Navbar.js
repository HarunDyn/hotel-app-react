import { Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NavbarSection({ userProfile }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    localStorage.removeItem("user");
  };

  return (
    <Navbar
      collapseOnSelect
      // expand="sm"
      bg="white"
      variant="light"
      sticky="top"
    >
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
          <img
            src="https://icibot.com/wp-content/uploads/2021/01/icibot_blue_130__.png"
            width="120"
            height="50"
            className="d-inline-block align-top"
            alt="img logo"
            style={{ cursor: "pointer" }}
          />
        </Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link
              onClick={() =>
                userProfile ? navigate("/quest") : navigate("/login")
              }
            >
              Guest
            </Nav.Link>
            <Nav.Link
              onClick={() =>
                userProfile ? navigate("/survey") : navigate("/login")
              }
            >
              Survey
            </Nav.Link>

            {userProfile ? (
              <Nav.Link eventKey={2} href="/" onClick={handleLogout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link eventKey={2} onClick={() => navigate("/login")}>
                Login
              </Nav.Link>
            )}
          </Nav>
          {userProfile ? (
            <img
              alt=""
              src={userProfile.pic}
              width="40"
              height="40"
              className="d-inline-block align-top "
              style={{ borderRadius: "50%" }}
            />
          ) : (
            <FaUserCircle style={{ width: "30", height: "30" }} />
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSection;
