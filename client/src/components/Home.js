import React from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import { Header, Card, Button, List, Segment} from 'semantic-ui-react';

class Home extends React.Component {
  state = { users: [] };

  componentDidMount() {
    axios.get('/api/users')
      .then(res => this.setState({ users: res.data, }))
  }

  renderUsers = () => {
    // const { posts } = this.state.posts;

    if (this.state.users.length <= 0)
      return <Header as="h2">No Users</Header>
    return this.state.users.map(user => (
  
        <Card key={user.id}>
          <Card.Content as={Link} to={`/api/users/${user.id}`}>
            <Card.Header as="h3" >{user.name}</Card.Header>
            <Card.Meta>
              {user.email}
            </Card.Meta>
          </Card.Content>
        </Card> 
    ))
  }


  render() {
    return(
      <div>
        <br />
        <Header as="h1" textAlign="center">MySpace</Header>
        <br />
        <Card.Group itemsPerRow={3}>
          {this.renderUsers()}
        </Card.Group>
        </div>
    )
  }
}

export default Home;