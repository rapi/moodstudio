import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";
import Project from "./Pages/Project/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/landscape"
            component={() => <Projects filter={"Landscape"} />}
          />
          <Route
            path="/interior"
            component={() => <Projects filter={"Interior"} />}
          />
          <Route path="/project/:slug" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
