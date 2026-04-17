import React, { useContext, useState } from 'react'
import { TimelineContext } from '../../context/timeline/TimlineContext'
const callImg = "/images/call.png"
const textImg = "/images/text.png"
const videoImg = "/images/video.png"


const Timline = () => {
    const {timeline} = useContext(TimelineContext);
    const [search, setSearch] = useState("");
    const [view, setView] = useState("Timeline");

    const handleAction = (type, name) => {
        let icon;

        if (type === "Call") icon = callImg;
        if (type === "Text") icon = textImg;
        if (type === "Video") icon = videoImg;

        const newItem = {
            id: Date.now(),
            type,
            name,
            tittle: `${type} with ${name}`,
            date: new Date().toLocaleString(),
            icon,
        };
    
        setTimeline((prev) => [...prev, newItem]);
}

  return (
    <>
        {view === "Timeline" && (
        <section className="p-10 bg-[#F8FAFC] pl-60 pr-60 pt-20 pb-20 max-[576px]:p-4 max-[768px]:p-8">
          <h1 className="text-5xl mb-6 font-bold">Timeline</h1>

          <input
            type="text"
            placeholder="Filter timeline..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 mb-4 border rounded"
          />


          {timeline
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase()) ||
              item.type.toLowerCase().includes(search.toLowerCase())
            )
            .map((item) => (
              <div key={item.id} className="bg-[#FFFFFF] p-4 mb-2 rounded-lg shadow flex gap-4 items-center max-[576px]:p-3 max-[576px]:gap-2">
                {/* icon */}
                <div className="font-semibold">
                  <div className='text-xs'> <img src={item.icon} alt="" /> </div>
                </div>

                <div>
                  <div className='text-xl font-semibold mb-2.5'>
                    {item.tittle}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xl">{item.date}</p>
                  </div>
                </div>
              </div>
            ))}
        </section>
      )}
    </>
  )
}

export default Timline