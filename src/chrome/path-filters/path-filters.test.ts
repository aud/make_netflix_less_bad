import {
  wildcardFilter,
  browsePathFilter,
  watchPathFilter
} from './path-filters'

describe('path-filters', () => {
  test('wildcardFilter returns correct options', () => {
    expect(wildcardFilter).toEqual({
      url: [
        {
          hostContains: '.netflix.com'
        }
      ]
    })
  })

  test('browsePathFilter returns correct options', () => {
    expect(browsePathFilter).toEqual({
      url: [
        {
          hostSuffix: 'netflix.com',
          pathPrefix: '/browse'
        }
      ]
    })
  })

  test('watchPathFilter returns correct options', () => {
    expect(watchPathFilter).toEqual({
      url: [
        {
          urlMatches: '.*netflix.com/watch/.*'
        }
      ]
    })
  })
})
