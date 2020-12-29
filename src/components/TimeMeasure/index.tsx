// Localization files
import deLocale from "date-fns/locale/de";
import ruLocale from "date-fns/locale/ru";
import enLocale from "date-fns/locale/en-US";
import etLocale from "date-fns/locale/et";
import ltLocale from "date-fns/locale/lt";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import React, {
  useState,
  useContext,
  useEffect,
} from "react";
import { TextField } from "@material-ui/core";
import DateRangePicker, { DateRange } from "@material-ui/lab/DateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import DateRangeDelimiter from "@material-ui/lab/DateRangeDelimiter";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { formatDuration, formatDistanceStrict } from "date-fns";
import { Context } from "../../store";

const localeMap = {
  en: enLocale,
  et: etLocale,
  de: deLocale,
  ru: ruLocale,
  lt: ltLocale,
};

const getConvertedValue = (start: any, end: any, localeStr: any) => {
    const resultMonth = formatDistanceStrict(end, start, {
      unit: "month",
      locale: localeStr,
    });
    const resultDay = formatDistanceStrict(end, start, {
      unit: "day",
      locale: localeStr,
    });
    const resultHour = formatDistanceStrict(end, start, {
      unit: "hour",
      locale: localeStr,
    });
    const resultMin = formatDistanceStrict(end, start, {
      unit: "minute",
      locale: localeStr,
    });

    //console.log(resultMin); // => 14400 minutit

    const result = (s: string): any =>
      (s.match(/\d+/g) || []).find((n) => parseInt(n));

    const getCombinedValues = () => {
      let min = parseInt(result(resultMin));
      let mo = parseInt(result(resultMonth));
      let day = parseInt(result(resultDay));
      let hr = parseInt(result(resultHour));
      return formatDuration(
        { months: mo ? mo : 0, days: day, hours: hr, minutes: min },
        { delimiter: ", ", zero: true, locale: localeStr }
      );
    };

    return (
      <>
        <div className="panel">
          <p className="panel-heading">
            <span>
              <AccessTimeIcon />
            </span>
            {getCombinedValues()}
          </p>
          <div className="panel-block">
            <p>{resultMonth}</p>
          </div>
          <div className="panel-block">
            <p>{resultDay}</p>
          </div>
          <div className="panel-block">
            <p>{resultHour}</p>
          </div>
          <div className="panel-block">
            <p>{resultMin}</p>
          </div>
        </div>
      </>
    );
};

const DateTimeWrapper = () => {
  // @ts-ignore
  const [state] = useContext(Context);
  const [locale, setLocale] = useState("");

  useEffect(() => {
    setLocale(state.currentLng.slice(0, 2));
  }, [state.currentLng])
  //console.log(locale)
  const [value, setValue] = useState<DateRange<Date | null>>([null, null]);

  // @ts-ignore
  let localeStr: any = localeMap[locale];

  return (
    <>
    <div className="row align-helper">
    <div className="big-wrapper">
      <div className="date-picker-wrapper">
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={localeStr}>
          <DateRangePicker
            startText="Algus"
            endText="Lõpp"
            value={value}
            onChange={(date: any) => setValue(date)}
            renderInput={(startProps, endProps) => (
              <>
                <div className="col-md-6">
                  <TextField {...startProps} variant="standard" />
                </div>
                <DateRangeDelimiter style={{ alignSelf: 'center'}}>
                  <ArrowRightAltIcon />
                </DateRangeDelimiter>
                <div className="col-md-6">
                  <TextField {...endProps} variant="standard" />
                </div>
              </>
            )}
          />
        </LocalizationProvider>
      </div>
      <div className="row justify-content-center total-wrapper">
        <div>
          {value[0] && value[1] && getConvertedValue(value[0], value[1], localeStr)}
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default DateTimeWrapper;
