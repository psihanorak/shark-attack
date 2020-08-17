import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card bg-light student-container">
          <img className="card-img-top" src="https://i.pinimg.com/564x/d2/46/c9/d246c9f4a1a4ca0dde3320c2353c5bf0.jpg" alt="Clown Fish" />
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
          <i className="fas fa-heartbeat"></i>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
