// Class used to show the blanket
const ON_CLASS = 'on';

// Default options
const DEFAULTS = {
  variant: null
};

/**
 * Blanket for modals and injected search form.
 * @singleton
 */
export default class Blanket {

  constructor(el) {
    this.el = el;
    this.props = Object.assign({}, DEFAULTS);
  }

  /**
   * Inject the blanket into the DOM as a child of the given container.
   * @param {Element} container
   */
  inject(container) {
    container.appendChild(this.el);
  }

  /**
   * Show the blanket.
   * @param {Object} opts (optional)
   *        - {Function} onClick - click event handler
   *        - {String} variant - e.g. `white` for a white overlay
   */
  show(opts = {}) {
    // Show the blanket
    this.el.classList.add(ON_CLASS);

    // If a click event handler is provided, register it
    if (opts.onClick) {
      this.el.addEventListener('click', opts.onClick);
    }

    // If a variant is provided, add it as a class
    if (opts.variant) {
      this.el.classList.add(`blanket--${variant}`);
    }

    // Save the options into the props
    Object.assign(this.props, opts);
  }

  /**
   * Hide the blanket.
   */
  hide() {
    // Hide the blanket
    this.el.classList.remove(ON_CLASS);

    // Remove click event listener
    if (this.props.onClick) {
      this.el.removeEventListener('click', this.props.onClick);
    }

    // Remove variant class
    if (this.props.variant) {
      this.el.classList.remove(`blanket--${variant}`);
    }

    // Reset props
    Object.assign(this.props, DEFAULTS);
  }

  /**
   * Toggle the visibility of the blanket.
   * @param {Boolean} force (optional) - whether to force showing or hiding the blanket
   * @param {Object} opts (optional) - see Blanket::show()
   */
  toggle(force, opts) {
    // If `force` flag is truthy, or if it's not set and the blanket is hidden, show the blanket; otherwise, hide it
    if (force || typeof force === 'undefined' && !this.el.classList.contains(ON_CLASS)) {
      this.show(opts);
    } else {
      this.hide();
    }
  }

}
