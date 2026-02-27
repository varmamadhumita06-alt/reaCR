import { useNavigate } from "react-router-dom";

function Location() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Select Location</h2>

      <select>
        <option>Ernakulam</option>
        <option>Trivandrum</option>
        <option>Kozhikode</option>
        <option>Thrissur</option>
      </select>

      <input type="text" placeholder="City" />
      <input type="text" placeholder="Specific Area" />

      <button onClick={() => navigate("/role")}>Continue</button>
    </div>
  );
}

export default Location;