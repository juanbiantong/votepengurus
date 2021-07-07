import React from 'react';
import LandingPage from './LandingPage';
import VotePage from './VotePage';
import ConfirmPage from './ConfirmPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function Jemaat() {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/landingpage" component={LandingPage}></Route>
					<Route exact path="/votepage" component={VotePage}></Route>
					<Route exact path="/confirmpage" component={ConfirmPage}></Route>
				</Switch>
			</Router>
		</div>
	);
}

export default Jemaat;
