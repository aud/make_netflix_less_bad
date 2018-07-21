export const wildcardFilter = {
  url: [{
    hostContains: '.netflix.com'
  }]
}

export const browsePathFilter = {
  url: [{
    hostSuffix: 'netflix.com',
    pathPrefix: '/browse'
  }]
}

export const watchPathFilter = {
  url: [{
    urlMatches: '.*netflix.com/watch/.*',
  }]
}
