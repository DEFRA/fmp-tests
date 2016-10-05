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
    'nilink': 'a[href="http://www.planningni.gov.uk/index/advice/northern_ireland_environment_agency_guidance.htm"]',
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
