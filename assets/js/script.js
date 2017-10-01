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

function Validar(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value === "os dias da semana"){
		window.location.href = "p4.html#work";
		return true;
	}else{

		flag=false;
		alert("U have Fail");
		return false;
	}
}

function Validar2(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value == "Um" || variavel.value == "um"){
		window.location.href = "p5.html#work";
		return true;
	}else{

		flag=false;
		alert("Errou");
		return false;
	}
}

function Validate(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value == "Penny" || variavel.value == "penny"){
		window.location.href = "p6.html#work";
		return true;
	}else{

		flag=false;
		alert("Essa era fácil");
		return false;
	}
}

function Validate2(){
	var variavel = document.getElementById("juquinha");
	var flag = true;

	if(variavel.value == "Laranja Mecanica" || variavel.value == "laranja mecanica"){
		window.location.href = "p7.html#work";
		return true;
	}else{

		flag=false;
		alert("O filme é do Tarantino");
		return false;
	}
}