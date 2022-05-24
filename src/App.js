import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PracticeSetting from "./pages/PracticeSetting";
import PracticeGo from "./pages/PracticeGo";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/PracticeGo" element={<PracticeGo />} />
        <Route path="/" element={<PracticeSetting />} />
      </Routes>
    </Router>
  );
};
