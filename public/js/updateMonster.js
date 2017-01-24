var moveMonster = function(){
	if (Math.random() < .5 && monster.x + 32 < 512){
		monster.x += 32;
	} else if (0 < monster.x - 32){
		monster.x -= 32;
	}

	if (Math.random() < .5 && 0 < monster.y  - 32 ){
		monster.y -= 32;
	} else if (monster.y + 32 < 480){
		monster.y += 32;
	}
}