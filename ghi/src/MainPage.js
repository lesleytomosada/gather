import { NavLink } from "react-router-dom";
import { useAuthContext } from "./auth";

const MainPage = () => {
  const { token } = useAuthContext();

  if (token) {
    return (
      <>
        <h1 className="px-4 my-1 mt-5 mb-3 display-5 text-center">
          Welcome to Gather!
        </h1>
        <p className="text-center lead">New here? Let's get started!</p>
        <div className="text-center mb-3">
          <NavLink className="btn btn-primary" to="/gathering/new">
            Create a Gathering
          </NavLink>
        </div>
        <Carousel></Carousel>
      </>
    );
  } else {
    return (
      <>
        <h1 className="px-4 my-1 mt-5 mb-3 display-5 text-center">
          Gather Around!
        </h1>
        <Carousel></Carousel>
      </>
    );
  }
};
function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/262918/pexels-photo-262918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/5718027/pexels-photo-5718027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/7772194/pexels-photo-7772194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/2074130/pexels-photo-2074130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
export default MainPage;
