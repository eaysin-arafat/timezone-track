/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  LOCALE_OFFSET,
  TIMEZONE_OFFSET,
} from "@/constants/data/timezone-offset";
import { addMinutes } from "date-fns";
import { useEffect, useState } from "react";

type Timezone = keyof typeof TIMEZONE_OFFSET;

type ClockType = {
  date: any;
  utc: any;
  offset: number;
};

const initialState: ClockType = {
  date: "",
  utc: "",
  offset: 0,
};

const useClock = (timezone?: Timezone, offset: number = LOCALE_OFFSET) => {
  const [state, setState] = useState<ClockType>({ ...initialState });

  useEffect(() => {
    const d = new Date();
    const utc = addMinutes(d, d.getTimezoneOffset());

    const effectiveOffset = timezone ? TIMEZONE_OFFSET[timezone] : offset;
    const localDate = addMinutes(utc, effectiveOffset);

    setState((prev) => ({
      ...prev,
      date: localDate,
      offset: effectiveOffset,
      utc,
    }));
  }, [timezone, offset]);

  return { clock: state };
};

export default useClock;
