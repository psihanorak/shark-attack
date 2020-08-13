import React from 'react';
import PropTypes from 'prop-types';

import LiveStudent from '../LiveStudent/LiveStudent';

import studentShape from '../../helpers/propz/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    students: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { students } = this.props;

    const studentCards = students.map((student) => (
      <LiveStudent key={student.id} student={student} />
    ));

    return (
      <div>
        <h2>Swim for your lives!!</h2>
          <div className="card-columns">
            {studentCards}
          </div>
      </div>
    );
  }
}

export default SharkTank;
