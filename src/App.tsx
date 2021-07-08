import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Seen from './Seen/Seen';
import Add from './Add/Add';
import Watching from './Watching/Watching';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Watching />
          </Route>
          <Route exact path='/seen'>
            <Seen />
          </Route>
          <Route exact path='/add'>
            <Add />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
