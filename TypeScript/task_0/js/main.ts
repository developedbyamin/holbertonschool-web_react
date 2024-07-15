interface Student{
    firstName: string,
    lastName: string,
    age: number,
    location: string,
}

const student1: Student = {
    firstName: 'Amin',
    lastName: 'Aghayev',
    age: 20,
    location: 'Baku, Khatai, Aliagha S. 42a m38',
}

const student2: Student = {
    firstName: 'Murad',
    lastName: 'Aghayev',
    age: 18,
    location: 'Baku, Khatai, Aliagha S. 42a m38',
}

const studentsList: Student[] = [student1,student2]

const table = document.createElement('table');
const headerRow = document.createElement('tr');
const header1 = document.createElement('th');
header1.innerText = 'First Name';
const header2 = document.createElement('th');
header2.innerText = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach(student =>{
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.innerText = student.firstName;
    const locationCell = document.createElement('td');
    locationCell.innerText = student.lastName;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);