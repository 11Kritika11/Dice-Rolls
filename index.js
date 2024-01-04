// for left dice
var randomPic1 = Math.floor(Math.random() * 6) + 1;
var randomPicSource = "images/dice" + randomPic1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomPicSource);

// for right dice
var randomPic2 = Math.floor(Math.random()*6) + 1;
var randomPicSource2 = "images/dice" + randomPic2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomPicSource2);

if (randomPic1 > randomPic2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins 🎉";
} else if ( randomPic2 > randomPic1){
    document.querySelector("h1").innerHTML = "🎉 Player 2 Wins 🚩  ";
} else {
    document.querySelector("h1").innerHTML = "It's a Draw! 😃";
} 


