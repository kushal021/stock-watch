import React, { useEffect, useState } from "react";
import Highcharts from "highcharts/highstock";
import { userAxiosInstance } from "src/config";
import { useParams } from "react-router-dom";

// Indicators(Highcharts);

// HighchartsMore(ReactHighcharts.Highcharts);
// Indicators(ReactHighcharts.Highcharts);

const SingleStock = () => {
  const [data, setData] = useState();
  const [volumeState, setVolumeState] = useState();
  const [bands, setBands] = useState();
  const [signals, setSignals] = useState();
  const [data1, setData1] = useState();
  const [volumeState1, setVolumeState1] = useState();
  const [bands1, setBands1] = useState();
  const [signals1, setSignals1] = useState();
  1;
  let token = "";
  const { id } = useParams();
  console.log("locariiooooo", location);

  const getShareData = async () => {
    try {
      const response = await userAxiosInstance.get(
        `/investment/getInvestmentOptimisedData?shareName=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.data?.data?.data?.length > 0) {
        let StockArray = response?.data?.data?.data?.map((item) => {
          return [
            new Date(item?.date)?.getTime(),
            item?.open,
            item?.high,
            item?.low,
            item?.close,
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
  const getShareDataExisting = async () => {
    try {
      const response = await userAxiosInstance.get(
        `/investment/getInvestmentExistingData?shareName=${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response?.data?.data?.data?.length > 0) {
        let StockArray = response?.data?.data?.data?.map((item) => {
          return [
            new Date(item?.date)?.getTime(),
            item?.open,
            item?.high,
            item?.low,
            item?.close,
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
        setData1(StockArray);
        setVolumeState1(volumeArray);
        setBands1({
          lowerBand: lowerBandArray,
          miidleBand: middleBandArray,
          upperBand: upperBandArray,
        });
        setSignals1(buySellSignals);
      }
    } catch (error) {
      console.log("eeeeeee", error);
    }
  };
  useEffect(() => {
    const configObj = {
      chart: {
        height: 600,
        width: 900,
      },
      title: {
        text: id,
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
          name: id,
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
    const configObj1 = {
      chart: {
        height: 600,
        width: 900,
      },
      title: {
        text: id,
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
          name: id,
          // data: arrayData,
          data: data1,
        },
        {
          type: "column",
          id: "volume",
          name: "Volume",
          data: volumeState1,
          // data: volume,
          yAxis: 1,
        },
        {
          name: "Lower Band",
          data: bands1?.lowerBand,
          // data: arrayData,
          linkedTo: "aapl",
          id: "dataseriaaples",
        },
        {
          name: "Middle Band",
          data: bands1?.middleBand,
          // data: arrayData,
          linkedTo: "aapl",
          id: "dataseries",
        },
        {
          name: "Upper Band",
          data: bands1?.upperBand,
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
          data: signals1,
          onSeries: "aapl",
          shape: "circlepin",
          width: 16,
        },
      ],
    };

    Highcharts.stockChart("container1", { ...configObj1 }),
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
  }, [data1, volumeState1]);

  useEffect(() => {
    getShareData();
    getShareDataExisting();
  }, []);

  return (
    <div>
      {/* <ApexChart /> */}
      <div className="my-5">
        <h5> Optimized Data Chart</h5>
        <div id="container"></div>
      </div>
      <div className="">
        <h5>Existing Data Chart</h5>
        <div id="container1"></div>
      </div>
    </div>
  );
};

export default SingleStock;
