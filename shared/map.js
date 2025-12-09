
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

module.exports = { 
    OwnableBuildingType,
    RobbableBuildingType,
    DecorationType,
    AccessibilityLevel, 
    Building, 
    Decoration, 
    StreetNode, 
    StreetEdge
};