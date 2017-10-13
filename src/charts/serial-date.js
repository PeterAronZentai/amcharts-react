const addDays = (date, days) => {

  const d = new Date(date.getTime())
  d.setDate(days)
  return d
}

const rnd = (min = 0, max = 10) => Math.floor(Math.random()*(max-min+1)+min)

function *createRandomData() {
  for(let i = 0; i < 3; i++) {
    for(let j = 1; j < 24; j++) {
      const d = addDays(new Date(), i)
      d.setHours(j)
      yield {
        date: d.getTime(),
        value: rnd(100, 10000),
        value2: rnd(100, 1000),
      }
    }
  }
}
console.log([...createRandomData()])

const chart = {
  "type": "serial",
  "pathToImages": "images/amcharts/",
  "categoryField": "date",
  "categoryAxis": {
    "parseDates": true,
    "dashLength": 1,
    "minorGridEnabled": false,
    "minPeriod": "hh"
  },
  "valueAxes": [
    {
      "id":"a1",
      "title": "Axis title",
      "stackType": "regular"
    },
    {
      "id":"a2",
      "title": "Axis title2",
      "position": "right"
    }

  ],
  "chartCursor": { },
  "chartScrollbar": {
    "graph": "g1",
  },
  "graphs": [
    {
      "id": "g1",
      "type": "column",
      "valueField": "value",
      "fillAlphas": 0.5,
      title: "G1"
    },
    {
      "title": "G2",
      "type": "column",
      "fillAlphas": 0.5,
      "valueField": "value2",
      "valueAxis":"a2",
    },
    {
      "title": "G3",
      "type": "smoothedLine",
      "valueField": "value",
    },
  ],
  "legend": {
    "useGraphSettings": true,
    labelText: "[[title]]"
  },
  "dataProvider": [...createRandomData()]
}

export default chart