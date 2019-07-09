import React, { Component } from 'react';
import { ImageForm } from './file';

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
          <p className="description">{this.props.details.description}</p>
          <summary className="summary">
              <p>{this.props.details.id}</p>
              <p>{this.props.details.title}</p>
              {condition}
              <button onClick={() => this.props.buttonHandler(this.props.details)}>{this.props.details.status}</button>
              <ImageForm taskId={this.props.details.id} />
          </summary>
        </details>
      </li>
    );
  }
}
