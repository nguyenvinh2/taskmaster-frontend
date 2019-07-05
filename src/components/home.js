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

    this.onAssigneeChange = (event) => {
      if (event.assignee) {
        fetch(`http://taskmaster-dev.us-west-2.elasticbeanstalk.com/tasks/${event.id}/state`, {
          mode: 'cors', 
          method: 'PUT', 
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          }
        }).then(result => this.fetchData())
        .catch(error => this.fetchData());;
      } else {
        let username = prompt('Enter a name to assign task to:');
        fetch(`http://taskmaster-dev.us-west-2.elasticbeanstalk.com/tasks/${event.id}/assign/${username}`, {
          mode: 'cors', 
          method: 'PUT', 
        }).then(result => this.fetchData())
        .catch(error => this.fetchData());
      }
    }

    this.fetchData = () => {
      fetch(`http://taskmaster-dev.us-west-2.elasticbeanstalk.com/tasks`, {
        mode: 'cors', 
        method: 'GET', 
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        }
      })
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
  }

  componentDidMount() {
    this.fetchData();
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
        list.push(<Item buttonHandler={this.onAssigneeChange} key={i} details={this.state.tasks[i]} />);
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
