export const mockStudentDb = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@gmail.com'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@gmail.com'
  },
  {
    id: 3,
    firstName: 'Johnny',
    lastName: 'Doe',
    email: 'johnny.doe@gmail.com'
  },
  {
    id: 4,
    firstName: 'Janet',
    lastName: 'Doe',
    email: 'janet.doe@gmail.com'
  }
];

export function getStudentsAPI() {
  return mockStudentDb;
}

export function addStudentsAPI(newStudentData) {
  const {
    id: _ignoredId,
    firstName,
    lastName,
    email,
    ...extraStudentData
  } = newStudentData || {};

  const savedStudent = {
    id: Date.now(),
    firstName: firstName ?? extraStudentData.first_name ?? '',
    lastName: lastName ?? extraStudentData.last_name ?? '',
    email: email ?? extraStudentData.email ?? '',
    ...extraStudentData
  };

  mockStudentDb.push(savedStudent);
  return savedStudent;
}
