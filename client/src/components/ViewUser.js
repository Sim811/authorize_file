import React from "react"
import {List, Header, Segment} from "semantic-ui-react";
import axios from "axios";

class ViewUser extends React.Component{
  state = { posts: []}


  componentDidMount() {
    // const { user_id } = this.state.posts
    axios.get(`/api/user_posts/${this.props.match.params.id}`)
    .then(res => {
      this.setState({ posts: res.data})
    })
  }

  render(){
    return(
      <div>
        <Header as="h1" textAlign="center">ViewUser</Header>
      </div>
    )
  }
}



export default ViewUser;