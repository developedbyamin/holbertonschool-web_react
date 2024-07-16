interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propname: string]: any,
}

const teacher: Teacher = {
    firstName: 'Amin',
    lastName: 'Aghayev',
    fullTimeEmployee: false,
    location: 'Baku',
    contract: true,
}


console.log(teacher);