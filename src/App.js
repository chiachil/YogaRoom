import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Flow from "./pages/flow";
import Practice from "./pages/practice";
import HomePage from "./pages/homepage";
import FavList from "./pages/practiceList";
import { useState } from "react";
import { LoginContext } from "./context/userContext";
import { UserContext } from "./context/userContext";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <LoginContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
      }}
    >
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Router>
          <Routes>
            <Route path="/practiceList" element={<FavList />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/flow" element={<Flow />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </LoginContext.Provider>
  );
};
