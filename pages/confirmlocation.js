module.exports = {
  url: function () {
    return this.api.launchUrl + '/confirm-location'
  },
  elements: {
    'main': '#content',
    'header': 'h1',
    'textblock1': '#confirm-location-page div.column-half.confirm-column p:nth-child(1)',
    'textblock2': '#confirm-location-page div.column-half.confirm-column p:nth-child(2)',
    'texticon': '#confirm-location-page div.column-half.confirm-column p img.marker-indicator',
    'textblock3': '#confirm-location-page div.column-half.confirm-column p:nth-child(3)',
    'submitBtn': '.button.button.button-get-started',
    'map': '#confirm-location-page div.map-container',
    'mapzoomin': '#map.map button.ol-zoom-in',
    'mapzoomout': '#map.map button.ol-zoom-out',
    'mapfullscreen': 'div.enter-fullscreen.toggle-fullscreen.ol-full-screen.ol-control.hidden-mobile button.ol-full-screen-false',
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
    }
  }]
}
