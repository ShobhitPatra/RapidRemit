import "./App.css";
import { Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authContext";

function App() {
  const { authUser } = useAuthContext();
  return (
    <>
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Login />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Home />} />
        <Route path="/login" element={!authUser ? <Login /> : <Home />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
