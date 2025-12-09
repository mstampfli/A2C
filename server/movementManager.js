const emitter = require('./eventEmitter');

class MovementManager {
    constructor() {
        this.init();
    }
    init() {
        emitter.on('MovementEvent', this.handleMovement);
    }

    handleMovement(movementEvent) {
        console.log(`move from: ${movementAction.route[0]}, to: ${movementEvent.route[movementEvent.route.length - 1]}`)
    }
} 
