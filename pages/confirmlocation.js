module.exports = {
  url: function () {
    return this.api.launchUrl + '/confirm-location'
  },
  elements: {
    'main': '#content',
    'header': 'h1',
    'submitBtn': '.button.button.button-get-started'
    //'map':
    //'zoomin':
    //'zoomout':
    //'mapinfo':
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
