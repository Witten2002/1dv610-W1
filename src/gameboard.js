class Gameboard {
    constructor() {
        var gameboard = []
        for(var x = 0; x < 3; x++) {
            gameboard.push([['a'], ['b'], ['c']])
        }
        this.#printBoard()
    }
    #clearConsole() {
        console.clear()
    }
    #printBoard() {
        console.log(gameboard)

        for(const x of gameboard) {
            for(const y of x) {
                for(const z of y) {
                    console.log(z)
                }
            }
        }
    }
}
export { Gameboard }