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
