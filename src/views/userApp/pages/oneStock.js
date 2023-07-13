import React, { useEffect } from "react";
import ApexChart from "../components/ChartComp";
import Highcharts from "highcharts";

// Indicators(Highcharts);

// HighchartsMore(ReactHighcharts.Highcharts);
// Indicators(ReactHighcharts.Highcharts);

const OneStock = () => {
  useEffect(() => {
    const ohlc = [],
      volume = [],
      dataLength = arrayData.length;

    for (let i = 0; i < dataLength; i += 1) {
      ohlc.push([
        arrayData[i][0], // the date
        arrayData[i][1], // open
        arrayData[i][2], // high
        arrayData[i][3], // low
        arrayData[i][4], // close
      ]);

      volume.push([
        arrayData[i][0], // the date
        arrayData[i][5], // the volume
      ]);
    }

    const configObj = {
      chart: {
        height: 600,
      },
      title: {
        text: "AAPL Historical",
      },
      subtitle: {
        text: "All indicators",
      },
      accessibility: {
        series: {
          descriptionFormat: "{seriesDescription}.",
        },
        description:
          "Use the dropdown menus above to display different indicator series on the chart.",
        screenReaderSection: {
          beforeChartFormat:
            "<{headingTagName}>{chartTitle}</{headingTagName}><div>{typeDescription}</div><div>{chartSubtitle}</div><div>{chartLongdesc}</div>",
        },
      },
      legend: {
        enabled: true,
      },
      rangeSelector: {
        selected: 2,
      },
      yAxis: [
        {
          height: "60%",
        },
        {
          top: "60%",
          height: "20%",
        },
        {
          top: "80%",
          height: "20%",
        },
      ],
      plotOptions: {
        series: {
          showInLegend: true,
          accessibility: {
            exposeAsGroupOnly: true,
          },
        },
      },
      series: [
        {
          type: "candlestick",
          id: "aapl",
          name: "AAPL",
          data: arrayData,
        },
        // {
        //   type: "column",
        //   id: "volume",
        //   name: "Volume",
        //   data: volume,
        //   yAxis: 1,
        // },
        // {
        //   type: "pc",
        //   id: "overlay",
        //   linkedTo: "aapl",
        //   yAxis: 0,
        // },
        // {
        //   type: "macd",
        //   id: "oscillator",
        //   linkedTo: "aapl",
        //   yAxis: 2,
        // },
      ],
    };

    var chart = new Highcharts.stockChart("container", { ...configObj });
  }, []);

  const arrayData = [
    [1626269400000, 148.1, 149.57, 147.68, 149.15, 127050800],
    [1626355800000, 149.24, 150, 147.09, 148.48, 106820300],
    [1626442200000, 148.46, 149.76, 145.88, 146.39, 93251400],
    [1626701400000, 143.75, 144.07, 141.67, 142.45, 121434600],
    [1626787800000, 143.46, 147.1, 142.96, 146.15, 96350000],
    [1626874200000, 145.53, 146.13, 144.63, 145.4, 74993500],
    [1626960600000, 145.94, 148.2, 145.81, 146.8, 77338200],
    [1627047000000, 147.55, 148.72, 146.92, 148.56, 71447400],
    [1627306200000, 148.27, 149.83, 147.7, 148.99, 72434100],
    [1627392600000, 149.12, 149.21, 145.55, 146.77, 104818600],
    [1627479000000, 144.81, 146.97, 142.54, 144.98, 118931200],
    [1627565400000, 144.69, 146.55, 144.58, 145.64, 56699500],
    [1627651800000, 144.38, 146.33, 144.11, 145.86, 70440600],
    [1627911000000, 146.36, 146.95, 145.25, 145.52, 62880000],
    [1627997400000, 145.81, 148.04, 145.18, 147.36, 64786600],
    [1628083800000, 147.27, 147.79, 146.28, 146.95, 56368300],
    [1628170200000, 146.98, 147.84, 146.17, 147.06, 46397700],
    [1628256600000, 146.35, 147.11, 145.63, 146.14, 54126800],
    [1628515800000, 146.2, 146.7, 145.52, 146.09, 48908700],
    [1628602200000, 146.44, 147.71, 145.3, 145.6, 69023100],
    [1628688600000, 146.05, 146.72, 145.53, 145.86, 48493500],
  ];
  return (
    <div>
      <ApexChart />
      <div id="container"></div>
    </div>
  );
};

export default OneStock;
