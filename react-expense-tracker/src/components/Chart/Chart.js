import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((x) => x.value);
  const totalMaximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          label={dataPoint.label}
          value={dataPoint.value}
          max={totalMaximum}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart;
