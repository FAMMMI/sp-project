
import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer';
import Service from './Pages/Home/Service';
import Services from './Pages/Home/Services';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/Login/RequireAuth';
import ServiceDetails from './Pages/Home/ServiceDetails';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={
          <Services />
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />



        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
