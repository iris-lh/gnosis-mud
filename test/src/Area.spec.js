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
      // TODO
    });
  });

  describe("areaPath", () => {
    it("gets path where areas are stored", () => {
      // TODO
    });
  });

  describe("getRoomById", () => {
    it("gets room by id", () => {
      // TODO
    });
  });

  describe("addRoom", () => {
    it("adds a room", () => {
      // TODO
    });
  });

  describe("removeRoom", () => {
    it("removes a room", () => {
      // TODO
    });
  });

  describe("addNpc", () => {
    it("adds an Npc", () => {
      // TODO
    });
  });

  describe("removeNpc", () => {
    it("removes an Npc", () => {
      // TODO
    });
  });

  describe("update", () => {
    it("updates the area", () => {
      // TODO
    });
  });

});
