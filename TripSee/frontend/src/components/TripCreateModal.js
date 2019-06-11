import React from "react";
import { Modal } from 'react-bootstrap';
import { Link } from "react-router-dom";

class TripCreateModal extends React.Component {
    constructor(props) {
        super(props);
    
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false
        };
      }

    handleClose() {
        this.setState({ show: false });
    }

    componentWillReceiveProps(nextProps){
        if(this.state.show !== nextProps.show){
            this.setState({show: nextProps.show});
        }
    }  

    render() {
        return (
            <div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create Trip</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Testing...</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={this.handleClose}>Close</button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

export default TripCreateModal;