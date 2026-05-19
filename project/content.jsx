// Bilingual content — FR / EN
const CONTENT = {
  fr: {
    nav: ["Index", "À propos", "Chief of Staff", "Services", "Travaux", "Contact"],
    status: "Disponible — Q3 2026",
    heroEyebrow: "Portfolio · 2026",
    heroName: ["Binta", "Kande"],
    heroSubtitle: "Chief of Staff · MSc IA & Data · Freelance Marketing Digital",
    heroDescription: "À la croisée du Digital et de l'IA — je donne vie à des projets uniques où créativité et stratégie se rencontrent.",
    heroMantra: "Créer, résoudre, avancer",
    heroCta: "Travaillons ensemble",
    heroCv: "Télécharger le CV",
    scrollHint: "Faire défiler",

    aboutEyebrow: "01 — À propos",
    aboutTitle: "À l'intersection de la stratégie et de la création.",
    aboutBody: [
      "Actuellement en MSc IA & Data, je travaille au plus près du CEO d'une jeune entreprise — un poste de Chief of Staff où je touche à tout : stratégie, opérations, marketing, automatisations.",
      "En parallèle, j'accompagne en freelance des startups et créatrices sur leur communication digitale, de la stratégie éditoriale au design des publications, jusqu'à l'automatisation de leurs workflows.",
      "Ce qui me fait vibrer : transformer une idée floue en système qui tourne. Mettre de la beauté dans l'opérationnel."
    ],
    aboutFacts: [
      ["Basée à", "Paris, France"],
      ["Formation", "MSc IA & Data — 2026"],
      ["Langues", "Français · Anglais"],
      ["Statut", "Freelance + Chief of Staff"]
    ],

    cosEyebrow: "02 — Chief of Staff",
    cosTitle: "Le bras droit qui tient toutes les ficelles.",
    cosIntro: "Au quotidien, je multiplie les casquettes pour faire avancer l'entreprise — stratégie, équipe, chiffres, marketing.",
    cosMissions: [
      { tag: "Stratégie", title: "Pitch decks & narrative", body: "Conception et mise en forme de pitch decks investisseurs, support de comité, présentations clients." },
      { tag: "Opérations", title: "Reporting & KPI", body: "Mise en place du suivi des indicateurs, dashboards, reporting hebdo et mensuel pour le CEO et le board." },
      { tag: "Équipe", title: "Formation & onboarding", body: "Création des parcours de formation interne, documentation des process, onboarding des nouveaux arrivants." },
      { tag: "Croissance", title: "Marketing & CA", body: "Pilotage des leviers d'acquisition, campagnes, lancement produit. Augmentation du chiffre d'affaires via une exécution rigoureuse." },
      { tag: "Tech", title: "Automatisations", body: "Mise en place de workflows automatisés (n8n, Make) pour libérer du temps à l'équipe et fiabiliser les opérations." },
      { tag: "Direction", title: "Bras droit du CEO", body: "Présence sur tous les sujets stratégiques, prise de décision, arbitrages, suivi des chantiers transverses." }
    ],

    servicesEyebrow: "03 — Services freelance",
    servicesTitle: "Communication digitale, de A à Z.",
    servicesIntro: "Je conçois et déploie la stratégie de communication des marques que j'accompagne — souvent sur 6 mois, parfois plus.",
    services: [
      { number: "S/01", title: "Stratégie éditoriale", items: ["Recherche d'idées et de tendances", "Planning éditorial mensuel", "Lignes éditoriales par canal", "Storytelling de marque"] },
      { number: "S/02", title: "Création de contenu", items: ["Design de publications (Canva)", "Reels & vidéos courtes", "Rédaction de captions", "Carrousels LinkedIn"] },
      { number: "S/03", title: "Gestion multi-canal", items: ["Instagram · LinkedIn", "TikTok · YouTube", "Programmation & publication", "Engagement communauté"] },
      { number: "S/04", title: "Automatisations & ops", items: ["Workflows n8n / Make", "Onboarding clients", "Intégrations Slack / Notion", "Sites web sur-mesure"] }
    ],

    workEyebrow: "04 — Cas clients",
    workTitle: "Des résultats, pas des promesses.",
    workIntro: "Sélection de missions récentes — ce que j'ai fait, comment, et l'impact mesuré.",
    cases: [
      {
        client: "Startup IA",
        type: "Mission longue · 6 mois",
        role: "Direction de la communication",
        teaser: "Rebranding visuel + stratégie social media multi-canal pour une startup dans l'IA.",
        scope: ["Rebranding visuel qualitatif", "Design des publications", "Reels & vidéos courtes", "Rédaction des captions", "Planning éditorial complet", "4 canaux : Instagram, LinkedIn, TikTok, YouTube"],
        stats: [
          { value: "+2 000", label: "abonnés en 6 mois" },
          { value: "2,86 %", label: "taux d'engagement" },
          { value: "4", label: "canaux pilotés" }
        ]
      },
      {
        client: "Podcasteuse",
        type: "Mission longue · en cours",
        role: "Stratégie & édito",
        teaser: "Stratégie de communication 360° pour une podcasteuse — uniquement la partie éditoriale.",
        scope: ["Recherche d'idées de contenu", "News hebdomadaires", "Programmation des publications", "1 post / semaine sur chaque canal", "Multi-canal : LinkedIn, TikTok, Instagram"],
        stats: [
          { value: "5 %", label: "taux d'engagement" },
          { value: "3", label: "canaux pilotés" },
          { value: "Hebdo", label: "rythme de publication" }
        ]
      },
      {
        client: "Sites web sur-mesure",
        type: "Missions ponctuelles",
        role: "Conception & développement",
        teaser: "Création de sites internet de A à Z pour des clients freelances et indépendants.",
        scope: ["Brief & wireframes", "Design sur-mesure", "Développement no-code / code", "SEO de base", "Mise en ligne & formation client"],
        stats: [
          { value: "100 %", label: "sur-mesure" },
          { value: "A → Z", label: "prise en charge" }
        ]
      }
    ],

    statsEyebrow: "Chiffres",
    stats: [
      { value: " +2000", label: "abonnés générés", sub: "sur un seul mandat" },
      { value: "5 %", label: "engagement max", sub: "vs. 1-2 % industrie" },
      { value: "6 mois", label: "durée moyenne", sub: "des missions long format" },
      { value: "4", label: "canaux pilotés", sub: "Instagram, LinkedIn, TikTok, YouTube" }
    ],

    skillsEyebrow: "05 — Outils & compétences",
    skillsTitle: "La stack que j'utilise au quotidien.",
    skillCategories: [
      { name: "Design & création", tools: ["Canva", "Figma", "Capcut"] },
      { name: "Automatisations", tools: ["n8n", "Make", "Zapier"] },
      { name: "IA & data", tools: ["Python", "Dust", "Dataiku", "Claude Code", "RAG"] },
      { name: "Dev & ops", tools: ["Cursor", "VSCode", "GitHub", "Vercel", "Supabase"] },
      { name: "Productivité", tools: ["Notion", "Slack", "Tableau", "Meta Business"] }
    ],

    processEyebrow: "Process",
    processTitle: "Comment on travaille ensemble.",
    process: [
      { step: "01", title: "Découverte", body: "Appel de cadrage, audit existant, objectifs business." },
      { step: "02", title: "Stratégie", body: "Lignes éditoriales, planning, KPIs, charte visuelle si besoin." },
      { step: "03", title: "Production", body: "Création des contenus, automatisations, mise en place des outils." },
      { step: "04", title: "Pilotage", body: "Publication, engagement, reporting mensuel, ajustements continus." }
    ],

    contactEyebrow: "06 — Contact",
    contactTitle: "Et si on se parlait ?",
    contactBody: "Pour une mission freelance, une collaboration ou simplement échanger — j'écoute toujours les beaux projets.",
    contactFormName: "Nom",
    contactFormEmail: "Email",
    contactFormProject: "Type de projet",
    contactFormProjectOptions: ["Stratégie social media", "Création de contenu", "Automatisations", "Site web", "Autre"],
    contactFormMessage: "Parle-moi de ton projet",
    contactFormSubmit: "Envoyer",
    contactFormSent: "Message envoyé ✓",
    contactDirect: "Ou directement par email",
    contactEmail: "binta@beccsstudio.com",

    blogEyebrow: "Journal",
    blogTitle: "Notes & lectures",
    blog: [
      { date: "Avril 2026", tag: "IA", title: "Automatiser sa veille avec n8n + Claude" },
      { date: "Mars 2026", tag: "Édito", title: "Le calendrier éditorial qui tient 6 mois" },
      { date: "Février 2026", tag: "Stratégie", title: "Chief of Staff : le rôle qu'on ne comprend pas" }
    ],

    footerCta: "Disponible pour de nouvelles missions",
    footerCopyright: "© 2026 Binta Kande — Tous droits réservés",
    footerCredit: "Design & code · Becc's Studio"
  },

  en: {
    nav: ["Index", "About", "Chief of Staff", "Services", "Work", "Contact"],
    status: "Available — Q3 2026",
    heroEyebrow: "Portfolio · 2026",
    heroName: ["Binta", "Kande"],
    heroSubtitle: "Chief of Staff · MSc AI & Data · Freelance Digital Marketing",
    heroDescription: "At the crossroads of digital, communication and AI — I bring unique projects to life where creativity meets strategy.",
    heroMantra: "Créer, résoudre, avancer",
    heroCta: "Let's work together",
    heroCv: "Download CV",
    scrollHint: "Scroll",

    aboutEyebrow: "01 — About",
    aboutTitle: "At the intersection of strategy and craft.",
    aboutBody: [
      "Currently pursuing a MSc in AI & Data, I work alongside the CEO of a young company — a Chief of Staff role where I cover everything: strategy, operations, marketing, automations.",
      "On the side, I help startups and creators build their digital presence — editorial strategy, content design, workflow automation.",
      "What lights me up: turning a fuzzy idea into a system that runs. Bringing beauty to operations."
    ],
    aboutFacts: [
      ["Based in", "Paris, France"],
      ["Studying", "MSc AI & Data — 2026"],
      ["Languages", "French · English"],
      ["Status", "Freelance + Chief of Staff"]
    ],

    cosEyebrow: "02 — Chief of Staff",
    cosTitle: "The right hand who pulls every string.",
    cosIntro: "Day to day, I wear many hats to push the company forward — strategy, team, numbers, marketing.",
    cosMissions: [
      { tag: "Strategy", title: "Pitch decks & narrative", body: "Design and polish of investor pitch decks, board updates, client presentations." },
      { tag: "Ops", title: "Reporting & KPIs", body: "Setting up KPI tracking, dashboards, weekly and monthly reporting for CEO and board." },
      { tag: "Team", title: "Training & onboarding", body: "Building internal training paths, documenting processes, onboarding new joiners." },
      { tag: "Growth", title: "Marketing & revenue", body: "Driving acquisition channels, campaigns, product launches. Growing revenue through rigorous execution." },
      { tag: "Tech", title: "Automations", body: "Building automated workflows (n8n, Make) to free up the team's time and stabilize operations." },
      { tag: "Lead", title: "CEO's right hand", body: "Present on every strategic topic — decisions, trade-offs, cross-functional projects." }
    ],

    servicesEyebrow: "03 — Freelance services",
    servicesTitle: "Digital communication, end to end.",
    servicesIntro: "I design and deploy communication strategies for the brands I work with — usually 6-month engagements, sometimes more.",
    services: [
      { number: "S/01", title: "Editorial strategy", items: ["Idea & trend research", "Monthly content calendar", "Channel-specific tone", "Brand storytelling"] },
      { number: "S/02", title: "Content creation", items: ["Post design (Canva)", "Reels & short-form video", "Caption writing", "LinkedIn carousels"] },
      { number: "S/03", title: "Multi-channel ops", items: ["Instagram · LinkedIn", "TikTok · YouTube", "Scheduling & publishing", "Community engagement"] },
      { number: "S/04", title: "Automations & ops", items: ["n8n / Make workflows", "Client onboarding", "Slack / Notion integrations", "Custom websites"] }
    ],

    workEyebrow: "04 — Case studies",
    workTitle: "Results, not promises.",
    workIntro: "A selection of recent work — what I did, how, and measured impact.",
    cases: [
      {
        client: "AI startup",
        type: "Long engagement · 6 months",
        role: "Communication lead",
        teaser: "Visual rebrand + multi-channel social strategy for an AI startup.",
        scope: ["Quality visual rebranding", "Post design", "Reels & short videos", "Caption writing", "Full editorial calendar", "4 channels: Instagram, LinkedIn, TikTok, YouTube"],
        stats: [
          { value: "+2,000", label: "followers in 6 months" },
          { value: "2.86%", label: "engagement rate" },
          { value: "4", label: "channels managed" }
        ]
      },
      {
        client: "Podcaster",
        type: "Long engagement · ongoing",
        role: "Strategy & editorial",
        teaser: "360° communication strategy for a podcaster — editorial-only.",
        scope: ["Content idea research", "Weekly news posts", "Scheduling", "1 post / week per channel", "Multi-channel: LinkedIn, TikTok, Instagram"],
        stats: [
          { value: "5%", label: "engagement rate" },
          { value: "3", label: "channels managed" },
          { value: "Weekly", label: "publishing cadence" }
        ]
      },
      {
        client: "Custom websites",
        type: "Project-based",
        role: "Design & development",
        teaser: "End-to-end website creation for freelance and independent clients.",
        scope: ["Brief & wireframes", "Custom design", "No-code / code build", "Basic SEO", "Launch & client training"],
        stats: [
          { value: "100%", label: "tailored" },
          { value: "A → Z", label: "ownership" }
        ]
      }
    ],

    statsEyebrow: "Numbers",
    stats: [
      { value: " +2000", label: "followers generated", sub: "on a single engagement" },
      { value: "5%", label: "peak engagement", sub: "vs. 1-2% industry avg" },
      { value: "6 mo", label: "average duration", sub: "of long-form engagements" },
      { value: "4", label: "channels managed", sub: "Instagram, LinkedIn, TikTok, YouTube" }
    ],

    skillsEyebrow: "05 — Tools & skills",
    skillsTitle: "The stack I use every day.",
    skillCategories: [
      { name: "Design & craft", tools: ["Canva", "Figma", "Capcut"] },
      { name: "Automations", tools: ["n8n", "Make", "Zapier"] },
      { name: "AI & data", tools: ["Python", "Dust", "Dataiku", "Claude Code", "RAG"] },
      { name: "Dev & ops", tools: ["Cursor", "VSCode", "GitHub", "Vercel", "Supabase"] },
      { name: "Productivity", tools: ["Notion", "Slack", "Tableau", "Meta Business"] }
    ],

    processEyebrow: "Process",
    processTitle: "How we'll work together.",
    process: [
      { step: "01", title: "Discovery", body: "Kickoff call, audit of existing, business goals." },
      { step: "02", title: "Strategy", body: "Editorial lines, calendar, KPIs, visual identity if needed." },
      { step: "03", title: "Production", body: "Content creation, automations, tooling setup." },
      { step: "04", title: "Operating", body: "Publishing, engagement, monthly reporting, continuous tuning." }
    ],

    contactEyebrow: "06 — Contact",
    contactTitle: "Let's talk.",
    contactBody: "For a freelance engagement, a collaboration, or just to chat — I always make time for great projects.",
    contactFormName: "Name",
    contactFormEmail: "Email",
    contactFormProject: "Project type",
    contactFormProjectOptions: ["Social media strategy", "Content creation", "Automations", "Website", "Other"],
    contactFormMessage: "Tell me about your project",
    contactFormSubmit: "Send",
    contactFormSent: "Message sent ✓",
    contactDirect: "Or by email",
    contactEmail: "binta@beccsstudio.com",

    blogEyebrow: "Journal",
    blogTitle: "Notes & reads",
    blog: [
      { date: "April 2026", tag: "AI", title: "Automating your watch with n8n + Claude" },
      { date: "March 2026", tag: "Editorial", title: "The 6-month editorial calendar that holds" },
      { date: "February 2026", tag: "Strategy", title: "Chief of Staff: the role nobody understands" }
    ],

    footerCta: "Available for new engagements",
    footerCopyright: "© 2026 Binta Kande — All rights reserved",
    footerCredit: "Design & code · Becc's Studio"
  }
};

window.CONTENT = CONTENT;
