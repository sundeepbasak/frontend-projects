console.log("Parking System");

interface ICarProps {
    companyName: string;
    modelName: string;
}

interface ICar {
    getCarDetails: () => void;
    isParkingAvailable: () => void;
    bookTicket: (slotNumber: number) => void;
}

interface IParkingLot {
    isParkingAvailable: () => void;
}

const slotArray: boolean[] = [true, false, false, true, false, false, false, false]

class Car implements ICar {
    private companyName: string | undefined = undefined;
    private modelName: string | undefined = undefined;
    private isParked: boolean = false;
    private time: string = "10am"
    private parkingOptions: number[] = [];

    constructor({ companyName, modelName }: ICarProps) {
        this.companyName = companyName;
        this.modelName = modelName;
        this.isParked = false;
        this.time = "10am"
    }

    getCarDetails() {
        return `The car is from the company ${this.companyName} and its model is ${this.modelName}`;
    }

    isParkingAvailable() {
        slotArray.forEach((curElem, index) => {
            if (!curElem) {
                this.parkingOptions.push(index)
            }
        })
        return this.parkingOptions.length ? this.parkingOptions : "No parking available";
    }

    bookTicket(slotNumber: number) {
        if (!this.parkingOptions.includes(slotNumber)) {
            return "Wrong slot number!!"
        }
        for (let i = 0; i < slotArray.length; i++) {
            slotArray[slotNumber] = true
        }

        return `This is your ticket. SlotNo: ${slotNumber}`
    }

}

const audi = new Car({ companyName: "Audi", modelName: "R8" });
console.log(audi.getCarDetails());
console.log(audi.isParkingAvailable());
console.log(audi.bookTicket(2))

class ParkingLot {

}