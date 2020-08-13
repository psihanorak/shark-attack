import React from 'react';

import SharkTank from '../components/SharkTank/SharkTank';

import studentData from '../helpers/data/studentsData';

import './App.scss';

class App extends React.Component {
  state = {
    students: [],
  }

  componentDidMount() {
    const students = studentData.getStudents();
    this.setState({ students });
  }

  livingStudents = (studentId) => {
    studentData.livingStudents(studentId);
    const students = studentData.getStudents();
    this.setState({ students });
  }

  followTheLight = (studentId) => {
    studentData.followTheLight(studentId);
    const students = studentData.getStudents();
    this.setState({ students });
  }

  render() {
    const { students } = this.state;

    return (
      <div className="App">
        <h1>Welcome to the Shark Tank!!</h1>
        <button type="button" className="btn btn-danger btn-lg" onClick={this.followTheLight}>SHARK ATTACK</button>
        <SharkTank students={students} />
      </div>
    );
  }
}

export default App;
