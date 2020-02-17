import { pokemon } from "./pokemon";
import { attack } from "./attack";

function multiplyBy4(tab = []) {
    return tab;
}

describe('multiplyBy4', () => {
    it('should return empty array', () => {
        expect(multiplyBy4([])).toEqual([]);
    });
});


function firstAttack(p1: pokemon, p2: pokemon,rand? : number) : pokemon {
    if(p1.speed == p2.speed){

       if(rand <= 0.50){
           return p1;
       }
       return p2;
    }
    
    return p1.speed > p2.speed ? p1 : p2
}



describe('firstAttack', () => {
   
    const stitch = new attack("Stitch" , 20 , 40);
    
    it('should return p2', () => {
        const p1 = new pokemon("Bob",stitch,40,50,100);
        const p2 = new pokemon("Boby",stitch,30,70,70);
        expect(firstAttack(p1,p2)).toBe(p2);
    });

    it('should return p1' , () => {
        const p1 = new pokemon("Bob",stitch,40,15,90);
        const p2 = new pokemon("Boby",stitch,30,10,10);

        expect(firstAttack(p1,p2)).toBe(p1);
        
    });


    it('should return p1 with random' , () => {
        const p1 = new pokemon("Bob",stitch,40,15,90);
        const p2 = new pokemon("Boby",stitch,30,15,10);

        expect(firstAttack(p1,p2,0.20)).toBe(p1);
        
    });

    it('should return p2 with random' , () => {
        const p1 = new pokemon("Bob",stitch,40,15,90);
        const p2 = new pokemon("Boby",stitch,30,15,10);

        expect(firstAttack(p1,p2,0.82)).toBe(p2);
        
    });
});

function attacks(targetPokemon: pokemon): pokemon {
   targetPokemon.life = targetPokemon.life - this.pokemon.attack.dommage;
   return targetPokemon;

}

