import React, { Component } from 'react';

class ClickityClick extends Component {

  this.state = {
    hasBeenClicked: false
  }

  handleE = () => {
    if(this.state.hasBeenClicked) {
      this.setState({
        hasBeenClicked: false
      })
    } else {
      this.setState({
        hasBeenClicked : true
      })
    }
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleE}> Click Me </button>
      </div>
    );
  }

}

export default ClickityClick;
