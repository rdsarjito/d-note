import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Layout/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
