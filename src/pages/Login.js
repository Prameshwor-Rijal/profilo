/**
 * Login Page
 * Authentication page for admin access
 */
import { useState } from "react";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Input from "../components/common/Input";
import "./Login.css";
import { mockAPI } from "../service/MockData";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      const result = mockAPI.login(formData.username, formData.password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-background">
        <div className="login-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      <Card className="login-card">
        <div className="login-header">
          <h1 className="login-title">Profilo</h1>
          <p className="login-subtitle">Admin Login</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <Input
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            required
            autoComplete="username"
          />
          <Input
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            autoComplete="current-password"
          />

          {error && <div className="login-error">{error}</div>}

          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={false}
            className="login-button"
          >
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
