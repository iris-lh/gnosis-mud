const mocha = require('mocha');
const { expect } = require('chai');
const Account = require('../../src/Account.js')
const Config = require('../../config.json')

describe("Account", () => {
  var data = {
    username:   'Foo',
    characters: ['Bilbo'],
    password:   '12345678',
    banned:     false
  }
  var account

  beforeEach(()=>{
    account = new Account(data)
    account.setPassword(data.password)
  })



  describe("getUsername", () => {
    it("gets the username", () => {
      expect(account.getUsername()).to.equal(data.username);
    })
  });

  describe("addCharacter", () => {
    it("adds a character", () => {
      const before = account.characters.length
      account.addCharacter('Frodo')
      const after = account.characters.length

      expect(after).to.equal(before + 1);
    })
  });

  describe("hasCharacter", () => {
    it("checks if account has given character", () => {
      expect(account.hasCharacter('Bilbo')).to.be.true;
    })
  });

  describe("_hashPassword", () => {
    it("hashes the password", () => {
      expect(account._hashPassword(data.password)).not.to.equal(data.password);
    })
  });

  describe("setPassword", () => {
    it("sets the account password", () => {
      const before = account.password
      account.setPassword('87654321')
      const after = account.password

      expect(before).not.to.equal(after);
    })
  });

  describe("checkPassword", () => {
    const rightPass = data.password
    const wrongPass = 'asdfasdf'
    it("returns true for match", () => {
      expect(account.checkPassword(rightPass)).to.be.true
    })
    it("returns false for no match", () => {
      expect(account.checkPassword(wrongPass)).to.be.false
    })
  });

  describe("ban", () => {
    it("sets banned to true", () => {
      account.ban()
      expect(account.banned).to.be.true
    })
  });

  describe("validateName", () => {
    function createNameOfLength(length) {
      var name = ''
      for(var i=0; i<length; i++) {
        name += 'a'
      }
      return name
    }

    const tooLong = createNameOfLength(Config.maxAccountNameLength + 1)
    const tooShort = createNameOfLength(Config.minAccountNameLength - 1)
    const invalidChars = 'Foo %'
    const valid = 'Billy'

    it("no name entered", () => {
      expect(Account.validateName(undefined))
      .to.equal('Please enter a name.')
    })
    it("name too long", () => {
      expect(Account.validateName(tooLong))
      .to.equal('Too long, try a shorter name.')
    })
    it("name too short", () => {
      expect(Account.validateName(tooShort))
      .to.equal('Too short, try a longer name.')
    })
    it("name has invalid characters", () => {
      expect(Account.validateName(invalidChars))
      .to.equal('Your name may only contain A-Z without spaces or special characters.')
    })
    it("name is valid", () => {
      expect(Account.validateName(valid))
      .to.be.false
    })
  });

});
