"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        //returns the sum of all items using each item's massKG property
        var sumMass = this.cargoItems.map(function (a) { return a.massKg; }).reduce(function (a, b) {
            return a + b;
        });
        return sumMass;
    };
    Rocket.prototype.currentMassKg = function () {
        //uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
        var currentMass = Number(this.sumMass) + Number(this.astronauts) + Number(this.cargoItems);
        return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        //returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKG
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    };
    Rocket.prototype.addCargo = function (cargo) {
        //uses this.canAdd() to see if another item cn be added.  If true, adds cargo tho this.cargoItems and returns true. If false, returns false
        if (this.canAdd()) {
            cargo = cargo + this.cargoItems;
            return true;
        }
        else {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        //uses this.canAdd() to see if another astronaut can e added. If true, adds astronaut to this.astronauts and returns true, if fase, returns false 
        if (this.canAdd()) {
            var astronauts = astronaut + this.astronauts;
            return true;
        }
        else {
            return false;
        }
    };
    return Rocket;
}());
exports.Rocket = Rocket;
