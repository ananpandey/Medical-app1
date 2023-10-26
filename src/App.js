import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./main/Home";
import MainAuth from "./route/MainAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainAuth />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
