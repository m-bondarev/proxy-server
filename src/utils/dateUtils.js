import { previousFriday, previousMonday, format } from 'date-fns';

const DATE_FORMAT = 'yyyy-MM-dd';

export const previousWorkWeek = (date) => {
  const friday = previousFriday(date);
  const monday = previousMonday(friday);

  const START_DATE = format(monday, DATE_FORMAT);
  const END_DATE = format(friday, DATE_FORMAT);

  return {
    START_DATE,
    END_DATE,
  };
};
