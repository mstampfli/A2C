

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

