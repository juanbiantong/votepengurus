import React from "react";
import LandingPwgt from "./LandingPage";
import VotePage from "./VotePage";
import ConfirmPage from "./ConfirmPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import VotePenasehat from "./VotePenasehat";

function Pwgt() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/landingpwgt" component={LandingPwgt}></Route>
          <Route exact path="/votepage" component={VotePage}></Route>
          <Route exact path="/votepenasehat" component={VotePenasehat}></Route>
          <Route exact path="/confirmpage" component={ConfirmPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Pwgt;
