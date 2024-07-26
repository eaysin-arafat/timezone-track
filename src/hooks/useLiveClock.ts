import { addSeconds, isValid } from 'date-fns'
import { useEffect, useState } from 'react'

const useLiveClock = (date: Date) => {
  const [clock, setClock] = useState(date)

  useEffect(() => {
    if (!isValid(date)) return

    setClock(date)
  }, [date])

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(prevClock => addSeconds(prevClock, 1))
    }, 60 * 1000) // Update every second

    return () => clearInterval(interval) // Cleanup interval on unmount
  }, [])

  return { liveClock: clock }
}

export default useLiveClock
