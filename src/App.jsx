import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Research from "./pages/Research";
import Notes from "./pages/Notes";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation bar at the top */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow container-narrow py-12 md:py-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/notes" element={<Notes />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
  );
}
