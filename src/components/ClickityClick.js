import React from 'react';

export default class ClickityClick extends React.Component {

  constructor(){
    super()

    this.state = {
      toggleClick: false
    }
  }

  handleClick = () => {
    this.setState(previousState => {
      return {
        toggleClick: !previousState.toggleClick
      }
    })
  }

  render(){
    return (
      <div>
        {/* <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p> */}
        <button onClick={this.handleClick}>{this.state.toggleClick ? "ON" : "OFF" }</button>
      </div>
    )
  }

}
