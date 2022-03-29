import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Greetings from './Componenets/Greetings';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Greetings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
