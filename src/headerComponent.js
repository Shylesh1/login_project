import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class HeaderComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            sessionTrueOrFalse: false,
        }
    }
    onClickSessionOut = () => {
        this.setState({sessionTrueOrFalse: true});
    }
    logoutHandler = () =>{
        this.props.history.push("/LoginPage/");
        //window.history.pushState("/LoginPage/");
    }
    sessionContinueHandler = () =>{
        this.setState({sessionTrueOrFalse: false});
    }
    render(){
        return(
            <div>
                <div className="insideYellowBorder"><span className="usernameAlign">Welcome  {this.props.username}<br></br><button className="userDetailsButton" onClick={this.onClickSessionOut}>Logout</button></span></div>
                <Modal isOpen={this.state.sessionTrueOrFalse}>
                            <ModalBody>
                                Do you want to logout?
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={this.logoutHandler}>Yes</Button>
                                <Button onClick={this.sessionContinueHandler}>Cancel</Button>
                            </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default HeaderComponent;