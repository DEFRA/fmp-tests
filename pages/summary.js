module.exports = {
  url: function () {
    return this.api.launchUrl + '/summary'
  },
  elements: {
    'main': '#content',
    'header': '#summary-page > h1',
    'moreinfo': 'a[href="http://planningguidance.communities.gov.uk/blog/guidance/flood-risk-and-coastal-change/flood-zone-and-flood-risk-tables/table-1-flood-zones"]',
    'floodriskassessment': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications"]',
    'mapcontainer': '#summary-page div.grid-row div.column-half.map-column div.map-container div#map.map',
    'summaryzoomin': '#summary-page div.grid-row div.column-half.map-column div.map-container div#map.map div.ol-viewport div.ol-overlaycontainer-stopevent div.ol-zoom.ol-unselectable.ol-control button.ol-zoom-in',
    'summaryzoomout': '#summary-page div.grid-row div.column-half.map-column div.map-container div#map.map div.ol-viewport div.ol-overlaycontainer-stopevent div.ol-zoom.ol-unselectable.ol-control button.ol-zoom-out',
    'summaryfullscreen': '#summary-page div.grid-row div.column-half.map-column div.map-container div.enter-fullscreen.toggle-fullscreen.ol-full-screen.ol-control button.ol-full-screen-false',
    'summaryscale': '#summary-page div.grid-row div.column-half.map-column div.map-container div#map.map div.ol-viewport div.ol-overlaycontainer-stopevent div.ol-scale-line.ol-unselectable',
    'summarymapinfo': '#summary-page div.grid-row div.column-half.map-column div.map-container div#map.map div.ol-viewport div.ol-overlaycontainer-stopevent div.ol-attribution.ol-unselectable.ol-control.ol-collapsed button',
    'otherlocation': 'a[href="/"]',

    // Zone 1 specific elements
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
    'zone1text8': '#summary-page div.grid-row div.column-half.summary-column div.zone1 div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',

    // Zone 2 specific elements
    'zone2header': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.zone h2.heading-large',
    'zone2text1': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.zone p',
    'zone2moreinfo': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.zone a',
    'zone2text2': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide',
    'zone2text3': '#content.wrapper main#summary-page div.grid-row div.column-half.summary-column div.zone2 div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide',
    'floodriskassessmentz2': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-standing-advice"]',
    'zone2text4': '#summary-page div.grid-row div.column-half.summary-column div.zone2 div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',

    // Zone 3 specific elements
    'zone3header': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.zone h2.heading-large',
    'zone3text1': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.zone p',
    'zone3moreinfo': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.zone a',
    'zone3text2': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide',
    'zone3text3': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide',
    'floodriskassessmentz3': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-standing-advice"]',
    'zone3text4': '#summary-page div.grid-row div.column-half.summary-column div.zone3 div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',

    // Areas benefitting specific elements
    'areasbenefittingheader1': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.zone h2.heading-large',
    'areasbenefittingheader2': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.zone h3.heading-medium',
    'areasbenefittingtext1': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.zone p',
    'areasbenefittingmoreinfo': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.zone a',
    'areasbenefittingtext2': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.next ol.list.list-number li:nth-child(1) div.panel.panel-border-wide',
    'floodriskassessment1': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#get-information-to-complete-an-assessment"]',
    'areasbenefittingtext3': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.next ol.list.list-number li:nth-child(2) div.panel.panel-border-wide',
    'areasbenefittingtext4': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.next ol.list.list-number li:nth-child(3) div.panel.panel-border-wide',
    'hazardmap': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications#get-information-to-complete-an-assessment"]',
    'floodstandingriskassessmentab': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-standing-advice"]',
    'areasbenefittingtext5': '#summary-page div.grid-row div.column-half.summary-column div.zone3Ben div.next ol.list.list-number li:nth-child(4) div.panel.panel-border-wide',
    'floodriskassessment2': 'a[href="https://www.gov.uk/guidance/flood-risk-assessment-for-planning-applications"]'
  },
  commands: [{
    load: function () {
      return this.navigate()
    }
  }]
}
