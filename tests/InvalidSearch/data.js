module.exports = {
  invalidpostcode: [
    { location: '"£$^&&*()"' },
    { location: 'sfrenfbtgd' }
  ],
  invalidngr: [
    { location: '!"£$^&&*()"' },
    { location: 'Liverpool' }
  ],
  empty: [
    { location: '' }
  ],
  emptyen: [
  { validentry: '123456', emptyvalue: '' }
  ],
  invaliden: [
    {
      e: 345678987654,
      n: 1234,
      failon: 'e'
    },
    {
      e: 1234,
      n: 345678987654,
      failon: 'n'
    },
    {
      e: 345678987654,
      n: 345678987654,
      failon: 'en'
    },
    {
      e: -1234,
      n: -1234,
      failon: 'en'
    },
    {
      e: 'jhskghdfs',
      n: 1234,
      failon: 'e'
    },
    {
      e: 12324,
      n: 'dsfdsfsd',
      failon: 'n'
    }
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
