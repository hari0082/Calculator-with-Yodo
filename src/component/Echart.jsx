import React from "react";
import ReactEcharts from "echarts-for-react";
import * as echarts from "echarts";
import OutputComp from "./OutputComp";

const Echart = ({ updatedInputValue }) => {
  const generateYearsArray = () => {
    const currentYear = new Date().getFullYear();
    const numberofYears = 20;
    const yearsArray = Array.from(
      { length: numberofYears },
      (_, index) => currentYear + index
    );
    return yearsArray.map(String);
  };

  const option = {
    color: ["#3183CC", "#194266"],
    title: {},
    textStyle: {
      fontFamily: "Montserrat, sans-serif",
      color: "#000",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        label: {
          backgroundColor: "#000",
          fontFamily: "Inter, sans-serif",
          color: "#000",
          fontWeight: "medium",
          align: "center",
          lineHeight: "1.25",
          formatter: function () {
            return `Your expected output in EUR`;
          },
        },
      },
    },
    legend: {
      data: ["Good Plan 5%", "Free Plan 2.5%"],
      textStyle: {
        fontFamily: "Inter, sans-serif",
        color: "#000",
        fontWeight: "medium",
        lineHeight: "1.25",
      },
    },

    grid: {
      left: "-5%",
      right: "5%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      axisLabel: {
        formatter: "{value}",
        align: "left",
        fontFamily: "Inter, sans-serif",
        color: "#000",
        fontWeight: "medium",
        lineHeight: "10",
      },
      axisTick: {
        show: false
      },
      
      type: "category",
      boundaryGap: false,
      data: generateYearsArray(),
    },
    yAxis: {
      // axisLabel: {
      //   formatter: "€{value}",
      //   align: "center",
      //   fontFamily: "Inter, sans-serif",
      //   color: "#000",
      //   fontWeight: "medium",
      //   lineHeight: "1.25",
      // },
      type: "value",
      show: false,
      splitLine: {
        show: false, // Set to false to hide the y-axis line
      },
    },
    series: [
      {
        name: "Good Plan 5%",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(140, 0, 140, 1, [
            {
              offset: 0.3202,
              color: "#194266",
            },
            {
              offset: 0.8349,
              color: "#3c5975",
            },
            {
              offset: 0.9627,
              color: "#516579",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: generateYearsArray().map(
          (year, index) => updatedInputValue * 0.05 * (index + 1)
        ),
      },
      {
        name: "Free Plan 2.5%",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(140, 0, 140, 1, [
            {
              offset: 0.3202,
              color: "#3183CC",
            },
            {
              offset: 0.8349,
              color: "#77B2E9",
            },
            {
              offset: 0.9627,
              color: "#A2CAF2",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: generateYearsArray().map(
          (year, index) => updatedInputValue * 0.025 * (index + 1)
        ),
      },
    ],
  };

  return (
    <div className="flex-col p-3 m-3 text-black xs={12} sm={12} md={12}">
      <ReactEcharts
        option={option}
        style={{ height: "40vh", width: "100%" }}
        opts={{ renderer: "svg" }}
      />
    </div>
  );
};

export default Echart;
