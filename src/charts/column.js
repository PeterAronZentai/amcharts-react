module.exports = {
  "type": "serial",
  "categoryField": "category",
  listeners: [
    { event: "clickGraphItem", method: ({chart, event, item, type}) => console.log({ chart, event, item, type })}
  ],
  "chartCursor": {

  },
  "startDuration": 1,
  "graphs": [
    {
      "type": "column",
      "fillAlphas": 0.5,
      "valueField": "value",
      "bullet": "round",
      "bulletSizeField": "value",
      "showBalloon": true,
      "showBalloonAt": "top",
      columnWidth: 0.2,
    },
    {
      "fillAlphas": 0.5,
      "type": "column",
      "bullet": "round",
      "lineColor": "teal",
      "valueField": "value3",
      "pattern": {
        "url": "/grain.png",
        width: 100,
        height: 100
      }
    },
    {
      "bullet": "round",
      "lineColor": "teal",
      "valueField": "value2",
    }
  ],
  "valueAxes": [
    {
      "visible": false,
    }
  ],
  "dataProvider": [
    {
      "category": "category 1",
      "value": 18,
      "value2": 10
      ,"value3": 10
    },
    {
      "category": "category 2",
      "value": 14,
      "value2": 5
      ,"value3": 10
    },
    {
      "category": "category 3",
      "value": 8,
      "value2": 10
      ,"value3": 10
    },
    {
      "category": "category 4",
      "value": 14,
      "value2": 5
      ,"value3": 10
    }
  ]
}