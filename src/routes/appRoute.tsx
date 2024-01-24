import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages/home/home";

export const AppRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
