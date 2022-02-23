var randomnum=Math.floor(Math.random() *6)+1;  //select 0.9 *6 =6.9
var ramdonimage="dice"+ randomnum +".png"; //dice1 - dice 6
var image1="images/" + ramdonimage;

var image2 =document.querySelectorAll("img")[0];
image2.setAttribute("src",image1);

var random =Math.floor(Math.random()*6)+1;
var randomsrc="images/dice"+ random +".png";
document.querySelectorAll("img")[1].setAttribute("src",randomsrc);

if(randomnum>random)
{
  document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (random>randomnum){
  document.querySelector("h1").innerHTML="Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML="Its a draw!";
}
