var randomNumber1 = Math.random();
randomNumber1 = (randomNumber1 * 6)+1;
randomNumber1 = Math.floor(randomNumber1);

var randomNumber2 = Math.random();  
randomNumber2 = (randomNumber2 * 6)+1;
randomNumber2 = Math.floor(randomNumber2);

function randomDiceImage1() {
     var qry1 = document.querySelectorAll("img")[0].setAttribute("src","/Dicee Challenge - Starting Files/images/dice"+randomNumber1+".png");

     var qry2 = document.querySelectorAll("img")[1].setAttribute("src","/Dicee Challenge - Starting Files/images/dice"+randomNumber2+".png");

        if (randomNumber1 > randomNumber2) {
            document.querySelector("h1").textContent = "Player 1 Wins!";
        }
        if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").textContent = "Player 2 Wins!";
        }
        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").textContent = "Its a Draw!";
        }
}
