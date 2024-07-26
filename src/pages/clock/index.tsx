import ClockList from '@/components/clocks/clock-list'

import { Typography } from '@mui/material'

export default function Clock() {
  return (
    <>
      <Typography variant="h5">Clocks</Typography>
      <ClockList />
    </>
  )
}
