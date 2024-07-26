import useClock from '@/hooks/useClock'
import useLiveClock from '@/hooks/useLiveClock'
import ClockItem from '../clock-item'

function ClockList() {
  const { clock } = useClock()
  const { liveClock } = useLiveClock(clock.date)

  const {
    clock: { date: PST }
  } = useClock('PST')
  const { liveClock: PSTDate } = useLiveClock(PST)

  return (
    <>
      <ClockItem clock={liveClock} />
      <br />
      <ClockItem clock={PSTDate} />
    </>
  )
}

export default ClockList
