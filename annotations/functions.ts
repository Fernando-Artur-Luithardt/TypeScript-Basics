const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

function divide(a: number, b: number) {
    return a / b;
}

const multiply = function(a: number, B: number):number {
    return a * B;
}

const logger = (message: string): void => {
    console.log(message);
}

const trowErrorNever = (message: string): never => {
    throw new Error(message)
}

const trowError = (message: string): string => {
    if(!message){
        throw new Error(message)
    }
    return message;
}

const forecast = {
    data: new Date(),
    weather: 'sunny'
}

const logWeather = ({data, weather}: {data: Date, weather: string}): void => {
    console.log(data);
    console.log(weather);
}

logWeather(forecast);