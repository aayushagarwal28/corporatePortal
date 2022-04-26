import React from 'react';
import Highcharts from 'highcharts';
import {
  HighchartsChart, Chart, withHighcharts, XAxis, YAxis, Title, Subtitle, Tooltip, Legend, LineSeries
} from 'react-jsx-highcharts';



const generateArrayOfYears= () =>{
    let max = new Date().getFullYear();
    let min = max - 9;
    let years=[];
  
    for (let i = max; i >= min; i--) {
        years.push(i)
    }
    return years;
  }
 const YEARS= generateArrayOfYears();



const HighChart = () => (
  <div>
    <HighchartsChart styledMode>
      <Chart />

      <Title>Transaction Graph</Title>

     {/* <Subtitle>Source: WorldClimate.com</Subtitle> */}  

      <Legend layout="vertical" align="right" verticalAlign="middle" borderWidth={0} />

      <Tooltip valueSuffix="" shared />

      <XAxis categories={YEARS}>
        <XAxis.Title>Year</XAxis.Title>
      </XAxis>

      <YAxis>
        <YAxis.Title>Number of Employees</YAxis.Title>
        <LineSeries name="Credit" data={[70, 169, 220, 145, 182, 215, 252, 165, 233, 183, 139, 96]} />
        <LineSeries name="Debit" data={[50, 19, 20, 45, 82, 15, 22, 65, 33, 83, 39, 21] } />
      </YAxis>
    </HighchartsChart>

   
  </div>
);

export default withHighcharts(HighChart, Highcharts);