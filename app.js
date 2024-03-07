/* ------------------------- Keys --------------------------- */

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/* ------------------------- Parameters --------------------------- */

const encryptText = document.querySelector(".encrypt-text");
const decryptText = document.querySelector(".decrypt-text");
const decryptInput = document.querySelector(".decrypt-input");

/* ------------------------- Decrypt Area --------------------------- */

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

/* ------------------------- Function Alert --------------------------- */

function textExclamation() {
    const textChange = encryptText.value;
    var regex = /^[a-z\s\d!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/; // Letras minúsculas, espacios y otros caracteres especiales.
    if (!regex.test(textChange)) {
        
        alert('El texto debe contener solo letras minúsculas, sin acentos ni mayúsculas.');
        encryptText.value = "";
    }         
}

/* ------------------------- Encrypt Function --------------------------- */

function btnEncrypt (){
    textExclamation();
    showText();
    var text = document.querySelector(".encrypt-text").value;
    var codedText = text.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
    document.querySelector(".decrypt-text").value= codedText;
    document.querySelector(".encrypt-text").value;
    encryptText.value = "";
}

/* ------------------------- Decrypt Function --------------------------- */

function btnDecrypt (){
    textExclamation();
    showText();
    var text = document.querySelector(".encrypt-text").value;
    var codedText = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.querySelector(".decrypt-text").value= codedText;
    document.querySelector(".encrypt-text").value;
    encryptText.value = "";
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