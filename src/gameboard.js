/**
 *
 */
class Gameboard {
    #gameboard = []
  /**
   *
   */
  constructor () {
    for (let x = 0; x < 3; x++) {
      this.#gameboard.push(['a', 'b', 'c'])
    }
    // this.#printBoard()
  }

  /**
   *
   */
  #clearConsole () {
    console.clear()
  }

  /**
   *
   */
  #printBoard () {
    console.log(this.#gameboard)

    for (const x of this.#gameboard) {
      for (const y of x) {
        for (const z of y) {
          console.log(z)
        }
      }
    }
  }
}
export { Gameboard }
