import React, { Component, Fragment } from 'react';
import { Item } from './item';

export class Home extends Component {
  displayName = Home.name

  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      error: null,
    }
  }

  componentDidMount() {
    fetch(`/tasks`, {mode:'cors', method: 'GET'})
      .then(data => data.json())
      .then(
        (result) => {
          this.setState({
            tasks: result
          });
        },
        (error) => {
          this.setState({
            error
          });
        }
      )
  }

  render() {
    let list = [];
    list.push(
      <li key='header'>
      <details className="details" id='header'>
        <summary className="summary header">
          <p>Task #ID</p>
          <p>Title</p>
          <p>Assigned To</p>
          <p>Status</p>
        </summary>
      </details>
    </li>
    )
    if (this.state.tasks.length > 0) {
      for (let i = 0; i < this.state.tasks.length; i++) {
        list.push(<Item key={i} details={this.state.tasks[i]}/>);
      }
    };

    return (
      <Fragment>
        <h1>Task Status:</h1>
        <ul>
          {list}
        </ul>
      </Fragment>
    );
  }
}
