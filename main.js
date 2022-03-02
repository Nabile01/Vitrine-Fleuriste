// MENU

var burger = document.getElementById("burgerIcon");
var curtain = document.getElementById("curtain");

burger.addEventListener('click', function(){ 
    curtain.style.display = "flex";
});

var closebtn = document.getElementById("close");

closebtn.addEventListener('click', function(){ 
    curtain.style.display = "none";
});
