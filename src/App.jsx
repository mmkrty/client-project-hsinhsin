import "./App.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./routes/home/home.component";
import NavBar from "./components/navbar/navbar.component";
import Feature from "./routes/feature/feature.component";
import About from "./routes/about/about.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="feature" element={<Feature />} />
      </Route>
    </Routes>
  );
}

export default App;
