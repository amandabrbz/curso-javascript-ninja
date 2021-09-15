const objeto = {}

const pessoa = {
    nome: 'Amanda',
    sobrenome: 'Barboza',
    sexo: 'Feminino',
    idade: 25,
    altura: 175,
    andando: false,
    caminhouQuantoMetros: 0,
    fazerAniversario() {
        return this.idade += 1
    },
    andar(metros) {
        this.caminhouQuantoMetros += metros
        this.andando(true)
    },
    parar() { 
        this.andando(false)
    },
    nomeCompleto() {
        return `Olá meu nome é ${this.nome} ${this.sobrenome}`
    },
    mostrarIdade() {
        return `Olá, eu tenho ${this.idade}`
    },
    mostrarAltura() {
        return `Olá, eu tenho ${this.altura}`
    }
}

console.log(pessoa.nomeCompleto())
console.log(pessoa.mostrarIdade())
console.log(pessoa.mostrarAltura())
console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())
console.log(pessoa.fazerAniversario())
console.log(pessoa.mostrarIdade())
console.log(pessoa.andar(10))
console.log(pessoa.andar(5))
console.log(pessoa.andar(7))
console.log(pessoa.andando)
console.log(pessoa.andando && pessoa.parar())
console.log(pessoa.caminhouQuantoMetros)



console.log(pessoa.fazerAniversario())