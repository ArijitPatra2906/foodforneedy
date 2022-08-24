import "./App.css";
import Topbar from "./component/Topbar/Topbar";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Settings from "./Pages/Settings/Settings";
import Home from "./Pages/Hompage/Home";
import Single from "./Pages/Singe/Single";
import Write from "./Pages/Write/Write";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
// import Sidebar from "./component/Sidebar/Sidebar";
import Ngo from "./Pages/Ngo/Ngo";

function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        {/* <Route path="/about" element={<Sidebar />} /> */}
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/ngo" element={<Ngo />} />
        <Route path="/post" element={user ? <Write /> : <Register />} />
        <Route path="/settings" element={user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
