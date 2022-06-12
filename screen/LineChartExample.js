import React from "react";
import { LineChart, YAxis, Grid, XAxis } from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import { View } from "react-native";
import * as scale from "d3-scale";

const LineChartExample = () => {
  const data = [50, 10, 40, 24, 50, 20, 20, 20, 80];
  const yMax = 100;
  const contentInset = { top: 10, bottom: 10 };

  const lowestYmin = Math.min(...data) > 0 ? -50 : Math.min(...data);

  const Gradient = () => (
    <Defs key={"gradient"}>
      <LinearGradient id={"gradient"} x1={"0"} y={"0%"} x2={"100%"} y2={"0%"}>
        <Stop offset={"0%"} stopColor={"#FA662A"} />
        <Stop offset={"100%"} stopColor={"#FA662A"} />
      </LinearGradient>
    </Defs>
  );

  return (
    <View style={{ height: 300, padding: 20, flexDirection: "row" }}>
      <YAxis
        data={data}
        contentInset={contentInset}
        svg={{
          fill: "grey",
          fontSize: 13,
        }}
        numberOfTicks={5}
        formatLabel={(value) => `${value}%`}
        min={lowestYmin}
        max={yMax}
      />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <LineChart
          style={{ flex: 1, marginLeft: 16 }}
          data={data}
          svg={{
            strokeWidth: 2,
            stroke: "url(#gradient)",
          }}
          contentInset={contentInset}
          gridMin={yMax}
          gridMax={lowestYmin}
          animate={true}
          animationDuration={300}
        >
          <Grid />
          <Gradient />
        </LineChart>
        <XAxis
          style={{ marginHorizontal: 10 }}
          data={data}
          formatLabel={(value, index) => index}
          contentInset={{ left: 10, right: 10 }}
          svg={{ fontSize: 10, fill: "black" }}
        />
      </View>
    </View>
  );
};

export default LineChartExample;
