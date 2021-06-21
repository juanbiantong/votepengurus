// import  from 'react';
// import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import VotePage from './VotePage';
import ConfirmPage from './ConfirmPage';
import ResultPage from './ResultPage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Jemaat() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/landingpage" component={LandingPage}></Route>
          <Route exact path="/votepage" component={VotePage}></Route>
          <Route exact path="/confirmpage" component={ConfirmPage}></Route>
          <Route exact path="/resultpage" component={ResultPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Jemaat;
