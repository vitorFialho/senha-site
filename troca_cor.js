let botao = document.getElementById("botao");
let senha = document.getElementById("senha");

function trocaCor(){
    if (senha.value == "universo"){
        document.querySelector('p').style.color = "blue";
        document.getElementById('tchamo').style.visibility = "visible";
    }else{
        alert("Senha errada, meu amor");
        senha.value = "";
        senha.focus();
    }
}

botao.onclick = trocaCor;