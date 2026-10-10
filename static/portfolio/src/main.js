import { profile } from './data/profile.js';
import { Navbar } from './components/shared/Navbar.js';
import { Footer } from './components/shared/Footer.js';
import { Home } from './components/sections/Home.js';
import { About } from './components/sections/About.js';
import { Projects } from './components/sections/Projects.js';
import { Skills } from './components/sections/Skills.js';
import { Experience } from './components/sections/Experience.js';
import { Contact } from './components/sections/Contact.js';

async function loadProjects() {
  try {
    const res = await fetch(new URL('./data/projects.json', import.meta.url));
    if (!res.ok) throw new Error(res.statusText);
    return await res.json();
  } catch (err) {
    console.warn('Could not load projects.json', err);
    return [];
  }
}

const projects = await loadProjects();
document.getElementById('navbar').replaceWith(Navbar(profile.name));
document.getElementById('main').append(
  Home(profile), About(profile), Projects(projects), Skills(profile), Experience(profile), Contact(profile));
document.getElementById('footer').replaceWith(Footer(profile.name));
