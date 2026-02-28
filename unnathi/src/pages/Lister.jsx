import { useNavigate } from "react-router-dom";

function Lister() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    alert("Service Submitted Successfully!");
    navigate("/role");   // change this to wherever you want it to go
  };

  return (
    <div className="container">
      <h2>Create Your Service</h2>

      <input type="text" placeholder="Hashtags (#Mehendi #Crochet)" />
      <textarea placeholder="Describe your service"></textarea>
      <input type="file" multiple />
      <input type="text" placeholder="Price Range (₹1000 - ₹5000)" />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Lister;