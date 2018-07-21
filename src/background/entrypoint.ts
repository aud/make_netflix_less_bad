import MuteHandler from '../chrome/mute-handler'
import {
  wildcardFilter,
  browsePathFilter,
  watchPathFilter
} from '../chrome/path-filters'

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
