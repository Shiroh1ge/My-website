/**
 * Created by haker on 12-Sep-15.
 */
$(document).ready(function(name, age) {
    var paragraph = document.getElementById("first-paragraph");
    console.log(paragraph);


var Person = (function() {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + ' ' + this.lastName;
    }

Person.prototype.introduce = function() {
        return ("Hey, my name is " +this.fullName);
    }
    return Person;
}());

    var bob = new Person("Bo","Do");


var Student = (function() {
    function Student(firstName, lastName) {
       Person.call(this, firstName, lastName);
    }

    return Student;
}());
    Student.prototype = Object.create(Person.prototype);
    var pepi = new Student("Pepi", "Pep4ov");






    console.log(bob instanceof Person);
    console.log(pepi instanceof Person);

    console.log(bob);
    console.log(pepi);
    console.log(bob.introduce());
























});
