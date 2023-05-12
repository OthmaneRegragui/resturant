import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Router>
            <NavBar />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/menu" exact element={<Menu />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/contact" exact element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
