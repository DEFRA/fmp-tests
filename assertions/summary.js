module.exports = {
  confirm: function (summaryPage, data) {
    // **Assert generic page elements are visible
    summaryPage.assert.containsText('@title', 'Flood map for planning')
    summaryPage.assert.containsText('@header', 'Likelihood of flooding in this area')
    summaryPage.assert.visible('@moreinfo')
    summaryPage.assert.visible('@otherlocation')
    summaryPage.assert.visible('@floodriskassessment')

    // ** Assert map elements are visible
    summaryPage.waitForElementVisible('@zoomin', 2000)
    summaryPage.assert.visible('@mapcontainer')
    summaryPage.assert.visible('@zoomin')
    summaryPage.assert.visible('@zoomout')
    summaryPage.assert.visible('@enterfullscreen')
    summaryPage.assert.visible('@maplegend')
    summaryPage.assert.visible('@maplegendfz3')
    summaryPage.assert.visible('@maplegendfz2')
    summaryPage.assert.visible('@maplegendfz1')
    summaryPage.assert.visible('@maplegendab')
    summaryPage.assert.visible('@maplegendfd')
    summaryPage.assert.visible('@maplegendmr')
    summaryPage.assert.visible('@maplegendfsa')

    if (data.type === 'pin') {
      summaryPage.assert.visible('@maplegendpin')
    } else {
      summaryPage.assert.visible('@maplegendpolygon')
    }

    if (data.floodzone === 'flood zone 1') {
      summaryPage.assert.containsText('@zone1titlesubtext', 'This location is in an area with a low probability of flooding')
      summaryPage.assert.containsText('@zone1header', 'FLOOD ZONE 1')
      summaryPage.assert.containsText('@zone1text1', 'Land and property in flood zone 1 have a low probability of flooding')
      summaryPage.assert.containsText('@zone1moreinfo', 'More information about flood zones')
      summaryPage.assert.containsText('@zone1text2', "You don't need to do a flood risk assessment if your development is in flood zone 1 and:")
      summaryPage.assert.containsText('@zone1text3', 'smaller than one hectare')
      summaryPage.assert.containsText('@zone1text4', 'is not affected by sources of flooding other than rivers and the sea, for example surface water drains')
      summaryPage.assert.containsText('@zone1text5', 'If your development is in flood zone 1 and:')
      summaryPage.assert.containsText('@zone1text6', 'larger than one hectare')
      summaryPage.assert.containsText('@zone1text7', 'is affected by sources of flooding other than rivers and the sea, for example surface water drains')
      summaryPage.assert.visible('@floodriskassessmentz1')
      summaryPage.assert.visible('@learnmorelink')
      summaryPage.assert.containsText('@zone1text8', 'You can also read more about flood risk assessments for planning applications')
    } else if (data.floodzone === 'flood zone 2') {
      summaryPage.assert.containsText('@zone2titlesubtext', 'This location is in an area with a medium probability of flooding')
      summaryPage.assert.containsText('@zone2header', 'FLOOD ZONE 2')
      summaryPage.assert.containsText('@zone2text1', 'Land and property in flood zone 2 have a medium probability of flooding')
      summaryPage.assert.containsText('@zone2moreinfo', 'More information about flood zones')
      summaryPage.assert.containsText('@zone2text2', 'You must carry out a flood risk assessment for development in flood zone 2')
      summaryPage.assert.containsText('@zone2text3', "For some types of development in flood zone 2 you must follow the Environment Agency's standing advice for carrying out a flood risk assessment")
      summaryPage.assert.visible('@floodriskassessmentz2')
      summaryPage.assert.containsText('@zone2text4', 'You can also read more about flood risk assessments for planning applications')
    } else if (data.floodzone === 'flood zone 3') {
      summaryPage.assert.containsText('@zone3titlesubtext', 'This location is in an area with a high probability of flooding')
      summaryPage.assert.containsText('@zone3header', 'FLOOD ZONE 3')
      summaryPage.assert.containsText('@zone3text1', 'Land and property in flood zone 3 have a high probability of flooding')
      summaryPage.assert.containsText('@zone3moreinfo', 'More information about flood zones')
      summaryPage.assert.containsText('@zone3text2', 'You must carry out a flood risk assessment for development in flood zone 3')
      summaryPage.assert.containsText('@zone3text3', "For some types of development in flood zone 3 you must follow the Environment Agency's standing advice for carrying out a flood risk assessment")
      summaryPage.assert.visible('@floodriskassessmentz3')
      summaryPage.assert.containsText('@zone3text4', 'You can also read more about flood risk assessments for planning applications')
    } else if (data.floodzone === 'area that benefits from flood defences') {
      summaryPage.assert.containsText('@areasbenefittingtitlesubtext', 'This location is in an area with a high probability of flooding')
      summaryPage.assert.containsText('@areasbenefittingheader1', 'FLOOD ZONE 3')
      summaryPage.assert.containsText('@areasbenefittingheader2', 'area that benefits from flood defences')
      summaryPage.assert.containsText('@areasbenefittingtext1', 'Land and property in this flood zone would have a high probability of flooding without the local flood defences. These protect the area against a river flood with a 1% chance of happening each year, or a flood from the sea with a 0.5% chance of happening each year.')
      summaryPage.assert.containsText('@areasbenefittingmoreinfo', 'More information about flood zones')
      summaryPage.assert.containsText('@areasbenefittingtext2', 'You may need to complete a flood risk assessment for development in an area benefiting from flood defences')
      summaryPage.assert.visible('@floodriskassessment1')
      summaryPage.assert.containsText('@areasbenefittingtext3', "Find out about the level of flood protection offered at your development's location. You can do this by contacting the Environment Agency. You'll also need to obtain a Flood Defence Breach Hazard Map (also known as a 'Product 8' by planning authorities)")
      summaryPage.assert.visible('@hazardmap')
      summaryPage.assert.containsText('@areasbenefittingtext4', "For some types of development in flood zone 3 you must follow the Environment Agency's standing advice for carrying out a flood risk assessment")
      summaryPage.assert.visible('@floodstandingriskassessmentab')
      summaryPage.assert.containsText('@areasbenefittingtext5', 'You can also read more about flood risk assessments for planning applications')
      summaryPage.assert.visible('@floodriskassessment2')
    }
  },
  assertfullscreen: function (summaryPage, val) {
    if (val) {
      summaryPage.assert.cssClassPresent('@main', 'fullscreen')
    } else {
      summaryPage.assert.cssClassNotPresent('@main', 'fullscreen')
    }
  },
  loadPagewithpolygon: function (summaryPage, polygon) {
    summaryPage.loadPagewithpolygon(polygon)
      .assert.title('Flood map for planning - GOV.UK')
  }
}
