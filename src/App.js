import "./index.css";
import Projects from "./components/Projects";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="cards-app">
      <HomePage />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
