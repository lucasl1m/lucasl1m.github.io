import type { Messages } from '../types';
import { ptBR } from './pt-BR';

export const enUS: Messages = {
  ...ptBR,
  meta: {
    title: 'Lucas Araújo de Lima · Frontend/Mobile Developer',
    description: 'Portfolio of Lucas Araújo de Lima, a frontend and mobile developer experienced with React, Next.js, Angular, React Native, and TypeScript.',
  },
  common: { until: 'to', present: 'present', newTab: '(opens in a new tab)', close: 'Close', loading: 'Loading…' },
  skipLink: 'Skip to content',
  header: {
    home: 'Lucas Araújo de Lima, back to home', navLabel: 'Main navigation', menuOpen: 'Open menu', menuClose: 'Close menu',
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', skills: 'Skills', education: 'Education', contact: 'Contact' },
    language: { label: 'Language', pt: 'Português', en: 'English' },
    theme: { toDark: 'Enable dark theme', toLight: 'Enable light theme' },
  },
  hero: {
    eyebrow: 'Frontend/Mobile Developer · Product and engineering',
    lead: 'I build scalable, accessible, high-performance interfaces with React, Next.js, Angular, React Native, and TypeScript.',
    body: 'I currently work at Lifters Tecnologia with React and TypeScript frontend development, also contributing to backoffice and API foundations. My Product Design background helps me connect product, experience, and implementation.',
    facts: [
      { label: 'Now', value: 'Frontend/Mobile Developer at Lifters Tecnologia' },
      { label: 'Education', value: 'Computer Science at UFCG' },
      { label: 'Core stack', value: 'React · Next.js · Angular · React Native · TypeScript' },
    ],
    factsLabel: 'Professional summary', ctaProjects: 'See projects',
    spriteAlt: 'Lucas in pixel art, with dark hair, a beard, and casual clothes.',
  },
  cv: {
    download: 'Download résumé', preview: 'Preview résumé', modalTitle: 'Résumé in English',
    previewAlt: 'First page of Lucas Araújo de Lima’s résumé.', downloadPdf: 'Download PDF', openPdf: 'Open PDF in a new tab',
  },
  about: {
    kicker: 'About', title: 'I turn product problems into interfaces that remain easy to evolve.',
    paragraphs: [
      'I am a Frontend/Mobile Developer with a Computer Science degree from UFCG. I work with React, Next.js, Angular, React Native, and TypeScript, with special attention to accessibility, performance, and architecture.',
      'I started my professional career as a Product Designer at Educbank. That experience taught me to translate complex financial rules into understandable journeys and collaborate with engineering through design systems and well-defined components.',
      'Later, at Beeteller and Blockfy, I built financial products at scale, checkout flows, dashboards, and API integrations. Today, at Lifters Tecnologia, I apply that background to digital platforms and product-oriented interfaces.',
    ],
    photoAlt: 'Photo of Lucas Araújo de Lima wearing a blue blazer over a light shirt against a gray background.', photoCaption: 'Lucas Araújo de Lima',
    facts: [
      { label: 'Based in', value: 'João Pessoa, Brazil' },
      { label: 'Languages', value: 'Native Portuguese and basic English' },
    ],
  },
  projects: {
    ...ptBR.projects,
    kicker: 'Projects', title: 'Three projects, three kinds of impact.',
    intro: 'Public payments at scale, intelligent reading of legal documents, and an AI-assisted code feedback experience.',
    indexLabel: 'Project index',
    labels: { need: 'The problem', features: 'What was delivered', role: 'My contribution', stack: 'Technologies', decisions: 'Technical decisions', visit: 'Visit website', repo: 'Code on GitHub', gallery: 'Screenshots', expand: 'Enlarge image: {alt}' },
    pagoParcelado: {
      ...ptBR.projects.pagoParcelado,
      kicker: 'Beeteller · financial product', tagline: 'Government payments through Pix, cards, and 3DS security.',
      need: 'Simplify taxes, GRUs, and judicial fee payments by connecting public agencies, PagTesouro, and different payment methods in a clear journey.',
      features: ['Pix or card payment for different kinds of public revenue.', 'GRU and judicial fee flows integrated with PagTesouro.', '3DS authentication for card payments.', '300K+ transactions and R$72M+ processed in the first 30 days of the integration period.'],
      role: 'I contributed to the Angular frontend, building and evolving payment journeys, forms, validation, internationalization, and integrations.',
      decisions: [
        { title: 'Context-guided flows', body: 'The interface organizes agency, document, and payment data into readable steps, validating each stage before moving forward.' },
        { title: 'Reactive state', body: 'RxJS coordinates changes between forms, payment methods, and integration responses.' },
        { title: 'Security without obscuring the journey', body: 'The 3DS flow adds card authentication while keeping loading, return, and error states understandable.' },
      ],
      moreTitle: 'More details', more: ['Reusable components for forms and feedback.', 'Copy prepared for internationalization.', 'Validation with Yup and Angular Material components.'],
      sim: {
        title: 'Payment path', methodLabel: 'Payment method', pix: 'Pix', card: 'Card + 3DS',
        pixJourneyLabel: 'Pix payment steps', cardJourneyLabel: 'Card and 3DS payment steps',
        pixSteps: ['Choose Pix', 'Create charge', 'QR Code or copy and paste', 'Bank processes', 'Payment confirmed'],
        cardSteps: ['Card details', '3DS check', 'Issuer challenge', 'Authorization', 'Payment confirmed'],
        pixSummary: 'Pix moves from charge creation to payment confirmation.',
        cardSummary: 'The card goes through 3DS authentication before authorization and confirmation.',
        pixCaption: 'The user receives a QR Code or copy-and-paste code, pays through their bank, and returns to the flow with a confirmed status.',
        cardCaption: 'When required, the issuer presents a 3DS challenge; after authentication, the transaction proceeds to authorization.',
      },
    },
    harpia: {
      ...ptBR.projects.harpia,
      kicker: 'Blockfy · 2025–2026', tagline: 'Large legal documents turned into a focused reading and analysis experience.',
      need: 'Enable legal professionals to work with documents up to 3,000 pages without losing context, clarity, or interface performance.',
      features: ['Upload and processing of large documents.', 'Reusable components for navigation, reading, and analysis.', 'REST API integration with predictable loading and error states.', 'SSR, Server Components, automated tests, and CI/CD.'],
      role: 'I worked on the React and Next.js frontend, implementing components, complex layouts, integrations, tests, and architecture decisions.',
      decisions: [
        { title: 'The right rendering model for each screen', body: 'SSR and Server Components reduce client-side work when the interface benefits from server-prepared data.' },
        { title: 'Components built for continuous evolution', body: 'Reusable patterns keep dense workflows consistent and lower the cost of future features.' },
        { title: 'Quality in the delivery pipeline', body: 'Tests, linting, and CI/CD protect important behavior before deployment.' },
      ],
      annotationsTitle: 'Experience highlights', annotations: ['Focused reading.', 'Contextual actions.', 'Section navigation.'], dataNote: 'Only public pages are shown in these images.',
    },
    devroast: {
      ...ptBR.projects.devroast,
      kicker: 'Public project · NLW', tagline: 'AI-assisted code feedback, scoring, and shareable results.',
      need: 'Turn a code submission into structured feedback that is easy to compare and simple to share.',
      features: ['Detailed AI-assisted code analysis.', 'Scores and a participant leaderboard.', 'Results organized by criteria and improvement opportunities.', 'A shareable page for each analysis.'],
      role: 'A personal project built during NLW, covering the frontend, typed routes, persistence, and the analysis experience.',
      decisions: [
        { title: 'End-to-end typed contracts', body: 'tRPC and TypeScript keep submission and result data aligned between the interface and server.' },
        { title: 'Explicit persistence', body: 'PostgreSQL and Drizzle ORM model analyses, scores, and rankings with predictable queries.' },
        { title: 'Results designed to travel', body: 'The interface organizes score, diagnosis, and recommendations into a shareable page.' },
      ],
      tour: { play: 'Play demo', pause: 'Pause demo', posterAlt: 'Public DevRoast screen showing a code review.', animationAlt: 'Demo of the DevRoast journey.', caption: 'Demo of the published project.' },
      demo: {
        title: 'Guess the technology', disclaimer: 'A short interaction inspired by stack comparisons.', inputLabel: 'Your guess', placeholder: 'Type a technology', submit: 'Guess', newRound: 'New round', reveal: 'Show answer', attempts: 'Attempts: {count}', empty: 'No guesses yet. Choose a technology to begin.',
        columns: { name: 'Technology', area: 'Area', kind: 'Type', usedIn: 'Where I used it', released: 'Released' }, result: { correct: 'correct', partial: 'partially correct', wrong: 'wrong', higher: 'the answer is newer', lower: 'the answer is older' }, won: 'Solved in {count} attempts: it was {name}.', wonFirst: 'First try: it was {name}.', revealed: 'The answer was {name}.', noUsage: 'General experience', emotes: { neutral: 'Character waiting for a guess.', excited: 'Character celebrating the answer.', confused: 'Confused character: some attributes match.', angry: 'Annoyed character: no attributes match.' },
      },
    },
  },
  experience: {
    kicker: 'Experience', title: 'A path across product, web, and mobile.', ladderLabel: 'Career progression',
    lanes: { main: 'Engineering', parallel: 'Product foundation' },
    roles: { frontendDeveloper: 'Frontend/Mobile Developer', productDesigner: 'Product Designer' },
    ladder: { productDesigner: 'Product Design', frontendDeveloper: 'Frontend', frontendMobileDeveloper: 'Frontend/Mobile' },
    stackLabel: 'Stack', highlightsLabel: 'Highlights',
    entries: {
      lifters: { summary: 'React and TypeScript interfaces for a digital platform, plus contributions to the initial structure of a backoffice and APIs.', highlights: ['Web frontend with React and TypeScript.', 'Backoffice foundations and API integrations.', 'Collaboration across product and engineering.'] },
      blockfy: { summary: 'Harpia AI frontend with React and Next.js, reusable components, complex layouts, REST API integration, SSR, Server Components, tests, and architecture decisions.', highlights: ['Component architecture and responsive layouts.', 'Tests with Cypress and Jest.', 'Contributions to architecture and CI/CD.'] },
      beeteller: { summary: 'Web and mobile applications for financial products, including Pago Parcelado, International Pix, 3DS, KYC/Onboarding, Payin, Payout, and Core Banking.', highlights: ['Web and mobile financial products.', 'Angular, React, React Native, and Next.js.', 'Integrations, forms, and internationalization.'] },
      educbank: { summary: 'Design System, Style Guide, and interfaces for tuition guarantees, school cash flow, and financial dashboards used by more than 500 schools.', highlights: ['Design System and Style Guide.', 'Financial journeys translated into interfaces.', 'Close collaboration with engineering.'] },
    },
  },
  skills: {
    ...ptBR.skills,
    kicker: 'Skills', title: 'What I use, and where I used it.', intro: 'Technologies organized by area and connected to the experience and projects where they appear.', filterLabel: 'Highlight technologies by context', all: 'All', core: 'Core', general: 'General experience', usedInLabel: 'Used at', matchLabel: 'Used at {context}',
    areas: { frontend: 'Web frontend', mobile: 'Mobile', stateData: 'State and data', uiProduct: 'UI and product', quality: 'Quality', delivery: 'Delivery' },
    names: { rest: 'REST APIs', htmlcss: 'HTML5 and CSS3', git: 'Git and GitHub', codeReview: 'Code review' }, notes: {},
    kinds: { language: 'Language', platform: 'Platform', framework: 'Framework', library: 'Library', database: 'Database', tool: 'Tool', standard: 'Web standard' },
  },
  education: {
    ...ptBR.education,
    kicker: 'Education', title: 'Academic background and continuous learning.', groups: { academic: 'Academic education', complementary: 'Certifications and courses' }, kinds: { degree: 'Bachelor’s degree', technical: 'Technical degree', course: 'Course', training: 'Immersion' }, expected: 'expected',
    items: {
      ufcg: { title: 'Bachelor’s Degree in Computer Science', note: 'Completed with an 8.85 academic GPA.' }, rocketseatState: { title: 'State management in React', note: 'Rocketseat.' }, rocketseatAccessibility: { title: 'Accessibility in React applications', note: 'Rocketseat.' }, rocketseatReact: { title: 'React', note: 'Rocketseat.' }, nlwOperator: { title: 'NLW Operator', note: 'Rocketseat.' }, datadogRum: { title: 'Real User Monitoring', note: 'Datadog.' }, scrumFundamentals: { title: 'Scrum Fundamentals Certified', note: 'SCRUMstudy.' },
    },
    languagesTitle: 'Languages', languages: { pt: { name: 'Portuguese', level: 'Native/bilingual' }, en: { name: 'English', level: 'Basic' } },
  },
  beyond: {
    kicker: 'Beyond code', title: 'Product, design, and code.', paragraphs: ['My career started in Product Design, and that background still shapes how I think about interface architecture, accessibility, and experience.', 'I also took part in initiatives such as OpenDevUFCG and DadosJusBr and won first place at the Tidex hackathon, experiences that reinforced collaboration and community learning.'], bustAlt: 'Lucas in pixel art.', emotesLabel: 'Character reactions', emotes: { neutral: 'Neutral', excited: 'Excited', confused: 'Confused', angry: 'Annoyed' }, emoteSelected: 'Selected reaction: {name}.',
  },
  contact: {
    kicker: 'Contact', title: 'Let’s talk about product and engineering.', body: 'I am open to conversations about frontend, mobile, product, and engineering. Email is the most direct route; I am also on LinkedIn and GitHub.', emailLabel: 'Email', copy: 'Copy email', send: 'Write an email', copied: 'Email copied.', copyFailed: 'Could not copy. The address is {email}.', phone: 'Phone', linkedin: 'LinkedIn', github: 'GitHub', cv: 'Résumé', linksLabel: 'Other ways to connect',
  },
  footer: { rights: '© {year} Lucas Araújo de Lima', source: 'Source code on GitHub', backToTop: 'Back to top' },
  buddy: {
    label: 'Mini Lucas. Click to discover something; drag to move him.', intro: 'Hi! Click highlighted terms to see how they fit into my career.', close: 'Close speech bubble', comeBack: 'Bring Lucas back', askSuffix: '(ask Lucas)', tooltip: 'Ask?',
    lines: { ufcg: 'UFCG provided the academic foundation for my career.', product: 'I started in Product Design before specializing in frontend.', accessibility: 'Accessibility is part of quality, not a final detail.', tidex: 'My team won first place at the Tidex hackathon.', community: 'OpenDevUFCG and DadosJusBr were part of my community experience.', tests: 'Tests and CI/CD make change safer.', throwMe: 'You can drag me. Throw me fast and I will fly away!' },
    titles: { productDesigner: 'Product Design', frontendDeveloper: 'Frontend', frontendMobileDeveloper: 'Frontend/Mobile' },
    terms: { react: 'I use React in professional products and public projects.', angular: 'Angular powered financial journeys such as Pago Parcelado.', reactNative: 'React Native brought financial products to mobile.', accessibility: 'I aim to include accessibility in the component structure from the start.', pagoParcelado: 'I contributed to government payment journeys at scale.', harpia: 'At Harpia AI, I worked with large legal documents and complex interfaces.', devroast: 'DevRoast is a public AI-assisted code feedback project.' },
  },
  viewer: { label: 'Image viewer', close: 'Close viewer', previous: 'Previous image', next: 'Next image', zoomIn: 'Zoom in', zoomOut: 'Zoom out', reset: 'Original size', counter: 'Image {current} of {total}' },
};
