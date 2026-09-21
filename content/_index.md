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
  - block: markdown
    id: talks
    content:
      title: Talks & Presentations
      text: |
        - **Reliable Subgroup Identification and Analysis – Results of the GMDS Biostatistics Competition 2026.** Invited presentation with Team CRAKDK (3rd place of 17 teams; one of 5 teams invited on-site). 47th ISCB Annual Conference joint with the 71st GMDS Annual Conference, Freiburg im Breisgau, Germany, Sept 27–Oct 1, 2026.
        - **Updating the evidence base for neonatal therapeutic hypothermia: trial integrity, equity, and the case for individual participant data.** Awarded Neonatal Resuscitation Symposium (NRS) Scholar to present at the Emerging Neonatal Resuscitation Science Research Colloquium, 9th Annual Neonatal Resuscitation Symposium, Indiana University School of Medicine, Indianapolis, IN, Sept 10, 2026. [Program PDF](/media/Colloquium_Program_final.pdf) · [Reference page](https://medicine.iu.edu/pediatrics/specialties/neonatal-perinatal/education/resuscitation-symposium)
        - **Artificial intelligence in IPD synthesis.** Invited speaker, SMART-IPD (Strengthening Meta-Analysis Research Through Individual Participant Data) workshop, SRSM (Society for Research Synthesis Methodology) Annual Meeting, Chania, Crete, Greece, June 9, 2026. [Program PDF](/media/SMART-IPD_symposium_program.pdf) · [Presenting photo](/media/crete_presenting_photo.png) · [Group conference photo](/media/crete_group_photo.png)
    design:
      columns: '1'
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
