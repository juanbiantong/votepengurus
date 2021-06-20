// import  from 'react';
// import Dashboard from './Dashboard';
import LandingPage from './LandingPage';
import VotePage from './VotePage';
import Header from './Header';
import Menu from './Menu';
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function Jemaat() {
  return (
    <div>
      {/* <Header /> */}
      <Router>
        <Switch>
          <Route exact path="/landingpage" component={LandingPage}></Route>
          <Route exact path="/votepage" component={VotePage}></Route>
        </Switch>
      </Router>
      
      {/* <Menu /> */}
      {/* <LandingPage /> */}
      <Footer />
    </div>
  );
}

export default Jemaat;
