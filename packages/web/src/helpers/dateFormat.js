module.exports = {
  /**
   * Recibe una hora en formato 2022-10-12T08:45:58.479Z
   * y lo transforma en formato 2022-10-12 05:45:58
   * En horario local
   */

  format: function (date) {
    const nwDate = new Date(date)
    const dateFormat = `${nwDate.getFullYear()}-${nwDate.getMonth()}-${nwDate.getDate()} ${nwDate.getHours()}:${nwDate.getMinutes()}:${nwDate.getSeconds()}`

    return dateFormat
  },
};
