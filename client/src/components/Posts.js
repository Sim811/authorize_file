import React from "react";
import PostForm from "./PostForm";
import axios from "axios";
import {List, Header, Segment, Button} from "semantic-ui-react";


class Posts extends React.Component {
  class = { posts: [] }


  componentDidMount() {
    axios.get("/api/posts")
      .then(res => {
        this.setState({ posts: res.data })
      })
  }

  renderPosts = () => {
    const { posts } = this.state;
    return posts.map( post => (
      <Segment key={post.id}>
        <List.Header as="h3">{post.title}</List.Header>
        <List.Description>
          {post.body}
        </List.Description>
      </Segment>
    ))
  }

  render() {
    return(
      <>
      <Header as="h1" textAlign="center" >My Posts</Header>
      <br />
      {/* { showForm && <PostForm />}
      <Button onClick={() => setShowForm(!showForm)}>
        { showForm ? "Close Form" : "Show Form"}
      </Button> */}
      <PostForm />
      <br />
      {/* <List>
        {this.renderPosts()}
      </List> */}
      </>
    )
  }
};


export default Posts;