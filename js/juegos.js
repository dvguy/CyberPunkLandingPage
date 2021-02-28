const name = document.getElementById('iname');
const lastname = document.getElementById('ilastname');
const email = document.getElementById('imail');
const age = document.getElementById('iage');

var datosCliente = [];

name.addEventListener('input', () => {
	name.setCustomValidity('');
	name.checkValidity();
});

name.addEventListener('invalid', ()=>{
	if(name.value === ''){
	    name.setCustomValidity('Porfavor introduzca su nombre');
	}
	else{
		name.setCustomValidity('Este campo solo admite letras');
	}
})

lastname.addEventListener('input', () => {
	lastname.setCustomValidity('');
	lastname.checkValidity();
});

lastname.addEventListener('invalid', ()=>{
	if(lastname.value === ''){
	    lastname.setCustomValidity('Por favor introduzca su apellido');
	}
	else{
		lastname.setCustomValidity('Este campo sólo admite letras');
	}
});

/*Expresión regular del correo*/
var re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

function testInfo(mailInput) {
  var OK = re.exec(imail.value);
  if(!OK){
    email.setCustomValidity('Introduce tu correo electrónico, este campo requiere un @ y .'); 
  }else{
	name.checkValidity();
  }
} 


function llenarDatos(){
	datosCliente.push("Nombre: "+name.value, "Apellidos: "+lastname.value, "E-mail: "+email.value, "Edad: "+age.value);
	console.log(datosCliente);
	return (false);
}
