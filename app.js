const encryptText = document.querySelector(".encrypt-text");
const decryptText = document.querySelector(".decrypt-text");
const decryptInput = document.querySelector(".decrypt-input");
const btnCopy = document.querySelector(".btn-copy");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

const showText = () => {
    if (encryptText.value === "") {
        decryptText.style.backgroundImage = "";
        decryptInput.style.visibility = "";
    } 
    else {
            decryptText.style.backgroundImage = "none";
            decryptInput.style.visibility = "hidden";
    }
}

/* ------------------------- Encrypt Function --------------------------- */

function btnEncrypt(){
    textExclamation();
    showText();
    const textEncrypt = encrypt(encryptText.value);
    decryptText.value = textEncrypt;
    encryptText.value = "";
}

function encrypt(stringEncrypt){

    let matrixCode = [["u", "ufat"], ["i", "imes"], ["e", "enter"], ["o", "ober"], ["a", "ai"]];

    stringEncrypt = stringEncrypt.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++){
        if(stringEncrypt.includes(matrixCode[i][0])){
            stringEncrypt = stringEncrypt.replaceAll(matrixCode[i][0], matrixCode[i][1]) ;
        }
    }
    return stringEncrypt;
}

/* ------------------------- Decrypt Function --------------------------- */

function btnDecrypt(){
    textExclamation();
    showText();
    const textEncrypt = decrypt(encryptText.value);
    decryptText.value = textEncrypt;
    encryptText.value = "";
}

function decrypt(stringDecrypt){

    let matrixCode = [["u", "ufat"], ["i", "imes"], ["e", "enter"], ["o", "ober"], ["a", "ai"]];
    stringDecrypt = stringDecrypt.toLowerCase();

    for(let i = 0; i < matrixCode.length; i++){
        if(stringDecrypt.includes(matrixCode[i][1])){
            stringDecrypt = stringDecrypt.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return stringDecrypt;
}

/* ------------------------- Copy Function --------------------------- */

function copy() {
    
    const decryptTextValue = decryptText.value;
    navigator.clipboard.writeText(decryptTextValue);

    if (decryptText.value === "") {
        decryptText.style.backgroundImage = "";
        decryptInput.style.visibility = "";
        decryptText.value = "";
        
    } else if (decryptText.value != "") {

        decryptText.style.backgroundImage = "";
        decryptInput.style.visibility = "";
        decryptText.value = "";

    } else {

        decryptText.style.backgroundImage = "none";
        decryptInput.style.visibility = "hidden";
        decryptText.value = "";
        
    }
}


function textExclamation() {
    const textChange = encryptText.value;
    var regex = /^[a-z\s\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/; // Letras minúsculas, espacios y otros caracteres especiales.
    if (!regex.test(textChange)) {
        
        alert('El texto debe contener solo letras minúsculas, sin acentos ni mayúsculas.');
        encryptText.value = "";
    }         
}




