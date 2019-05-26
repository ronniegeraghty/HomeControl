import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import styles from './navbar.module.css';

class NavbarPage extends Component {
	render() {
		return (
			<React.Fragment>
				<div className={styles.skipLink}>
					<a href="#mainContent">Skip to Main Content</a>
				</div>
				<Navbar collapseOnSelect expand="sm" variant="dark" className={styles.navBG}>
					<Navbar.Brand href="Home">Home Control</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="mr-auto" />
						<Nav className="navbar-expand-sm">
							<Nav.Link href="Home" active>
								Home
							</Nav.Link>
							<Nav.Link href="Dashboard" active>
								Dashboard
							</Nav.Link>
							<NavDropdown title="Profile" id="collasible-nav-dropdown" active>
								<NavDropdown.Item href="#">Edit</NavDropdown.Item>
								<NavDropdown.Item href="#">Sign In</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</React.Fragment>
		);
	}
}

export default NavbarPage;
