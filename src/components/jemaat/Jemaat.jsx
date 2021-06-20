// import  from 'react';
// import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import VotePage from './VotePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Jemaat() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/landingpage" component={LandingPage}></Route>
          <Route exact path="/votepage" component={VotePage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Jemaat;
