module.exports = {
  url: function () {
    return this.api.launchUrl + '/confirm-location'
  },
  elements: {
    'main': '#confirm-location-page',
    'header': '.heading-xlarge',
    'textblock': '.info',
    'howtodraw': 'div.nojs-hide:nth-child(6) > details:nth-child(2) > summary:nth-child(1) > span:nth-child(1)',
    'howtodrawtextmain': '.list',
    'howtodrawtext1': '.list > li:nth-child(1)',
    'howtodrawtext2': '.list > li:nth-child(2)',
    'howtodrawtext3': '.list > li:nth-child(3)',
    'howtodrawtext4': '.list > li:nth-child(4)',
    'howtodrawtext5': '.list > li:nth-child(5)',
    'howtodrawtext6': '.list > li:nth-child(6)',
    'howtodrawtext7': '.list > li:nth-child(7)',
    'printpdfbtn': 'a.button',
    'map': '#map',
    'mapmovemarker': '.radio-button-group > label:nth-child(2)',
    'mapdraw': '.radio-button-group > label:nth-child(4)',
    'mapdelete': '.radio-button-group > label:nth-child(6)',
    'mapenterfullscreen': '.ol-full-screen-false',
    'mapexitfullscreen': '.ol-full-screen-true',
    'mapzoomin': '.ol-zoom-in',
    'mapzoomout': '.ol-zoom-out',
    'mapscale': '.ol-scale-line-inner',
    'mapcopyright': '.ol-attribution > button:nth-child(2)',
    'maplegendpin': 'li.image:nth-child(1)',
    'maplegendpolygon': 'li.polygon',
    'maplegendfz3': 'li.rectangle:nth-child(3)',
    'maplegendab': 'li.image:nth-child(4)',
    'maplegendfz2': 'li.rectangle:nth-child(5)',
    'maplegendfz1': 'li.rectangle:nth-child(6)',
    'maplegendfd': 'li.line:nth-child(7)',
    'maplegendmr': 'li.image:nth-child(8)',
    'maplegendfsa': 'li.image:nth-child(9)',
    'floodzonetoggle': '#layer-toggle2',
    'floodzonetoggletext': 'div.form-section:nth-child(7) > div:nth-child(1) > label:nth-child(2)',
    'viewsummary': '.continue',
    'riskassessmentinfo': 'div.nojs-hide:nth-child(9) > p:nth-child(2)',
    'riskassessmentlink': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#when-you-need-an-assessment"',
    'downloadheader': '#report > div:nth-child(1) > div:nth-child(1) > h1:nth-child(1)',
    'downloadref': '#reference',
    'downloadscale': '#scale',
    'downloadpdf': 'button.button',
    'downloadnotification': '#report-downloading',
    'downloadnotificationtext': '#report-downloading > div:nth-child(1) > div:nth-child(1)'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    submit: function () {
      return this.waitForElementVisible('@viewsummary', 2000)
      .click('@viewsummary')
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
    },
    printpdf: function () {
      return this.waitForElementVisible('@printpdfbtn', 2000)
      .click('@printpdfbtn')
    },
    togglelayers: function () {
      return this.waitForElementVisible('@floodzonetoggle')
      .click('@floodzonetoggle')
    },
    toggledraw: function () {
      return this.waitForElementVisible('@mapdraw', 2000)
      .click('@mapdraw')
    }
  }]
}
