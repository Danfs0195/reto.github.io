function encriptar() {
    var mensaje = document.getElementById("input-texto").value;
    document.getElementById("msg").value = mensaje.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
    console.log(mensaje);
}

function desencriptar() {
    var mensaje= document.getElementById("input-texto").value;
    document.getElementById("msg").value = mensaje.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
}


function copiar() {
	/* Get the text field */
	var copyText = document.getElementById("msg");
  
	/* Select the text field */
	copyText.select();
	/*copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
	 /* Copy the text inside the text field */
	navigator.clipboard.writeText(copyText.value);
  
	/* Alert the copied text */
	/*alert("Copied the text: " + copyText.value);*/
  }
