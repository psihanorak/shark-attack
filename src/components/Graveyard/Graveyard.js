import React from 'react';
import PropTypes from 'prop-types';

import GraveStone from '../GraveStone/GraveStone';

import studentShape from '../../helpers/propz/studentShape';

import './Graveyard.scss';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;

    const studentCards = deadStudents.map((student) => (
      <GraveStone key={student.id} student={student} />
    ));

    return (
        <div className="graveyard">
          { studentCards }
        </div>
    );
  }
}

export default Graveyard;
