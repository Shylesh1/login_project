import React, { Component } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from './headerComponent';

class UserTableDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            responseApi: {},
            count: 1,
            pageLimit: 0,
            isDisabled: true,
            isDisabledOrNot: false,
        }
    }
    incrementPageCount = () =>{
        let { count,pageLimit,isDisabled,isDisabledOrNot } = this.state;
        if(count < pageLimit){
            this.setState((prevState) => ({
                count: prevState.count + 1
        }));
        this.setState({isDisabled: !isDisabled , isDisabledOrNot: !isDisabledOrNot});
        this.getData();
        }
    }
    decrementPageCount = () =>{
        let {isDisabled,isDisabledOrNot} = this.state;
        this.setState((prevState) => ({
            count:  Math.max(1, prevState.count - 1)
          }));
        this.setState({isDisabled: !isDisabled , isDisabledOrNot: !isDisabledOrNot});
    }
    componentDidMount() {
        this.getData(this.state.count);
    }
    getData =(count) => {
        fetch('https://reqres.in/api/users?page='+count) 
        .then(response => response.json())
        .then(
            response => ( this.setState({responseApi: response, pageLimit: response.total_pages }) ) 
        )
    }
    componentDidUpdate(prevProps,prevState)
    {
        if(prevState.count !== this.state.count)
        this.getData(this.state.count); 
    }
    gotoDetailsPage = (id,index,username) =>{
        this.props.history.push({pathname:"/ProfilePicturePage/",
        state:{
            responseApi:this.state.responseApi,
            id:id,
            index:index,
            username:username,
        }});
    }
    render(){
         let username = this.props.location.state? this.props.location.state.username:null;
        return(
            <div className="App">
                <div className="backgroundFill">
                    <div className="detailsBorder">
                        <HeaderComponent username={username} history={this.props.history} />
                        <table className="tableSizing">
                        <tbody>
                        <tr>
                            <th className="backgroundColorElement">Email</th>
                            <th className="backgroundColorElement">First Name</th>
                            <th className="backgroundColorElement">Last Name</th>
                        </tr>
                         {this.state.responseApi.data && this.state.responseApi.data.map((data,index)=>{
                                console.log(data.email);
                                return (
                                <tr key={index}>
                                
                                     <td><div className="mailOnclick" onClick={()=> (this.gotoDetailsPage(data.id,index,username))}>{data.email}</div></td>
                                     <td><div>{data.first_name}</div></td>
                                     <td><div>{data.last_name}</div></td>
                                 </tr>  
                                );
                            })
                        }
                        </tbody>
                        <div>
                            {/* <button disabled={this.state.isDisabled} className="leftArrowSign" onClick={this.decrementPageCount} >Prev</button>
                            <button disabled={this.state.isDisabledOrNot} className="arrowImageSizing" onClick={this.incrementPageCount} >Next</button> */}
                            <input className="leftArrowSign" disabled={this.state.isDisabled} onClick={this.decrementPageCount} type="image" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Black_Left_Arrow.png" alt="leftArrow" ></input>
                            <input className="arrowImageSizing" disabled={this.state.isDisabledOrNot} onClick={this.incrementPageCount} type="image" src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Black_Right_Arrow.png" alt="arrowforpagging"></input>
                        </div>
                        </table>
                        <div className="countPage"> Page Number: {this.state.count}</div>
                    </div>
                   
            </div>
        </div>
        );
    }
}

export default UserTableDetails;