module.exports = {
  "type": "serial",
  "handDrawn": true,
  handDrawScatter: 7,
  handDrawThickness: 1,
  "titles": [
    { text: "New author registrations", size: 15 },
    { text: "2017", size: 10 }
  ],
  "categoryField": "quarter",
  "categoryAxis": {
    title: "Quarters",
    categoryFunction: (category, item, chart) => category
  },
  "legend": {
    position: "left"
  },
  "allLabels": [
    {"x": 20, "y": 20, "text": "Visit Tes", "align": "left", "size": 12, "color": "#CC0000", "alpha": 1, "rotation": 45, "bold": true, "url": "http://www.tes.com"}
  ],
  "chartCursor": {},
  "chartScrollbar": {
    "graph": "g2",
    oppositeAxis: false
  },
  "graphs": [
    {
      "id": "g1",
      "type": "column",
      "fillAlphas": 0.7,
      "lineThickness": 5,
      "valueField": "new resources",
      "fillColors": "teal",
      "lineColor": "blue",
      "title": "New resources"
    },
    {
      "id": "g2",
      "type": "smoothedLine",
      "valueField": "new authors",
      "lineThickness": 5,
    },
  ],
  "pathToImages": "images/amcharts/",
  "dataProvider": [
    {
      "quarter": "Q1",
      "new authors": 1800,
      "new resources": 3300,
    },
    {
      "quarter": "Q2",
      "new authors": 1400,
      "new resources": 3400,
    },
    {
      "quarter": "Q3",
      "new authors": 800,
      "new resources": 1200,
    },
    {
      "quarter": "Q4",
      "new authors": 1405,
      "new resources": 2200,
    }
  ]
}