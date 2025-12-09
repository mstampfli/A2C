const ActionKind = Object.freeze({
  MOVEMENT: 0,
  EQUIP: 1,
  TACTICAL: 2,
});

const LocalActionType = Object.freeze({
  HEIST: 0,
  RAID: 1,
  FIGHT: 2,
  STATIONARY_STALKING: 3
});

const DynamicActionType = Object.freeze({
  INTERCEPT: 0,
  DRIVEBY: 1,
  FOLLOW_STALKING: 2
});

const TacticalActionCategory = Object.freeze({
  LOCAL: 0,
  DYNAMIC: 1,
});

class MovementAction {
    constructor(id, r, c) {
        this.kind = ActionKind.MOVEMENT;
        this.id = id;
        this.route = r;
        this.crewId = c;
    }
    kind; //ActionKind -> for distinguishing object types
    id; 
    crewId; 
    route; //array of streetnode ids
}

class TacticalAction {
    constructor(id, c, ca, ty, ta, d, f) {
        this.kind = ActionKind.TACTICAL;
        this.id = id;
        this.crewId = c;
        this.category = ca;
        this.type = ty;
        this.target = ta;
        this.duration = d;
        this.followUpAction = f;
    }
    kind; //ActionKind -> for distinguishing object types
    id; 
    crewId;
    category; //TacticalActionCategory
    type; //LocalActionType or DynamicActionType
    target; //business/building/crew id
    duration; //optional -> for stalking
    followUpAction; //optional -> follow up movement action after heist/raid/driveby etc.
}

class EquipAction {
    constructor(id, c, w, co, v) {
        this.kind = ActionKind.EQUIP;
        this.id = id;
        this.crewId = c;
        this.weapons = w;
        this.contraband = co;
        this.vehicle = v;
    }
    kind; //ActionKind -> for distinguishing object types
    id; 
    crewId; 
    weapons; //optional  -> at least one needs to have a value
    contraband; //optional  -> at least one needs to have a value
    vehicle; //optional -> at least one needs to have a value
}

module.exports = {
  ActionKind,
  LocalActionType,
  DynamicActionType,
  TacticalActionCategory,
  MovementAction,
  TacticalAction,
  EquipAction,
};