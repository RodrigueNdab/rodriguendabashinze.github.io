import { h } from '../dom.js';
import { Section } from '../ui/Section.js';
import { Card } from '../ui/Card.js';
import { Tag } from '../ui/Tag.js';

export const Skills = (p) =>
  Section('skills', 'Skills',
    h('div', { class: 'grid' }, p.skills.map((g) =>
      Card(h('h3', {}, g.group), h('ul', { class: 'tags' }, g.items.map(Tag))))));
