import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 2000);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2e3e4e";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "rgba(148, 148, 148, 0.677)";
    }
  };
  return (
    <>
      <Router>
        <Navbar title={"Textify"} mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
             exact path="/"
              element={
                <Textform
                  heading={"   Write Text Here :-"}
                  mode={mode}
                  showalert={showalert}
                />
              }
            />
            <Route exact path="/about" element={<About mode={mode}  />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
