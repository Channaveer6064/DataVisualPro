import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DashBoard } from "./pages/dashboard/DashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
