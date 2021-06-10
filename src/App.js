import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Components/Navbar/Navbar';
import ExerciseList from './Components/ExerciseList/ExerciseList';
import EditExercise from './Components/EditExercise/EditExercise';
import CreateExercise from './Components/CreateExercise/CreateExercise';
import CreateUser from './Components/CreateUser/CreateUser';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar/>
        <Route path="/" exact component={ExerciseList}/>
        <Route path="/edit/:id"  component={EditExercise}/>
        <Route path="/create"  component={CreateExercise}/>
        <Route path="/user"  component={CreateUser}/>
        </div>
    </Router>
  );
}

export default App;
