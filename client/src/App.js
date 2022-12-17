import './App.css';
import { Route, Switch , useLocation } from 'react-router-dom';
import Welcome from './componets/Welcome/Welcome';
import Home from './componets/Home/Home';
import Navbar  from './componets/Navbar/Navbar';
 
function App() {
  const location = useLocation()
  return (
    <div className="App">
       {location.pathname === "/" ? null :  <Navbar/> }
      <Switch>
        <Route exact path ="/" component={ Welcome }/>
        <Route path= "/home"  component={ Home }/>
      </Switch>
    </div>
  );
}

export default App;
