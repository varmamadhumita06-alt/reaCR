import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Unnathi</h1>
      <p>Empowering Women in Kerala</p>

      <input type="email" placeholder="Email ID" />
      <input type="tel" placeholder="Mobile Number" />

      <button onClick={() => navigate("/location")}>Login</button>
    </div>
  );
}

export default Login;