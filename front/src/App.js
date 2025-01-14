import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Landscape from "./Pages/Projects/Landscape";
import Contact from "./Pages/Contact/Contact";
import Interior from "./Pages/Projects/Interior";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/landscape" component={Landscape} />
          <Route path="/interior" component={Interior} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
