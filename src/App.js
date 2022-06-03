import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetFlow from "./pages/SetFlow";
import GoPractice from "./pages/GoPractice";
import SetRoom from "./pages/SetRoom";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/goPractice" element={<GoPractice />} />
        <Route path="/setRoom" element={<SetRoom />} />
        <Route path="/" element={<SetFlow />} />
      </Routes>
    </Router>
  );
};
