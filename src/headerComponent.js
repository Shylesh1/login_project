import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {session_click,session_unclick} from './store/sessiontorf/actions';

class HeaderComponent extends Component{
    constructor(props){
        super(props);
        
    }
    onClickSessionOut = () => {
        this.setState({sessionTrueOrFalse: true});
    }
    logoutHandler = () =>{
        this.props.history.push("/LoginPage/");
    }
   
    render(){
        return(
            <div>
                <div className="insideYellowBorder"><span className="usernameAlign">Welcome  {this.props.username}<br></br><button className="userDetailsButton" onClick={this.props.sessionState}>Logout</button></span></div>
                <Modal isOpen={this.props.sessionTrueOrFalse}>
                            <ModalBody>
                                Do you want to logout?
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={this.logoutHandler}>Yes</Button>
                                <Button onClick={this.props.sessionFalse}>Cancel</Button>
                            </ModalFooter>
                </Modal>
            </div>
        );
    }
}
const mapStateToProps = (state,ownProps)=> {
    return {
        sessionTrueOrFalse:state.sessiontorf.clicked
    }
} 

const mapDispatchToProps = (dispatch) => {
    return {
        sessionState: ()=>(dispatch(session_click())),
        sessionFalse:()=> (dispatch(session_unclick()))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HeaderComponent);