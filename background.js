class MuteHandler {
  constructor(tabId) {
    this.tabId = tabId
  }

  mute() {
    this._updateWithOptions({ muted: true })
  }

  unmute() {
    this._updateWithOptions({ muted: false })
  }

  _updateWithOptions(options) {
    chrome.tabs.update(this.tabId, options)
  }
}

const wildcardFilter = {
  url: [{
    hostContains: '.netflix.com'
  }]
}

const browsePathFilter = {
  url: [{
    hostSuffix: 'netflix.com',
    pathPrefix: '/browse'
  }]
}

const watchPathFilter = {
  url: [{
    urlMatches: '.*netflix.com/watch/.*',
  }]
}

// Since `onHistoryStateUpdated` events are not triggered on the initial
// pageload, we mute immediately.
chrome.webNavigation.onCompleted.addListener(evt => {
  new MuteHandler(evt.tabId).mute()
}, wildcardFilter)

// Mute when path matches `/browse`.
chrome.webNavigation.onHistoryStateUpdated.addListener(evt => {
  new MuteHandler(evt.tabId).mute()
}, browsePathFilter)

// Unmute when path matches `/watch`.
chrome.webNavigation.onHistoryStateUpdated.addListener(evt => {
  new MuteHandler(evt.tabId).unmute()
}, watchPathFilter)
