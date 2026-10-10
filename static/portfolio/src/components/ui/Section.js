import { h } from '../dom.js';

export const Section = (id, title, ...children) =>
  h('section', { id, class: 'section', 'aria-labelledby': `${id}-title` },
    h('div', { class: 'container' }, h('h2', { id: `${id}-title` }, title), ...children));
