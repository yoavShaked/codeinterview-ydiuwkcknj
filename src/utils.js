import moment from "moment";

export const roundDecimal = (number) => Math.round(number * 100) / 100;
export const formatDate = (date) => moment(date).format('MMMM Do YY');