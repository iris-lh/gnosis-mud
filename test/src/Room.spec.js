const mocha           = require('mocha');
const { expect }      = require('chai');
const Room            = require('../../src/Room.js')
const Area            = require('../../src/Area.js')
const Npc             = require('../../src/Npc.js')
const Player          = require('../../src/Player.js')
const Item            = require('../../src/Item.js')
const BehaviorManager = require('../../src/BehaviorManager.js')



xdescribe('Room', () => {

  beforeEach(()=>{

  })

  describe('constructor', () => {
    it('constructs the instance', () => {
      // TODO
    });
  });

  describe('hasBehavior', () => {
    it('returns true if room has given behavior', () => {
      // TODO
    });
  });

  describe('getBehavior', () => {
    it('returns a behavior by name', () => {
      // TODO
    });
  });

  describe('addPlayer', () => {
    it('add a player to the room', () => {
      // TODO
    });
  });

  describe('removePlayer', () => {
    it('remove a player from the room', () => {
      // TODO
    });
  });

  describe('addNpc', () => {
    it('add an NPC to the room', () => {
      // TODO
    });
  });

  describe('removeNpc', () => {
    it('remove an NPC from the room', () => {
      // TODO
    });
  });

  describe('addItem', () => {
    it('add an item to the room', () => {
      // TODO
    });
  });

  describe('removeItem', () => {
    it('remove an item from the room', () => {
      // TODO
    });
  });

  describe('respawnTick', () => {
    it('???', () => {
      // TODO
    });
  });

  describe('spawnItem', () => {
    it('spawns an item in the room', () => {
      // TODO
    });
  });

  describe('spawnNpc', () => {
    it('spawns an npc in the room', () => {
      // TODO
    });
  });

  describe('removeSpawnedNpc', () => {
    it('removes a spawned npc from the room', () => {
      // TODO
    });
  });

  describe('hydrate', () => {
    it('???', () => {
      // TODO
    });
  });

  describe('getBroadcastTargets', () => {
    it('gets broadcast targets', () => {
      // TODO
    });
  });

});
