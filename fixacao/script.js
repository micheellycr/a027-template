const paragrafo = document.getElementById("paragrafo")

const input = document.getElementById("texto")

function novoValor(){
    console.log(input.value)
}

function somarClique(){
    paragrafo.innerHTML = input.value
    console.log(paragrafo.innerHTML)
}
