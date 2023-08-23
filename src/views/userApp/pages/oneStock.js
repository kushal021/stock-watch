import React, { useEffect, useState } from "react";
import ApexChart from "../components/ChartComp";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { userAxiosInstance } from "src/config";
import { useLocation, useParams } from "react-router-dom";

// Indicators(Highcharts);

// HighchartsMore(ReactHighcharts.Highcharts);
// Indicators(ReactHighcharts.Highcharts);

const OneStock = () => {
  const [data, setData] = useState();
  const [volumeState, setVolumeState] = useState();
  const [bands, setBands] = useState();
  const [signals, setSignals] = useState();

  let token = "";
  const { stockId, strategyId } = useParams();
  console.log("locariiooooo", location);
  let apiSlug = strategyId.split("-");

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
    [1629701400000, 143.75, 144.07, 141.67, 142.45, 121434600],
    [1629787800000, 143.46, 147.1, 142.96, 146.15, 96350000],
    [1629874200000, 145.53, 146.13, 144.63, 145.4, 74993500],
    [1629960600000, 145.94, 148.2, 145.81, 146.8, 77338200],
    [1629047000000, 147.55, 148.72, 146.92, 148.56, 71447400],
    [1629306200000, 148.27, 149.83, 147.7, 148.99, 72434100],
    [1629392600000, 149.12, 149.21, 145.55, 146.77, 104818600],
    [1629479000000, 144.81, 146.97, 142.54, 144.98, 118931200],
    [1629565400000, 144.69, 146.55, 144.58, 145.64, 56699500],
    [1629651800000, 144.38, 146.33, 144.11, 145.86, 70440600],
    [1629911000000, 146.36, 146.95, 145.25, 145.52, 62880000],
    [1629997400000, 145.81, 148.04, 145.18, 147.36, 64786600],
    [1631256600000, 146.35, 147.11, 145.63, 146.14, 54126800],
    [1631515800000, 146.2, 146.7, 145.52, 146.09, 48908700],
    [1631602200000, 146.44, 147.71, 145.3, 145.6, 69023100],
    [1631688600000, 146.05, 146.72, 145.53, 145.86, 48493500],
    [1631701400000, 143.75, 144.07, 141.67, 142.45, 121434600],
    [1631787800000, 143.46, 147.1, 142.96, 146.15, 96350000],
    [1631874200000, 145.53, 146.13, 144.63, 145.4, 74993500],
    [1631960600000, 145.94, 148.2, 145.81, 146.8, 77338200],
    [1631047000000, 147.55, 148.72, 146.92, 148.56, 71447400],
    [1631306200000, 148.27, 149.83, 147.7, 148.99, 72434100],
    [1631392600000, 149.12, 149.21, 145.55, 146.77, 104818600],
    [1631479000000, 144.81, 146.97, 142.54, 144.98, 118931200],
    [1631565400000, 144.69, 146.55, 144.58, 145.64, 56699500],
    [1631651800000, 144.38, 146.33, 144.11, 145.86, 70440600],
    [1631911000000, 146.36, 146.95, 145.25, 145.52, 62880000],
    [1631997400000, 145.81, 148.04, 145.18, 147.36, 64786600],
  ];

  let api = {
    breakfast: "getBreakfastStrategyData",
    positional: "getPositionalStrategyData",
    optimised: "getInvestmentOptimisedData",
    investment: "getInvestmentExistingData",
    best: "getBestBuyStrategyData",
  };

  const getShareData = async () => {
    let url = `/ShareWiseData/${api[apiSlug[0]]}?shareName=${stockId}`;
    try {
      // const response = await userAxiosInstance.get(
      //   strategyId === "breakfast-strategy"
      //     ? `/investment/getInvestmentOptimisedData?shareName=${stockId}`
      //     : strategyId === "positional-strategy"
      //     ? `/otherStrategy/getPositionalStrategy?shareName=${stockId}`
      //     : `/otherStrategy/getBreakfastStrategy?shareName=${stockId}`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // );
      const response = await userAxiosInstance.get(url);
      if (response?.data?.data?.data?.length > 0) {
        let StockArray = response?.data?.data?.data?.map((item) => {
          return [
            new Date(item?.date)?.getTime(),
            item?.open,
            item?.high,
            item?.low,
            item.close ? item.close : item?.prevClose,
          ];
        });

        let volumeArray = response?.data?.data?.data?.map((item) => {
          return [new Date(item?.date)?.getTime(), item?.volume];
        });
        let middleBandArray = response?.data?.data?.data
          ?.map((item) => {
            if (item?.lowerBand && item?.middleBand && item?.upperBand) {
              return [new Date(item?.date)?.getTime(), item?.middleBand];
            }
          })
          ?.filter((ele) => ele !== undefined);
        let lowerBandArray = response?.data?.data?.data
          ?.map((item) => {
            if (item?.lowerBand && item?.middleBand && item?.upperBand) {
              return [new Date(item?.date)?.getTime(), item?.lowerBand];
            }
          })
          ?.filter((ele) => ele !== undefined);
        let upperBandArray = response?.data?.data?.data
          ?.map((item) => {
            if (item?.lowerBand && item?.middleBand && item?.upperBand) {
              return [new Date(item?.date)?.getTime(), item?.upperBand];
            }
          })
          ?.filter((ele) => ele !== undefined);
        let buySellSignals = response?.data?.data?.data
          ?.map((item) => {
            if (item?.signal) {
              return {
                x: new Date(item?.date)?.getTime(),
                title: item?.signal,
                text: item?.signal,
              };
            }
          })
          ?.filter((ele) => ele !== undefined);
        setData(StockArray);
        setVolumeState(volumeArray);
        setBands({
          lowerBand: lowerBandArray,
          miidleBand: middleBandArray,
          upperBand: upperBandArray,
        });
        setSignals(buySellSignals);
      }
    } catch (error) {
      console.log("eeeeeee", error);
    }
  };
  console.log("eeeeeee datttttttttaaa", data);
  console.log("eeeeeee Bandsssssss", bands);
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

    console.log("array dataa=========>", arrayData);

    const configObj = {
      chart: {
        height: 600,
        width: 1200,
      },
      title: {
        text: stockId,
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
        candlestick: {
          color: "red",
          upColor: "green",
        },
      },
      series: [
        {
          type: "candlestick",
          id: "aapl",
          name: stockId,
          // data: arrayData,
          data: data,
        },
        {
          type: "column",
          id: "volume",
          name: "Volume",
          data: volumeState,
          // data: volume,
          yAxis: 1,
        },
        {
          name: "Lower Band",
          data: bands?.lowerBand,
          // data: arrayData,
          linkedTo: "aapl",
          id: "dataseriaaples",
        },
        {
          name: "Middle Band",
          data: bands?.middleBand,
          // data: arrayData,
          linkedTo: "aapl",
          id: "dataseries",
        },
        {
          name: "Upper Band",
          data: bands?.upperBand,
          // data: arrayData,
          linkedTo: "aapl",
          id: "dataseries",
        },
        {
          type: "flags",
          accessibility: {
            exposeAsGroupOnly: true,
            description: "Flagged events.",
          },
          data: signals,
          onSeries: "aapl",
          shape: "circlepin",
          width: 16,
        },
      ],
    };

    console.log("signalsssssss", signals);

    Highcharts.stockChart("container", { ...configObj }),
      (chart) => {
        document.getElementById("overlays").addEventListener("change", (e) => {
          const series = chart.get("overlay");

          if (series) {
            series.remove(false);
            chart.addSeries({
              type: e.target.value,
              linkedTo: "aapl",
              id: "overlay",
            });
          }
        });

        document
          .getElementById("oscillators")
          .addEventListener("change", (e) => {
            const series = chart.get("oscillator");

            if (series) {
              series.remove(false);
              chart.addSeries({
                type: e.target.value,
                linkedTo: "aapl",
                id: "oscillator",
                yAxis: 2,
              });
            }
          });
      };
  }, [data, volumeState]);

  useEffect(() => {
    getShareData();
  }, []);

  return (
    <div>
      {/* <ApexChart /> */}
      <div id="container"></div>
    </div>
  );
};

export default OneStock;
