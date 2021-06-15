interface Payload {
    massKg: number;
    material: string;
}

class Cargo implements Payload {
    constructor(massKg: number, material: string) {
        this.massKg = massKg;
        this.material = material;
    }
}


export class Cargo {

}