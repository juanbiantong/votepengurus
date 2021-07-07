import React, { Fragment } from 'react';

export default function Header() {
	return (
		<Fragment>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light bg-cust2">
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<li className="nav-item">
						<a className="nav-link" data-widget="pushmenu" href=" " role="button">
							<i className="fas fa-bars" />
						</a>
					</li>
				</ul>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<a className="nav-link" data-widget="control-sidebar" data-slide="true" href=" " role="button">
							<i className="fas fa-th-large" />
						</a>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
}
