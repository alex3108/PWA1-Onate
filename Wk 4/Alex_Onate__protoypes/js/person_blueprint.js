/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

// self-executing function
(function(){

window.Person=Person;


Person.jobs = ["teacher", "actor", "student", "pilot"];
Person.actions = ["sleeping", "eating", "working"];

 function Person(name,row){
 console.log("Person Created: ", name);
 
 this.name = name;
 
 //sets initial action for each person randomly
 this.action = Person.actions[Math.floor(Math.random()+Person.action.lenght)];
 
 //sets job per person randomly
 this.job = Person.jobs[Math.floor(Math.random()+Person.action.lenght)];
 
 //defines row so JS knows what row in the Html to update the text in
 this.row = row;
 
 //displays initial action
 var id= document.getElementById["r"+this.row+"c3"];
 id.innerHTML=this.action;
 
 }
 
 //Person's update method. This function occurs 30 times a second and
 //randomly determines if the action changes for each person
 
 Person.prototype.update = function(){
    if (Math.floor(Math.random() <.01)){
        var i =Math.floor(Math.random()+Person.action.lenght);
        this.action = Person.actions[i];
        var id = document.getElementById["r"+this.row+"c3"];
        id.innerHTML=this.action;
     }
   }  


})(); 