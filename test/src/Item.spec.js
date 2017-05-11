const mocha      = require('mocha');
const { expect } = require('chai');
const Item       = require('../../src/Item.js')
const Area       = require('../../src/Area.js')

xdescribe("Item", () => {

  beforeEach(()=>{

  })

  describe("constructor", () => {
    it("constructs the instance", () => {
      // TODO
    });
  });

  describe("hasKeyword", () => {
    it("returns true if item has given keyword", () => {
      // TODO
    });
  });

  describe("hasBehavior", () => {
    it("returns true if item has given behavior", () => {
      // TODO
    });
  });

  describe("getBehavior", () => {
    it("gets a behavior by name", () => {
      // TODO
    });
  });

  describe("addItem", () => {
    it("adds an item to this item's invenory", () => {
      // TODO
    });
  });

  describe("removeItem", () => {
    it("removes an item from this item's invenory", () => {
      // TODO
    });
  });

  describe("isInventoryFull", () => {
    it("returns whether inventory is full", () => {
      // TODO
    });
  });

  describe("_setupInventory", () => {
    it("if no inventory, creates new one", () => {
      // TODO
    });
  });

  describe("qualityColorize", () => {
    it("colorizes display based on item's quality", () => {
      // TODO
    });
  });

  describe("findOwner", () => {
    it("finds the owner of the item", () => {
      // TODO
    });
  });

  describe("hydrate", () => {
    it("???", () => {
      // TODO
    });
  });

});
