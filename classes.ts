class Vehicle {
    constructor(public color: string) {}

    protected honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
    constructor(color: string, public wheels: number){
        super(color);
    }
    private drive(): void {
        console.log('vrumm');
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk()
    }
}

const car = new Car('red', 18);

