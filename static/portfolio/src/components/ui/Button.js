import { h } from '../dom.js';

export const Button = (label, href, variant = 'primary') =>
  h('a', { class: `btn btn-${variant}`, href }, label);
