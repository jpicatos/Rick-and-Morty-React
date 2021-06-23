import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./App.module.scss";
import CharacterDetail from "./pages/CharacterDetail";
import Characters from "./pages/Characters";
import Home from "./pages/Home";
import Locations from "./pages/Locations";

const App = () => {
  return (
    <div className={style.App}>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/characters/:id" component={CharacterDetail} />
          <Route exact path="/locations" component={Locations} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
