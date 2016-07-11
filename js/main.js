var contador;

function countdown(){
	var deadline='2016-07-18 00:00';
	var deadlineTime = Date.parse(deadline)
	var hoy = new Date();
	var hoyTime = Date.parse(hoy);
	
	var diferencia = deadlineTime - hoyTime;
	var s = Math.floor(diferencia/1000);
	var m = Math.floor(s/60);
	var h = Math.floor(m/60);
	var d = Math.floor(h/24);
	s%=60
	m%=60
	h%=24
	var contador= setTimeout(countdown, 1000);
	document.getElementById("dias").textContent=d;
	document.getElementById("horas").textContent=h;
	document.getElementById("minutos").textContent=m;
	document.getElementById("segundos").textContent=s;
	if (diferencia <= 0){
		clearInterval(contador);
	}

}

countdown();