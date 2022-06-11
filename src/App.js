import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetFlow from "./pages/SetFlow";
import GoPractice from "./pages/GoPractice";
import HomePage from "./pages/HomePage";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/goPractice" element={<GoPractice />} />
        <Route path="/setFlow" element={<SetFlow />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};
