module.exports = {
  polygon: [
    // Straight forward polygons//
    { polygon: '/summary?polygon=[[339786,393147],[339684,393053],[339649,392874],[339805,392717],[340113,392741],[340230,392914],[340165,393060],[340043,393189],[339943,393240],[339807,393200],[339786,393147]]&center=[339940,392978]', type: 'polygon', floodzone: 'flood zone 1' },
    { polygon: '/summary?polygon=[[389529,346683],[389454,346896],[389391,346886],[389382,346851],[389417,346840],[389433,346783],[389393,346735],[389363,346679],[389451,346714],[389480,346735],[389529,346683]]&center=[389446,346788]', type: 'polygon', floodzone: 'flood zone 2' },
    { polygon: '/summary?polygon=[[364699,387491],[364665,387302],[364884,387257],[364917,387397],[364699,387491]]&center=[364791,387374]', type: 'polygon', floodzone: 'flood zone 3' },
    { polygon: '/summary?polygon=[[531638,180912],[531647,180821],[531705,180816],[531759,180825],[531810,180816],[531859,180816],[531897,180851],[531860,180933],[531813,180970],[531638,180912]]&center=[531768,180893]', type: 'polygon', floodzone: 'area that benefits from flood defences' },
    // AB with FZ2 underneath//
    { polygon: '/summary?polygon=[[537155,177271],[537296,177271],[537282,176985],[537140,177006],[537155,177271]]&center=[537218,177128]', type: 'polygon', floodzone: 'area that benefits from flood defences' },
    // FZ2, AB covering FZ2, AB covering FZ3 and FZ3//
    { polygon: '/summary?polygon=[[537340,177213],[537512,177257],[537505,177174],[537334,177180],[537340,177213]]&center=[537423,177216]', type: 'polygon', floodzone: 'flood zone 3' },
    // AB covering FZ2 and AB covering FZ3//
    { polygon: '/summary?polygon=[[537401,177248],[537411,177185],[537594,177352],[537583,177458],[537418,177343],[537401,177248]]&center=[537497,177321] ', type: 'polygon', floodzone: 'area that benefits from flood defences' }
  ],
  polygonpostcode: [
    { location: 'L12 8QW', en: 'easting=340055&northing=392774', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -200, thirdpoint1: -50, thirdpoint2: -100, type: 'polygon', floodzone: 'flood zone 1' },
    { location: 'WA4 1HT', en: 'easting=362105&northing=387218', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -200, thirdpoint1: -50, thirdpoint2: -100, type: 'polygon', floodzone: 'flood zone 2' },
    { location: 'TS24 7QT', en: 'easting=450839&northing=531940', firstpoint1: 0, firstpoint2: -250, secondpoint1: -50, secondpoint2: -250, thirdpoint1: -50, thirdpoint2: -150, type: 'polygon', floodzone: 'flood zone 3' },
    { location: 'SE1 2HU', en: 'easting=533200&northing=180275', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -100, thirdpoint1: -50, thirdpoint2: -50, type: 'polygon', floodzone: 'area that benefits from flood defences' }
  ],
  polygonplace: [
    { location: 'liverpool', en: 'easting=335051.51&northing=390727.82', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -100, thirdpoint1: -50, thirdpoint2: -50, type: 'polygon', floodzone: 'flood zone 1' },
    { location: 'latchford', en: 'easting=362119&northing=387177', firstpoint1: 0, firstpoint2: -150, secondpoint1: -50, secondpoint2: -200, thirdpoint1: -50, thirdpoint2: -100, type: 'polygon', floodzone: 'flood zone 2' },
    { location: 'thames', en: 'easting=517791&northing=169556', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -100, thirdpoint1: -50, thirdpoint2: -50, type: 'polygon', floodzone: 'flood zone 3' },
    { location: 'potton island', en: 'easting=595652.699&northing=190615.792', firstpoint1: -350, firstpoint2: -350, secondpoint1: -225, secondpoint2: -325, thirdpoint1: -200, thirdpoint2: -220, type: 'polygon', floodzone: 'area that benefits from flood defences' }
  ],
  polygonngr: [
    { location: 'SO572907', en: 'easting=357200&northing=290700', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -100, thirdpoint1: -50, thirdpoint2: -50, type: 'polygon', floodzone: 'flood zone 1' },
    { location: 'NT995283', en: 'easting=399500&northing=628300', firstpoint1: 0, firstpoint2: -300, secondpoint1: -50, secondpoint2: -450, thirdpoint1: -50, thirdpoint2: -350, type: 'polygon', floodzone: 'flood zone 2' },
    { location: 'SU9034981372', en: 'easting=350420&northing=470421', firstpoint1: -250, firstpoint2: -100, secondpoint1: -350, secondpoint2: -250, thirdpoint1: -100, thirdpoint2: -180, type: 'polygon', floodzone: 'flood zone 3' },
    { location: 'SJ614874', en: 'easting=361400&northing=387400', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -100, thirdpoint1: -50, thirdpoint2: -50, type: 'polygon', floodzone: 'area that benefits from flood defences' }
  ],
  polygoneandn: [
    { easting: '357200', northing: '290700', en: 'easting=357200&northing=290700', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -100, thirdpoint1: -50, thirdpoint2: -50, type: 'polygon', floodzone: 'flood zone 1' },
    { easting: '399500', northing: '628300', en: 'easting=399500&northing=628300', firstpoint1: 0, firstpoint2: -300, secondpoint1: -50, secondpoint2: -450, thirdpoint1: -50, thirdpoint2: -350, type: 'polygon', floodzone: 'flood zone 2' },
    { easting: '350420', northing: '470421', en: 'easting=350420&northing=470421', firstpoint1: -250, firstpoint2: -100, secondpoint1: -350, secondpoint2: -250, thirdpoint1: -100, thirdpoint2: -180, type: 'polygon', floodzone: 'flood zone 3' },
    { easting: '361400', northing: '387400', en: 'easting=361400&northing=387400', firstpoint1: 0, firstpoint2: -100, secondpoint1: -50, secondpoint2: -100, thirdpoint1: -50, thirdpoint2: -50, type: 'polygon', floodzone: 'area that benefits from flood defences' }
  ],
  pinpostcode: [
    { location: 'L12 8QW', en: 'easting=340055&northing=392774', type: 'pin', floodzone: 'flood zone 1' },
    { location: 'WA4 1HT', en: 'easting=362105&northing=387218', type: 'pin', floodzone: 'flood zone 2' },
    { location: 'SE1 2HU', en: 'easting=533200&northing=180275', type: 'pin', floodzone: 'area that benefits from flood defences' },
    { location: 'TS24 7QT', en: 'easting=450839&northing=531940', type: 'pin', floodzone: 'flood zone 3' }
  ],
  pinplace: [
    { location: 'liverpool', en: 'easting=335051.51&northing=390727.82', type: 'pin', floodzone: 'flood zone 1' },
    { location: 'latchford', en: 'easting=362119&northing=387177', type: 'pin', floodzone: 'flood zone 2' },
    { location: 'potton island', en: 'easting=595652.699&northing=190615.792', type: 'pin', floodzone: 'area that benefits from flood defences' },
    { location: 'thames', en: 'easting=517791&northing=169556', type: 'pin', floodzone: 'flood zone 3' }
  ],
  pinngr: [
    { location: 'SO572907', en: 'easting=357200&northing=290700', type: 'pin', floodzone: 'flood zone 1' },
    { location: 'NT995283', en: 'easting=399500&northing=628300', type: 'pin', floodzone: 'flood zone 2' },
    { location: 'SJ614874', en: 'easting=361400&northing=387400', type: 'pin', floodzone: 'area that benefits from flood defences' },
    { location: 'SD5042070421', en: 'easting=350420&northing=470421', type: 'pin', floodzone: 'flood zone 3' }
  ],
  pineandn: [
    { easting: '357200', northing: '290700', en: 'easting=357200&northing=290700', type: 'pin', floodzone: 'flood zone 1' },
    { easting: '399500', northing: '628300', en: 'easting=399500&northing=628300', type: 'pin', floodzone: 'flood zone 2' },
    { easting: '361400', northing: '387400', en: 'easting=361400&northing=387400', type: 'pin', floodzone: 'area that benefits from flood defences' },
    { easting: '350420', northing: '470421', en: 'easting=350420&northing=470421', type: 'pin', floodzone: 'flood zone 3' }
  ],
  copypostcode: [
    { location: 'L12 8QW', en: 'easting=340055&northing=392774' }
  ],
  pdfpostcode: [
    { location: 'L12 8QW' },
    { location: 'WA4 1HT' },
    { location: 'SE1 2HU' },
    { location: 'TS24 7QT' }
  ],
  updateddata: [
    { location: 'Skelton Common', en: 'easting=478235.238&northing=429378.981', point1: 20, point2: -40, type: 'pin', floodzone: 'flood zone 2' }
  ]
}
