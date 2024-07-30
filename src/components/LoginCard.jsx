import  { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "react-bootstrap";
import { IoEye, IoEyeOff } from "react-icons/io5";

// eslint-disable-next-line react/prop-types, no-unused-vars
function LoginCard({ onSubmit, ...props }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Card style={{ width: "54rem" }}>
      <Card.Body>
        <div className="container">
          <h2>Login to Our App</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>
            <div className="form-group">
              <label>Password:</label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? <IoEyeOff /> : <IoEye />}
                  </button>
                </div>
              </div>
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </form>
        </div>
      </Card.Body>
    </Card>
  );
}

export default LoginCard;
