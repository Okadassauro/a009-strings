const nome = prompt("qual seu nome?")


const comida1 = prompt("qual sua primeira comida favorita?")
const comida2 = prompt("qual sua segunda comida favorita?")
const comida3 = prompt("qual sua terceira comida favorita?")

const foodsTemplateString = `Estas são as #3 comidas favoritas de ${nome}: \n${comida1} \n${comida2} \n${comida3}`

console.log(foodsTemplateString)


