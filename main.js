var c = document.getElementById("canvas").getContext("2d");
//c.fillRect(0,0,1000,1000);

for (i=1; i<10; i++){
c.moveTo(50*i,0);
c.lineTo(50*i, 500)
c.stroke();
}
for (i=1; i<10; i++){
c.moveTo(0,50*i);
c.lineTo(500, 50*i);
c.stroke();
}





/*function newcoords(x, y){
	x=x-250;
	y=-(250-y);
}
c.moveTo (newcoords(0,0));
c.lineTo(0.0);
c.stroke;*/
