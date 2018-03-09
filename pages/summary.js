module.exports = {
  url: function () {
    return this.api.launchUrl + '/summary'
  },
  elements: {
    'main': '#summary-page',
    'title': '#proposition-name',
    'header': '#summary-page > h1',
    'moreinfo': 'a[href="http://planningguidance.communities.gov.uk/blog/guidance/flood-risk-and-coastal-change/flood-zone-and-flood-risk-tables/table-1-flood-zones"]',
    'floodriskassessment': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications"]',
    'mapcontainer': '#summary-page #map.map',
    'zoomin': '#summary-page #map.map button.ol-zoom-in',
    'zoomout': '#summary-page #map.map button.ol-zoom-out',
    'enterfullscreen': '#summary-page div.enter-fullscreen.toggle-fullscreen.ol-full-screen.ol-control button.ol-full-screen-false',
    'exitfullscreen': '#summary-page.fullscreen div.exit-fullscreen.toggle-fullscreen.ol-full-screen.ol-control.hidden-mobile button.ol-full-screen-true',
    'scale': '#summary-page #map.map div.ol-scale-line.ol-unselectable',
    'mapinfo': '#summary-page #map.map div.ol-attribution.ol-unselectable.ol-control.ol-collapsed button',
    'maplegend': '#summary-page #legend.controls',
    'maplegendpin': '#summary-page #legend.controls div.legend ul li.image.pin',
    'maplegendpolygon': 'li.polygon',
    'maplegendfz3': '#summary-page #legend.controls div.legend ul li.rectangle.dark-blue',
    'maplegendfz2': '#summary-page #legend.controls div.legend ul li.rectangle.light-blue',
    'maplegendfz1': '#summary-page #legend.controls div.legend ul li.rectangle.black-border',
    'maplegendab': '#summary-page #legend.controls div.legend ul li.image.area-benefiting',
    'maplegendfd': '#summary-page #legend.controls div.legend ul li.line.orange',
    'maplegendmr': '#summary-page #legend.controls div.legend ul li.image.main-river',
    'maplegendfsa': '#summary-page #legend.controls div.legend ul li.image.flood-holding-area',
    'otherlocation': 'a[href="/"]',

    // Zone 1 specific elements
    'zone1titlesubtext': 'html body.js-enabled #summary-page div.nojs-hide.ie-hide p',
    'zone1header': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.zone h2.heading-large',
    'zone1text1': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.zone p',
    'zone1moreinfo': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.zone a',
    'zone1text2': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide',
    'zone1text3': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide ul li:first-child',
    'zone1text4': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide ul li:last-child',
    'zone1text5': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide',
    'zone1text6': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide ul li:first-child',
    'zone1text7': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide ul li:last-child',
    'floodriskassessmentz1': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-in-flood-zone-1-and-critical-drainage-areas"]',
    'learnmorelink': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-in-flood-zone-1-and-critical-drainage-areas"]',
    'zone1text8': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',

    // Zone 2 specific elements
    'zone2titlesubtext': 'div.nojs-hide:nth-child(6) > p:nth-child(1)',
    'zone2header': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.zone h2.heading-large',
    'zone2text1': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.zone p',
    'zone2moreinfo': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.zone a',
    'zone2text2': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide',
    'zone2text3': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide',
    'floodriskassessmentz2': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-standing-advice"]',
    'zone2text4': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',

    // Zone 3 specific elements
    'zone3titlesubtext': 'div.nojs-hide:nth-child(6) > p:nth-child(1)',
    'zone3header': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.zone h2.heading-large',
    'zone3text1': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.zone p',
    'zone3moreinfo': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.zone a',
    'zone3text2': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide',
    'zone3text3': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide',
    'floodriskassessmentz3': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-standing-advice"]',
    'zone3text4': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',

    // Areas benefitting specific elements
    'areasbenefittingtitlesubtext': 'div.nojs-hide:nth-child(6) > p:nth-child(1)',
    'areasbenefittingheader1': '#summary-page div.grid-row.main-container div.column-half.summary-column div.zone3-ben div.zone h2.heading-large',
    'areasbenefittingheader2': '#summary-page div.grid-row.main-container div.column-half.summary-column div.zone3-ben div.zone h3.heading-medium',
    'areasbenefittingtext1': '#summary-page div.grid-row.main-container div.column-half.summary-column div.zone3-ben div.zone p',
    'areasbenefittingmoreinfo': '#summary-page div.grid-row div.column-half.summary-column div.zone3-ben div.zone a',
    'areasbenefittingtext2': '#summary-page div.grid-row div.column-half.summary-column div.zone3-ben div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide',
    'floodriskassessment1': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications"]',
    'areasbenefittingtext3': '#summary-page div.grid-row div.column-half.summary-column div.zone3-ben div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide',
    'areasbenefittingtext4': '#summary-page div.grid-row div.column-half.summary-column div.zone3-ben div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',
    'hazardmap': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications"]',
    'floodstandingriskassessmentab': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-standing-advice"]',
    'areasbenefittingtext5': '#summary-page div.grid-row div.column-half.summary-column div.zone3-ben div.next ol.list.list-number li:nth-child(4) div.panel.panel-border-wide',
    'floodriskassessment2': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications"]'
  },
  commands: [{
    load: function () {
      return this.navigate()
    },
    enterfullscreen: function () {
      var that = this
      this.waitForElementVisible('@enterfullscreen', 10000, function () {
        that.click('@enterfullscreen')
      })
    },
    exitfullscreen: function () {
      var that = this
      this.waitForElementVisible('@exitfullscreen', 10000, function () {
        that.click('@exitfullscreen')
      })
    }
  }
  ]
}
