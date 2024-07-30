
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Security from "../assets/Security.svg";

const Home = () => {
  return (
    <Container
      className="container d-flex flex-column justify-content-sm-center align-items-sm-center"
      style={{ width: "100%", height: "80vh" }}
    >
      <div>
        <img
          src={Security}
          alt="Security"
          style={{ width: "400px", height: "400px" }}
        />
      </div>
      <h1>Welcome to the Account Management App</h1>
      <div>
        <Link to="/login" className="btn btn-primary mr-3">
          Login
        </Link>
        <Link to="/register" className="btn btn-secondary">
          Register
        </Link>
      </div>
    </Container>
  );
};

export default Home;
