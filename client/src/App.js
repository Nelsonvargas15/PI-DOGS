import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Welcome from "./Componet/Welcome/Welcome";
import Home from './Componet/Home/Home';
import CreateDogs from './Componet/CreateDogs/CreateDogs';
import DogDetail from './Componet/DogDetail/DogDetail';

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path = "/home" component={Home}/>
         <Route  exact path = "/dogs" component={CreateDogs}/> 
         <Route exact path = "/dogs/:id" component={DogDetail}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
