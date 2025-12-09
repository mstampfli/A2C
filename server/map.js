const emitter = require('./eventEmitter');

const OwnableBuildingType = Object.freeze({
  STORAGE: 0,
  GAMBLING: 1,
  STRIPCLUB: 2,
  PIZZERIA: 3,
  CARWASH: 4,
});

const RobbableBuildingType = Object.freeze({
  BANK: 0,
});

const DecorationType = Object.freeze({
  PARK: 0,
  RESIDENTIAL: 1,
  INFRASTRUCTURE: 2,
  WATER: 3,
});

const AccessibilityLevel = Object.freeze({
  CAR: 0,
  PEDESTRIAN: 1,
  ALL: 2,
});

class Building {
    constructor(r, o, b) {
        this.isRobbable = r;
        this.isOwnable = o;
        this.buildingType = b;
    }
    isRobbable; //bool
    isOwnable; //bool
    buildingType; //Robbable/Ownable Building Type
}

class Decoration {
    constructor(t) {
        this.type = t;
    }
    type; //DecorationType
}

class StreetNode {
    connections = []; //array of StreetEdges
}

class StreetEdge {
    constructor(a,b,w,acc) {
        this.a = a;
        this.b = b;
        this.weight = w;
        this.accessibility = acc;
    }
    id;
    a; //StreetNode
    b; //StreetNode
    weight; //float
    accessibility; //AccessibilityLevel
}

class MapManager {
    constructor() {
        this.initMap();
    }
    
    tiles = []; //2D Array
    streetNodes = []; //2D Array

    initMap() {
        this.tiles.push(
            [new Decoration(DecorationType.PARK), new Building(false, true, OwnableBuildingType.STORAGE)],
            [new Building(true, false, RobbableBuildingType.BANK), new Decoration(DecorationType.RESIDENTIAL)]
        ); 

        n1 = new StreetNode();
        n2 = new StreetNode();
        n3 = new StreetNode();

        this.streetNodes[0] = [];
        this.streetNodes[0][0] = n1;
        this.streetNodes[0][1] = n2;
        this.streetNodes[1] = [];
        this.streetNodes[1][1] = n3;

        sE1 = new StreetEdge(n1, n2, 0.2, AccessibilityLevel.ALL);
        sE2 = new StreetEdge(n2, n3, 0.4, AccessibilityLevel.PEDESTRIAN);
        n1.connections.push(sE1);
        n2.connections.push(sE1);
        n2.connections.push(sE2);
        n3.connections.push(sE2);
    }
}


class NetworkManager {
    constructor() { 

    };

    handleNetwork() {
        let networkMoveEvent = true;
        if (networkMoveEvent) {
            let movementEvent = new MovementEvent([1,2],[5,2])
            emitter.emit('MovementEvent', movementEvent)
        }
    }
}

class MovementManager {
    constructor() {
        this.init();
    }

    init() {
        emitter.on('MovementEvent', this.handleMovement);

    }

    handleMovement(movementEvent) {
        console.log(`move from: ${movementEvent.from}, to: ${movementEvent.to}`)
    }
} 

nm = new NetworkManager();
mm = new MovementManager();

nm.handleNetwork();