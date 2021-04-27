import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./App.module.scss";
import Characters from "./pages/Characters";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className={style.App}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
