import { Route, Switch } from "react-router";
import "../styles/App.css";
import AddProperty from "./AddProperty";
import NavBar from "./NavBar";
import Properties from "./Properties";

function App() {
  return (
    <div className="App">
      <h2 className="App-title">Surreal Estate</h2>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
