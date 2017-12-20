module.exports = {
  invalidpostcode: [
    { location: '!"£$^&&*()"' },
    { location: 'sfrenfbtgd' }
],
  invalidngr: [
    { location: '!"£$^&&*()"' },
    { location: 'SD 50420 70421' }
],
  empty: [
    { location: '' }
],
emptyen: [
  { validentry: '123456', emptyvalue: '' }
],
  nonenglish: [
    { location: 'EH1' },
    { location: 'Glasgow' },
    { location: 'llanelli' },
    { location: 'SY23 2HN' },
    { location: 'creggan' },
    { location: 'BT45' }
]
}
