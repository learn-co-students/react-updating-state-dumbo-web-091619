import React from 'react';

class DigitalClicker extends React.Component {
    constructor(){
    super();

    this.state = {
        timesClicked:0
    };
    }

    handleClick = () => {

        console.log("clicking Now")

        this.setState(prevState =>({
            timesClicked: prevState.timesClicked+1
        }))
    }
    
    render() {
        return (
                <button style={{width: "100px"}} onClick={this.handleClick}>{this.state.timesClicked}</button>
        )
    }
}

export default DigitalClicker;