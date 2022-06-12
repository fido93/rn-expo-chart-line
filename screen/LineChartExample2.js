import React from "react";
import {
  Grid,
  LineChart,
  XAxis,
  YAxis,
  BarChart,
} from "react-native-svg-charts";
import { View, Text as RNText } from "react-native";
import { Text } from "react-native-svg";
class LineChartExample2 extends React.PureComponent {
  render() {
    const data = [50, 10, 95, 20, 30, 46];

    const axesSvg = { fontSize: 10, fill: "grey" };
    const verticalContentInset = { top: 10, bottom: 10 };
    const xAxisHeight = 30;
    const CUT_OFF = 20;

    const yMax = 100;
    const lowestYmin = Math.min(...data) > 0 ? -50 : Math.min(...data);

    const Labels = ({ x, y, bandwidth, data }) =>
      data.map((value, index) => {
        return (
          <Text
            key={index}
            x={x(index) + bandwidth / 2}
            y={value < CUT_OFF ? y(value) - 10 : y(value) + 15}
            fontSize={12}
            fill={value >= CUT_OFF ? "blue" : "red"}
            alignmentBaseline={"middle"}
            textAnchor={"middle"}
          >
            {value}
          </Text>
        );
      });

    return (
      <View style={{ flex: 1, padding: 10 }}>
        <View style={{ height: 300, flexDirection: "row" }}>
          <YAxis
            data={data}
            style={{ marginBottom: 0 }}
            contentInset={verticalContentInset}
            svg={axesSvg}
            yMax={yMax}
            min={lowestYmin}
          />
          <View style={{ flex: 1 }}>
            <BarChart
              style={{ flex: 1 }}
              data={data}
              contentInset={{ top: 20, bottom: 20 }}
              svg={{
                fill: "lightgreen",
              }}
            >
              <Grid />
              <Labels />
            </BarChart>
          </View>
        </View>
      </View>
    );
  }
}

export default LineChartExample2;
