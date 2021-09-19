import './App.css';
import { Login } from './components/auth/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/routes/PrivateRoute';
import Tasks from './components/tasks/Tasks';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/tasks' component={Tasks}/>
      </Switch>
    </Router>
  );
}


export default App;
