module.exports = {
  "type": "serial",
  "titles": [
    { text: "New author registrations", size: 15 },
    { text: "2017", size: 10 }
  ],
  "categoryField": "quarter",
  "graphs": [
    {
      "type": "line",
      "valueField": "new authors"
    },
  ],
  "pathToImages": "images/amcharts/",
  "dataProvider": [
    {
      "quarter": "Q1",
      "new authors": 1800,
    },
    {
      "quarter": "Q2",
      "new authors": 1400,
    },
    {
      "quarter": "Q3",
      "new authors": 800,
    },
    {
      "quarter": "Q4",
      "new authors": 1405,
    }
  ]
}