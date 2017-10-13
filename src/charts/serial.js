module.exports = {
  "type": "serial",
  "categoryField": "category",
  listeners: [
    { event: "clickGraphItem", method: (a, b, c) => console.log(a, b, c)}
  ],
  "graphs": [
    {
      "valueField": "value",
      "bullet": "round",
      "bulletSizeField": "value"
    },
    {
      "valueField": "value2"
    }
  ],
  "x-guides": [
    {
      "fillAlpha": 0.10,
      "value": 10,
      "toValue": 10
    }
  ],
  "dataProvider": [
    {
      "category": "category 1",
      "value": 18,
      "value2": 10
    },
    {
      "category": "category 2",
      "value": 14,
      "value2": 5
    },
    {
      "category": "category 1",
      "value": 8,
      "value2": 10
    },
    {
      "category": "category 2",
      "value": 14,
      "value2": 5
    }
  ]
}