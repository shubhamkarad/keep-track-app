import React, {Component} from "react";
import DatePicker from "react-datepicker";
import axios from "axios"; 

import "react-datepicker/dist/react-datepicker.css";

class EditExercise extends Component{
    
    constructor(props){
        super(props);
        
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onDurationChange = this.onDurationChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            username:"",
            description:"",
            duration:0,
            date: new Date(),
            users:[]
        }
        
    }
    componentDidMount(){
        axios.get("http://localhost:5000/exercises/"+ this.props.match.params.id)
            .then(res=>{
                this.setState({
                    username:res.data.username,
                    description:res.data.description,
                    duration:res.data.duration,
                    date: new Date(res.data.date)
                })
            })
            .catch(err=> console.log(err));
       axios.get("http://localhost:5000/users/")
            .then(res=>{
                if(res.data.length > 0){
                    this.setState({
                        users: res.data.map(user=> user.username),
                        username: res.data[0].username 
                    })
                    
                }
            })
    }
    onUserNameChange(event){
        this.setState({
            username:event.target.value
        });
    }
    onDescriptionChange(event){
        this.setState({
            description:event.target.value
        })
    }
    onDurationChange(event){
        this.setState({
            duration:event.target.value
        })
    }
    onDateChange(date){
        this.setState({
            date:date
        })
    }
    navigateBack=()=>{
        this.props.history.goBack();
    }
    onSubmit(event){
        const PUBLIC_URL = ("http://localhost:5000/exercises/update/" + this.props.match.params.id);
        event.preventDefault();
        const exercise = {
            username : this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        axios.post(PUBLIC_URL, exercise)
            .then((res)=>console.log("exercise added successfully",res.data))
            .catch(err => console.log(err));
        console.log(exercise);
    }
    render(){
        return(
            <div className="ExerciseList">
                <h3>Edit Exercise Log</h3>
               <form onSubmit={this.onSubmit}> 
                <div className="form-group">
                    <label>Username: </label>
                    <select  required
                    className="form-control"
                    value={this.state.username}
                    onChange={this.onUserNameChange}>
                        {
                            this.state.users.map((user)=>{
                                return <option 
                                key={user}
                                value={user}>{user}
                                </option>
                            })
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                    className='form-control'
                    value={this.state.description}
                    onChange={this.onDescriptionChange} />
                </div>
                <div className="form-group">
                    <label>Duration (in minutes): </label>
                    <input type="text"
                    className="form-control"
                    value={this.state.duration}
                    onChange={this.onDurationChange} />
                </div>
                <div className="form-group">
                     <label>Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.date}
                                onChange={this.onDateChange}/>
                        </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Edit Exercise Log" className="btn btn-outline-success me-2" />
                    <input type="submit" value="Back" className="btn btn-outline-primary me-2" style={{marginLeft:"10px"}} onClick={this.navigateBack}/>
                </div>
               </form>
            </div>
        );
    }
}
export default EditExercise;