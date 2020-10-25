import React from "react";
import { HashRouter,Route } from "react-router-dom";
import NavBar from "./components/navBar";
import Home from "./components/pages/home";
import Header from "./components/header";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Blog from "./components/pages/blog";
// import Contact from "./components/pages/Contact";
// import TheProgrammer from "./components/pages/programmer"

function App() {
  return (
    <HashRouter>
      <div>
        <NavBar />
      <Header/>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path = "/blog" component ={Blog}/>
        {/* <Route path="/contact" component={Contact} /> */}
      </div>
    </HashRouter>
  );
}

export default App;
