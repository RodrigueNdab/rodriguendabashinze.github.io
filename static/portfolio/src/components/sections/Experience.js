import { h } from '../dom.js';
import { Section } from '../ui/Section.js';

export const Experience = (p) =>
  Section('experience', 'Experience',
    h('ol', { class: 'timeline' }, p.experience.map((e) =>
      h('li', {}, h('strong', {}, e.title), h('span', {}, `${e.org}`), h('em', {}, e.period)))));
