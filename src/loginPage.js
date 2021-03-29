import React, { Component } from 'react';

class LoginPage extends Component {
    constructor(props){
        super(props);
        this.state={
            username: "",
            password: "",
            showErrorMessage: false,
            responseApi:{},
        }
    }
    getUsernameHandler = (e) =>{
        this.setState({ username: e.target.value , showErrorMessage: false , wrongUsername: false });
    }
    getPasswordHandler = (e) =>{
        this.setState({password: e.target.value});
    }
    onSubmitLogin =(e) =>{
        e.preventDefault();
        let  { username, password  }   = this.state; 

       const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ 
                   email: username,
                   password: password 
           })
       };
       // "email": "eve.holt@reqres.in"
       // "password": "cityslicka"
       fetch('https://reqres.in/api/login', requestOptions)
           .then(response => {this.setState({ responseApi: response.json()})
           if(response.status === 200){
            this.props.history.push({pathname:"/UserTableDetails/",state:{username:this.state.username}});
            }
            else{
                this.setState({showErrorMessage: true});
            }
        } )
         
    }
    gotoSignUpPageHandler = () => {
        this.props.history.push("/SignUpPage/")
    }
    
    render(){
        return(
        <div className="App">
            <div className="backgroundFill">
                <div className="loginBorder">
                    <div className="loginPageTextColor">LOGIN PAGE</div>
                    <input type="text" className="textAreaName" placeholder="Username" value={this.state.username} onChange={this.getUsernameHandler}></input>
                    <input type="password" className="textAreaPassword" value={this.state.password} onChange={this.getPasswordHandler} placeholder="Password"></input>
                    
                <div className="login_button">
                    <div >
                        <div><button type="submit" onClick={this.onSubmitLogin}><span className="buttonTextColor">LOGIN</span></button></div>
                        <div><span className="nextLinePlacement"><button  onClick={this.gotoSignUpPageHandler}><span className="buttonTextColor">Don't have account?</span></button></span></div>
                    </div>
                    {this.state.showErrorMessage ?<div className="redFont">Enter correct Username or password </div>:null}
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default LoginPage;