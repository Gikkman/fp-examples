class Car {
    engine;
    
    constructor(engine) {
        this.engine = engine;
    }

    on() {
        this.engine.on();
    }
}

class Engine {
    on() {
        console.log("Wrooom!")
    }
}

const car = new Car( new Engine() );
car.on();