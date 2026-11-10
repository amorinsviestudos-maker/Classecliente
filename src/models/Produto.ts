export class Produto{
   //atributos
    id: number;
    nome: String;
    preco: number;
    quantidade: number;

    //método construtor
    //responsavel por criar o objeto
    constructor(id: number,nome: String, preco: number, quantidade:number){
        //instancia os atributos
        this.id = id;
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;

    }
}