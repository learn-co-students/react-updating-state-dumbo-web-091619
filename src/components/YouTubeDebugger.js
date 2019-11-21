import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
    
    state = {
        errors: [],
        user: null,
        settings:{
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleChangeBitrate = () => {
        this.setState({
        settings: {
        ...this.state.settings,
        bitrate: 12
            }
        })
        }
    
    
    
    render() {
        return (
            <div>
                <button style={{width:"100px"}} className="bitrate" onClick={this.state.handleChangeBitrate}>{this.state.settings.bitrate}</button>
            </div>
        )
    }
}
