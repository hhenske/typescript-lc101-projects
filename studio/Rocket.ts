import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems = []
    astronauts = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass ( items: Payload[]): number {
        //returns the sum of all items using each item's massKG property
       
      let sumMass: number = this.cargoItems.map(a => a.massKg).reduce(function(a,b){
          return a+b;
      });
      return sumMass;
    }

    currentMassKg(): number {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
       let currentMass = Number(this.sumMass) + Number(this.astronauts) + Number(this.cargoItems);
       return currentMass;
    }

    canAdd(item: Payload): boolean {
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKG
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        //uses this.canAdd() to see if another item cn be added.  If true, adds cargo tho this.cargoItems and returns true. If false, returns false
        if (this.canAdd()) {
            cargo = cargo + this.cargoItems
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        //uses this.canAdd() to see if another astronaut can e added. If true, adds astronaut to this.astronauts and returns true, if fase, returns false 
        if (this.canAdd()) {
            let astronauts = astronaut + this.astronauts;
            return true
        } else {
            return false;
        }
    }
    

}


