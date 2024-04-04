"use strict";
console.log("Parking System");
const slotArray = [true, false, false, true, false, false, false, false];
class Car {
    constructor({ companyName, modelName }) {
        this.companyName = undefined;
        this.modelName = undefined;
        this.isParked = false;
        this.time = "10am";
        this.parkingOptions = [];
        this.companyName = companyName;
        this.modelName = modelName;
        this.isParked = false;
        this.time = "10am";
    }
    getCarDetails() {
        return `The car is from the company ${this.companyName} and its model is ${this.modelName}`;
    }
    isParkingAvailable() {
        slotArray.forEach((curElem, index) => {
            if (!curElem) {
                this.parkingOptions.push(index);
            }
        });
        return this.parkingOptions.length ? this.parkingOptions : "No parking available";
    }
    bookTicket(slotNumber) {
        if (!this.parkingOptions.includes(slotNumber)) {
            return "Wrong slot number!!";
        }
        for (let i = 0; i < slotArray.length; i++) {
            slotArray[slotNumber] = true;
        }
        return `This is your ticket. SlotNo: ${slotNumber}`;
    }
}
const audi = new Car({ companyName: "Audi", modelName: "R8" });
console.log(audi.getCarDetails());
console.log(audi.isParkingAvailable());
console.log(audi.bookTicket(2));
