interface TabOptions {
  muted: boolean
}

export class MuteHandler {
  private tabId: number

  constructor(tabId: number) {
    this.tabId = tabId
  }

  mute() {
    this.updateWithOptions({ muted: true })
  }

  unmute() {
    this.updateWithOptions({ muted: false })
  }

  private updateWithOptions(options: TabOptions) {
    chrome.tabs.update(this.tabId, options)
  }
}
