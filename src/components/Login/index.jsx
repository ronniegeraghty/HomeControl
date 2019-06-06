import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
import styles from "./login.module.css";
import { Link } from "react-router-dom";
import fire from "../../config/Fire";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: "",
      password: "",
      modal: props.modal
    };

    this.toggle = this.toggle.bind(this);
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {
        console.log("logged in");
        this.toggle();
      })
      .catch(error => {
        console.log(error);
      });
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="col-md-6">
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          style={{
            background: "#fffdfd63",
            opacity: "1"
          }}
        >
          <ModalHeader toggle={this.toggle} className={styles.modalBG}>
            Login / Sign Up
          </ModalHeader>
          <ModalBody className={styles.modalBG}>
            <Form>
              <FormGroup>
                <Label for="exampleInputEmail1">Email address</Label>
                <Input
                  value={this.state.email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </FormGroup>
              <Label for="exampleInputPassword1">Password</Label>
              <Input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
              <FormGroup />
            </Form>
          </ModalBody>
          <ModalFooter className={styles.modalBG}>
            <Button type="submit" onClick={this.login} className="btn-primary">
              Login
            </Button>
            <Button onClick={this.signup} className="btn-success">
              Sign Up
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
export default Login;
