import React, { Component } from 'react';

class App extends Component {

  state = {
    peopleInSpace: [],
  };

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peopleInSpace: data.people,
        });
    });
  };

  displaySpacePeople() {
    return this.state.peopleInSpace.map((person) => {
      return (
        <div key={person.name}>
          {person.name}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        {/* {this.state.peopleInSpace.map((person) => person.name)} */}
        {this.displaySpacePeople()}
      </div>
    );
  };

};

export default App;