/**
 * Created by haker on 12-Sep-15.
 */
$(document).ready(function () {
    var paragraph = document.getElementById("first-paragraph");
    console.log(paragraph);

    function Dog(breed) {
        this.breed = breed;

    };

    var bo = new Dog("Pitbull");
    bo.bark = function () {
        console.log("Woof");
    };
    bo.bark();
    Dog.prototype.bark = function () {
        console.log("Woof");

    };


    var pe = new Dog("Rotviler");
    pe.bark();


    function Animal(name, numLegs) {
        this.name = name;
        this.numLegs = numLegs;
        this.sayName1 = function () {
            console.log("Hi, my name is " + name);
        }
    }

    Animal.prototype.sayName = function () {
        console.log("Hi, my name is " +this.name);

    };

    var bo = new Animal("Bob4o", 5);
    var dod = new Animal("Dodo", 3);


    function Penguin(name) {
        this.name = name;
        this.numLegs = 2;
    }

// create your Emperor class here and make it inherit from Penguin
    function Emperor(name) {
        this.name = name;

    }
    Emperor.prototype = new Penguin();

    var emperor = new Emperor("Pepi");
// create an "emperor" object and print the number of legs it has




    // what is this "Object.prototype" anyway...?
    var prototypeType = typeof Object.prototype;
    console.log(prototypeType);

// now let's examine it!
    var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");

    console.log(hasOwn);



});

