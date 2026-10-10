import { h } from '../dom.js';
import { Button } from '../ui/Button.js';

export const Home = (p) =>
  h('section', { id: 'home', class: 'section hero' },
    h('div', { class: 'container hero-inner' },
      h('img', { class: 'avatar', src: p.avatar, alt: `Portrait of ${p.name}`, width: '160', height: '160' }),
      h('div', {},
        h('p', { class: 'eyebrow' }, p.role),
        h('h1', {}, p.name),
        h('p', { class: 'lead' }, p.tagline),
        h('div', { class: 'actions' },
          Button('View projects', '#projects'), Button('Get in touch', '#contact', 'ghost')))));
