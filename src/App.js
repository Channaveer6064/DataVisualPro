// Import CSS for styling
import "./App.css";

// Import necessary components from react-router-dom
import { Route, Routes } from "react-router-dom";

// Import the Dashboard component
import DashBoard from "./pages/dashboard/DashBoard";

// Main App component
function App() {
  // Return JSX structure
  return (
    <div
      className="App"
      style={{ backgroundColor: "#f6f7f9", height: "100vh" }}
    >
      {/* Define routes using react-router-dom */}
      <Routes>
        {/* Route for the Dashboard component */}
        <Route path="/" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

// Export the App component
export default App;
