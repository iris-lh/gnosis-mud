const mocha         = require('mocha');
const { expect }    = require('chai');
const Area          = require('../../src/Area.js')
const Npc           = require('../../src/Npc.js')
const Room          = require('../../src/Room.js')
const BundleManager = require('../../src/BundleManager.js')

xdescribe("Area", () => {

  beforeEach(()=>{

  })

  describe("constructor", () => {
    it("constructs the instance", () => {
      // TODO: constructor
    });
  });

  describe("areaPath", () => {
    it("gets path where areas are stored", () => {
      // TODO: areaPath
    });
  });

  describe("getRoomById", () => {
    it("gets room by id", () => {
      // TODO: getRoomById
    });
  });

  describe("addRoom", () => {
    it("adds a room", () => {
      // TODO: addRoom
    });
  });

  describe("removeRoom", () => {
    it("removes a room", () => {
      // TODO: removeRoom
    });
  });

  describe("addNpc", () => {
    it("adds an Npc", () => {
      // TODO: addNpc
    });
  });

  describe("removeNpc", () => {
    it("removes an Npc", () => {
      // TODO: removeNpc
    });
  });

  describe("update", () => {
    it("updates the area", () => {
      // TODO update
    });
  });

});
