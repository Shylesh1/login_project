import React, { Component } from 'react';

class SignUpPage extends Component{
    constructor(props){
        super(props);
        this.state={
            myUsername: "",
            myPassword: "",
            showUsername: false,
            userDetails: [],
        }
    }
    getUsernameHandler = (e) =>{
        this.setState({myUsername: e.target.value , showUsername: false , userDetails: this.state.myUsername });
    }
    getPasswordHandler = (e) =>{
        this.setState({myPassword: e.target.value , userDetails: this.state.myPassword});
    }
    signUpHandler = (e) =>{
        e.preventDefault();
        let { myUsername,myPassword } = this.state;
        let data = { email: myUsername, password:myPassword };

        fetch('https://reqres.in/api/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        })
        .then(response => response.json()
        
        )
        .then(data = () => {
            this.props.history.push("/LoginPage/");
        })
    }
    render(){
        return(
            <div className="App">
                <div className="backgroundFill">
                <div className="loginBorder">
                    <div className="loginPageTextColor">SIGNUP PAGE</div>
                    <input type="text" className="inputFieldSignUpUsername" placeholder="Username" value={this.state.myUsername} onChange={this.getUsernameHandler}  ></input>
                    <input type="password" value={this.state.myPassword} className="inputFieldSignUpPassword" placeholder="Password" onChange={this.getPasswordHandler}></input>
                <div className="buttonMargin">
                    <button type="submit" onClick={this.signUpHandler}><span className="buttonTextColor">SignUp</span></button>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default SignUpPage;