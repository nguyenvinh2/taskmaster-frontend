import React, { Component, Fragment } from 'react';

export class ImageForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      api: `http://taskmaster-dev.us-west-2.elasticbeanstalk.com/tasks/${this.props.taskId}/images`,
    }
  }
  render() {
    let image;
    if(this.props.taskUrl) {
      let thumbnail = `https://taskmaster-thumbnail.s3-us-west-2.amazonaws.com/thumbnail-${this.props.taskUrl.split(".com/")[1]}`;

      image = 
      <div>
        <a href={this.props.taskUrl}>
          <img src={thumbnail} alt="Task"/>
        </a>
      </div>
    } else {
      image =   
        <form action={this.state.api} method="POST" encType="multipart/form-data">
          <input id="file" name="file" type="file" />
          <div id="upload">
          <input type="submit" value="Upload" onClick={this.refresh}/>
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
