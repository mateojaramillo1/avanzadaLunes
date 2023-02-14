function calcularDistancia(x1, y1, x2, y2) {
    let restax = x2 - x1
    let restay = y2 - y1
    let potenciax = Math.pow(restax, 2)
    let potenciay = Math.pow(restay, 2)
    let sumatoria = potenciax + potenciay

    let raizCuadrada = Math.sqrt(sumatoria)

    return raizCuadrada
}

let distanciaCalculada = calcularDistancia(1, 1, 3, 3)

console.log(`La distancia es de ${distanciaCalculada}`)