import React, { useContext } from 'react'
import { TimelineContext } from '../../context/timeline/TimlineContext';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const COLORS = ["#8B5CF6", "#244D3F", "#22C55E"];

const Stats = () => {
    const {timeline} = useContext(TimelineContext);

    const safeTimeline = timeline || [];

    const callCount = timeline.filter(i => i.type === "Call").length;
    const textCount = timeline.filter(i => i.type === "Text").length;
    const videoCount = timeline.filter(i => i.type === "Video").length;

    const data = [
        { name: "Text", value: callCount },
        { name: "Call", value: textCount },
        { name: "Video", value: videoCount },
    ]
  return (
    <>
        <div className="max-w-6xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="mb-4 text-sm text-gray-500">By Interaction Type</h2>

        <div className=''>
            <div className='flex justify-center items-center'>
            <PieChart width={300} height={300}>
            <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={100}
            >
                {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
                ))}
            </Pie>
            <Tooltip />
            </PieChart>
        </div>
        <div className="flex justify-center items-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[0] }}></div>
                    <span>Text</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[1] }}></div>
                    <span>Call</span>
                </div>

                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS[2] }}></div>
                    <span>Video</span>
                </div>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Stats