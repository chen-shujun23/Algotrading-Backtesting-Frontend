import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    date: "Page A",
    sSMA: 4000,
    lSMA: 2400,
    vwap: 2400,
  },
  {
    date: "Page B",
    sSMA: 3000,
    lSMA: 1398,
    vwap: 2210,
  },
  {
    date: "Page C",
    sSMA: 2000,
    lSMA: 9800,
    vwap: 2290,
  },
  {
    date: "Page D",
    sSMA: 2780,
    lSMA: 3908,
    vwap: 2000,
  },
  {
    date: "Page E",
    sSMA: 1890,
    lSMA: 4800,
    vwap: 2181,
  },
  {
    date: "Page F",
    sSMA: 2390,
    lSMA: 3800,
    vwap: 2500,
  },
  {
    date: "Page G",
    sSMA: 3490,
    lSMA: 4300,
    vwap: 2100,
  },
];

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length === 2) {
//     const lSMA = payload[0].value;
//     const sSMA = payload[1].value;
//     if (lSMA === sSMA) {
//       return (
//         <div className="custom-tooltip">
//           <p className="label">{`${label}`}</p>
//           <p className="lSMA">{`lSMA: ${lSMA}`}</p>
//           <p className="sSMA">{`sSMA: ${sSMA}`}</p>
//         </div>
//       );
//     }
//   }

//   return null;
// };

const Chart = () => {
  const [analysisData, setAnalysisData] = useState([]);

  const handleAnalysis = (data) => {
    setAnalysisData(data);
  };
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 20, right: 20, left: 5, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="date"
          style={{
            fontSize: "12px",
          }}
        />

        <YAxis
          style={{
            fontSize: "12px",
          }}
        />

        <Tooltip />
        <Legend />

        <Line type="monotone" dataKey="sSMA" stroke="#E76F51" dot={false} />
        <Line type="monotone" dataKey="lSMA" stroke="#5F86D0" dot={false} />
        <Line type="monotone" dataKey="vwap" stroke="#422F01" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
