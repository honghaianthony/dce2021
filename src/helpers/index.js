function Duration(Current, Target) {
  var CalcTime = Current - Target; // Current - Initiallized

  var Years = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7 / 4 / 12);
  CalcTime -= Years * (1000 * 60 * 60 * 24 * 7 * 4 * 12);
  var Months = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7 / 4);
  CalcTime -= Months * (1000 * 60 * 60 * 24 * 7 * 4);
  var Weeks = Math.floor(CalcTime / 1000 / 60 / 60 / 24 / 7);
  CalcTime -= Weeks * (1000 * 60 * 60 * 24 * 7);
  // The calculation seconds to days works properly & The calculation of weeks to years may be off slightly
  var Days = Math.floor(CalcTime / 1000 / 60 / 60 / 24);
  CalcTime -= Days * (1000 * 60 * 60 * 24);
  var Hours = Math.floor(CalcTime / 1000 / 60 / 60);
  CalcTime -= Hours * (1000 * 60 * 60);
  var Minutes = Math.floor(CalcTime / 1000 / 60);
  CalcTime -= Minutes * (1000 * 60);
  var Seconds = Math.floor(CalcTime / 1000 / 60);

  return (
    (Years != 0 ? Years + (Years == 1 ? "year " : "years ") : "") +
    (Months != 0 ? Months + (Months == 1 ? "month " : "months ") : "") +
    (Weeks != 0 ? Weeks + (Weeks == 1 ? "week " : "weeks ") : "") +
    (Days != 0 ? Days + (Days == 1 ? "day " : "days ") : "") +
    (Hours != 0
      ? (Hours <= 9 ? "0" + Hours : Hours) + (Hours == 1 ? "hr " : "hrs ")
      : "") +
    (Minutes != 0
      ? (Minutes <= 9 ? "0" + Minutes : Minutes) +
        (Minutes == 1 ? "min " : "mins ")
      : "") +
    (Seconds != 0
      ? (Seconds <= 9 ? "0" + Seconds : Seconds) +
        (Seconds == 1 ? "sec " : "secs ")
      : "")
  );
}

export { Duration };
