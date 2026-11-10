export class Cliente {
    id;
    nome;
    cpf;
    rg;
    dtNascimento;
    constructor(id, nome, cpf, rg, dtNascimento) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dtNascimento = dtNascimento;
    }
    getCpf() {
        return this.cpf;
    }
    getNome() {
        return this.nome;
    }
    getRg() {
        return this.rg;
    }
    getDtNascimento() {
        return this.dtNascimento;
    }
    getIdade() {
        const anoNascimento = parseInt(this.dtNascimento.split('/')[2]);
        const anoAtual = new Date().getFullYear();
        return anoAtual - anoNascimento;
    }
}
//this.dtNascimento.split('/') ->divide a string (data do nascimento) em um vetor (uma lista de partes) sempre que encontra a barra /
//parseInt -> Converte texto em numero inteiro
//new Date().getFullYear(): Cria um objeto com a data e hora atual do sistema e extrai apenas o ano corrente
