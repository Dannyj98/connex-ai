import React, { useEffect, useState } from "react"

interface TimeProps {
  currentEpoch: number | null
}

const Time: React.FC<TimeProps> = ({ currentEpoch }) => {
  const [timeDifference, setTimeDifference] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentEpoch !== null) {
        const currentTime = Math.floor(Date.now() / 1000)
        const diffInSeconds = currentTime - currentEpoch
        const hours = Math.floor(diffInSeconds / 3600)
        const minutes = Math.floor((diffInSeconds % 3600) / 60)
        const seconds = diffInSeconds % 60
        setTimeDifference(
          `${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        )
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [currentEpoch])

  return (
    <div className="time-wrapper">
      {currentEpoch ? (
        <>
          <div className="epoch-time">
            <p>The current time in epochs is: {currentEpoch}</p>
          </div>
          <div className="time-difference">
            <p>Time difference is: {timeDifference}</p>
          </div>
        </>
      ) : (
        <div className="loading-overlay">Loading...</div>
      )}
    </div>
  )
}

export default Time
