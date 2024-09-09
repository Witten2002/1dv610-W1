import { template } from './gameboard-component-template.js'
import { Gameboard } from '../gameboard.js'

customElements.define('gameboard-component',
  class extends HTMLElement {
    #gameboard
    #viewGameboard
    #currentPlayer

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#gameboard = []
      this.#currentPlayer = 0

      for (let x = 0; x < 3; x++) {
        this.#gameboard.push([null, null, null])
      }

      this.#viewGameboard = this.shadowRoot.querySelector('.gameboard')

      for (let x = 0; x < this.#gameboard.length; x++) {
        for (let y = 0; y < this.#gameboard[x].length; y++) {
          const tile = document.createElement('tile-component')
          const id = `${x}${y}`
          // tile.setAttribute('value', this.#gameboard[x][y])
          tile.setAttribute('id', id)
          console.log('tile', tile)
          this.#viewGameboard.appendChild(tile)
        }
      }

      this.#viewGameboard.addEventListener('click', (event) => {
        const id = event.target.getAttribute('id')
        const idArray = id.split('')
        const x = parseInt(idArray[0])
        const y = parseInt(idArray[1])

        if (this.#gameboard[x][y] !== null) {
          if (this.#currentPlayer % 2 === 0) {
            event.target.setAttribute('value', 'x')
          } else {
            event.target.setAttribute('value', 'o')
          }

          this.#gameboard[x][y] = event.target.getAttribute('value')
          console.log('this.#gameboard', this.#gameboard)
          this.#currentPlayer++
        })
      }

    }
  }
)
