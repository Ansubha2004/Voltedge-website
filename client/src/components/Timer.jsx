import React, { useState, useEffect } from 'react'

function Timer({targetdate}) {

    const target = new Date(targetdate).getTime();

    const calculatetimeleft = () => {
        const diff = target - Date.now();

        if (diff <= 0)
            return null;

        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        }
    }
    const [timeleft, settimeleft] = useState(calculatetimeleft());
    useEffect(() => {
        const interval = setInterval(() => {
            settimeleft(calculatetimeleft())
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    if (!timeleft) {
        return (
            <div className="translate-y-5 text-3xl font-bold text-green-500">
                🎉 Countdown Finished!
            </div>
        );
    }

    return (
        <div className=" h-auto w-auto flex gap-5 items-center">
            <Timebox label="DAYS" value={timeleft.days} />
            <Timebox label="HOURS" value={timeleft.hours}/>
            <Timebox label="MINUTES" value={timeleft.minutes}/>
            <Timebox label="SECONDS" value={timeleft.seconds}/>
        </div>
    )
}

function Timebox({label, value}) {
    return (
        <div className="w-20 h-20 border-box p-0.5 bg-gradient-to-br from-teal-500 rounded-[10px] via-purple-500 shadow-[0px_0px_12px_rgba(168,85,247,0.6)] to-red-500 ">
            <div className="w-full h-full bg-black/70 backdrop-blur-lg rounded-[7px] text-white flex flex-col items-center justify-center">
                <p className=" text-[2rem] leading-none space-mono-bold text-blue-400">{String(value).padStart(2,"0")}</p>
                <p className="text-[0.7rem] text-purple-300">{label}</p>
            </div>
        </div>
    )
}
export default Timer