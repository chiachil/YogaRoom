import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SetFlow from "./pages/SetFlow";
import GoPractice from "./pages/GoPractice";
import HomePage from "./pages/HomePage";
import FavList from "./pages/FavList";
import { useState } from "react";
import { LoginContext } from "./context/userContext";
import Test from "./pages/test";
export const App = () => {
  const [loggedIn, setLoggedIn] = useState("");

  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      <Router>
        <Routes>
          <Route path="/goPractice" element={<GoPractice />} />
          <Route path="/setFlow" element={<SetFlow />} />
          <Route path="/favList" element={<FavList />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
};
