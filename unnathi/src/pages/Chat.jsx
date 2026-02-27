import { useState } from "react";

function Chat() {
  const [message, setMessage] = useState("");
  const words = message.trim().split(/\s+/).filter(Boolean).length;

  const handleSend = () => {
    if (words > 500) {
      alert("Message exceeds 500 words!");
    } else if (words === 0) {
      alert("Message cannot be empty!");
    } else {
      alert("Message Sent Successfully!");
    }
  };

  return (
    <div className="container">
      <h2>Chat</h2>

      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message (Max 500 words)"
      />

      <p>{words} / 500 words</p>

      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default Chat;