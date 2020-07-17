import { Funcionario } from "./Funcionarios.js";

export class Gerente extends Funcionario{
    constructor(nome,salario,cpf){
        //enviar para instancia maior
        super(nome,salario,cpf)
        this._bonificacao = 2;
    }
}