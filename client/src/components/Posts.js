import React from "react";
import PostForm from "./PostForm";
import axios from "axios";
import { List, Header, Segment, } from "semantic-ui-react";


// const Posts = (props) => {
//   const [posts, setPosts] = useState
// }




class Posts extends React.Component {
  state = { posts: [] };


  componentDidMount() {

    axios.get("/api/posts")
      .then(res => {
        this.setState({ posts: res.data })

      })
  }

  renderPosts = () => {
    // const { posts } = this.state.posts;

    if (this.state.posts.length <= 0)
      return <Header as="h2">No Posts</Header>
    return this.state.posts.map(post => (
      <Segment key={post.id}>
        <List.Header as="h3">{post.title}</List.Header>
        <List.Description>
          {post.body}
        </List.Description>
      </Segment>
    ))
  }

  addPost = (post) => {
    const { posts } = this.state;
    this.setState({ posts: [ post, ...posts,] })
  }
 
  render() {
    return (
      <>
        <br />
        <Header as="h1" textAlign="center" >My Posts</Header>
        <br />

        <PostForm add={this.addPost} />
        <br />
        <List>
          {this.renderPosts()}
        </List>
        <br />
      </>
    )
  }
};


export default Posts;