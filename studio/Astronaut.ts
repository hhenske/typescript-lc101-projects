interface Payload {
    massKg: number;
    name: string;
}

class Astronaut implements Payload{
    constructor(massKg:number, name: string) {
        this.massKg = massKg;
        this.name = name;
    }
}




export class Astronaut{

}