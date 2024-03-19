class Turma{

    #codigo=0
    #nota=0.0
    constructor({codigo, nota}){
        this.#codigo=codigo
        this.#nota=nota
    }

    get codigo(){
        return this.#codigo
    }
    set codigo(codigo){
        this.#codigo = codigo
    }
    get nota(){
        return this.#nota
    }
    set nota(nota){
        this.#nota = nota
    }

    aprovado(nota){
        if (nota >= 6){
            console.log("Aprovado")
            return true
        }
        console.log("Desaprovado")
        return false
    }
}

module.exports=Turma