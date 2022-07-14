console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

class Person {
    constructor(name, pets, residence, hobbies){
        
        this.name = name;
        this.pets = pets;
        this.residence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        // hobby + this.hobbies;
        this.hobbies.push(hobby);
    }

    removeHobby(rmhobby){
        let foundIdx = this.hobbies.indexOf(rmhobby);
        this.hobbies,splice (foundIdx, 1);
        
        // Collects values in the array before the one you want to cut out
        let valuesBefore = this.hobbies.slice(0, foundIdx);
        // Collects values after
        let valuesAfter = this.hobbies. slice(foundIdx + 1);
        // Puts the array with the remaining elements back together
        this.hobbies = valuesBefore.concat(valuesAfter);
    }
    greeting() {
        console.log("Hello fellow person!");
    }

    toString() {
        return Object.entries(this).toString();
    }
}

// Person.removeHobby("sleeping");

class Coder extends Person {
    constructor(name, pets, residence, hobbies, occupation){
        super(name, pets, residence, hobbies)
        
        this.occupation = "Full Stack Web Developer";
    }
    
    greeting() {
        console.log("Hello there person who also is a coder!");
    }
}

let user1 = new Person ("Jill", 0, "Florida", ["drawing", "gaming", "sleeping"];)

let coder = new Coder (
    "Nick",
    1,
    "England",
    ["rugby", "singing", "biking"]
)

// Exercise 4

class Calculator{
        result = 0;
        
        add (a, b) {
            let res;

            if (b == undefined) {
                res = this.result + a;
            } else {
                res = a + b;
            }
            
            this.result = (a + b);
            return this.result;
        }
        
        subtract(a, b) {
            let res;
        
            if (b == undefined) {
              res = this.result - a;
            } else {
              res = a - b;
            }
        
            this.result = res;
            return this.result;
          }
        
          multiply(a, b) {
            let res;
        
            if (b == undefined) {
              res = this.result * a;
            } else {
              res = a * b;
            }
        
            this.result = res;
            return this.result;
          }
        
          divide(a, b) {
            let res;
        
            if (b == undefined) {
              res = this.result / a;
            } else {
              res = a / b;
            }
        
            this.result = res;
            return this.result;
          }
        
    display(){
        console.log(this.result)
    }
}

let calc = new Calculator();

calc.add(8);
calc.subtract(4);
calc.multiply(9);
calc.divide(3);
calc.display();