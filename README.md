# A2C

An early-stage prototype for a multiplayer, crime-themed strategy game, written in plain
Node.js. The premise: players command crews that move through a city street network, equip
weapons and vehicles, and carry out tactical actions — heists, raids, fights, drive-bys,
stalking — against buildings and rival crews.

This is an architecture experiment, not a playable game. The current focus is the data
model and the client/server split, not gameplay.

## Design

The city map is a grid of tiles combined with a street graph:

- **Buildings** are ownable (storage, gambling, strip club, pizzeria, car wash) or
  robbable (bank); other tiles are decorations (park, residential, infrastructure, water).
- **Streets** are nodes connected by weighted edges, each with an accessibility level
  (car, pedestrian, or both), intended for routing crews through the city.
- **Actions** come in three kinds: movement (a route over street nodes), tactical
  (local actions like heists and raids, or dynamic ones like intercepts and drive-bys,
  with optional follow-up actions), and equip (weapons, contraband, vehicle).

## Architecture

The code is split so that the server runs the authoritative simulation while the client
runs a predictive copy and accepts corrections (per the in-code comments):

- `shared/` — data types used on both sides: map structures (`map.js`), action types
  (`actions.js`), and a placeholder for crews (`crew.js`).
- `server/` — `mapManager` builds a small hard-coded map and street graph,
  `movementManager` reacts to movement events, `networkManager` is meant to translate
  incoming network messages into events. Managers communicate through a shared Node
  `EventEmitter`.
- `client/` — mirrors of the server managers, currently comment stubs outlining
  client-side prediction and server correction.

## Status

What exists so far (three commits):

- Shared type definitions for the map and all three action kinds.
- A server map manager that constructs a 2x2 tile map and a three-node street graph.
- Event wiring between the network and movement managers.

Not yet implemented: actual networking, map generation beyond the hard-coded sample,
crew types, client prediction, and any entry point — there is no `package.json` and
nothing to run. The modules are plain CommonJS and can be loaded from a Node REPL
(e.g. `require('./shared/actions')`) to experiment with the types.
