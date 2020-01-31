
alert("Bonjour ! Cette fan page a été crée pour  ordinateur  , tablet , TV et smartphone en formas paysage !!!  =) ");

	
function  page1()
{
	document.getElementById("page").innerHTML = '<iframe src="bdd/s1.html"></iframe>';
}
function  page2()
{
	document.getElementById("page").innerHTML = '<iframe src="bdd/s2.html"></iframe>';
}
function  page3()
{
	document.getElementById("page").innerHTML = '<iframe src="bdd/s4.html"></iframe>';
}
function  page4()
{
	document.getElementById("page").innerHTML = '<iframe src="bdd/s3.html"></iframe>';
}
function  game()
{
	document.getElementById("page").innerHTML = '<iframe src="bdd/game.html"></iframe>';
}
function  end()
{
	document.getElementById("close").innerHTML = '<img style ="width:100%;height:50%;border:3px solid black;"src="bdd/img/best.gif"  ><p style="background-color:white;width:100%;margin:1px;border:3px solid black;text-align:center;position:absolute;top:50%;font-size:2em;">Redirection terminer</p>';

	window.open("bdd/end.html"); 

}
function  pro()
{
	document.getElementById("page").innerHTML = '<iframe src="bdd/produit.html"></iframe>';
}