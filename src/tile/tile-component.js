import { template, tile } from './tile-component-template'

customElements.define('tile-component',

  /**
   *
   */
  class extends HTMLElement {
    #tile

    /**
     *
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#tile = this.shadowRoot.querySelector('.tile')
      console.log(this.#tile)
    }
  }
)
