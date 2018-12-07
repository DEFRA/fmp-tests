module.exports = {
  url: function () {
    return this.api.launchUrl
  },
  elements: {
    'pageTitle': '#title',
    'textBody': '#contents > div:nth-child(2) > div > div > p:nth-child(2)',
    'bottomPageElement': '#contents > div:nth-child(2) > div > div > p:nth-child(39)'
  },
  commands: [{
    load: function () {
      return this.navigate()
    }
  }]
}
