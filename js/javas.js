const tel = document.getElementById("tel");
const email = document.getElementById("email");
const pwd  = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");
const nome = document.getElementById("nome");
const cpf  = document.getElementById("cpf");
const nasc  = document.getElementById("nasc");
const lic  = document.getElementById("lic");
const rg  = document.getElementById("rg");

function validate(item){
	item.setCustomValidity('');
	item.checkValidity();

	if (item == cpf){
		let numCPF = cpf.value.replace(/[^0-9]/g, "");
		if (validateCPF(numCPF)){
			item.setCustomValidity('');	
		} else {
			item.setCustomValidity('Ajeita esse CPF')
		}
	}

	if (item == pwd2){
		if (item.value == pwd.value ) {
			item.setCustomValidity('');

		} else {
			item.setCustomValidity('Digita direito irmão, essa senha não está certa!');
		}
	}
	if (item == nasc){
		let hoje = new Date();
		let dnasc = new Date(nasc.value);
		let idade = hoje.getFullYear() - dnasc.getFullYear();
		let dm = hoje.getMonth() - dnasc.getMonth();;
		if (dm < 0 || (dm == 0 && hoje.getDate() < dnasc.getDate())){
			idade--
		}
		if (idade >=0){document.getElementById("idade").value = idade + " anos";}
		else {document.getElementById("idade").value = "Vamo para de graça";}

		if (idade < 18){
			item.setCustomValidity('Para entra em sites adulto você é de maior né');
		} else if (idade > 130){
			item.setCustomValidity('É parente da rainha elizabeth desgraçade');
		} else {
			item.setCustomValidity('');
		}
	}
}

function maskCPF(){
	let strCPF = cpf.value;
	if (strCPF.length == 3 || strCPF.length == 7){
		 cpf.value += '.';
	}
	if (strCPF.length == 11){
		 cpf.value += '-';
	validate

	}
}


tel.addEventListener('input', function() { validate(tel); });
email.addEventListener('input', function() { validate(email); });
pwd.addEventListener('input', function() { validate(pwd); });
pwd2.addEventListener('input', function() { validate(pwd2); });
nome.addEventListener('input', function() { validate(nome); });
nasc.addEventListener('input', function() { validate(nasc); });
lic.addEventListener('input', function() { validate(lic); });
cpf.addEventListener('input', maskCPF);