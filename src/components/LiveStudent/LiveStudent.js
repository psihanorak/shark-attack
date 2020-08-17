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
      <div className="card bg-light mb-3">
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
          <i className="fas fa-heartbeat"></i>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
