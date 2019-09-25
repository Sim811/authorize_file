import React from "react";
import axios from "axios";
import {Form} from "semantic-ui-react";


class PostForm extends React.Component {
  state = {title:"", body:""};

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/posts", {...this.state})
      .then( res => {
        this.props.add(res.data);
        this.props.toggleForm();
      });
  };


  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input
              label="Title"
              placeholder="Title"
              name="title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
            <Form.Input
              label="Body"
              placeholder="Body"
              name="body"
              required
              value={this.state.body}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    )
  }
}

export default PostForm;