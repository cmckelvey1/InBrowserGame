// UPDATE OBJECTS
var update = function(modifier){
	if ( 38 in keysDown ){
		hero.y -= hero.speed * modifier;		//HOLDING DOWN THE UP KEY
	}
	if ( 40 in keysDown ){
		hero.y += hero.speed * modifier;		// HOLDING DOWN THE DOWN KEY
	}
	if ( 37 in keysDown ){
		hero.x -= hero.speed * modifier;		// HOLDING DOWN THE LEFT KEY
	}
	if ( 39 in keysDown ){
		hero.x += hero.speed * modifier;		// HOLDING DOWN THE RIGHT KEY
	}

	// CHECKS COLLISION
	if (
			hero.x <= (monster.x + 32) && monster.x < (hero.x + 32)
			&& hero.y <= (monster.y + 32) && monster.y <= (hero.y + 32)
		){
		++monstersCaught;
		reset();
	}
};