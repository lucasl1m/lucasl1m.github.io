from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "public" / "cv" / "Lucas_Lima_EN.pdf"

styles = getSampleStyleSheet()
name = ParagraphStyle("Name", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=20, leading=22, alignment=TA_LEFT, textColor=colors.HexColor("#17202A"), spaceAfter=4)
contact = ParagraphStyle("Contact", parent=styles["Normal"], fontSize=8.4, leading=11, textColor=colors.HexColor("#34495E"), spaceAfter=8)
summary = ParagraphStyle("Summary", parent=styles["Normal"], fontSize=8.7, leading=11.6, textColor=colors.HexColor("#263238"), spaceAfter=7)
section = ParagraphStyle("Section", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=11.5, leading=14, textColor=colors.HexColor("#176B87"), spaceBefore=7, spaceAfter=4, borderWidth=0, borderPadding=0)
role = ParagraphStyle("Role", parent=styles["Heading3"], fontName="Helvetica-Bold", fontSize=9.5, leading=12, textColor=colors.HexColor("#17202A"), spaceBefore=5, spaceAfter=1)
body = ParagraphStyle("Body", parent=styles["Normal"], fontSize=8.2, leading=10.6, textColor=colors.HexColor("#263238"), spaceAfter=2)
bullet = ParagraphStyle("Bullet", parent=body, leftIndent=10, firstLineIndent=-6, bulletIndent=2, spaceAfter=1.4)


def p(text, style=body):
    return Paragraph(text, style)


def bullets(items):
    return [Paragraph(f"• {item}", bullet) for item in items]


story = [
    p("Lucas Araújo de Lima", name),
    p(
        '+55 (83) 98719-6021 &nbsp;|&nbsp; <link href="mailto:lucasarlim@gmail.com">lucasarlim@gmail.com</link> &nbsp;|&nbsp; '
        '<link href="https://www.linkedin.com/in/lucasl1m/">linkedin.com/in/lucasl1m</link> &nbsp;|&nbsp; '
        '<link href="https://github.com/lucasl1m">github.com/lucasl1m</link><br/>João Pessoa, Paraíba, Brazil',
        contact,
    ),
    p(
        "Frontend/Mobile Developer and Computer Science graduate (UFCG), specialized in building scalable, accessible, high-performance interfaces with JavaScript, TypeScript, React, Next.js, Angular, and React Native. Experienced in financial products, from structuring new projects to modernizing large-scale critical systems. Focused on technical excellence and stability through decoupled architectures, REST API integration, automated testing, and CI/CD pipelines.",
        summary,
    ),
    p("Experience", section),
    p("Frontend Developer · Lifters Tecnologia <font color='#5D6D7E'>| Sep 2026 – Present · João Pessoa, Brazil</font>", role),
    *bullets([
        "Development of React and TypeScript interfaces for an iGaming platform.",
        "Development of an educational mobile game with Godot.",
        "Initial project setup, including backoffice and API structure.",
    ]),
    p("Frontend Developer · Blockfy <font color='#5D6D7E'>| Aug 2025 – Aug 2026 · Campina Grande, Brazil</font>", role),
    *bullets([
        "Developed the Harpia AI frontend, an AI agent that analyzes legal documents up to 3,000 pages, using React and Next.js with sound architecture and organization practices.",
        "Built Tailwind CSS interfaces, reusable standardized components, complex layouts, and strategic screens focused on performance and user experience.",
        "Integrated REST APIs and managed state with Context API; worked with Server Components and SSR in Next.js.",
        "Actively participated in code reviews, technical refinements, testing, and architecture decisions.",
    ]),
    p("Frontend Developer · Beeteller <font color='#5D6D7E'>| Apr 2023 – Aug 2025 · Campina Grande, Brazil</font>", role),
    *bullets([
        "Developed web and mobile applications with React, Angular, React Native, and Next.js.",
        "Built financial features in Angular that enabled Pago Parcelado to process GRUs, taxes, and judicial fees, with 300K+ transactions and R$72M+ processed in the first 30 days of the PagTesouro integration.",
        "Built and maintained a shared component library across web (React/Next.js) and mobile (React Native/Expo).",
        "Implemented 3DS checkout security and evolved legacy Angular systems serving 40,000+ points of sale globally.",
        "Integrated REST APIs, CI/CD routines, and tests with Cypress and Jest; participated in code reviews and architecture decisions.",
    ]),
    p("Product Designer · Educbank <font color='#5D6D7E'>| Sep 2022 – Jan 2023 · Campina Grande, Brazil</font>", role),
    *bullets([
        "Designed and documented the Design System and complete Style Guide for a platform serving more than 500 schools in Brazil.",
        "Designed high-fidelity interfaces for tuition guarantees, school cash flow, and financial dashboards, translating complex rules into intuitive journeys.",
        "Created a standardized Figma component library that improved engineering handoff and reduced rework.",
        "Validated high-fidelity prototypes for receivables anticipation features, aligning school needs and fintech growth goals.",
    ]),
    PageBreak(),
    p("Projects", section),
    p("Pago Parcelado · Angular, RxJS, i18n, Yup, Angular Material", role),
    *bullets([
        "Enabled new government payment types (GRUs and judicial fees) through modernized Angular financial features, with 300K+ transactions and R$72M+ processed in the first 30 days of the PagTesouro integration.",
        "Integrated 3DS into checkout, strengthening authentication and reducing fraud in credit card transactions.",
    ]),
    p("Harpia AI · React, Next.js, TypeScript, Context API, Tailwind CSS, i18n, Cypress, CI/CD", role),
    *bullets([
        "Structured the frontend architecture for an AI agent that analyzes legal documents up to 3,000 pages, focused on performance and scalability.",
        "Implemented quality standards with Husky, ESLint, Conventional Commits, Cypress, and CI/CD pipelines.",
    ]),
    p("Beeteller International · Angular, RxJS, i18n, Yup, Angular Material", role),
    *bullets(["Evolved the Angular and RxJS frontend ecosystem for complex reactive flows supporting a cross-border operation with more than 40,000 points of sale globally."]),
    p("Sendyu · React, Context API, Tailwind CSS, i18n, React Hook Form, Yup, Cypress, CI/CD", role),
    p("Education", section),
    p("Bachelor's Degree in Computer Science · Universidade Federal de Campina Grande <font color='#5D6D7E'>| Graduated Jun 2024 · GPA 8.85</font>", role),
    p("Relevant coursework: Algorithms, Data Structures, Software Engineering, Software Architecture."),
    p("Technical Skills", section),
    p("<b>Languages:</b> JavaScript, TypeScript, HTML5, CSS3"),
    p("<b>Frameworks/Libraries:</b> React, Next.js, React Native, Angular, RxJS, Expo, Cypress, Jest, Tailwind CSS, Styled Components, i18n, Zod, Yup, React Hook Form, Design System, Testing Library, React Query, Context API"),
    p("<b>Cloud/Infra:</b> CI/CD, GitHub Actions, Git Flow, Git"),
    p("Certifications", section),
    *bullets([
        "State Management (Redux and Zustand) | Rocketseat · Apr 2026",
        "Accessibility with React | Rocketseat · Apr 2026",
        "React Program | Rocketseat · Apr 2026",
        "NLW Operator – Fullstack | Rocketseat · Mar 2026",
        "Introduction to Real User Monitoring (RUM) | Datadog · Oct 2025",
        "Scrum Fundamentals Certified (SFC) | SCRUMstudy · Jun 2021",
    ]),
]

OUTPUT.parent.mkdir(parents=True, exist_ok=True)
doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=letter, leftMargin=0.55 * inch, rightMargin=0.55 * inch,
    topMargin=0.45 * inch, bottomMargin=0.45 * inch,
    title="Lucas Araújo de Lima — Resume", author="Lucas Araújo de Lima",
)
doc.build(story)
