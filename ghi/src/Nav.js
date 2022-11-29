import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const navigate = useNavigate();
  //   const [logOut, { data }] = useLogOutMutation();

  //   useEffect(() => {
  //     if (data) {
  //       navigate("/");
  //     }
  //   }, [data, navigate]);

  const logOut = () => {}
  return (
    <div className="buttons">
      <button onClick={logOut} className="btn btn-outline-primary">
        Log out
      </button>
    </div>
  );
}

function Nav() {
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Gather
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gathering/list">
                List of Gatherings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/gathering/new">
                Create a Gathering
              </NavLink>
            </li>
          </ul>
          <div className="navbar-end">
            <div className="navbar-item">
              {token ? (
                <LogoutButton />
              ) : (
                <NavLink className="btn btn-primary" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
