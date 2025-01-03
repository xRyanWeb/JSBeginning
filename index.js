class Main {
    a = 0;
    b = 0;

    constructor(a, b) {
        this.a = a;
        this.b = b;

        this.getCommands = () => {
            console.log("a: " + this.a);
            console.log("b: " + this.b);

        }

        this.birthdayDate = (date) => {
            console.log("Your Birthday is: " + date)
        }

        this.displayYearsCode = (a) => {
            console.log("You Have Been Coding for: " + a + " Years");
        }



    }

}

let firstName = "Ryan";
let lastName = "James";

const person = {
    firstName: firstName,
    lastName: lastName,
    // fullName: fullName
}

let fullName = person.firstName + " " + person.lastName;


const myName = new Main(firstName, lastName);
myName.getCommands();

const date = new Date("11/17/1999");

const myDate = new Main();
myDate.birthdayDate(date);

let yearsNow = Math.abs(2022 - 2025);
const yearsDate = new Main();
yearsDate.displayYearsCode(yearsNow);
