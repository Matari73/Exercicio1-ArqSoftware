import Turma from "./turma"

class TurmaPresencial extends Turma{
    
    #frequencia=0.0
    constructor(frequencia){
        this.#frequencia= frequencia
    }

    get frequencia(){
        return this.#frequencia
    }
    set frequencia(frequencia){
        this.#frequencia = frequencia
    }

    aprovado(frequencia){
        if (frequencia >= 75.0){
            console.log("Aprovado")
            return true
        }
        console.log("Desaprovado")
        return false
    }
}

module.exports = TurmaPresencial