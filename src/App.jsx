import Login from "./app/screens/Login";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./app/screens/SignUp";
import Home from "./app/screens/Home";

// implicitly return
//explicitely return
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
