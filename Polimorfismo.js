class Personagem {
    #vida;

    constructor(nome, poderDeAtaque, vidaInicial) {
        this.nome = nome;
        this.poderDeAtaque = poderDeAtaque;
        this.#vida = vidaInicial;
    }

    receberDano(valor) {
        this.#vida -= valor;

        if (this.#vida < 0) {
            this.#vida = 0;
        }
    }

    exibirStatus() {
        const status = this.#vida > 0 ? 'Ativo' : 'Derrotado';
        console.log(`Nome: ${this.nome} | HP: ${this.#vida} | Status: ${status} `);
    }

    vida() {
        return this.#vida;
    }
}

class Guerreiro extends Personagem {
    constructor(nome, poderDeAtaque, vidaInicial, forcaFisica) {
        super(nome, poderDeAtaque, vidaInicial);
        this.forcaFisica = forcaFisica;
    }

    atacar(alvo) {
        const dano = this.poderDeAtaque + this.forcaFisica;
        console.log(`${this.nome} golpeou ${alvo.nome}, causando ${dano} de dano`);
        alvo.receberDano(dano);
    }
}

class Mago extends Personagem {
    constructor(nome, poderDeAtaque, vidaInicial, poderMagico) {
        super(nome, poderDeAtaque, vidaInicial);
        this.poderMagico = poderMagico;
    }

    atacar(alvo) {
        const dano = this.poderDeAtaque + this.poderMagico * 2;
        console.log(`${this.nome} lançou uma magia em ${alvo.nome}, e causou ${dano} de dano`);
        alvo.receberDano(dano);
    }
}

const guerreira = new Guerreiro('Cremasco', 12, 138, 30);
const maga = new Mago('Andrade', 30, 98, 25);

guerreira.exibirStatus();
maga.exibirStatus();

console.log('');

guerreira.atacar(maga);
maga.exibirStatus();

console.log('');

maga.atacar(guerreira);
guerreira.exibirStatus();

console.log('');

maga.exibirStatus();
guerreira.exibirStatus();
