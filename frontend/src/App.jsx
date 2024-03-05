import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Dashboard from "./pages/Dashboard";
import SendMoney from "./pages/SendMoney";
import Heading from "./components/Heading";
import SubHeading from "./components/SubHeading";
import InputBox from "./components/InputBox";
import Button from "./components/Button";
import BottomWarning from "./components/BottomWarning";

function App() {
  return (
    <>
      <>{/* <BottomWarning /> */}</>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
