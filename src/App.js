import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() 
{  
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
