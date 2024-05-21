// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import SignUp from "./Pages/SignUp";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Users/salonisharma/Endsem-Project-Netflix-Clone---Endsem-Project-Netflix-Clone---dnou9dtbj2u5/src/Pages/Login.jsx" element={<Login />} />
//         <Route path="/Users/salonisharma/Endsem-Project-Netflix-Clone---Endsem-Project-Netflix-Clone---dnou9dtbj2u5/src/Pages/SignUp.jsx" element={<SignUp />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { Route, Routes } from "react-router-dom"; 
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Main from "./components/Main";


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

