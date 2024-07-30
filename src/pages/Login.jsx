import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import LoginCard from '../components/LoginCard';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

function Login() {
  const navigate = useNavigate();
  
    const onSubmit = async (data) => {
      // Implement login logic with axios
      try {
        const response = await axios.get('http://localhost:5000/users');
        const users = response.data;
        const user = users.find(user => user.email === data.email && user.password === data.password);
        if(!user){
          return toast.error("Invalid Credentials")
        }
        if (user){
          navigate('/users');
          return toast.success("Login Successfully")
        }
      } catch (error) {
        console.error('Login failed', error);
        return toast.error("Server Error")
      }
    };

  return (
    <section
      className="w-100 d-flex flex-column justify-content-center align-items-center"
      style={{ height: "80vh" }}
    >
      <Toaster/>
        <LoginCard onSubmit={onSubmit}/>
        <div className="mt-4">
        {" "}
        <p>
          Don&apos;t have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}

export default Login;
