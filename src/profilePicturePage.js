import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from './headerComponent';

class ProfilePicturePage extends Component{
    constructor(props){
        super(props);
        this.state={
            sessionTrueOrFalse: false,
            showModal: false,
            username: "eve.holt@reqres.in",
        }
    }
   
    sessionHandler = () =>{
        this.setState({sessionTrueOrFalse: !this.state.sessionTrueOrFalse});
    }
    logoutHandler = () =>{
        this.props.history.push("/LoginPage/");
    }
    buttonDeleteHandler = () =>{
        this.setState({showModal: !this.state.showModal});
    }
    gotoUserDetails = (userId) =>{
      fetch("https://reqres.in/api/users/"+userId,{
          method:"DELETE",
      }).then(()=>{
          this.props.history.push({pathname:"/UserTableDetails/"})
      })
    }
    render(){
            const index=this.props.location.state?.index;
            const imageSource = this.props.location.state?.responseApi.data[index].avatar;
        console.log(this.props.location.state?.responseApi);
        return(
            <div className="App">
                <div className="backgroundFill">
                <div className="detailsBorderProfile">
                    <HeaderComponent history={this.props.history} />
                    <img className="profilePictureDimensions" src={imageSource} alt="ProfilePicture"></img>
                    <div className="buttonMargin"><span className="userDetailsText">{this.props.location.state?.responseApi.data[index].email}</span></div>
                    <div> <span className="userDetailsText">{this.props.location.state?.responseApi.data[index].first_name} {this.props.location.state?.responseApi.data[index].last_name}</span></div>
                    <button className="deleteButtonClass" onClick={this.buttonDeleteHandler}>Delete</button>
                </div>
                <Modal isOpen={this.state.sessionTrueOrFalse}>
                    <ModalBody>
                        Do you want to logout?
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={this.logoutHandler}>Yes</Button>
                        <Button onClick={this.sessionHandler}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.showModal}>
                    <ModalBody>
                        Delete Confirmation?
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={()=>this.gotoUserDetails(this.props.location.state?.id)}>Yes</Button>
                        <Button onClick={this.buttonDeleteHandler}>No</Button>
                    </ModalFooter>
                </Modal>
            </div>
        </div>
        );
    }
}

export default ProfilePicturePage;