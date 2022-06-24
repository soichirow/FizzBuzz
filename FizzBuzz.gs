function fizzBuzz() {
  const startNumber = -1
  const endNumber = 100
  const fizzBuzz = new FizzBuzz(startNumber, endNumber)
  fizzBuzz.log()

}

class FizzBuzz {
  constructor(startNumber, endNumber) {
    if (isNaN(startNumber) || isNaN(endNumber)) throw '引数は数字を指定してください'
    if (startNumber < 0 || startNumber < 0) throw '引数は正の値を指定してください'
    if (startNumber > endNumber) throw 'endNumberはstartNumberより大きくしてください。'

    this.startNumber = startNumber;
    this.endNumber = endNumber;
  }
  /**
   * @return {void}
   */
  log() {
    for (let cnt = this.startNumber; cnt <= this.endNumber; cnt++) {
      if (this.isFizz_(cnt)) {console.log('Fizz'); continue}

      if (this.isBuzz_(cnt)) {console.log('Buzz');continue}

      if (this.isFizzBuzz_(cnt)) {console.log('FizzBuzz');continue}
      console.log(cnt)

    }
  }
  /**
   * 3の倍数かつ5の倍数では無いことを調べるメソッド
   * @param {number} number
   * @param {Boolean} Boolean
   * @private
   */
  isFizz_(number) {
    return (number % 3 === 0 && number % 5 !== 0)
  }
  /**
   * 5の倍数かつ3の倍数では無いことを調べるメソッド
   * @param {number} number
   * @param {Boolean} Boolean
   * @private
   */
  isBuzz_(number) {
    return (number % 3 !== 0 && number % 5 === 0)
  }
  /**
   * 15の倍数であることを調べるメソッド
   * @param {number} number
   * @param {Boolean} Boolean
   * @private
   */
  isFizzBuzz_(number) {
    return (number % 3 === 0 && number % 5 === 0)

  }
}