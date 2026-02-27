import { useNavigate } from "react-router-dom";

function Client() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Search Services</h2>

      <input type="text" placeholder="Search by Hashtag" />
      <button onClick={() => navigate("/chat")}>
        Send Message Request
      </button>
    </div>
  );
}

export default Client;