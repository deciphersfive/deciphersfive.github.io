function ValidarCode(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value == "Rio" || variavel.value == "rio"){
		window.location.href = "p2.html#work";
		return true;
	}else{

		flag=false;
		alert("Erou");
		return false;
	}
}

function ValidarCode2(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value == "Silencio" || variavel.value == "silencio"){
		window.location.href = "p3.html#work";
		return true;
	}else{

		flag=false;
		alert("Errou feio, Errou feio, Errou rude");
		return false;
	}
}

function ValidarCode3(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value == "Os dias da semana" || variavel.value == "os dias da semana" || variavel.value="segunda, terça, quarta, quinta e sexta"){
		window.location.href = "p4.html#work";
		return true;
	}else{

		flag=false;
		alert("U have Fail");
		return false;
	}
}

function ValidarCode4(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value == "Um" || variavel.value == "um" || variavel.value="1"){
		window.location.href = "p4.html#work";
		return true;
	}else{

		flag=false;
		alert("Errou");
		return false;
	}
}