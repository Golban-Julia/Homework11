"use strict";

// Создать класс Person, который будет иметь следующие поля:

// firstName
// lastName
// age
// birthDayDate (в формате ‘YYYY-MM-DD’, например ‘1989-02-03’)
// метод celebrate - который будет выводить возвращать текст “Happy Birthday, let’s celebrate’"


// Класс Employee должен наследовать от Person и иметь следующие поля:

// приватное свойство salary
// jobPosition
// метод getYearSalary (как в прошлой домашке)
// метод celebrate - который будет проверять - если день вашего дня рождения в текущем году выпадает на выходной день
// - то вернет текст “Happy Birthday, let’s celebrate’". Если же дата рождения выпадает на выходной -
// то вернет текст “Happy Birthday, but I need to work"


// Создать 1 экземпляр класса Person и 1 экземпляр класса Employee. Сделать вызов метод celebrate у обоих объектов.

class Person {
    constructor(firstName, lastName, age, birthDayDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.birthDayDate = birthDayDate;
    }
    celebrate() {
       console.log('Happy Birthday, let’s celebrate');
   }
}

class Employee extends Person{
    #salary = 0;

    constructor(firstName, lastName, age, birthDayDate, jobPosition, salary) {
        super(firstName, lastName, age, birthDayDate);
        this.jobPosition = jobPosition;
        this.#salary = salary;
    }

      getYearSalary() {
        console.log(this.#salary * 12);
    }


    celebrate() {
        const dateOfBirthday = new Date(this.birthDayDate);
        const currentDate= new Date();
        const newDate = new Date(currentDate.getFullYear(), dateOfBirthday.getMonth(), dateOfBirthday.getDate());

        function isWeekend(newDate) {

        let dayOfTheWeek = newDate.getDay();

         return (dayOfTheWeek === 0 || dayOfTheWeek === 6);
        }

        if (isWeekend(newDate) === true) {
            return super.celebrate();
        } else {
            return console.log("Happy Birthday, but I need to work");
        };
    }
};


const director = new Person("Oleg", "Nikolaenko", 26, "1995-12-12");
console.log(director);
director.celebrate();

const manager = new Employee("Arthur", "Shanin", 28, "1994-05-17", "salesman", 7000);
console.log(manager);
manager.celebrate();
manager.getYearSalary();

    