import { h } from '../dom.js';
import { Section } from '../ui/Section.js';

// No backend needed: validates input, then opens the visitor's mail client.
export function Contact(p) {
  const status = h('p', { id: 'contact-status', role: 'status', 'aria-live': 'polite' });
  const field = (id, label, tag, extra = {}) =>
    h('div', { class: 'field' }, h('label', { for: id }, label),
      h(tag, { id, name: id, required: true, ...extra }));
  const form = h('form', { novalidate: true },
    field('name', 'Name', 'input', { type: 'text', autocomplete: 'name' }),
    field('email', 'Email', 'input', { type: 'email', autocomplete: 'email' }),
    field('message', 'Message', 'textarea', { rows: '5' }),
    h('button', { class: 'btn btn-primary', type: 'submit' }, 'Send message'), status);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      status.textContent = 'Please fill in all fields with a valid email address.';
      form.reportValidity();
      return;
    }
    const d = new FormData(form);
    const subject = encodeURIComponent(`Message from ${d.get('name')}`);
    const body = encodeURIComponent(`${d.get('message')}\n\n${d.get('name')} <${d.get('email')}>`);
    status.textContent = 'Opening your email app…';
    window.location.href = `mailto:${p.email}?subject=${subject}&body=${body}`;
  });

  return Section('contact', 'Contact',
    h('p', {}, 'Email: ', h('a', { href: `mailto:${p.email}` }, p.email)), form);
}
