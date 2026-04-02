// pages/Login.jsx
import {useAuth} from '../contexts/AuthContext'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Trang Đăng Nhập</h1>
      <button onClick={handleLogin}>Bấm vào đây để Login</button>
    </div>
  );
};

export default Login;