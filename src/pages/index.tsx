import Store from "./components/Store";
import TShirtPage from "./components/TShirtPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Site() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/tshirt" element={<TShirtPage />} />
      </Routes>
    </Router>
  );
}
