import "./App.css";
import { Route, Routes } from "react-router-dom";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <div
      className="App"
      style={{ backgroundColor: "#f6f7f9", height: "100vh" }}
    >
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
