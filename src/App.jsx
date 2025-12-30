import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Creative from "./pages/Creative";
import Contact from "./pages/Contact";



export default function App() {
  return (
    
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/creative" element={<Creative />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
