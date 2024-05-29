import { Route, Routes } from "react-router-dom"; 
// import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./components/Main";
import './index.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;

