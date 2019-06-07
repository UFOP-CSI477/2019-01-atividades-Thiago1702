//cometario
/*comentario*/
function validar(campo,alerta,label){
		
		var n = parseFloat(campo.value);
		
		if(campo.value.length == 0 || isNaN(n)){
		
		
			document.getElementById(alerta).style.display = "block";
		
			document.getElementById(label).classList.add("text-danger");
		
			campo.classList.add("is-invalid");
		
		
			campo.value = "";
			campo.focus();
			return false;
		
		}
		
		//tudo certo
		document.getElementById(alerta).style.display = "none";
		campo.classList.remove("is-invalid");
		campo.classList.add("is-valid");
	
		document.getElementById(label).classList.remove("text-danger");
		document.getElementById(label).classList.add("text-success");
		return true;
		
}
function calcular(){
	var a = document.dados.amplitude;
	var d = document.dados.delta;
	
	if(validar(a,"alerta1","labelamp") && validar(d,"alerta2","labeldelta")){
		
		var amp = parseFloat(a.value);
		var delta = parseFloat(d.value);
		
		var mag = (Math.log10(amp))+((3*Math.log10(8*delta))-2.92);
		var m = parseFloat(mag.toFixed(2));
		document.dados.resultado.value = m;
		if(mag < 3.5){
			document.getElementById("efect").innerHTML = "Efeito desse tremor: Geralmente nem percebido.";
			
		}else if(mag >= 3.5 && mag <= 5.4){
			document.getElementById("efect").innerHTML = "Efeito desse tremor: Pode ser sentido mas raramente causa danos.";
			
		}else if(mag >= 5.5 && mag <= 6){
			document.getElementById("efect").innerHTML = "Efeito desse tremor: Poucos danos a prédios bem construidos. Danos graves á construçoes mais fragéis";
			
		}else if(mag >= 6.1 && mag <= 6.9){
			document.getElementById("efect").innerHTML = "Efeito desse tremor: Pode ser destruitivo em áreas até 100KM do epicentro.";
			
		}else if(mag >= 7 && mag <= 7.9){
			document.getElementById("efect").innerHTML = "Efeito desse tremor: Grande terremoto. Pode causar muita destruiçao em grandes distâncias";
			
		}else if(mag >8){
			document.getElementById("efect").innerHTML = "Efeito desse tremor: Enorme terremoto pode destruir areas a centenas de quilometros do epicentro";
			
		}
		
	} 
	
}
