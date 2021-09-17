import './App.css';
import { Login } from './components/auth/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Tasks } from './components/tasks/tasks';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/tasks' component={Tasks}/>
      </Switch>
    </Router>
  );
}


export default App;
