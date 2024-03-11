import { previousFriday, previousMonday, format } from "date-fns";

const TODAY = new Date();
const DATE_FORMAT = "yyyy-MM-dd";

export const END_DATE = format(previousFriday(TODAY), DATE_FORMAT);
export const START_DATE = format(previousMonday(TODAY), DATE_FORMAT);
