module.exports = {
  url: function () {
    return this.api.launchUrl + '/confirm-location'
  },
  elements: {
    'main': '#confirm-location-page',
    'header': 'h1',
    'textblock1': '#confirm-location-page div.column-half.confirm-column p:nth-child(1)',
    'textblock2': '#confirm-location-page div.column-half.confirm-column p:nth-child(2)',
    'texticon': '#confirm-location-page div.column-half.confirm-column p img.marker-indicator',
    'textblock3': '#confirm-location-page div.column-half.confirm-column p:nth-child(3)',
    'submitBtn': '.button.button.button-get-started',
    'map': '#confirm-location-page div.map-container',
    'mapzoomin': '#map.map button.ol-zoom-in',
    'mapzoomout': '#map.map button.ol-zoom-out',
    'mapenterfullscreen': 'div.enter-fullscreen.toggle-fullscreen.ol-full-screen.ol-control.hidden-mobile button.ol-full-screen-false',
    'mapexitfullscreen': 'div.exit-fullscreen.toggle-fullscreen.ol-full-screen.ol-control.hidden-mobile button.ol-full-screen-true',
    'mapscale': '#map.map div.ol-scale-line.ol-unselectable',
    'mapinfo': '#map.map div.ol-attribution.ol-unselectable.ol-control.ol-collapsed'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    submit: function () {
      return this.waitForElementVisible('@submitBtn', 2000)
      .click('@submitBtn')
    },
    enterFullscreen: function () {
      var that = this
      this.waitForElementVisible('@mapenterfullscreen', 10000, function () {
        that.click('@mapenterfullscreen')
      })
    },
    exitFullscreen: function () {
      var that = this
      this.waitForElementVisible('@mapexitfullscreen', 10000, function () {
        that.click('@mapexitfullscreen')
      })
    }
  }]
}
