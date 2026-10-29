import { addStudentsAPI, getStudentsAPI } from './api.js';

let localStudents = [];

const studentForm = document.getElementById('studentForm');
const studentTableBody = document.getElementById('studentTableBody');

const renderTable = (dataArray) => {
  studentTableBody.replaceChildren();

  if (dataArray.length === 0) {
    const row = studentTableBody.insertRow();
    const cell = row.insertCell();
    cell.colSpan = 4;
    cell.textContent = 'No student records found.';
    return;
  }

  dataArray.forEach((student, index) => {
    const row = studentTableBody.insertRow();
    row.insertCell().textContent = index + 1;
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.lastName;
    row.insertCell().textContent = student.email;
  });
};

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const studentData = {
    firstName: document.getElementById('firstName').value.trim(),
    lastName: document.getElementById('lastName').value.trim(),
    email: document.getElementById('email').value.trim()
  };

  if (!studentData.firstName || !studentData.lastName || !studentData.email) {
    alert('Please fill out all input fields!');
    return;
  }

  addStudentsAPI(studentData);
  renderTable(localStudents);
  studentForm.reset();
});

const initApp = () => {
  localStudents = getStudentsAPI();
  renderTable(localStudents);
};

initApp();
