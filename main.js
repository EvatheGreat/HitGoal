var canvas= new fabric.Canvas('myCanvas');
b_y=0;
b_x=0;
h_y=400;
h_x=600;
block_image_width = 5;
block_image_height = 5;
function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:h_y,
			left:h_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}
function new_image(){
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:b_y,
			left:b_x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((b_x==h_x) && (b_y==h_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have HIT THE GOAL! 😁";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(b_y>=0)  {
			b_y=b_y-block_image_height;
			console.log("WARNING     GREAT PANCAKE'S Ball IS GOING UP, X= "+b_x+"Y= "+b_y);
			canvas.remove(ball_obj)
			new_image();
			}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(b_y<=450)  {
			b_y=b_y+block_image_height;
			console.log("WARNING     GREAT PANCAKE'S Ball IS GOING DOWN, X= "+b_x+"Y= "+b_y);
			canvas.remove(ball_obj)
			new_image();
			}

	}

	function left()
	{
		if(b_x >0)
		{
			// Write a code to move ball left side.
			b_x=b_x-block_image_width;
			console.log("WARNING     GREAT PANCAKE'S Ball IS GOING LEFT, X= "+b_x+"Y= "+b_y);
			canvas.remove(ball_obj)
			new_image();
		}
	}

	function right()
	{
		if(b_x <=700)
		{
			// Write a code to move ball right side.
			b_x=b_x+block_image_width;
			console.log("WARNING     GREAT PANCAKE'S Ball IS GOING RIGHT, X= "+b_x+"Y= "+b_y);
			canvas.remove(ball_obj)
			new_image();
		}
	}
	
}

