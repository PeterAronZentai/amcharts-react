import React, { Component } from 'react';
import logo from './logo.svg';
import { AmChart } from './ChartWrapper';
import './App.css';

import serialDate from './charts/serial-date'
import column from './charts/column'
import charts from './charts'


function generateData() {
  var firstDate = new Date();

  var dataProvider = [];

  for (var i = 0; i < 100; ++i) {
    var date = new Date(firstDate.getTime());

    date.setDate(i);

    dataProvider.push({
      date: date,
      value: Math.floor(Math.random() * 100)
    });
  }

  return dataProvider;
}

const row = {} || {display:'flex', flexDirection:'row'}
const col = {} || {display:'flex', flexDirection:'column'}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chartType: 'line'
    }
  }

  render() {
    const configx = {
      "type": "serial",
      "pathToImages": "images/amcharts/",
      "theme": "light",
      "marginRight": 40,
      "marginLeft": 40,
      "autoMarginOffset": 20,
      "mouseWheelZoomEnabled": true,
      "valueAxes": [{
        "id": "v1",
        "axisAlpha": 0,
        "position": "left",
        "ignoreAxisWidth": true
      }],
      "balloon": {
        "borderThickness": 1,
        "shadowAlpha": 0
      },
      "graphs": [
        {
        "id": "g1",
        "balloon":{
          "drop": true,
          "adjustBorderColor": false,
          "color":"#ffffff"
        },
        "bullet": "round",
        "bulletBorderAlpha": 1,
        "bulletColor": "#FFFFFF",
        "bulletSize": 5,
        "hideBulletsCount": 50,
        "lineThickness": 2,
        "title": "red line",
        "useLineColorForBulletBorder": true,
        "valueField": "value",
        "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
      }],
      "chartScrollbar": {
        "graph": "g1",
        "oppositeAxis": false,
        "offset":30,
        "scrollbarHeight": 80,
        "backgroundAlpha": 0,
        "selectedBackgroundAlpha": 0.1,
        "selectedBackgroundColor": "#888888",
        "graphFillAlpha": 0,
        "graphLineAlpha": 0.5,
        "selectedGraphFillAlpha": 0,
        "selectedGraphLineAlpha": 1,
        "autoGridCount": true,
        "color":"#AAAAAA"
      },
      "chartCursor": {
        "pan": true,
        "valueLineEnabled": true,
        "valueLineBalloonEnabled": true,
        "cursorAlpha":1,
        "cursorColor":"#258cbb",
        "limitToGraph":"g1",
        "valueLineAlpha":0.2,
        "valueZoomable": true
      },
      "valueScrollbar":{
        "oppositeAxis": false,
        "offset":50,
        "scrollbarHeight":10
      },
      "categoryField": "date",
      "categoryAxis": {
        "parseDates": true,
        "dashLength": 1,
        "minorGridEnabled": true
      },
      "dataProvider": this.state.dataProvider
    };

    const config = charts[this.state.chartType]


    return (
      <div className="App" style={row}>
        <div style={col}>
          {Object.keys(charts).map( (k,i) =>
            <button key={i} onClick={() => this.setState({ chartType: k }) }>{k}</button>)
          }
          <hr />
          <button onClick={ () => this.setState({ chartType: undefined })}>clear</button>
        </div>
        {config &&
        <AmChart
          style={{ width: "100%", height: "500px" }}
          options={config} />}
      </div>
    );
  }
}

export default App;