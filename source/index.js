/**
 * Simple loads Svelte component
 */

import Index from './index.svelte.html';
const index = new Index({
  target: document.querySelector('.strib-card-container'),
  data: {}
});
