import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Education from "./components/Education";
import Experience from "./components/Experience";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education/>
      <Experience/>
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;