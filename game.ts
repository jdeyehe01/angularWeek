import { pokemon } from "./pokemon"

export class game {
    public p1 : pokemon ;
    public p2: pokemon ;


    constructor (p1:pokemon,p2:pokemon){
        this.p1 = p1;
        this.p2 = p2;
    }
    public firstAttack(p1: pokemon, p2: pokemon, rand? : number) : pokemon{
        if(p1.speed == p2.speed){
    
          if(rand <= 0.50){
              return p1;
          }
          return p2;
       }

}
}
    