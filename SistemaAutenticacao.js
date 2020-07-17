export class SistemaAutenticacao{
    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAuteticavel(autenticavel)){
            return autenticavel.autenticar(senha);
        }
        return false
    }

    static ehAuteticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticavel instanceof Function
    }
}
