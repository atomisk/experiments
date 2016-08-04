import Blanket from './Blanket';

/**
 * Singleton instance.
 * @type {Blanket}
 */
const instance;

/**
 * Create the blanket and add it to the DOM unless it already exists, then return it.
 * @return {Blanket}
 */
export function getBlanket() {
  if (!instance){
    // Create the blanket's root element
    const el = document.createElement('div');
    el.className = 'blanket';

    // Initialise the blanket and inject it into the DOM
    instance = new Blanket(el);
    instance.inject(document.querySelector('.uomcontent'));
  }

  // Return the blanket instance
  return instance;
}
