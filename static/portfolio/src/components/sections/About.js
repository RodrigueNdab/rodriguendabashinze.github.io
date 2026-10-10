import { h } from '../dom.js';
import { Section } from '../ui/Section.js';

export const About = (p) =>
  Section('about', 'About', ...p.about.map((t) => h('p', {}, t)),
    h('ul', { class: 'links' }, p.socials.map((s) =>
      h('li', {}, h('a', { href: s.url, rel: 'noopener noreferrer', target: '_blank' }, s.label)))));
