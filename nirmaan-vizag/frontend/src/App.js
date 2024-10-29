import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Admin from './Components/Admin';
import Cource from './Components/Cource';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Placement from './Components/Placement';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';





import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/Register' element={<Register />}/>
      <Route path='/Admin' element={<Admin />}/>
      <Route path='/Cource' element={<Cource />}/>
      <Route path='/Footer' element={<Footer />}/>
      <Route path='/About' element={<About />}/>
      <Route path='/Contact' element={<Contact />}/>
      <Route path='/Placement' element={<Placement />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
      
    </Routes>
  </BrowserRouter>
  );
}
export default App;
