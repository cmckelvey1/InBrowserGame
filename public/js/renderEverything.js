// DRAWS EVERYTHING
var render = function(){
	if (bgReady){
		ctx.drawImage(bgImage, 0, 0);
	}

	if (heroReady){
		ctx.drawImage(heroImage, hero.x, hero.y);
	}

	if (monsterReady){
		ctx.drawImage(monsterImage, monster.x, monster.y);
	}

	// SCORE
	ctx.fillStyle = "rgb(250, 250, 250)",
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	ctx.fillText("Monsters Caught: " + monstersCaught, 32, 32);

};