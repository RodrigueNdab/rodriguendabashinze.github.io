---
# Leave the homepage title empty to use the site title
title: ''
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Hi, I'm Rodrigue Ndabashinze! 👋
      username: admin
  - block: markdown
    id: experience
    content:
      title: Experience
      text: |
        - 🏥 **Data Manager, Clinical Trials Registries & AI** — University Medical Center Rostock (DZKJ), Oct 2025–Present
        - 🔬 **Evidence Synthesis Ireland Fellow** — University of Galway / Unity Health Toronto, Nov 2024–Nov 2026
        - 📊 **Research Intern, Causal Inference & ML** — Julius Center, UMC Utrecht, Jan–Sept 2025
        - 🩺 **Deputy Director in Charge of Healthcare** — Saint John Clinic, Bujumbura, Jun 2022–Sept 2023
        - 🌍 **Part-time Clinician & Research Project Manager** — Burundi Red Cross, Jul 2022–Mar 2023
    design:
      columns: '1'
  - block: markdown
    id: skills
    content:
      title: Skills
      text: |
        - 💻 **Programming**: R, Python, Stata, SQL, Git/GitHub
        - 🎯 **Causal Inference**: Target trial emulation, AIPW, IOSW, DAGs, Propensity scores
        - 📚 **Evidence Synthesis**: Systematic reviews, IPD & aggregate meta-analysis, NMA, Cochrane methods, GRADE
        - 🤖 **ML / AI / NLP**: SapBERT, FAISS, Sentence transformers, Hugging Face
        - 🏷️ **Biomedical Ontologies**: ICD-10, MedDRA, SNOMED CT, MeSH
        - 🛠️ **Tools & Reproducibility**: Quarto, R Markdown, Docker, REDCap, OHDSI, LaTeX
    design:
      columns: '1'
  - block: markdown
    id: awards
    content:
      title: Awards & Honours
      text: |
        - 🏆 **VLIR Flemish Scholarship** — Full scholarship for MSc Epidemiology, University of Antwerp
        - 🌍 **EU Intra-Africa Academic Mobility Grant** — MSc Global Health, Moi University
        - 🎓 **HTAi Educational Scholarship** — Health Technology Assessment International, Canada
        - 🦠 **ECCMID Outreach Grant** — ESCMID, supporting young scientists from LMICs
        - ⭐ **ESCMID Young Scientist Member** — Top 20 Selection globally
    design:
      columns: '1'
  - block: collection
    id: publications
    content:
      title: Publications
      filters:
        folders:
          - publication
    design:
      columns: '2'
      view: citation
  - block: collection
    id: posts
    content:
      title: Recent posts
      subtitle: ''
      text: ''
      count: 3
      filters:
        folders:
          - post
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      offset: 0
      order: desc
    design:
      view: card
      columns: '2'
  - block: markdown
    id: contact
    content:
      title: Contact
      text: |
        📧 **Email**: [rodrigue.ndabashinze@med.uni-rostock.de](mailto:rodrigue.ndabashinze@med.uni-rostock.de)

        I am open for **research collaborations**, evidence synthesis projects, and speaking invitations. Feel free to reach out!

        - 🐙 [GitHub](https://github.com/RodrigueNdab)
        - 💼 [LinkedIn](https://www.linkedin.com/in/rodrigue-ndabashinze-md-mph-msc-76093ab5/)
        - 🎓 [Google Scholar](https://scholar.google.com/citations?hl=en&user=nyuAn_kAAAAJ)
        - 🔬 [ResearchGate](https://www.researchgate.net/profile/Rodrigue-Ndabashinze)
    design:
      columns: '1'
---
