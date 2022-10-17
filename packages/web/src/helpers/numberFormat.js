module.exports = {
  /**
   * Formatea un numero de acuerdo a sus decimales
   *
   * @param integer number: number to be formated
   * @param integer n: length of decimal
   * @param integer x: length of whole part
   * @param mixed   s: sections delimiter
   * @param mixed   c: decimal delimiter
   */
  format: function (number, n, x, s, c) {
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
      num = number.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(
      new RegExp(re, 'g'),
      '$&' + (s || ',')
    );
  },
};
