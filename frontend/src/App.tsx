import { useEffect, useState } from "react"
import "./App.css"

import Time from "./components/Time"
import Metrics from "./components/Metrics"

import BaseApi from "./services/BaseApi"

function App() {
  const [serverEpochTime, setServerEpochTime] = useState<number | null>(null)
  const [serverMetrics, setServerMetrics] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setServerEpochTime(null)
      setServerMetrics(null)

      fetchTimeInEpochs()
      fetchMetrics()
    }, 30000)
    const fetchTimeInEpochs = async () => {
      const baseApi = new BaseApi()
      const epochTime = await baseApi.get<any>("/time")
      setServerEpochTime(epochTime.data.epoch)
    }
    const fetchMetrics = async () => {
      const baseApi = new BaseApi()
      const metricHtml = await baseApi.get<any>("/metrics")
      setServerMetrics(metricHtml.data)
    }
    fetchTimeInEpochs()
    fetchMetrics()
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">
      <div className="left">
        <Time currentEpoch={serverEpochTime} />
      </div>
      <div className="right">
        <Metrics metrics={serverMetrics} />
      </div>
    </div>
  )
}

export default App
