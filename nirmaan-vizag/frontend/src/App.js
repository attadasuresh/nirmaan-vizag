import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Admin from "./Components/Admin";
import Cource from "./Components/Cource";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Placement from "./Components/Placement";
import Login from "./Components/Login";
import "./App.css";
import AdminSecure from "./Components/AdminSecure";
import UserDashboard from "./Components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cource" element={<Cource />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <AdminSecure>
              <Admin />
            </AdminSecure>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminSecure>
              <UserDashboard />
            </AdminSecure>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;