import React, { Component } from "react";
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
} from "reactstrap";
import Login from "../Login";
import styles from "./navbar.module.css";
import fire from "../../config/Fire";
import HCIcon from "../../images/HCIcon.png";

class NavbarPage extends Component {
  constructor(props) {
    super(props);
    this.login = React.createRef();

    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggle = this.toggle.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleLogin() {
    this.login.current.toggle();
  }

  logout() {
    console.log("LOGOUT!");
    fire.auth().signOut();
  }

  render() {
    return (
      <React.Fragment>
        <div className={styles.skipLink}>
          <a href="#mainContent">Skip to Main Content</a>
        </div>
        <div>
          <Navbar className={styles.navBG} dark expand="sm">
            <NavbarBrand href="Home">
              <img src={HCIcon} alt="HomeControlIcon" className={styles.img} />
              Home Control
            </NavbarBrand>
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
                  <DropdownMenu right style={{ minWidth: "0rem" }}>
                    <DropdownItem>Edit</DropdownItem>
                    <DropdownItem onClick={this.toggleLogin}>
                      Sign In
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.logout}>Logout</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div>
          <Login ref={this.login} />
        </div>
      </React.Fragment>
    );
  }
}

export default NavbarPage;
