//Conta é uma classe criada para ser apenas herdada, e não instanciada. E toda vez que alguém adicionar um new Conta será bloqueado. CLASSE ABSTRATA. O método sacar() não é feito para ser chamado diretamente, ele é sobrescrito.
export class Conta{
        constructor(saldoInicial,cliente,agencia){
            if(this.construtor == Conta){
                throw new Error("Você não pode instanciar um construtor tipo Conta, classe Abstrata")
            }

            this._saldo = saldoInicial;
            this._cliente = cliente;
            this._agencia = agencia;
        }

    set cliente(novoValor){
        if(novoValor instanceof Cliente){}
        this._cliente = novoValor;
    }

    get cliente(){
        return this.cliente
    }



    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error("O método Sacar é abstrato.")

    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valor){
            this._saldo -= valorSacado;
            return valorSacado ;
        }
        return 0; 
    }

    depositar(valor){
        if(valor <= 0){ 
            return
        }
        this._saldo += valor;
        
    }

    tranferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
