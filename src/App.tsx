import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./App.module.scss";
import CharacterDetail from "./pages/CharacterDetail";
import Characters from "./pages/Characters";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className={style.App}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={CharacterDetail} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
