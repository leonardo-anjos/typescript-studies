import { Passageiro } from "./passageiro";
import { Passagem } from "./Ipassagem";

class Estudante extends Passageiro implements Passagem {
    
    valor_passagem: number;
    
    constructor() {
        super();
        this.valor_passagem = 0;
    }

    valor_a_pagar(valor: number) {
        this.valor_passagem = valor / 2;
    }

}