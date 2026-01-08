class Guerreiro{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar()
    {
        let tipoAtaque = ""

        if(this.tipo === "mago")
            tipoAtaque = "usou magia"
        if(this.tipo === "guerreiro")
            tipoAtaque = "usou espada"
        if(this.tipo === "monge")
            tipoAtaque = "usou artes marciais"
        if(this.tipo === "ninja")
            tipoAtaque = "usou shuriken"

        return `o ${this.tipo} atacou usando ${tipoAtaque}`;
    }
}


let char = new Guerreiro("Rookie",28,"mago")
let mensagem = char.atacar()
console.log(mensagem)