import { MuteHandler } from './mute-handler'

describe('MuteHandler', () => {
  let handler = new MuteHandler(123)
  let updateSpy

  beforeEach(() => {
    updateSpy = jest.fn()

    window.chrome = {
      tabs: {
        update: updateSpy
      }
    }
  })

  afterAll(() => {
    window.chrome = undefined
  })

  it('mutes tab with tabId and options', () => {
    handler.mute()

    expect(updateSpy.mock.calls[0][0]).toEqual(123)
    expect(updateSpy.mock.calls[0][1]).toMatchObject({
      muted: true
    })
  })

  it('unmutes tab with tabId and options', () => {
    handler.unmute()

    expect(updateSpy.mock.calls[0][0]).toEqual(123)
    expect(updateSpy.mock.calls[0][1]).toMatchObject({
      muted: false
    })
  })
})
