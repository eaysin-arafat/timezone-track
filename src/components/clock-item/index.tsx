import useClock from "@/hooks/useClock";
import useLiveClock from "@/hooks/useLiveClock";
import { Typography } from "@mui/material";
import { format } from "date-fns";
import MainCard from "../shared/main-card";

function Clock() {
  const { clock } = useClock();
  const { liveClock } = useLiveClock(clock.date);
  const {
    clock: { date: PST },
  } = useClock("PST");
  const { liveClock: PSTDate } = useLiveClock(PST);

  return (
    <MainCard>
      {liveClock && PSTDate && (
        <>
          <Typography variant="h4">
            {format(liveClock, "yyyy-MM-dd HH:mm:ss")}

            {/* {liveClock.toString()} */}
          </Typography>
          <Typography variant="h4">
            {format(PSTDate, "yyyy-MM-dd HH:mm:ss")}

            {/* {liveClock.toString()} */}
          </Typography>
        </>
      )}
    </MainCard>
  );
}

export default Clock;
