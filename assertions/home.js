module.exports = {
  confirm: function (homePage) {
    homePage
      .assert.title('Flood map for planning')
      .assert.containsText('@header', 'Flood map for planning')
  }
}
