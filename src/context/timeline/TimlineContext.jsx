import React, { createContext, useState } from 'react'

export const TimelineContext = createContext();
const callImg = "/images/call.png"
const textImg = "/images/text.png"
const videoImg = "/images/video.png"

const TimlineProvider = ({children}) => {
    const [timeline, setTimeline] = useState([]);

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
};

  return (
    <TimelineContext.Provider value={{timeline, handleAction}}>
        {children}
    </TimelineContext.Provider>
  );
};

export default TimlineProvider;