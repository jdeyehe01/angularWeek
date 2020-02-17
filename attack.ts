import {pokemon} from "./pokemon";
export class attack {
    public name : string;
    public precision : number;
    public dommage : number;

    constructor (name: string, precision: number,dommage: number){
        this.name = name;
        this.precision = precision;
        this.dommage = dommage;

    }

    attackPokemon(targetPokemon: pokemon): pokemon {
        targetPokemon.life = targetPokemon.life - this.dommage;
        return targetPokemon;
     
     }
}
