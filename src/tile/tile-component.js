import { template } from './tile-component-template'
import { Gameboard } from '../gameboard'

customElements.define('tile-component',

  /**
   *
   */
  class extends HTMLElement {
    #tile
    #pElement

    /**
     *
     */
    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
      this.shadowRoot.appendChild(template.content.cloneNode(true))

      this.#tile = this.shadowRoot.querySelector('.tile')
      this.#pElement = this.shadowRoot.querySelector('p')
    }

    static get observedAttributes () {
      return ['value']
    }

    attributeChangedCallback (name, oldValue, newValue) {
      if (name === 'value' && oldValue !== newValue) {
        console.log('changedAttributeCallback', newValue)
        this.#pElement.textContent = newValue
      }
    }
  }
)
