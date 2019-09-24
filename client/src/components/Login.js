import React from "react";
import {AuthConsumer} from "../providers/AuthProvider";
import { Form, Header} from "semantic-ui-react";


class Login extends React.Component {
  state = {email: "", password: ""}

  handleChange = (e, {name, value}) => {
    
    this.setState({[name]: value});
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {auth: {handleLogin}, history } = this.props;
    handleLogin(this.state, history);
  };

  render(){
    return(
      <div>
        <Header as="h1" textAlign="center">Login</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            autoFocus
            label="Email"
            placeholder="Email"
            type="email"
            required
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
            <Form.Input
            label="Password"
            placeholder="Password"
            type="password"
            required
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            />
            <Form.Button color="green">Submit</Form.Button>          
        </Form>
      </div>
    )
  }
}

const ConnectedLogin = (props) => (
  <AuthConsumer>
  { auth => ( <Login {...props} auth={auth} />)}
  </AuthConsumer>  
);

export default ConnectedLogin;




