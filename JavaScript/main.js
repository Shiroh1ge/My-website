/**
 * Created by haker on 12-Sep-15.
 */
$(document).ready(function(name, age) {
    var paragraph = document.getElementById("first-paragraph");
    console.log(paragraph);


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.contactInfo = function() {
       return ("Name: " + this.name + "\nAge: " + this.age);
    this.contactInfo();
    }
return this;
};


    var bob = new Person("Bo", 13);
    var pepi = new Person("Pepi",13);
    var koki = {
        job:"super programmer",
        speak: function(feeling){
            console.log("Hi, I am feeling like "+feeling);
        },
        sayJob:function(){
          console.log("Hey, I work as a " +koki.job);
        },
    };
var logProperty = koki.job;
    console.log(logProperty);
    var logProperty2 = "job";
    console.log(koki[logProperty2]);



    function printPerson(person){
        console.log(person.contactInfo());


    };




console.log( koki.contactInfo());


});