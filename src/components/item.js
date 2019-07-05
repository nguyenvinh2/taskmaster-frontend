import React, { Component } from 'react';

const domain = 'http://taskmaster-dev.us-west-2.elasticbeanstalk.com/';

export class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let condition;
    if (this.props.details.assignee) {
      condition = <p>{this.props.details.assignee}</p>
    } else {
      condition = <p>No one</p>
    }
    return (
      <li key={this.props.details.key}>
        <details className="details">
          <p>{this.props.details.description}</p>
          <summary className="summary">
              <p>{this.props.details.id}</p>
              <p>{this.props.details.title}</p>
              {condition}
              <button>{this.props.details.status}</button>
          </summary>
        </details>
      </li>
    );
  }
}
