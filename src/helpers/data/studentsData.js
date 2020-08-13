const students = [
  {
    id: 1,
    firstName: 'Jeremiah',
    lastName: 'Vasquez',
    isAlive: true,
  },
  {
    id: 2,
    firstName: 'Austin',
    lastName: 'Phy',
    isAlive: true,
  },
  {
    id: 3,
    firstName: 'Brooke',
    lastName: 'Nemchak',
    isAlive: true,
  },
  {
    id: 4,
    firstName: 'Geno',
    lastName: 'McNew',
    isAlive: true,
  },
  {
    id: 5,
    firstName: 'Gwynne',
    lastName: 'Meeks',
    isAlive: true,
  },
  {
    id: 6,
    firstName: 'Jeanine',
    lastName: 'Beckle',
    isAlive: true,
  },
  {
    id: 7,
    firstName: 'Jim',
    lastName: 'Browning',
    isAlive: true,
  },
  {
    id: 8,
    firstName: 'Jonathan',
    lastName: 'Shearon',
    isAlive: true,
  },
  {
    id: 9,
    firstName: 'Joshua',
    lastName: 'Medlen',
    isAlive: true,
  },
  {
    id: 10,
    firstName: 'Kamiran',
    lastName: 'Ibrahim',
    isAlive: true,
  },
  {
    id: 11,
    firstName: 'Mark',
    lastName: 'Young',
    isAlive: true,
  },
  {
    id: 12,
    firstName: 'Matt',
    lastName: 'Logan',
    isAlive: true,
  },
  {
    id: 13,
    firstName: 'Michael',
    lastName: 'Dotson',
    isAlive: true,
  },
  {
    id: 14,
    firstName: 'Nate',
    lastName: 'Owens',
    isAlive: true,
  },
  {
    id: 15,
    firstName: 'Nick',
    lastName: 'Walters',
    isAlive: true,
  },
  {
    id: 16,
    firstName: 'Nikhil',
    lastName: 'Gaikwad',
    isAlive: true,
  },
  {
    id: 17,
    firstName: 'Ola',
    lastName: 'Oladinni',
    isAlive: true,
  },
  {
    id: 18,
    firstName: 'Pete',
    lastName: 'Stewart',
    isAlive: true,
  },
  {
    id: 19,
    firstName: 'Phonesalo',
    lastName: 'Sihanorak',
    isAlive: true,
  },
  {
    id: 20,
    firstName: 'Ryan',
    lastName: 'Beiden',
    isAlive: true,
  },
  {
    id: 21,
    firstName: 'William',
    lastName: 'Campbell',
    isAlive: true,
  },
];

const getStudents = () => students;

const livingStudents = students.filter((student) => student.isAlive === true);

const followTheLight = () => {
  const getStudentById = (studentId) => students.find((student) => student.id === studentId);
  const random = Math.floor((Math.random() * 21) + 1);
  const student = getStudentById(random);

  if (student.isAlive === true) {
    student.isAlive = false;
  }
};

export default {
  getStudents,
  livingStudents,
  followTheLight,
};
