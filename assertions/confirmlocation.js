// var https = require('https')

module.exports = {
  confirm: function (confirmlocationPage) {
    confirmlocationPage
      .waitForElementVisible('@mapzoomin', 2000)
      .assert.visible('@header')
  },
  assertcopy: function (confirmlocationPage) {
    confirmlocationPage
    .assert.containsText('@header', 'Likelihood of flooding in this area')
    .assert.containsText('@textblock', 'You can move the marker on the map to identify a specific location.')
    .assert.containsText('@textblock', 'Alternatively draw a shape to identify an approximate site boundary.')
    .assert.visible('@howtodraw')
    .assert.containsText('@howtodraw', 'How to draw a shape')
    .assert.visible('@printpdfbtn')
    .assert.visible('@map')
    .assert.visible('@mapmovemarker')
    .assert.visible('@mapdraw')
    .assert.visible('@mapdelete')
    .assert.visible('@maplegendpin')
    .assert.visible('@maplegendfz3')
    .assert.visible('@maplegendab')
    .assert.visible('@maplegendfz2')
    .assert.visible('@maplegendfz1')
    .assert.visible('@maplegendfd')
    .assert.visible('@maplegendmr')
    .assert.visible('@maplegendfsa')
    .assert.attributeEquals('@floodzonetoggle', 'checked', 'true')
    .assert.visible('@floodzonetoggletext')
    .assert.containsText('@floodzonetoggletext', 'Show flood zones')
    .assert.visible('@viewsummary')
    .assert.containsText('@viewsummary', 'View flood zone summary map and more guidance')
    .assert.visible('@riskassessmentinfo')
    .assert.containsText('@riskassessmentinfo', 'You can use this information as part of a flood risk assessment for a planning application')
    .assert.visible('@riskassessmentlink')
  },
  url: function (browser, en) {
    browser.assert.urlContains(en)
  },
  assertFullscreen: function (confirmlocationPage, val) {
    if (val) {
      confirmlocationPage.assert.cssClassPresent('@main', 'fullscreen')
    } else {
      confirmlocationPage.assert.cssClassNotPresent('@main', 'fullscreen')
    }
  },
  instructions: function (confirmlocationPage) {
    confirmlocationPage
      .waitForElementVisible('@howtodrawtextmain', 2000)
      .assert.visible('@howtodrawtext1')
      .assert.containsText('@howtodrawtext1', 'Select \'Draw shape\'')
      .assert.visible('@howtodrawtext2')
      .assert.containsText('@howtodrawtext2', 'Select any point on the site boundary')
      .assert.visible('@howtodrawtext3')
      .assert.containsText('@howtodrawtext3', 'Select a second point on the boundary. You should see a line drawn between the first two points')
      .assert.visible('@howtodrawtext4')
      .assert.containsText('@howtodrawtext4', 'Keep adding points until the boundary is defined')
      .assert.visible('@howtodrawtext5')
      .assert.containsText('@howtodrawtext5', 'Double click or tap when you return to your first point')
      .assert.visible('@howtodrawtext6')
      .assert.containsText('@howtodrawtext6', 'Edit the finished shape by dragging the points')
      .assert.visible('@howtodrawtext7')
      .assert.containsText('@howtodrawtext7', 'Add more points to a shape by clicking or tapping on a line')
  },
  pdfpopup: function (confirmlocationPage, browser) {
    confirmlocationPage
    .assert.hidden('@downloadnotification')
    .waitForElementVisible('@downloadheader', 2000)
    .assert.containsText('@downloadheader', 'Download report')
    .assert.visible('@downloadref')
    .assert.visible('@downloadscale')
    .assert.visible('@downloadpdf')
    .click('@downloadpdf')
    // .waitForElementVisible('@downloadnotificationtext', 3000)
    // .assert.containsText('@downloadnotificationtext', 'Downloading report')
    // .waitForElementVisible('@map', 3000)
    // .assert.hidden('@downloadnotification')
  }
  // CheckResponseCode: function (client) {
  //   var http = require('https')

  //   var options = {
  //     'method': 'POST',
  //     'hostname': 'fmp-dev.envage.co.uk',
  //     'port': 443,
  //     'path': '/pdf?id=1521545511459&zone=&polygon=&center=%5B362105%2C387218%5D&reference=PDFPrint1&scale=2500',
  //     'headers': {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       'referer': 'https://fmp-qa.envage.co.uk/confirm-location?easting=362105&northing=387218',
  //       'accept-language': 'en-US,en;q=0.5',
  //       'upgrade-insecure-requests': '1',
  //       'accept-encoding': 'gzip, deflate, br',
  //       'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  //       'user-agent': 'Mozilla/5.0 (Windows NT 6.2; Win64; x64; rv:58.0) Gecko/20100101 Firefox/58.0'
  //     }
  //   }
  //   var req = http.request(options, function (response) {
  //     client
  //     .assert.equal(response.statusCode, 200, 'Check Status');
  //     client.end()
  // })
  // }
}
