import React from 'react';

import studentShape from '../../helpers/propz/studentShape';

import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;

    return (
      <div className="card bg-light dead-container">
        <img className="card-img-top" src="https://i.pinimg.com/564x/5c/1d/f8/5c1df8f0c1554f252888f733b89c38d9.jpg" alt="RIP" />
        <div className="card-body">
          <h5 className="card-title">{student.firstName} {student.lastName}</h5>
          <i className="fas fa-skull"></i>
        </div>
      </div>
    );
  }
}

export default GraveStone;
