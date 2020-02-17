import { attack } from "./attack"
import { game } from "./game"
import {pokemon} from "./pokemon"

class main {

    constructor(){}

    run(){
        console.log("Que la bataille commence \n");

        var enlightens = new attack("enlightens", 50 , 4);
        var pikachu = new pokemon("Pikachu", enlightens,40,80,90 );

        var leafBlade = new attack("Leaf-blade", 40, 6)

        var bulbizarre = new pokemon("Bulbizarre" , leafBlade,35,70,100);

        console.log("Les pokémons sont init \n");
        console.log("Pokemon 1 : " + pikachu.name  + "\n")
        console.log("Pokemon 2 : " + bulbizarre.name  + "\n")


        /*-------------------------------------------*/

        var g = new game(pikachu,bulbizarre);
        
        let firstPokemon = g.firstAttack(pikachu,bulbizarre);

        if(firstPokemon === pikachu){
            console.log( pikachu.name  + " attaque en premier \n")

            while(pikachu.life > 0 || bulbizarre.life > 0){
                pikachu.attack.attackPokemon(bulbizarre);
                bulbizarre.attack.attackPokemon(pikachu);
            }
      
            console.log("Fin du combat \n");
            console.log("Vie Bulbizarre :" +bulbizarre.life + "\n");
            console.log("Vie Pikachu :" +pikachu.life + "\n");




        }else{
            console.log( bulbizarre.name  + " attaque en premier \n")

            while(pikachu.life > 0 || bulbizarre.life > 0){

            bulbizarre.attack.attackPokemon(pikachu);
            pikachu.attack.attackPokemon(bulbizarre);


            }
            console.log("Fin du combat\n");
            console.log("Vie Bulbizarre :" +bulbizarre.life + "\n");
            console.log("Vie Pikachu :" +pikachu.life + "\n");

        }

    }

 



}
    
const m = new main();
m.run();
