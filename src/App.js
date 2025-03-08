import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cpricipal from "./Cprincipal.js";
import About from "./About.js";
import Login from "./Login/Login.js";
import ChatLive from "./chat/ChatLive";



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Cpricipal />} />
          <Route path="/about" element={<About />} />
          <Route path="/seconnecter" element={<Login />} />
       
        </Routes>
        <ChatLive /> {/* إظهار الـ ChatLive في كل الصفحات */}
      </div>
    </Router>
  );
}

export default App;
