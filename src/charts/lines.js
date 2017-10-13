module.exports = {
  "type": "serial",
  "titles": [
    { text: "New author registrations", size: 15 },
    { text: "2017", size: 10 }
  ],
  "categoryField": "quarter",
  "categoryAxis": {
    title: "Quarters"
    // startOnAxis: true,
  },
  "graphs": [
    {
      "valueField": "new authors",
      "bullet": "circle",
      "bulletSizeField": "incidents",
    },
    {
      "valueField": "new resources"
    },
  ],
  "dataProvider": [
    {
      "quarter": "Q1",
      "new authors": 1800,
      "new resources": 3300,
      "incidents": 10,
    },
    {
      "quarter": "Q2",
      "new authors": 1400,
      "new resources": 3400,
      "incidents": 8,
    },
    {
      "quarter": "Q3",
      "new authors": 800,
      "new resources": 1200,
      "incidents": 20,
    },
    {
      "quarter": "Q4",
      "new authors": 1405,
      "new resources": 2200,
      "incidents": 12,
    }
  ]
}