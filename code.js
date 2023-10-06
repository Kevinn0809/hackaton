function formulario(txtCa) {
    if (txtCa.length < 8) {
        return false
    }

    let Mayus = false
    let Minus = false
    let tieneNumero = false

    for (let i = 0; i < txtCa.length; i++) {
        let caracter = txtCa[i]
        if (caracter >= 'A' && caracter <= 'Z') {
            Mayus = true
        } else if (caracter >= 'a' && caracter <= 'z') {
            Minus = true
        } else if (!isNaN(caracter)) {
            tieneNumero = true
        }
    }

    if (Mayus && Minus && tieneNumero) {
        return true
    } else {
        return false
    }
}

function formCriterios() {
    let txtCa = document.getElementById("txtCa").value
    let resultado = document.getElementById("resultado")
    let resultadoErroneo = document.getElementById("resultadoErroneo")

    if (formulario(txtCa)) {
        resultado.classList.remove('d-none')
        resultadoErroneo.classList.add('d-none')
    } else {
        resultado.classList.add('d-none')
        resultadoErroneo.classList.remove('d-none')
    }
}




let arrayNumeros = [5, 5000000, 1000, 1]
let numeroMax = arrayNumeros.reduce((a, b) => {
    return Math.max(a, b);
})
console.log('file: code.js:5 -> numeroMax:', numeroMax)

document.body.innerHTML += `
    <div class="container pt-2">
        <h3>Punto 2</h3>
        <p>${arrayNumeros} el número mas grande es ${numeroMax}</p>
    </div>
`


let formpunto4 = document.querySelector("#formpt4")

formpunto4.addEventListener("submit", (evento) => {
    evento.preventDefault()
    let palabrainput = document.querySelector("#txtpt4").value

    // console.log(palabrainput);

    conteovocal(palabrainput)

})

function conteovocal(palabra) {

    palabra.split('')

    var filtrarvocal = palabra.filter(vocal => vocal === 'a' | 'e' | 'i' | 'o' | 'u')

    console.log(filtrarvocal);
}