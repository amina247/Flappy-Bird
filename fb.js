var block = document.getElementById("block");
var hole = document.getElementById("hole");
var player = document.getElementById("player");
var jumping = 0;
var counter = 0;



//making the pipes in random postions
hole.addEventListener('animationiteration', () => {
	let random = Math.random()*3;
	let top = (random*100)+150;
	hole.style.top = -(top) + "px";
	counter++;
});


//make player jump
/*function jump()
{ if(Event === true) {
	transform. position. y = old_y + 1;
	}
}
InvokeRepeating("jump", 0, 0.5); */


//Gravity stimulation
setInterval(function(){
	var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

	//change top if we are not currently jumping or else ball would be moving up and down
	if(jumping===0){
		player.style.top = (playerTop+3)+ "px"
	}
	var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
	var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
	if(playerTop>480){
		alert("Game over. Score: "+counter);
		player.style.top = 100 + "px";
		counter = 0;
	}
},10)


//make the player jumps
function jump(){
	jumping = 1;
	let jumpCount = 0;
	var jumpInterval = setInterval(function(){
		var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
		//when bird goes to the very top, then don't keep adding to the top
		if((playerTop>6)&&(counter<15)){
		player.style.top = (playerTop-5)+ "px"
		}
		if(jumpCount>20){
			clearInterval(jumpInterval);
			jumping=0;
			jumpCount=0;
		}
		jumpCount ++
	},10);
}
 


