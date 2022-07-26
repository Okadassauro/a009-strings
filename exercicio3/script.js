//EXERCICIO A
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\n\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

//EXERCICIO B
const fraseTroca = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")
const temVerde = fraseTroca.includes("verde")
const temLaranja = fraseTroca.includes ("laranja")


//EXERCICIO C
console.log(fraseTroca)
console.log(`a frase acima contém a palavra"verde"? ${temVerde}`)
console.log(`A frase acima contém a palavra "laranja"? ${temLaranja}`)

const msgMaiuscula = fraseTroca.toUpperCase("mas não deixe o gato sair")
console.log(msgMaiuscula)


