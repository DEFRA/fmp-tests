module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'main': '#content',
    'header': 'h2'
  },
  commands: [{
    load: function () {
      return this.navigate()
    }
  }]
}
