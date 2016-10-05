module.exports = {
  confirm: function (confirmlocationPage) {
    confirmlocationPage
      .assert.containsText('@header', 'Confirm the development location')
  }
}
