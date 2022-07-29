import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/home/Home';
import Project from './pages/project/Project';
import Technology from './pages/technology/Technology';
import Provider from './context/Provider';

export default function App() {
  return (
    <Provider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projeto' component={Project} />
        <Route exact path='/tecnologia' component={Technology} />
      </Switch>
    </Provider>
  );
}
