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
	var p = document.dados.peso;
	var a = document.dados.altura;
	
	if(validar(p,"alerta1","labelpeso") && validar(a,"alerta2","labelaltura")){
		
		var pes = parseFloat(p.value);
		var alt = parseFloat(a.value);
		
		var res = ((pes)/(alt*alt));
		
		document.dados.resultado.value = res;
		if(res < 18.5){
			document.getElementById("anum").innerHTML = "Voce está sub-nutrido";
			
		}else if(res >= 18.5 && res <= 24.9){
			document.getElementById("anum").innerHTML = "Voce está na faixa de peso ideal para ser saldavel! Parabéns";
			
		}else if(res >= 25 && res <= 29.9){
			document.getElementById("anum").innerHTML = "Voce está com sobrepeso.";
			
		}else if(res >= 30 && res <= 34.9){
			document.getElementById("anum").innerHTML = "Voce está com obesidadde grau 1.";
			
		}else if(res >= 35 && res <= 39.9){
			document.getElementById("anum").innerHTML = "Voce está com obesidadde grau 2.";
			
		}else if(res >40){
			document.getElementById("anum").innerHTML = "Voce está com obesidadde grau 3.";
			
		}
		var p1 = 18.5* (alt*alt);
		var p2 = 24.5* (alt*alt);
		var a = parseFloat(p1.toFixed(2));
		var b = parseFloat(p2.toFixed(2));
		document.getElementById("faixa").innerHTML = "Sua faixa de peso ideal é entre "+a+" e "+b;
	} 
	
}
