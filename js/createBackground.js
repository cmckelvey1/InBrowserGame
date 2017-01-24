// BACKGROUND 
var bgReady = false;
var bgImage = new Image();

bgImage.onload = function(){
	bgReady = true;
};

bgImage.src = "../imgs/GameBackground.jpg";

var heroReady = false;
var heroImage = new Image();

heroImage.onload = function(){
	heroReady = true;
}
bgImage.src = "../imgs/hero_idle.jpg";

var monsterRead = false;
var monsterImage = new Image();

monsterImage.onload = function(){
	monsterRead = true;
}
bgImage.src = "../imgs/monster_idle.jpg";