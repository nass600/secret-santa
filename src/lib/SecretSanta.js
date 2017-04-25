
/**
 * Secret Santa algorithm
 *
 * @class SecretSanta
 * @author Ignacio Velazquez <ivelazquez85@gmail.com>
 */
var SecretSanta = (function () {

  /**
   * Random number generation
   *
   * @param n
   * @returns {number}
   */
  var derangementNumber = function (n) {
    if (n == 0) {
      return 1;
    }
    var factorial = 1;
    while (n) {
      factorial *= n--;
    }
    return Math.floor(factorial / Math.E);
  };

  /**
   * Shuffles the given array
   *
   * @param array
   * @returns {ArrayBuffer|string|Blob|Array.<T>|*}
   */
  var derange = function (array) {
    array = array.slice();
    var mark = array.map(function () {
      return false;
    });
    for (var i = array.length - 1, u = array.length - 1; u > 0; i--) {
      if (!mark[i]) {
        var unmarked = mark.map(function (_, i) {
          return i;
        }).filter(function (j) {
            return !mark[j] && j < i;
          });
        var j = unmarked[Math.floor(Math.random() * unmarked.length)];

        var tmp = array[j];
        array[j] = array[i];
        array[i] = tmp;

        // this introduces the unbiased random characteristic
        if (Math.random() < u * derangementNumber(u - 1) / derangementNumber(u + 1)) {
          mark[j] = true;
          u--;
        }
        u--;
      }
    }
    return array;
  };

  /**
   * Generates matches
   *
   * @param senders
   * @param id
   * @returns {Object}
   */
  var getMatches = function (senders, id) {
    var receivers = derange(senders);
    var matches = [];

    for (i = 0; i < senders.length; i++) {
      matches.push({
        sender: senders[i],
        receiver: receivers[i]
      })
    }

    return derange(matches)
  };

  return {
    getMatches: getMatches
  }
})();

module.exports = SecretSanta;
