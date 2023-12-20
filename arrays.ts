const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [
    ['f150'],
    ['corolla'],
    ['camaro']
]

// Help with inference when extracting values
const car = carMakers[0]
const mycars = carMakers.pop()

// Prvent incompatible values
carMakers.push(2);

// Help with map
carMakers.map((car: string): string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push('2030-10-10')
importantDates.push(new Date())

