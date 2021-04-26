import style from"./App.module.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";

const App = () => {
  return (
    <div className={style.App}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/characters" component={Characters} />
        </div>
      </Router>
    </div>
  );
};

export default App;
