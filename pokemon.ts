import { attack } from "./attack";

export class pokemon {
  public name : string;
  public attack : attack;
  public defense : number;
  public speed : number;
  public life : number;



  constructor(name:string,attack:attack,defense:number, speed : number , life: number){
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.speed = speed;
    this.life = life;
  }

 /* public firstAttack(p1: pokemon, p2: pokemon, rand : number) : pokemon{
    if(p1.speed == p2.speed){

      if(rand <= 0.50){
          return p1;
      }
      return p2;
   }
   
   return p1.speed > p2.speed ? p1 : p2
}
*/


}
