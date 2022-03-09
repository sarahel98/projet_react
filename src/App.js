import { Switch, Route, BrowserRouter } from "react-router-dom";
import Weather from "./Weather";
import Favoris from "./Favoris";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={props => (<Weather {...props} />)} />
        <Route exact path="/Home" render={props => (<Weather {...props} />)} />
        <Route exact path="/Favoris" render={props => (<Favoris {...props} />)} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
