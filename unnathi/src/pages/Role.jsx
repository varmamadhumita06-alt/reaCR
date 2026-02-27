import { useNavigate } from "react-router-dom";

function Role() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Choose Role</h2>

      <button onClick={() => navigate("/lister")}>
        I am a Lister
      </button>

      <button onClick={() => navigate("/client")}>
        I am a Client
      </button>
    </div>
  );
}

export default Role;