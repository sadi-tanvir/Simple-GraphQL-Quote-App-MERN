import { Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import Login from "./components/login-user/Login/Login";
import Register from "./components/login-user/Register/Register";
import Navbar from "./components/Navbar/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
