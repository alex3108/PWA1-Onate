function(){

 	//Define All Variables
 	var numOfPeople = 3;
 	var people = [];
 	var names = ["Alex", "Prisila", "Monica", "Angel", "Monica"];
 	var interval;
 	
 	//Create a loop  (3) Person objects
 	for (var i = 0; i < numOfPeople ; i++) {
 	
 	    //Generate a number p to the names.length which is 5
 	    var personIndex = Math.floor(Math.random()+names.length);
 	    
 	    //Use Keyword to sertup * New * person object
 	    var person = new Person(names[personIndex], i+1);
 	    
 	    populateHTML(person.name,"r"+(i+1)+"c1");
 	    populateHTML(person.job,"r"+(i+1)+"c2");
 	    
 	    
 	   people.push(person);
 	   names.splice(personIndex,1);
 	   
 	}
 	   
 	clearInterval(interval);
 	
 	//Set the interval to 30 FPS
 	//The setInterval() method will continue calling the function until clearInterval() is called, or window closes.

 	
 	Interval = setInterval(runUpdate, 1000 / 30);
 	
 	function populateHTML(data,field){
 	   var id=document.getElementByid(field);
 	   id.innerHTML = date;
 	   
 	}
   
    function runUpdate(){
       people.forEach(function(element){
            //console.log(element);
            //element = the item in the people array
            //.update = the prototype method in the person.js file
            element.update();  

        });
   }  



})(); 
 