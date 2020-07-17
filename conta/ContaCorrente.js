import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    // todas as contas serão modificadas
    static numeroDeContas = 0;
    //pode usar os acessores de dentro da classe
    constructor(cliente,agencia){
        super(0,cliente,agencia);
        ContaCorrente.numeroDeContas += 1; // para acessar é só colocar ContaCorrente
    }

    //sobrescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        //usar as propriedades privadas/protegidas da classe Conta
        return this._sacar(valor, taxa);
    }

}