
import Header from './components/Header';
import Menu from './components/Menu.js';
import "./components/Menu.css"
import Cart from './components/Cart';
import history from './History';
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router history= {history}>
      
      <Header title="Menu"/>
      <Switch>
      <Route  path="/" exact component= {Menu}/>
      <Route  path="/path" component = {Cart} />
      </Switch>
      
      </Router>
      
    </div>
  );
}

export default App;
