import React, { useState, useEffect } from 'react'

function Timer(targetdate) {

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
            settimeleft(calculatetimeleft)
        }, 1000)
        return () => clearInterval(interval);
    }, [])
    if (!timeLeft) {
        return (
            <div className="text-3xl font-bold text-green-500">
                🎉 Countdown Finished!
            </div>
        );
    }

    return (
        <div className="h-auto w-auto flex gap-4">
            <Timebox label="DAYS" value={timeleft.days} />
            <Timebox label="HOURS" value={timeleftleft.hours}/>\
            <Timebox label="MINUTES" value={timeleft.minutes}/>
            <Timebox label="SECONDS" value={timeleft.seconds}/>
        </div>
    )
}

function Timebox(label, value) {
    return (
        <div>
            
        </div>
    )
}
export default Timer