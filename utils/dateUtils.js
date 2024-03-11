const TODAY = new Date();
const YESTERDAY = new Date();

export default class DateUtils {
  /**
   *
   * @returns {{yesterday: string, today: string}} object which contains yesterday and today dates
   */
  static dates = () => {
    const yesterdayDate = new Date(YESTERDAY.setDate(YESTERDAY.getDate() - 1));

    return {
      yesterday: this.formatDate(yesterdayDate),
      today: this.formatDate(TODAY),
    };
  };

  /**
   * Convert a date into YYYY-MM-DD
   * @param {Date} date - a single moment in time
   * @returns {string} date in desired format
   */
  static formatDate = (date) => {
    return date.toISOString().split("T")[0];
  };
}
