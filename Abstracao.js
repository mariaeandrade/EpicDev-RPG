class Personagem {
    constructor(nome, poderDeAtaque) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
    }

    receberDano(valor) {
        this.receberDano = valor;
        return `${this.nome} perdeu ${valor} de vida`}
}

const persona = new Personagem("Cremasco", 40)

console.log(persona);
console.log(persona.receberDano(20));
