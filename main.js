
// Crie uma variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais da bola e do buraco.
ballY = 0;
ballX = 0;
holeY = 400;
holeX = 800;

blockImageWidth = 5;
blockImageHeight = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png", function(Img){
		holeObj = Img;
		holeObj.scaleToWidth(50);
		holeObj.scaleToHeight(50);
		holeObj.set({
			top : holeY,
			left : holeX
		});
		canvas.add(holeObj);
	});
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("ball.png", function(Img){
		ballObj = Img;
		ballObj.scaleToWidth(50);
		ballObj.scaleToHeight(50);
		ballObj.set({
			top : ballY,
			left : ballX
		});
		canvas.add(ballObj);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if((ballX == holeX)&&(ballY == holeY)){
		canvas.add(ballObj)
		document.getElementById("hd3").innerHTML = "Voce atingiu o objetivo!!!"
		document.getElementById("myCanvas").style.borderColor = "red";
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
		// Escreva o código para mover a bola para cima.
		if(ballY >450){
			ballY = ballY - blockImageHeight;
			console.log("Altura da imagem do bloco =" + blockImageHeight);
			console.log("Quando a tecla direcional cima estiver pressionada, X = " + ballX + " ,  Y =" + ballY);
			canvas.remove(ballObj);
			newImage();
	}
	}
	function down()
	{
		 // Escreva o código para mover a bola para baixo.
		 if(ballY <=450){
			ballY = ballY + blockImageHeight;
			console.log("Altura da imagem do bloco =" + blockImageHeight);
			console.log("Quando a tecla direcional baixo estiver pressionada, X = " + ballX + " ,  Y =" + ballY);
			canvas.remove(ballObj);
			newImage();
		 }
	}

	function left()
	{
		if(ballX >5)
		{
			// Escreva o código para mover a bola para a esquerda.
			ballX = ballX - blockImageWidth;
			console.log("Largura da imagem do bloco =" + blockImageWidth);
			console.log("Quando a tecla direcional esquerda estiver pressionada, X = " + ballX + " ,  Y =" + ballY);
			canvas.remove(ballObj);
			newImage();
		}
	}

	function right()
	{
		if(ballX <=1050)
		{
			// Escreva o código para mover a bola para a direita.
			ballX = ballX + blockImageWidth;
			console.log("Largura da imagem do bloco =" + blockImageWidth);
			console.log("Quando a tecla direcional direira estiver pressionada, X = " + ballX + " ,  Y =" + ballY);
			canvas.remove(ballObj);
			newImage();
		}
	}
	
	}

