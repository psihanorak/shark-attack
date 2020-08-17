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
        <h1>Welcome to the Shark Tank!!</h1>
        <button type="button" className="btn btn-danger btn-lg" onClick={this.followTheLight}>SHARK ATTACK</button>
        <SharkTank students={students} />
        <Graveyard deadStudents={deadStudents} />
      </div>
    );
  }
}

export default App;
