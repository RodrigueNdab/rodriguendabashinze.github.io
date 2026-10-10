import { h } from '../dom.js';
import { Section } from '../ui/Section.js';
import { Card } from '../ui/Card.js';
import { Tag } from '../ui/Tag.js';

const isSafeUrl = (u) => /^https?:\/\//i.test(u || '');

export function Projects(projects) {
  const grid = h('div', { class: 'grid' }, projects.map((pr) =>
    Card(
      h('h3', {}, pr.title),
      h('p', {}, pr.description),
      h('ul', { class: 'tags', 'aria-label': 'Topics' }, (pr.tags || []).map(Tag)),
      isSafeUrl(pr.link) && h('a', { href: pr.link, rel: 'noopener noreferrer', target: '_blank' }, 'Learn more'))));
  return Section('projects', 'Projects', projects.length ? grid : h('p', {}, 'No projects yet.'));
}
