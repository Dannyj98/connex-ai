import React from "react"
interface MetricsProps {
  metrics: string | null
}

const Time: React.FC<MetricsProps> = ({ metrics }) => {
  return (
    <div className="metrics-wrapper">
      {metrics ? (
        <pre>
          <code>{metrics}</code>
        </pre>
      ) : (
        <div className="loading-overlay">Loading...</div>
      )}
    </div>
  )
}

export default Time
