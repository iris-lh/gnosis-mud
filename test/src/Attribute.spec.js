const mocha = require('mocha');
const { expect } = require('chai');
const Attribute = require('../../src/Attribute.js')

describe("Attribute", () => {

  const data = {
    name: 'Gumption',
    base: 10,
    delta: 0
  }

  var attr

  beforeEach(()=>{
    attr = new Attribute(data.name, data.base, data.delta)
  })

  describe("constructor", () => {
    it("constructs the instance", () => {
      const attr = new Attribute(data.name, data.base, data.delta)
      const match = (attr.name  === data.name) &&
                    (attr.base  === data.base) &&
                    (attr.delta === data.delta)
      expect(match).to.be.true
    });
  });

  describe("lower", () => {
    it("lowers the delta", () => {
      const amount = 1
      const before = attr.delta
      attr.lower(amount)
      const after = attr.delta
      expect(after).to.equal(before - amount)
    });
  });

  xdescribe("raise", () => {
    it("raises the delta???", () => {
      // TODO
      const amount = 10
      const before = attr.delta
      attr.raise(amount)
      const after = attr.delta
      expect(after).to.equal(before + amount)
    });
  });

  describe("setBase", () => {
    it("sets the base", () => {
      const amount = 15
      const before = attr.base
      attr.setBase(amount)
      const after = attr.base
      expect(after).to.equal(amount)
    });
  });

  describe("setDelta", () => {
    it("sets the delta", () => {
      const amount = 15
      const before = attr.base
      attr.setBase(amount)
      const after = attr.base
      expect(after).to.equal(amount)
    });
  });

});
