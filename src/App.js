import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Chicago from "./components/Chicago";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Chicago" element={<Chicago />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Reservations" element={<Reservations />} />
        <Route path="/OrderOnline" element={<OrderOnline />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/" element={<Navigate to="/Homepage" />} />
      </Routes>
    </>
  );
}

export default App;
