export class Produto {
    //atributos
    id;
    nome;
    preco;
    quantidade;
    //método construtor
    //responsavel por criar o objeto
    constructor(id, nome, preco, quantidade) {
        //instancia os atributos
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
}
