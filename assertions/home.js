module.exports = {
  confirm: function (homePage) {
    homePage
      //.assert.title('Flood planning and risk')
      .assert.title('Planning and flood risk')
      .assert.containsText('@header', 'Development planning and flood risk')
  }
}
