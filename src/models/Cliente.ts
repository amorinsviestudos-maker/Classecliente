export class Cliente {
   
    id: number;
    nome: string;
    cpf: string;
    rg: string;
    dtNascimento: string;
 
   
    constructor(id: number, nome: string, cpf: string, rg: string, dtNascimento: string) {
        this.id = id;
        this.nome = nome;
        this.cpf = cpf;
        this.rg = rg;
        this.dtNascimento = dtNascimento;
    }
 
   
    getCpf(): string {
        return this.cpf;
    }
 
    getNome(): string {
        return this.nome;
    }
 
    getRg(): string {
        return this.rg;
    }
 
    getDtNascimento(): string {
        return this.dtNascimento;
    }
 
    getIdade(): number {
        const anoNascimento = parseInt(this.dtNascimento.split('/')[2]);
        const anoAtual = new Date().getFullYear();
        return anoAtual - anoNascimento;
    }
}
 
//this.dtNascimento.split('/') ->divide a string (data do nascimento) em um vetor (uma lista de partes) sempre que encontra a barra /
//parseInt -> Converte texto em numero inteiro
//new Date().getFullYear(): Cria um objeto com a data e hora atual do sistema e extrai apenas o ano corrente