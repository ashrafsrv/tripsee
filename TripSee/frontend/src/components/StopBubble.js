import React from "react";

class StopBubble extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="stop-bubble">
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default StopBubble;
