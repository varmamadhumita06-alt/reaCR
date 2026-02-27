function Lister() {
  return (
    <div className="container">
      <h2>Create Your Service</h2>

      <input type="text" placeholder="Hashtags (#Mehendi #Crochet)" />
      <textarea placeholder="Describe your service"></textarea>
      <input type="file" multiple />
      <input type="text" placeholder="Price Range (₹1000 - ₹5000)" />

      <button>Submit</button>
    </div>
  );
}

export default Lister;