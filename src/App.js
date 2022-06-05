import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetFlow from "./pages/SetFlow";
import GoPractice from "./pages/GoPractice";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/goPractice" element={<GoPractice />} />
        <Route path="/" element={<SetFlow />} />
      </Routes>
    </Router>
  );
};
