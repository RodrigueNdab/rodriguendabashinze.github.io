import { h } from '../dom.js';

export const sections = [
  ['home', 'Home'], ['about', 'About'], ['projects', 'Projects'],
  ['skills', 'Skills'], ['experience', 'Experience'], ['contact', 'Contact']
];

export function Navbar(name) {
  const list = h('ul', { id: 'nav-list', class: 'nav-list' },
    sections.map(([id, label]) => h('li', {}, h('a', { href: `#${id}` }, label))));
  const toggle = h('button', { class: 'nav-toggle', 'aria-expanded': 'false', 'aria-controls': 'nav-list' }, 'Menu');
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    list.classList.toggle('open', !open);
  });
  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      toggle.setAttribute('aria-expanded', 'false');
      list.classList.remove('open');
    }
  });
  return h('header', { class: 'navbar' },
    h('nav', { class: 'container nav', 'aria-label': 'Main' },
      h('a', { class: 'brand', href: '#home' }, name), toggle, list));
}
