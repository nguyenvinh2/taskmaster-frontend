import React, { Component } from 'react';

export class ImageForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      api: `http://taskmaster-dev.us-west-2.elasticbeanstalk.com/tasks/${this.props.taskId}/images`
    }
  }
  render() {
    return (
      <form action={this.state.api} method="POST" encType="multipart/form-data">
        <label for="file">Add Image</label>
        <input id="file" name="file" type="file" />
        <button>Upload</button>
      </form> 
    );
  }
}
