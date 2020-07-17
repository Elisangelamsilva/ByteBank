export class Funcionario{
    constructor(nome,salario,cpf){
    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;

    this._bonificacao = 1
    this._senha;
    }

    //vai ser cadastrado depois
    cadastrarSenha(senha){
        this._senha = senha;
    }

    //não consegue atribuir, apenas observa 
    autenticar(){
        return senha == this._senha; 
    }
}