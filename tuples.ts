const drink = {
    color: 'brown',
    carbonate: true,
    sugar: 40
};
// Type alias
type Drink = [string, boolean, number]

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];

const carSpecs: [number, number] = [400, 3354]

const carStats = {
    horsepower: 400,
    weight: 3354
}