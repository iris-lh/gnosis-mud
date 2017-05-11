const mocha = require('mocha');
const { expect } = require('chai');
const _ = require('lodash')
const Account = require ('../../src/Account.js')
const AccountManager = require ('../../src/AccountManager.js')

describe("AccountManager", () => {
  const account = new Account({
    username: 'Foo',
    characters: ['Bilbo'],
    password: ''
  })

  var am

  beforeEach(()=>{
    am = new AccountManager
  })

  describe("constructor", () => {
    it("constructs the instance", () => {
      expect(typeof new AccountManager).to.equal(typeof new Map())
    });
  });

  describe("addAccount", () => {
    it("adds an account", () => {
      am.addAccount(account)
      expect(am.accounts.get(account.username).username)
      .to.equal(account.username)
      // TODO: needs more rubust match checking
    });
  });

  describe("getAccount", () => {
    it("gets an account", () => {
      am.addAccount(account)
      expect(am.getAccount(account.username).username)
      .to.equal(account.username)
      // TODO: needs more rubust match checking
    });
  });

  describe("loadAccount", () => {
    it("loads an account", () => {
      // TODO loadAccount
    });
  });

  describe("findByName", () => {
    it("check if account exists by name", () => {
      am.addAccount(account)

      expect(typeof am.findByName(account.username))
      .to.equal(typeof new Map())
      // TODO: needs more rubust match checking
    });
  });

});
