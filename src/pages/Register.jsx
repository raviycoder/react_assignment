
import axios from "axios";
import RegisterCard from "../components/RegisterCard";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Register() {
  const navigate = useNavigate()
  const onSubmit = async (data) => {
    // Implement Register logic with axios
    try {
      const userData = await axios.get("http://localhost:5000/users");
      console.log(userData.data);
      for (let i = 0; i < userData.data.length; i++) {
        if (data.email === userData.data[i].email) {
          return toast.error("Account already exists");
        }
      }
      const res = await axios.post("http://localhost:5000/users", data);
      navigate('/users')
      console.log(res);
    } catch (error) {
      console.error("Register failed", error);
    }
  };

  return (
    <section
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Toaster />
      <RegisterCard onSubmit={onSubmit} />
      <div className="mt-4">
        {" "}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}

export default Register;
