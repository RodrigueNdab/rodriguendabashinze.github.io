# Lightweight dynamic portfolio

A dependency-free, component-based portfolio (plain ES modules, no build step). Hugo copies
`static/` as-is, so it is published with the main site at `/portfolio/` on GitHub Pages / Netlify.

## Structure

```
index.html                     page shell
avatar.jpg                     profile photo
src/main.js                    loads data and assembles the page
src/data/profile.js            name, bio, social links, skills, experience
src/data/projects.json         projects (fetched at runtime)
src/components/sections/       Home, About, Projects, Skills, Experience, Contact
src/components/shared/         Navbar, Footer
src/components/ui/             Button, Card, Tag, Section primitives
src/styles/main.css            styles (responsive, dark mode, reduced motion)
```

## Editing content

- Profile, skills and experience: edit `src/data/profile.js`.
- Projects: add/remove objects in `src/data/projects.json` (`title`, `description`, `tags`, `link`).
- Contact form validates input and opens the visitor's email client (`mailto:`), so no backend is required.

## Preview locally

ES modules and `fetch` need HTTP: run `hugo server` and open `/portfolio/`, or `python3 -m http.server` inside this folder.
