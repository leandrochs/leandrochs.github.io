import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';

export default function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
