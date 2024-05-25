var randomNumber1= Math.floor(Math.random() * 6)+1;

var randomDiceImage=("images/dice"+randomNumber1+".png") //dice1 to dice6 //

var image1= document.querySelectorAll("img")[0]
image1.setAttribute("src",randomDiceImage)

// alert("HIi")

var randomNumber2= Math.floor(Math.random() * 6)+1;

var randomDiceImage=("images/dice"+randomNumber2+".png") //dice1 to dice6 //

var image1= document.querySelectorAll("img")[1]
image1.setAttribute("src",randomDiceImage)


if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML=(" 🚩Player 1 wins!")
}
else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML=("Player 2 wins!🚩")
}
else{
   document.querySelector("h1").innerHTML=("DRAW!!!") 
}