import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Location from "./pages/Location";
import Role from "./pages/Role";
import Lister from "./pages/Lister";
import Client from "./pages/Client";
import Chat from "./pages/Chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/location" element={<Location />} />
        <Route path="/role" element={<Role />} />
        <Route path="/lister" element={<Lister />} />
        <Route path="/client" element={<Client />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;