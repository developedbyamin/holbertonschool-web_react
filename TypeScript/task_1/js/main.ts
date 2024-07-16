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

interface StudentConstructor{
    firstName: string,
    lastName: string,
}

interface StudentClassInterface{
    workOnHomework(): string,
    displayName(): string,
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

class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;
    
    constructor(params: StudentConstructor){
        this.firstName = params.firstName;
        this.lastName = params.lastName;
    }
    
    workOnHomework(): string {
        return 'Currently working';
    }

    displayName(): string{
        return this.firstName;
    }

}



console.log(printTeacher(teacher.firstName,teacher.lastName));
console.log(teacher);
console.log(directors1);
const studentParams: StudentConstructor = { firstName: "John", lastName: "Doe" };
const student = new StudentClass(studentParams);
console.log(student.workOnHomework());
console.log(student.displayName());