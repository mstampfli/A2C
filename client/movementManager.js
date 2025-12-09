const emitter = require('./eventEmitter');

class MovementManager {
    constructor() {
        this.init();
    }
    init() {
        emitter.on('MovementEvent', this.handleMovement);
    }

    handleMovement(movementEvent) {
        //simulate movement (predictive)
        //and correction from server
    }
} 