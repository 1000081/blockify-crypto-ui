import moment from "moment";

export function formatDate(date, format) {
  let given = moment(date, format);
  let current = moment().startOf("day");
  let days = moment.duration(given.diff(current)).asDays();
  let months = moment.duration(given.diff(current)).asMonths();
  let years = moment.duration(given.diff(current)).asYears();

  days = Math.round(days);
  months = Math.round(months);
  years = Math.round(years);

  let daysToDisplay = "";

  if ((days >= 0 && days < 29) || (days > -1 && days < -31)) {
    if (days === 1) {
      daysToDisplay = "Tomorrow";
    } else if (days > 1) {
      daysToDisplay = "in " + days + " days";
    } else if (days === 0) {
      daysToDisplay = "Today";
    } else if (days > 0) {
      daysToDisplay = Math.abs(days) + " days ago";
    }
  } else if ((months >= 1 && months < 11) || (months < -1 && months > -12)) {
    if (months === 1) {
      daysToDisplay = "a month ago";
    } else if (months > 1) {
      daysToDisplay = "in " + months + " months";
    } else if (months < -1) {
      daysToDisplay = Math.abs(months) + " months ago";
    }
  } else if (years >= 1 || years <= -1) {
    if (years === 1) {
      daysToDisplay = "in an year";
    } else if (years > 1) {
      daysToDisplay = years + " in years";
    } else if (years === -1) {
      daysToDisplay = " an year ago ";
    } else if (years < 0) {
      daysToDisplay = Math.abs(years) + " years ago ";
    }
  }
  return daysToDisplay;
}
