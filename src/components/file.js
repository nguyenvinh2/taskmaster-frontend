import React, { Component, Fragment } from 'react';

export class ImageForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      api: `http://taskmaster-dev.us-west-2.elasticbeanstalk.com/tasks/${this.props.taskId}/images`
    }
  }
  render() {
    let image;
    if(this.props.taskUrl) {
      image = 
      <div>
        <img src={this.props.taskUrl} alt="Task" height="50px" width="50px"/>
      </div>
    } else {
      image =   
        <form action={this.state.api} method="POST" encType="multipart/form-data">
          <input id="file" name="file" type="file" />
          <div id="upload">

          <input type="submit" value="Upload"/>
          </div>
        </form> 
    }
    return (
      <Fragment>
        {image}
      </Fragment>
    );
  }
}
