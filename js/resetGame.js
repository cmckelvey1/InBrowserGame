// RESETS THE GAME
var reset = function(){
	hero.x = canvas.width / 2;
	hery.y = canvas.width / 2;

	// THROW THAT MONSTER SOMEWHERE
	monster.x = 32 + (Math.random() * (canvas.width - 64));
	monster.y = 32 + (Math.random() * (canvas.width - 64));
};