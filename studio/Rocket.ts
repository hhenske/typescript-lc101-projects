import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket {
    name: string;
    massKg: number;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass ( items: Payload[]): number {
        //returns the sum of all items using each item's massKG property
       
        let sum: number = 0
          for (let i =0; i < items.length; i++){
              sum += items[i].massKg;
          }

      return sum;
    }

    currentMassKg(): number {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
       return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    canAdd(item: Payload): boolean {
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKG
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        //uses this.canAdd() to see if another item cn be added.  If true, adds cargo tho this.cargoItems and returns true. If false, returns false
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        //uses this.canAdd() to see if another astronaut can e added. If true, adds astronaut to this.astronauts and returns true, if fase, returns false 
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
    

}


