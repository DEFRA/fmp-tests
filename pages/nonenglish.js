module.exports = {
  url: function () {
    return this.api.launchUrl + '/confirm-location'
  },
  elements: {
    'main': '#content',
    'header': 'h1',
    'nitext': '#not-england-page.text p:nth-of-type(1)',
    'sepatext': '#not-england-page.text p:nth-of-type(2)',
    'nrwtext': '#not-england-page.text p:nth-of-type(3)',
    'engtext': '#not-england-page.text p:nth-of-type(4)',
    'nilink': 'a[href="https://www.nidirect.gov.uk/articles/check-the-risk-of-flooding-in-your-area"]',
    'sepalink': 'a[href="http://www.sepa.org.uk/environment/water/flooding"]',
    'nrwlink': 'a[href="https://naturalresources.wales"]',
    'englink': 'a[href="/"]'
  },
  commands: [{
    load: function () {
      return this.navigate()
    }
  }]
}
