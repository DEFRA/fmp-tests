module.exports = {
  confirm: function (summaryPage, data) {
    summaryPage

    //**Assert generic page elements are visible
    summaryPage.assert.visible('@floodriskassessment')
    summaryPage.assert.visible('@moreinfo')
    summaryPage.assert.visible('@otherlocation')

    //** Assert map elements are visible
    summaryPage.assert.visible('@mapcontainer')
    summaryPage.assert.visible('@summaryzoomin')
    summaryPage.assert.visible('@summaryzoomout')
    summaryPage.assert.visible('@summaryfullscreen')
    summaryPage.assert.visible('@summaryscale')
    summaryPage.assert.visible('@summarymapinfo')

    if (data.floodzone === 'flood zone 1') {
    summaryPage.assert.containsText('@zone1header', 'FLOOD ZONE 1')
    summaryPage.assert.containsText('@zone1text1', 'Planning authorities regard flood zone 1 areas as having a low probability of flooding')
    summaryPage.assert.containsText('@zone1moreinfo', 'More information about flood zones')
    summaryPage.assert.containsText('@zone1text2', 'need to do a flood risk assessment if your development is in flood zone 1 and:')
    summaryPage.assert.containsText('@zone1text3', 'smaller than a hectare')
    summaryPage.assert.containsText('@zone1text4', 'not affected by flood sources other than rivers and the sea, for example surface water drains')
    summaryPage.assert.containsText('@zone1text5', 'If your development is in flood zone 1 and:')
    summaryPage.assert.containsText('@zone1text6', 'larger than a hectare')
    summaryPage.assert.containsText('@zone1text7', 'affected by flood sources other than rivers and the sea, for example surface water drains')
    summaryPage.assert.visible('@floodriskassessmentz1')
    summaryPage.assert.containsText('@zone1text8', 'You can also read more about flood risk assessments for planning applications')
    }
    else if (data.floodzone === 'flood zone 2') {
    summaryPage.assert.containsText('@zone2header', 'FLOOD ZONE 2')
    summaryPage.assert.containsText('@zone2text1', 'Planning authorities regard flood zone 2 areas as having a medium probability of flooding')
    summaryPage.assert.containsText('@zone2moreinfo', 'More information about flood zones')
    summaryPage.assert.containsText('@zone2text2', 'You must do a flood risk assessment for development in flood zone 2')
    summaryPage.assert.containsText('@zone2text3', 'For some kinds of flood zone 2 development you must follow the Environment Agency standing advice for doing a flood risk assessment')
    summaryPage.assert.visible('@floodriskassessmentz2')
    summaryPage.assert.containsText('@zone2text4', 'You can also read more about flood risk assessments for planning applications')
    }
    else if (data.floodzone === 'flood zone 3') {
    summaryPage.assert.containsText('@zone3header', 'FLOOD ZONE 3')
    summaryPage.assert.containsText('@zone3text1', 'Planning authorities regard flood zone 3 areas as having a high probability of flooding')
    summaryPage.assert.containsText('@zone3moreinfo', 'More information about flood zones')
    summaryPage.assert.containsText('@zone3text2', 'You must do a flood risk assessment for development in flood zone 3')
    summaryPage.assert.containsText('@zone3text3', 'For some kinds of flood zone 3 development you must follow the Environment Agency standing advice for doing a flood risk assessment')
    summaryPage.assert.visible('@floodriskassessmentz3')
    summaryPage.assert.containsText('@zone3text4', 'You can also read more about flood risk assessments for planning applications')

    }
    else if (data.floodzone === 'area that benefits from flood defences') {
      summaryPage.assert.containsText('@areasbenefittingheader1', 'FLOOD ZONE 3')
      summaryPage.assert.containsText('@areasbenefittingheader2', 'area that benefits from flood defences')
      summaryPage.assert.containsText('@areasbenefittingtext1', 'Planning authorities regard these areas as those likely to flood if nearby flood defences were not present')
      summaryPage.assert.containsText('@areasbenefittingmoreinfo', 'More information about flood zones')
      summaryPage.assert.containsText('@areasbenefittingtext2', 'You may need to do a flood risk assessment for development in an area benefiting from flood defences.')
      summaryPage.assert.visible('@floodriskassessment1')
      summaryPage.assert.containsText('@areasbenefittingtext3', 'Find out the level of flood protection offered at your development\'s location. You can do this by talking to your local Partnerships and Strategic Overview team. You\'ll also need to obtain a Flood Defence Breach Hazard Map (this is also known as a \'Product 8\' by planning authorities)')
      summaryPage.assert.visible('@hazardmap')
      summaryPage.assert.containsText('@areasbenefittingtext4', 'For some kinds of flood zone 3 development you must follow the Environment Agency standing advice for doing a flood risk assessment')
      summaryPage.assert.visible('@floodstandingriskassessmentab')
      summaryPage.assert.containsText('@areasbenefittingtext5', 'You can also read more about flood risk assessments for planning applications')
      summaryPage.assert.visible('@floodriskassessment2')
    }
}}
