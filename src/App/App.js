import React from 'react';

import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';

import studentsData from '../helpers/data/studentsData';

import './App.scss';

class App extends React.Component {
  state = {
    students: [],
    deadStudents: [],
  }

  componentDidMount() {
    const students = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  followTheLight = () => {
    studentsData.followTheLight();
    const students = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ students, deadStudents });
  }

  render() {
    const { students, deadStudents } = this.state;

    return (
      <div className="App">
        <div className="shark-tank-container">
          <h1>Welcome to the Shark Tank!!</h1>
          <div className="shark-btn">
            <button type="button" className="btn btn-danger btn-lg" onClick={this.followTheLight}>SHARK ATTACK</button>
          </div>
          <div className="shark-student-container">
            <SharkTank students={students} />
          </div>
        </div>
        <div className="graveyard-container">
        <h1>Welcome to the Graveyard!!</h1>
          <Graveyard deadStudents={deadStudents} />
        </div>
      </div>
    );
  }
}

export default App;
