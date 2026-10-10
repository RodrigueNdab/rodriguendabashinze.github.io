import { h } from '../dom.js';

export const Footer = (name) =>
  h('footer', { class: 'footer' },
    h('div', { class: 'container' },
      `© ${new Date().getFullYear()} ${name}. `,
      h('a', { href: '../' }, 'Academic site')));
