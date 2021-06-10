import React, {Component} from "react";
import axios from "axios";
class CreateUser extends Component{

      constructor(props){
        super(props);
        
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username:""
        }
    }
    // componentDidMount(){
    //     this.setState({
    //         users: ['test users', 'Shubham', 'RObin'],
    //         username:"test user"
    //     })
    // }
    onUserNameChange(event){
        this.setState({
            username:event.target.value
        });
    }
   
    onSubmit(event){
        const PUBLIC_URL = "http://localhost:5000/users/add";
        event.preventDefault();
        const user = {
            username : this.state.username
        }
        console.log(user)
        this.setState({
            username:""
        })
      
        axios.post(PUBLIC_URL, user)
            .then((res)=>console.log(res.data))
            .catch(err => console.log(err));

            this.props.history.replace("/");
        
    }
   
    render(){
        return(
            <div className="ExerciseList">
               <form onSubmit={this.onSubmit}> 
                <div className="form-group">
                    <label>Username: </label>
                    <input  type="text" required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onUserNameChange}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create New User" className="btn btn-outline-primary me-2" />
                </div>
               </form>
            </div>
        );
    }
}
export default CreateUser;