# Atomisk experiments

Experiments and code snippets that may or may not make it into atomisk.

## Blanket

Blanket overlay implementation with the following benefits over the design system's implementation:

- singleton instance to reduce memory footprint and make using the blanket a bit more logical (there's only one blanket element in the DOM)
- full decoupling from DOM (DOM querying performed in singleton function, not in `Blanket` class)
- assumption that blanket's parent is `.uomcontent` and blanket's root element is not present in the DOM upon initialisation
- support for variants (set dynamically when showing the blanket)

Furthermore, in the design system, components that use the blanket are responsible for adding their own click event listeners to the blanket's
root element (e.g. to dismiss the modal). This leads to strong coupling between the components and the blanket, and means that a lot of event
listeners are being added to the same DOM element and triggered unnecessarily. This implementation solves this problem by letting components
provide a click event listener when showing the blanket, allowing it to be added and removed dynamically.

### Usage

```js
import { getBlanket } from './blanket';

const blanket = getBlanket();

blanket.show();
blanket.hide();

blanket.toggle();
blanket.toggle(false);

blanket.show({
  onClick: dismissModal,
  variant: 'white'
});
```
