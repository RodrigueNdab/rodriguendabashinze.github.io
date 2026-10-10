import { h } from '../dom.js';

export const Tag = (text) => h('li', { class: 'tag' }, text);
