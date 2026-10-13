# AgentX Frontend

Responsive React + Vite prototype for the AgentX evidence-driven business intelligence project.

## Included routes
- `/` — Landing page with product overview and feature sections
- `/login` — Responsive login UI (prototype-only simulated sign-in)
- `/about` — Purpose, workflow and proposed data scope
- `/dashboard` — Dashboard, sample metrics, investigation prompt, evidence preview, source placeholders and investigation history

## Run locally
Requires Node.js 18+.

```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
npm run preview
```

## Important prototype notes
- Login is simulated: any non-empty email and password opens the dashboard. This is not secure authentication and must be replaced with a backend/auth provider before deployment.
- Dashboard metrics, chart, investigation history and investigation answers are illustrative UI demo data. No PostgreSQL database, LLM, RAG index or ML model is connected.
- The proposed data model and capability descriptions follow `AgentX_Dataset_Report.pdf`: customers, products, orders, order items, inventory, customer activity, returns, internal documents, SQL analytics, ML analysis, evidence verification and traceable reports.
- Anime.js drives entrance animations and the landing page's subtle motion.
- Responsive breakpoints cover small mobile through desktop, with a collapsible dashboard sidebar.
