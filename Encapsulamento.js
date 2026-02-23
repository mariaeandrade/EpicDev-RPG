class Personagem {
    #vida;

    constructor(nome, poderDeAtaque ) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
        this.#vida = 235
    }

    receberDano(valor) {
        this.#vida -= valor;

        if (this.#vida < 0) {
            this.#vida = 0;
        }

        console.log(`${this.nome} recebeu ${valor} de dano`)
    }

    exibirStatus() {
        const status = this.#vida > 0 ? "Ativo" : "Derrotado";
        console.log(`Nome: ${this.nome} | HP: ${this.#vida} | Status: ${status} `)
    }

    vida() {
        return this.#vida
    }
}

const persona = new Personagem('Ana', 40);
console.log(persona);
persona.exibirStatus();
persona.receberDano(50);
persona.receberDano(200);
persona.exibirStatus();
