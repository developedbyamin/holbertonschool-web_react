interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propname: string]: any,
}

interface Directors extends Teacher{
    numberOfReports: number,
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

const teacher: Teacher = {
    firstName: 'Amin',
    lastName: 'Aghayev',
    fullTimeEmployee: false,
    location: 'Baku',
    contract: true,
}

const directors1: Directors = {
    firstName: 'Amin',
    lastName: 'Aghayev',
    fullTimeEmployee: false,
    location: 'Baku',
    contract: true,
    numberOfReports: 69,
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    const initial = firstName.charAt(0).toUpperCase();
    return `${initial}. ${lastName}`;
}

console.log(printTeacher(teacher.firstName,teacher.lastName));
console.log(teacher);
console.log(directors1);