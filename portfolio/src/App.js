import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';

export default function App() {
  return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projetos' component={Projects} />
      </Switch>
  );
}
