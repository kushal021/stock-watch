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
  let abc = [
    {
      _id: "6493dc497b5f41bd40646c65",
      name: "20MICRONS",
      open: 64.75,
      high: 66.95,
      low: 64.3,
      close: 65.85,
      volume: 99700,
      middleBand: 68.79166666666669,
      upperBand: 74.18920211248721,
      lowerBand: 63.39413122084617,
      rsi: 29.999999999999716,
      candleColor: "green",
      date: "2023-03-29T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c64",
      name: "20MICRONS",
      open: 65,
      high: 68.4,
      low: 63.05,
      close: 64.7,
      volume: 187381,
      middleBand: 69.105,
      upperBand: 74.86245024584089,
      lowerBand: 63.34754975415912,
      rsi: 80.28169014084497,
      candleColor: "red",
      date: "2023-03-28T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c63",
      name: "20MICRONS",
      open: 67.05,
      high: 67.2,
      low: 63.85,
      close: 64.2,
      volume: 94089,
      middleBand: 69.5,
      upperBand: 75.60960991662589,
      lowerBand: 63.390390083374115,
      rsi: 74.54545454545445,
      candleColor: "red",
      date: "2023-03-27T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c62",
      name: "20MICRONS",
      open: 68.7,
      high: 69.2,
      low: 66.6,
      close: 66.65,
      volume: 67909,
      middleBand: 69.91166666666666,
      upperBand: 76.19904467520267,
      lowerBand: 63.62428865813065,
      rsi: 68.1818181818181,
      candleColor: "red",
      date: "2023-03-24T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c61",
      name: "20MICRONS",
      open: 68.1,
      high: 69.4,
      low: 66.6,
      close: 68.8,
      volume: 112790,
      middleBand: 70.26833333333335,
      upperBand: 76.97512011158184,
      lowerBand: 63.561546555084846,
      rsi: 49.18032786885251,
      candleColor: "green",
      date: "2023-03-23T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c60",
      name: "20MICRONS",
      open: 66.55,
      high: 68.6,
      low: 66.05,
      close: 68.1,
      volume: 114520,
      middleBand: 70.53999999999999,
      upperBand: 77.63583915638829,
      lowerBand: 63.4441608436117,
      rsi: 81.0810810810807,
      candleColor: "green",
      date: "2023-03-22T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c5f",
      name: "20MICRONS",
      open: 65.85,
      high: 66.8,
      low: 65.15,
      close: 66.2,
      volume: 43675,
      middleBand: 70.81666666666666,
      upperBand: 78.15352945368643,
      lowerBand: 63.479803879646894,
      rsi: 52.63157894736853,
      candleColor: "green",
      date: "2023-03-21T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c5e",
      name: "20MICRONS",
      open: 64,
      high: 67.15,
      low: 64,
      close: 65.35,
      volume: 40963,
      middleBand: 71.205,
      upperBand: 78.75352524227966,
      lowerBand: 63.65647475772033,
      rsi: 65.2173913043479,
      candleColor: "green",
      date: "2023-03-20T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c5d",
      name: "20MICRONS",
      open: 66.15,
      high: 67.3,
      low: 66.15,
      close: 66.95,
      volume: 32136,
      middleBand: 71.62666666666665,
      upperBand: 79.23288050069004,
      lowerBand: 64.02045283264326,
      rsi: 60,
      candleColor: "green",
      date: "2023-03-17T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646c5c",
      name: "20MICRONS",
      open: 67.15,
      high: 67.15,
      low: 64.8,
      close: 65.65,
      volume: 61333,
      middleBand: 72.055,
      upperBand: 79.99927886385333,
      lowerBand: 64.11072113614668,
      rsi: 45.94594594594578,
      candleColor: "red",
      date: "2023-03-16T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.679Z",
      updatedAt: "2023-06-22T05:29:45.679Z",
      __v: 0,
    },

    {
      _id: "6493dc497b5f41bd40646a4a",
      name: "20MICRONS",
      open: 38,
      high: 38,
      low: 36.1,
      close: 36.85,
      volume: 106363,
      candleColor: "red",
      date: "2021-01-25T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a49",
      name: "20MICRONS",
      open: 37.3,
      high: 38.4,
      low: 37,
      close: 37.55,
      volume: 87701,
      candleColor: "green",
      date: "2021-01-22T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a48",
      name: "20MICRONS",
      open: 38.95,
      high: 39.5,
      low: 37.2,
      close: 37.55,
      volume: 141568,
      candleColor: "red",
      date: "2021-01-21T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a47",
      name: "20MICRONS",
      open: 37.8,
      high: 38.65,
      low: 37.8,
      close: 38.4,
      volume: 143794,
      candleColor: "green",
      date: "2021-01-20T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a46",
      name: "20MICRONS",
      open: 37.75,
      high: 38.5,
      low: 36.5,
      close: 37.65,
      volume: 124062,
      candleColor: "red",
      date: "2021-01-19T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a45",
      name: "20MICRONS",
      open: 39.4,
      high: 39.65,
      low: 36.6,
      close: 36.9,
      volume: 239897,
      candleColor: "red",
      date: "2021-01-18T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a44",
      name: "20MICRONS",
      open: 40,
      high: 40.05,
      low: 38.2,
      close: 38.55,
      volume: 133502,
      candleColor: "red",
      date: "2021-01-15T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a43",
      name: "20MICRONS",
      open: 39,
      high: 40.8,
      low: 37.9,
      close: 39.85,
      volume: 374980,
      candleColor: "green",
      date: "2021-01-14T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a42",
      name: "20MICRONS",
      open: 40.5,
      high: 41.05,
      low: 38.5,
      close: 39,
      volume: 286999,
      candleColor: "red",
      date: "2021-01-13T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a41",
      name: "20MICRONS",
      open: 40.3,
      high: 41.9,
      low: 39.5,
      close: 39.9,
      volume: 262240,
      candleColor: "red",
      date: "2021-01-12T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a40",
      name: "20MICRONS",
      open: 41.65,
      high: 42,
      low: 39.6,
      close: 39.85,
      volume: 264383,
      candleColor: "red",
      date: "2021-01-11T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a3f",
      name: "20MICRONS",
      open: 41.8,
      high: 42,
      low: 40.2,
      close: 41.65,
      volume: 600137,
      candleColor: "red",
      date: "2021-01-08T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a3e",
      name: "20MICRONS",
      open: 41.5,
      high: 41.65,
      low: 39.9,
      close: 40.75,
      volume: 180584,
      candleColor: "red",
      date: "2021-01-07T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a3d",
      name: "20MICRONS",
      open: 41.8,
      high: 41.85,
      low: 40.5,
      close: 40.9,
      volume: 256628,
      candleColor: "red",
      date: "2021-01-06T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a3c",
      name: "20MICRONS",
      open: 39.8,
      high: 41.95,
      low: 39.55,
      close: 40.95,
      volume: 375387,
      candleColor: "green",
      date: "2021-01-05T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a3b",
      name: "20MICRONS",
      open: 40.55,
      high: 40.6,
      low: 39.6,
      close: 39.8,
      volume: 241109,
      candleColor: "red",
      date: "2021-01-04T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
    {
      _id: "6493dc497b5f41bd40646a3a",
      name: "20MICRONS",
      open: 40.75,
      high: 40.8,
      low: 39.8,
      close: 40.05,
      volume: 126229,
      candleColor: "red",
      date: "2021-01-01T00:00:00.000Z",
      createdAt: "2023-06-22T05:29:45.671Z",
      updatedAt: "2023-06-22T05:29:45.671Z",
      __v: 0,
    },
  ];

  const newAbc = abc?.map((item, index) => {
    // let newArray = []
    return [
      arrayData?.[index]?.[0],
      item?.open,
      item?.high,
      item?.low,
      item?.close,
      arrayData?.[index]?.[4],
    ];
  });

  const getShareData = async () => {
    try {
      const response = await userAxiosInstance.get(
        strategyId === "breakfast-strategy"
          ? `/investment/getInvestmentOptimisedData?shareName=${stockId}`
          : strategyId === "positional-strategy"
          ? `/otherStrategy/getPositionalStrategy?shareName=${stockId}`
          : `/otherStrategy/getBreakfastStrategy?shareName=${stockId}`,
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
    console.log("array dataa=========>", newAbc);

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
