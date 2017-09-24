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
		window.location.href = "p2.html#work";
		return true;
	}else{

		flag=false;
		alert("Errou feio, Errou feio, Errou rude");
		return false;
	}
}