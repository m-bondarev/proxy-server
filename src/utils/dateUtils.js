import { previousFriday, previousMonday, format } from 'date-fns';
import { DATE_TEMPLATE } from '../constants/constants.js';

export const previousWorkWeek = (date) => {
  const friday = previousFriday(date);
  const monday = previousMonday(friday);

  const START_DATE = format(monday, DATE_TEMPLATE);
  const END_DATE = format(friday, DATE_TEMPLATE);

  return {
    START_DATE,
    END_DATE,
  };
};
