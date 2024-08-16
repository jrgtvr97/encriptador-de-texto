const textArea = document.querySelector(".text-area");
const encriptadoArea = document.querySelector(".encriptado-area");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonEncriptar(){ 
    const textoEncriptado = encriptar(textArea.value);
    encriptadoArea.value = textoEncriptado
    textArea.value = "";
    encriptadoArea.style.backgroundImage = "none";
}

function encriptar (stringEncriptado){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    console.table (matrizCodigo);
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i =0; i < matrizCodigo.length; i++){
        if (stringEncriptado.includes (matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}


function botonDesencriptar(){ 
    const textoEncriptado = desencriptar(textArea.value);
    encriptadoArea.value = textoEncriptado
    textArea.value = "";
}

function desencriptar (stringDesencriptado){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i =0; i < matrizCodigo.length; i++){
        if (stringDesencriptado.includes (matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado
}