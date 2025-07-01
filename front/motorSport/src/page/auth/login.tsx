import Style from "./index.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = (event: React.FormEvent) => {
        event.preventDefault();
        return navigate("/dashboard");
    }
  return (
    <div className={Style.loginContainer}>
      <div className={Style.background}></div>
      <form>
        <div>
          <h1>Login</h1>
          <label>
            Username:
            <input type="text" placeholder="Username" />
          </label>
          <br />
          <label>
            Password:
            <input type="password"placeholder="Username" />
          </label>
          <br />
          <button onClick={handleLogin} type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
