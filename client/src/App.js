import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Welcome from "./Componet/Welcome/Welcome";
import Home from './Componet/Home/Home';


function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route path = "/home" component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
