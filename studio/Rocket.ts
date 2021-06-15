class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems = [];
    astronauts = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass ( items: Payload[]): number {
        //returns the sume of all items using each item's massKG property
    }

    currentMassKg(): number {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    }

    canAdd(item: Payload): boolean {
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKG
    }

    addCargo(cargo: Cargo): boolean {
        //uses this.canAdd() to see if another item cn be added.  If true, adds cargo tho this.cargoItems and returns true. If false, returns false
    }

    addAstronaut(astronaut: Astronaut): bolean {
        //uses this.canAdd() to see if another astronaut can e added. If true, adds astronaut to this.astronauts and returns true, if fase, returns false 
    }
    

}


export class Rocket{

}