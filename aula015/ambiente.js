let num = [5, 8, 4]
num[3] = 6 // adiciona na posicao selecionada
num.push(7) // adiciona um numero no final do vetor
num.length // comprimento  do vetor
num.sort() // coloca em ordem crescent
num.indexOf(7) // busca a posicao do valor selecionado
console.log(`${num}`)

for (pos = 0; pos < num.length; pos++) {
    console.log(`A posivao ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num) {
    console.log(num[pos])
}