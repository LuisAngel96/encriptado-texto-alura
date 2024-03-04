const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const textoNingun = document.querySelector(".mensaje-encontrado");
const btnCopiar = document.querySelector(".btn-copiar");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const showTextarea = () => {
    if (textArea.value === "") {
        mensaje.style.backgroundImage = "";
        textoNingun.style.visibility = "";
    } 
    else {
            mensaje.style.backgroundImage = "none";
            textoNingun.style.visibility = "hidden";
    }
}

function btnEncriptar(){
    showTextarea();
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringEncriptada){

    let matrizCodigo = [["u", "ufat"], ["i", "imes"], ["e", "enter"], ["o", "ober"], ["a", "ai"]];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) ;
        }
    }
    return stringEncriptada;
}

function btnDesencriptar(){
    showTextarea();
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptado){

    let matrizCodigo = [["u", "ufat"], ["i", "imes"], ["e", "enter"], ["o", "ober"], ["a", "ai"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

const copiar = () => {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensaje.value);
};
  
btnCopiar.addEventListener("click", () => {
    copiar();
    showTextarea(); 
    mensaje.value = "";
  });
  
/* function textoCopiado () {
        
        if (btnCopiar.innerText == "Copiar"){
            btnCopiar.innerText = "Copiado";
        } else { 
            btnCopiar.innerText = "Copiar"}
    } 
*/
