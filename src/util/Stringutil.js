import moment from "moment";
import * as types from "../Constants";

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

export function stringToDate(string) {
  return moment("2018-05-18T04:00:00.000Z").format("DD MMM, YYYY");
}

export function filteredList(coinList, coinType) {
  const results = coinList.filter((coin) => {
    let filteredCoin = "";
    if (coinType === types.COIN_TYPE_NEW && coin.isNew === types.STRING_Y) {
      filteredCoin = coin;
    } else if (
      coinType === types.COIN_TYPE_PROMOTED &&
      coin.isPromoted === types.STRING_Y
    ) {
      filteredCoin = coin;
    } else if (
      coinType === types.COIN_TYPE_NORMAL &&
      coin.isNormal === types.STRING_Y
    ) {
      filteredCoin = coin;
    } else if (
      coinType === types.COIN_TYPE_ATB &&
      coin.isATB === types.STRING_Y
    ) {
      filteredCoin = coin;
    } else if (
      coinType === types.COIN_TYPE_PRE_SALE &&
      coin.isPresale === types.STRING_Y
    ) {
      filteredCoin = coin;
    } else if (
      coinType === types.COIN_TYPE_LISTED &&
      coin.isListed === types.STRING_Y
    ) {
      filteredCoin = coin;
    }
    return filteredCoin;
  });
  return results;
}
