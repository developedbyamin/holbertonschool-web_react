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

console.log(teacher);
console.log(directors1);