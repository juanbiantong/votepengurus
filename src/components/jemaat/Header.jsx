import React from 'react';

export default function Header() {
	return (
		<div>
			<nav className="main-header navbar navbar-expand navbar-white navbar-light m-0 bg-cust2" >
				{/* Left navbar links */}
				<ul className="navbar-nav">
					<a href="##" className="brand-link">
					<img
						src="assets/logogetor.png"
						alt="logo getor"
						className="brand-image img-circle elevation-3"
						style={{ opacity: '.8' }}
					/>
					<span className="brand-text text-white">Getor Depok</span>
				</a>
				</ul>
				{/* Right navbar links */}
				<ul className="navbar-nav ml-auto">
					{/* Messages Dropdown Menu */}
					
					{/* Notifications Dropdown Menu */}
					<li className="nav-item dropdown">
						
					</li>
					<li className="nav-item">
						<a className="nav-link" data-widget="control-sidebar" data-slide="true" href="##" role="button">
							<i className="fas fa-th-large" />
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}
