/**
 * Duel Fight Game - FINISHED
   Programming for Web Applications I  
   Assignment 1
   Name: Alex Onate
   Date: 06/08/2014
*/

// self-executing function
(function(){

    console.log("FIGHT!!!");//Print out in the console

    //player name
    var playerOneName = "Spiderman";//Player 1 name
    var playerTwoName = "Batman";//Player 2 name

    //player damage
    var player1Damage = 20;// Player 1 damage
    var player2Damage = 20;// Player 2 damage

    //player health
    var playerOneHealth = 100;// Player 1 health
    var playerTwoHealth = 100;//Player 2 health

    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);//Alert to start the fight
        for (var i = 0; i < 10; i++)//The for loop  
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;//Formula 20 * .5
            var minDamage2 = player2Damage * .5;//Formula 20 * .5
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);//player 1 health
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);//player 2 health

            //inflict damage
            playerOneHealth-=f1;//100 - player 1 health
            playerTwoHealth-=f2;//100 - player 2 health

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);//Print out the damage

            //check for winner
            var result = winnerCheck();
            console.log(result);//Print out the winner
            if (result==="no winner")//Conditional result equal no winner
            {
                round++;//round + 2
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

            } else{
                alert(result);Print out the result 
                break;
            };

          };
    };
    //Function to check for winner
    //If player one & two is <1 they both die
    function winnerCheck(){
        var result="no winner";
        if (playerOneHealth<1 && playerTwoHealth<1)
        {
            result = "You Both Die";
        //Else if player one <1 then player two wins    
        } else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!" 
        //Else if player two <1 then player one wins    
        } else if (playerTwoHealth<1)
        {
            result = playerOneName+" WINS!!!"
        };
        //After return result player one wins
       return result;
    };
    //Function fight
    /*******  The program gets started below *******/
    fight();

})();