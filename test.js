import { addStudentsAPI, getStudentsAPI } from './api.js';
// test case1
console.log('Initial DB State:', getStudentsAPI());

//test case2
const savedStudent = addStudentsAPI({
  firstName: 'Jone',
  lastName: 'Doe',
  email: 'jone.doe@gmail.com'
});

// part of test case2
console.log('\nReturned Saved Object:', savedStudent);

// test case3
console.log('\nUpdated DB State:', getStudentsAPI());
