

// Agora, escreveremos o código para JavaScript no arquivo main.js.
// 1. Primeiro, obteremos a referência do canvas com fabric.Canvas() e a armazenaremos
//  dentro de uma variável chamada canvas.

var canvas = new fabric.Canvas('myCanvas');

// Agora, definiremos as coordenadas x e y iniciais para o personagem e as
// armazenaremos em variáveis.
// ● Ajustamos os valores para playerX e playerY ambos em 10. Você pode ajustá-los em
// qualquer valor que desejar. Não é obrigatório que ajustemos em 10. Ajustamos nesse
// valor para que a imagem inicie ao topo do canvas.

playerX = 10;
playerY = 10;

// // 2. Agora, definiremos a width e height iniciais das imagens dos blocos e as
// armazenaremos nas variáveis.
// // ● Ajustamos os valores para blockImageWidth e blockImageHeight ambos em 30. Não é
//  obrigatório ajustá-los em 30. Ajustamos ambas em 30 para que tivesse boa dimensão
//  no canvas.

blockImageWidth = 30;
blockImageHeight = 30;

// 4. Agora, definimos uma variável chamada playerObject. Essa variável será utilizada para
// armazenar o objeto da imagem do personagem.
// ● Em fabric.js, as imagens são armazenadas no canvas como objetos, portanto,
// enquanto adicionarmos um objeto, poderemos, também, deletá-lo. Isso simplesmente
// significa que podemos adicionar e deletar imagens utilizando objetos.
var playerObject= "";
var blockImageObject= "";


// 5. Agora, adicionaremos uma função chamada playerUpdate() para adicionar a imagem do
// personagem. Essa função enviará a imagem do jogador no canvas.

// ➔ Primeiro, defina a função e forneça o nome playerUpdate().
function playerUpdate()
{
// 	➔ Agora, definiremos uma função chamada fabric.Image.fromURL() de fabric.js para
// // enviar uma imagem ao canvas
// ○ fabric: Esse será o nome da biblioteca que utilizamos.
// ○ Image: Isso diz que enviamos uma imagem.
// ○ fromURL: Esse contém a URL da imagem e a função para enviar imagens.
// ○ “player.png”: Essa é a imagem.
// ○ function(Img): Essa é a função que enviará player.png ao canvas.
// ■ Img: Esse é o objeto da imagem definida por padrão.
	fabric.Image.fromURL("player.png", function(Img) {
	
		// Agora, armazenaremos o objeto padrão da imagem em nossa variável.
		// ○ Logo, sempre que quisermos deletar, adicionar, modificar a width e height da
		// imagem do jogador, referimos a variável playerObject.
		
		// ○ Essa variável atuará como identificadora da imagem.
		// Por exemplo: Em HTML, temos a tag img com a id:
		// <img scr=”image.png” id=”myImage”>
		// Portanto, se quisermos aumentar ou diminuir ou realizar qualquer manipulação
		// com a imagem em CSS, utilizamos essa id, a seguir:
		// #myImage
		// {
		// width:100px;
		// }
		playerObject = Img;

// 		playerObject é o objeto da imagem.
// ○ scanToWidth(150) ajustará a width da imagem.
// ■ 150 será a width que queremos ajustar. Não é obrigatório ser 150. Pode
// ser qualquer número, no entanto, ajustamos em 150 para que tenha uma
// boa aparência no canvas.
	playerObject.scaleToWidth(150);

// 	Agora, adicionaremos a height à imagem do personagem, com a variável
// playerObject.
// playerObject é o objeto da imagem.
// ○ scanToHeight(140) ajustaremos a height da imagem.
// ■ 140 será a height que queremos ajustar. Não é obrigatório ser 140. Pode
// ser qualquer número, no entanto, ajustamos em 140 para que tenha uma
// boa aparência no canvas.
	playerObject.scaleToHeight(140);

	// ➔ Agora, ajustaremos as coordenadas x e y da imagem.
// 	○ playerObject é o objeto da imagem.
// ○ set ajustaremos as coordenadas x e y da imagem do personagem.
// ○ top representa a coordenada y.
// // Ajustamos a coordenada y para o valor playerY, sendo ela 10, como já
// definimos anteriormente.
// ○ left representa a coordenada x.
// // Ajustamos a coordenada x para o valor playerX, sendo ela 10, como já
// definimos anteriormente.

	playerObject.set({
	top:playerY,
	left:playerX
	});

	// Agora, adicione essa imagem ao canvas.
	//○ canvas é a variável criada no início, que contém o elemento canvas.
// ○ add(playerObject): Essa é a função para adicionar os desenhos ao canvas.
// ■ playerObject É o objeto imagem do personagem.


	canvas.add(playerObject);

	});
}

// 6. Agora, adicionaremos uma função para adicionar as diferentes imagens de acordo com as
// teclas específicas pressionadas.
function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);
if(e.shiftKey == true && keyPressed == '80')
{
	console.log("p e shift pressionadas juntas");
	blockImageWidth = blockImageWidth + 10;
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	console.log("m e shift pressionadas juntas");
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up();
		console.log("cima");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("baixo");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("esquerda");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("direita");
	}
	if(keyPressed == '87')
	{
		newImage('wall.jpg'); 
		console.log("w");
	}
	if(keyPressed == '71')
	{
		newImage('ground.png'); 
		console.log("g");
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
		console.log("l");
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
		console.log("t");
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
		console.log("r");
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
		console.log("y");
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
		console.log("d");
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
		console.log("u");
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
		console.log("c");
	}
	
}
function up()
{
	if(playerY >=0)
	{
		playerY = playerY - blockImageHeight;
		console.log("autura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Cima for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		console.log("altura da imagem do bloco = " + blockImageHeight);
		console.log("Quando a tecla direcional Baixo for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >0)
	{
		playerX = playerX - blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Esquerda for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <=850)
	{
		playerX = playerX + blockImageWidth;
		console.log("largura da imagem do bloco = " + blockImageWidth);
		console.log("Quando a tecla direcional Direita for pressionada, X =  " + playerX + " , Y = "+playerY);
		canvas.remove(playerObject);
		playerUpdate();
	}
}