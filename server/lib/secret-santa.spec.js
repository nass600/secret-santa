import SecretSanta from './secret-santa'

describe('Secret Santa: getMatches', () => {
  it('should exist', function () {
    expect(SecretSanta.getMatches).toBeDefined()
  })

  it('should retrieve as many matches as input items', () => {
    let data = require('../data/users.json')
    let matches = SecretSanta.getMatches(data.users)
    expect(matches.length).toBe(9)
  })

  for(var i = 0; i < 30; ++i) {
    it('should never retrieve same value for sender and receiver', () => {
      let data = require('../data/users.json')
      let matches = SecretSanta.getMatches(data.users)

      for (let i = 0; i < matches.length; i++) {
        expect(matches[i].sender.guid).not.toBe(matches[i].receiver.guid)
      }
    })
  }
})
