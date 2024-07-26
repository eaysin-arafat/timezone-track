import MainCard from '@/components/shared/main-card'
import OpenInCalendarButton from '@/components/ui/button/open-in-calendar'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { format, getMinutes } from 'date-fns'
import { useEffect, useState } from 'react'

const ClockItem = ({ clock }: { clock: Date }) => {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const [currentMinute, setCurrentMinute] = useState<number>(getMinutes(clock))

  useEffect(() => {
    if (clock) setCurrentMinute(getMinutes(clock))
    // console.log("clock hour", clock.getHours());
  }, [clock])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMinute(getMinutes(clock))
    }, 60000) // Update every minute

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <MainCard>
      {clock && (
        <Box sx={{ position: 'relative' }}>
          <Typography variant="h5" sx={{ fontWeight: 100 }}>
            Locale Clock
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 1, position: 'relative' }}
          >
            <Typography variant="h6" fontWeight={600}>
              {format(clock, ' hh:ss MMMM dd, yyyy')}
            </Typography>

            <Box display="flex" alignItems="center">
              <OpenInCalendarButton />
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                <KeyboardArrowLeftIcon />
                <Button color="inherit">Today</Button>
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box>

          <Box sx={{ pb: 2 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'start',
                justifyItems: 'start',
                width: '100%',
                overflowX: 'auto',
                overflowY: 'hidden',
                position: 'relative'
              }}
            >
              {hours.map(hour => {
                return (
                  <Box
                    key={hour}
                    sx={{
                      width: '4.5em',
                      textAlign: 'start',
                      color: 'rgba(150, 150, 150, 0.6)',
                      flexShrink: 0,
                      px: 1,
                      height: 80,
                      position: 'relative'
                    }}
                  >
                    <Typography variant="subtitle2">
                      {hour % 12 === 0 ? 12 : hour % 12} {hour < 12 ? 'AM' : 'PM'}
                    </Typography>

                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: '0',
                        left: '0',
                        width: '100%',
                        bgcolor: 'rgba(189, 189, 189, 0.6)',
                        height: '1px'
                      }}
                    />

                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        // right: "0%",
                        width: '1px',
                        bgcolor: 'rgba(189, 189, 189, 0.6)',
                        height: '100%'
                      }}
                    />

                    {/* Vertical line indicating current minute */}
                    {clock && hour === clock.getHours() && (
                      <>
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: `${(currentMinute / 60) * 100}%`,
                            bgcolor: 'transparent',
                            width: '100%',
                            height: '100%',
                            color: '#6477FF'
                          }}
                        >
                          <Typography variant="subtitle2" sx={{ marginLeft: '-9px' }}>
                            {hour % 12 === 0 ? 12 : hour % 12}:{currentMinute}
                            {hour < 12 ? 'AM' : 'PM'}
                          </Typography>

                          <Box
                            sx={{
                              position: 'absolute',
                              top: 15,
                              left: 6,
                              width: 5,
                              height: 5,
                              borderRadius: '50%',
                              bgcolor: '#6477FF'
                            }}
                          />

                          <Box
                            sx={{
                              position: 'absolute',
                              top: 20,
                              left: 8,
                              width: '1px',
                              bgcolor: '#6477FF',
                              height: '100%'
                            }}
                          />
                        </Box>
                      </>
                    )}
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Box>
      )}
    </MainCard>
  )
}

export default ClockItem
