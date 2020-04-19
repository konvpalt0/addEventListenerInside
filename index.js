class Car {
    constructor() {
        this.speed = 0;
        this.onstop = weWantToKnowWhenCarStop;
    }

    start() {
        this.speed = 100;

        setTimeout(this._stop.bind(this), 5000);
    }

    _stop() {
        this.speed = 0;
        if (this.onstop!=null) {
            this.onstop().bind(this);
        }
    }
}

weWantToKnowWhenCarStop = () => {
    alert("stopped");
};

let mers = new Car();
console.log(`before start: ${mers.speed}`);
mers.start();
console.log(`after start: ${mers.speed}`);