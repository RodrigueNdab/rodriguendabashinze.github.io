import { h } from '../dom.js';

export const Card = (...children) => h('article', { class: 'card' }, ...children);
