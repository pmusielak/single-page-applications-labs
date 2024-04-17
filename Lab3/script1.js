class Person{
    constructor(name, age){
    this._name = this.nameFormatter(name);
    this._age = this.ageChecker(age);
    }
    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    set name(newName){
        this._name = this.nameFormatter(newName);
    }
    set age(newAge){
        this._age = this.ageChecker(newAge);
    }
    nameFormatter(newName){
        newName = newName.toLowerCase();
        return newName[0].toUpperCase() + newName.slice(1);
    }
    ageChecker(age){
        try{
        if(typeof age !== "number"){
            throw new TypeError("Age is only a number");
        }
        if(age<1){
            throw new RangeError("You are too young to be a person");
        }
        return age;
    }
    catch (error){
        console.log(error);
    }
    }
    introducePerson(){
        return `My name is ${this.name}, I\'m ${this.age} years old`; 
    }
};

class Employee extends Person{
    constructor(name, age, job){
        super(name, age);
        this.job = job;
    }
    introduceEmployee(){
        return this.introducePerson() + ` and my job is ${this.job}`;
    }

}

function peopleCreator(){
    const person = new Person('mirosław', '1');
    person.age = -1;
    person.age = 10;
    introduction = person.introducePerson();
    console.log(introduction);
    changePerson(person);
    const employee = new Employee("Radosław", 30, "Mechanic");
    employee_introduction = employee.introduceEmployee();
    console.log(employee_introduction);
    changeEmployee(employee);
}


function changeEmployee(employee){
    employee.name = "grant";
    employee.age = 33;
    console.log(employee);
}

function changePerson(person){
    person.name = 'Zawisza';
    person.age = 35;
    console.log(person);
}


peopleCreator();