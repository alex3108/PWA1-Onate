/*
Alex Onate
PWA-1
06/20/2014
*/

(function(){

	console.log("** Fight **"); //Print title to Console.log

	//DEFINE YOUR dom pieces; Multiple ways to define/access HTML tags
	var fighter1_txt = document.querySelector("#fighter1text").querySelector("p");
	var fighter2_txt = document.querySelector("#fighter2_txt").querySelector("p");
	var round_txt = document.querySelector("h4");
	var button = document.getElementById("fight_btn");




	console.log()

//SETUP YOUR click event\
button.addEventListener("click", fight, false);


var fighters = [

	{
		name: "Superman",
		damage: 20,
		health: 100

	},
	{
		name:"Batman",
		damage: 20,
		health: 100

	}];

var round = 1;

//Initialize DOM innerHTML text for top of HTML page
round_txt.innerHTML  = "Click FIGHT BUTTON to Start!";
fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;


//Create "Fight" Function

function fight(){
	//alert(fighters[0].name +":"+fighters[0].health+"  *START*  "+fighters[1].name+":"+fighters[1]).health);

	fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
	fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;



		//determine damage
		var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
		var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

		//inflict damage
		fighters[0].health -= f1;   //fighters[0].health = fighters[0].health - f1
		fighters[1].health -= f2;

		console.log(fighters[0].health, fighters[1].health);

		//check for winner
		var result = winnerCheck();
		console.log(result);


		round_txt.innerHTML = "Round #" + round + "Results:";
		round++;
		if (result === "no winner")
		{

			fighter1_txt.innerHTML = fighters[0].name + ":" + fighters[0].health;
			fighter2_txt.innerHTML = fighters[1].name + ":" + fighters[1].health;

		} else {
			fighter1_txt.innerHTML = result; //keep running winnerCheck
			fighter2_txt.innerHTML = "";

			//Disable the button - need the below if using addEventListener
			button.removeEventListener("click", fight, false);
			//button.disabled = true;

			//button.onclick = "return false";

			document.querySelector('.buttonblue').innerHTML = 'Done!!';


		}
}

function winnerCheck(){
	var result = "no winner";
	if (fighters[0].health < 1 && fighters[1].health < 1)
	{
		result = "You Both Die - Game Over!";
	} else if(fighters[0].health < 1){
		result = fighters[1].name + "WINS!!"
	} else if (fighters[1].health < 1)
	{
		result = fighters[0].name + "Wins!!"
	}
	return result;
}

})();