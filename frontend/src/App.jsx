import './App.css';
import Header from './Component/Header';
import {Route, Switch} from "react-router-dom"
import Drink from './Pages/Drink'
import Card from './Pages/Card'
import Merchandise from './Pages/Merchandise'
import Food from './Pages/Food'
function App() {
  return (
    <div id="wrap">
      <Header />
        <Switch>
          <Route exact path="/">
            
          </Route>
          <Route exact path="/drink">
            <Drink />
          </Route>
          <Route exact path="/card">
            <Card />
          </Route>
          <Route exact path="/merchandise">
            <Merchandise></Merchandise>
          </Route>
          <Route exact path="/food">
            <Food></Food>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
