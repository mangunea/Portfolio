import Header from "./Header"
import Footer from "./Footer";
import Navbar from "./Navbar";
import About from "./About";
import Projects from "./Projects";

import {
  Github,
  Linkedin,
  Mail,
  Code2,
  Database,
  Terminal,
  Palette,
  ExternalLink,
} from "lucide-react";

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Header></Header>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
    </>

  );
  
}

export default App;
