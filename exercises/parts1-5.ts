// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 


// Part 1: Declare (5) Variables With Type

let spacecraftName: string = 'Determination';
let speedMph: number = 17500;
const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;
const milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars
const milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;





// Part 3: Create a Function ("getDaysToLocation")
function getDaysToLocation(kilometersAway: number): number {
   let milesToLocation: number = kilometersAway * milesPerKilometer;
   let hoursToLocation: number = milesToLocation / speedMph;
   let daysToLocation: number = hoursToLocation / 24;
   return daysToLocation;
}
// Move your output statement from part 2 here. Update the template literal to call
console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToMars)} days to get to Mars`);
// the function and print the outputs for a Mars trip and a moon trip.
console.log(`It will take ${spacecraftName} ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon`);




// Part 4: Create a Spacecraft Class

class Spacecraft {
    name: string;
    constructor(name: string, speedMph: number) {
    this.milesPerKilometer: number = 0.621;
    this.name: string;
    this.speedMph: number;
    }
}


// Create an instance of the class here:



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.



// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.


// Add the printDaysToLocation function to the Spacecraft class.

// Paste in the code from step 6 here:
