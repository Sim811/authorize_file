import React from "react";
import {AuthConsumer} from "../providers/AuthProvider";
import {Menu, Segment} from "semantic-ui-react";
import {Link, withRouter} from "react-router-dom";
import "../App.css";


class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  render() {
    return(
      // <Segment inverted >

        <Menu inverted pointing >
          <Menu.Item>
            <img src="https://icons-for-free.com/iconfiles/png/512/media+myspace+social+website+icon-1320168604791523777.png" />
          </Menu.Item>
          {/* <Link to="/"> */}
            <Menu.Item as={Link} to="/" name="MySpace" id="home" active={this.props.location.pathname === "/"} />
          {/* </Link> */}
          {/* <Link to="/posts"> */}
            <Menu.Item as={Link} to="/posts" name="MyPosts" id="posts" active={this.props.location.pathname === "/posts"} />         
          {/* </Link> */}
          {this.rightNavItems()}
        </Menu>
      //  </Segment>
    )
  }
};

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    {auth => (
      <Navbar {...props} auth={auth} />
      )}
  </AuthConsumer>
)




export default withRouter(ConnectedNavbar);
