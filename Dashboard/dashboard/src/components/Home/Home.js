import React from "react";
import { BsFillTagsFill } from "react-icons/bs";
import { TbCameraDown } from "react-icons/tb";
import { AiOutlineLike } from "react-icons/ai";
import { PiUsers } from "react-icons/pi";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

function Home() {
  const data = [
    {
      name: "Week 1",
      User: 400,
      Guest: 200,
      amt: 100,
    },
    {
      name: "Week 2",
      User: 300,
      Guest: 198,
      amt: 100,
    },
    {
      name: "Week 3",
      User: 250,
      Guest: 200,
      amt: 100,
    },
    {
      name: "Week 4",
      User: 280,
      Guest: 308,
      amt: 100,
    },
    {
      name: "Week 5",
      User: 190,
      Guest: 400,
      amt: 100,
    },
    {
      name: "Week 6",
      User: 290,
      Guest: 500,
      amt: 100,
    },
    {
      name: "Week 7",
      User: 390,
      Guest: 430,
      amt: 100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h5>Total Revenues</h5>
            <TbCameraDown className="card_icon" />
          </div>
          <h5>300</h5>
        </div>
        <div className="card">
          <div className="card-inner">
            <h5>Total Transactions</h5>
            <BsFillTagsFill className="card_icon" />
          </div>
          <h5>12</h5>
        </div>
        <div className="card">
          <div className="card-inner">
            <h5>Total Likes</h5>
            <AiOutlineLike className="card_icon" />
          </div>
          <h5>33</h5>
        </div>
        <div className="card">
          <div className="card-inner">
            <h5>Total Users</h5>
            <PiUsers className="card_icon" />
          </div>
          <h5>42</h5>
        </div>
      </div>

      <div className="charts">
        <div className="chart-activities">
          <p>Activities</p>
          <p>20 May 2023</p>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={800}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid stroke="rgba(0, 0, 0, 0.1)" vertical={false} />
            <XAxis dataKey="name" axisLine={false} tickLine={false}/>
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip />
            <Legend 
            iconType="circle"
            iconSize={10}
            align="right"
            verticalAlign="top"
            wrapperStyle={{ paddingBottom: 10, position: "absolute", top: -70, right:70}}/>
            <Line
              type="monotone"
              dataKey="Guest"
              stroke="#E21717"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="User"
              stroke="#4DD637"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
