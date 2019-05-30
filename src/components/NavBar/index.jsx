import React, { Component } from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem
} from 'reactstrap';
import styles from './navbar.module.css';

class NavbarPage extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	render() {
		return (
			<React.Fragment>
				<div className={styles.skipLink}>
					<a href="#mainContent">Skip to Main Content</a>
				</div>
				<div>
					<Navbar className={styles.navBG} dark expand="sm">
						<NavbarBrand href="Home">Home Control</NavbarBrand>
						<NavbarToggler onClick={this.toggle} />
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem active>
									<NavLink href="Home">Home</NavLink>
								</NavItem>
								<NavItem active>
									<NavLink href="Dashboard">Dashboard</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar active>
									<DropdownToggle nav caret>
										Profile
									</DropdownToggle>
									<DropdownMenu right style={{ minWidth: '0rem' }}>
										<DropdownItem>Edit</DropdownItem>
										<DropdownItem>Sign In</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Collapse>
					</Navbar>
				</div>
			</React.Fragment>
		);
	}
}

export default NavbarPage;
