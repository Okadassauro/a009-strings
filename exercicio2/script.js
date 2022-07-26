const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const semEspaco = minhaString.trim()

const qtde = minhaString.length
const qtde2 = semEspaco.length

console.log(`A frase \"${minhaString}\" possui ${qtde}  caracteres. \nJá a frase \"${semEspaco}\" possui ${qtde2}  caracteres.`)

const semTraco = semEspaco.replace("________", "sticioso")

console.log(semTraco)
