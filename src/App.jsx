import React, { useEffect, useRef, useState } from 'react'
import { Routes, Route, Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import anime from 'animejs/lib/anime.es.js'
import {
  Activity, ArrowDownRight, ArrowRight, ArrowUpRight, BarChart3, Bell, BookOpen,
  Boxes, BrainCircuit, Check, CheckCircle2, ChevronDown, CircleHelp, Clock3,
  Command, Database, FileCheck2, FileSearch, Fingerprint, Gauge, LayoutDashboard,
  LogIn, Menu, MessageSquareText, Package, PanelLeftClose, Plus, Search, Settings2,
  ShieldCheck, ShoppingCart, Sparkles, TrendingDown, TrendingUp, Users, X, Zap
} from 'lucide-react'

const demoUser = { name: 'Alex Morgan', email: 'alex@agentx.demo' }

function Brand({ light = false }) {
  return <Link className={`brand ${light ? 'brand-light' : ''}`} to="/">
    <span className="brand-mark"><BrainCircuit size={21} strokeWidth={2.1}/></span>
    <span>Agent<span className="brand-x">X</span></span>
  </Link>
}

function TopNav({ cta = true }) {
  const [open, setOpen] = useState(false)
  return <header className="top-nav">
    <div className="nav-inner">
      <Brand />
      <button className="icon-button mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={`nav-links ${open ? 'nav-open' : ''}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        <Link to="/#capabilities" onClick={() => setOpen(false)}>Capabilities</Link>
      </nav>
      {cta && <div className="nav-actions"><Link className="nav-login" to="/login">Log in</Link><Link className="button button-primary button-small" to="/login">Open AgentX <ArrowRight size={16}/></Link></div>}
    </div>
  </header>
}

function useEntrance(selector = '.animate-in') {
  const location = useLocation()
  useEffect(() => {
    const nodes = document.querySelectorAll(selector)
    anime.remove(nodes)
    anime({
      targets: nodes, opacity: [0, 1], translateY: [18, 0],
      delay: anime.stagger(70), duration: 650, easing: 'easeOutCubic'
    })
  }, [location.pathname, selector])
}

function Home() {
  useEntrance()
  useEffect(() => {
    anime({ targets: '.orb', scale: [0.94, 1.04], direction: 'alternate', loop: true, duration: 3400, easing: 'easeInOutSine' })
    anime({ targets: '.signal-dot', opacity: [0.35, 1], direction: 'alternate', loop: true, duration: 1300, delay: anime.stagger(240), easing: 'easeInOutSine' })
  }, [])
  return <div className="marketing-page">
    <TopNav />
    <main>
      <section className="hero section-wrap">
        <div className="hero-copy animate-in">
          <div className="eyebrow"><span className="live-dot"></span> BUSINESS INTELLIGENCE, REIMAGINED</div>
          <h1>From business questions<br/>to <span className="gradient-text">evidence-backed</span><br/>decisions.</h1>
          <p className="hero-subtitle">Meet AgentX — an autonomous intelligence platform that investigates your data, checks the evidence, and explains what it actually supports.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/login">Explore the dashboard <ArrowRight size={17}/></Link>
            <Link className="button button-quiet" to="/about">How it works <ArrowRight size={16}/></Link>
          </div>
          <div className="trust-line"><ShieldCheck size={16}/> Evidence first. Human decisions always.</div>
        </div>
        <div className="hero-visual animate-in">
          <div className="orb orb-one"></div><div className="orb orb-two"></div>
          <div className="visual-grid"></div>
          <div className="hero-panel">
            <div className="panel-top"><div className="panel-label"><span className="signal-dot"></span> INVESTIGATION RUNNING</div><span className="tiny-chip">AGENTX / 01</span></div>
            <div className="question-card"><span className="question-icon"><MessageSquareText size={17}/></span><div><small>BUSINESS QUESTION</small><p>Why did sales decline in the North region?</p></div></div>
            <div className="workflow">
              <div className="workflow-step"><span className="step-icon purple"><Database size={16}/></span><div><b>Query sales & orders</b><small>PostgreSQL · 1,284 records</small></div><CheckCircle2 className="step-check" size={17}/></div>
              <div className="workflow-step"><span className="step-icon blue"><Boxes size={16}/></span><div><b>Cross-check inventory</b><small>Inventory snapshots · 4 regions</small></div><CheckCircle2 className="step-check" size={17}/></div>
              <div className="workflow-step"><span className="step-icon mint"><BookOpen size={16}/></span><div><b>Retrieve operating policy</b><small>RAG · 3 source passages</small></div><CheckCircle2 className="step-check" size={17}/></div>
            </div>
            <div className="finding-card"><div className="finding-title"><span className="finding-status"><Check size={12}/> EVIDENCE CHECKED</span><span className="finding-score">3 sources</span></div><p>Sales fell 12.4% in the selected period. Inventory shortages overlap with two high-volume products.</p><div className="finding-foot"><span><FileCheck2 size={13}/> 3 traceable sources</span><span className="muted">Demo preview</span></div></div>
          </div>
          <div className="float-chip chip-top"><span className="float-icon"><Zap size={15}/></span><div><b>Multi-tool reasoning</b><small>SQL + analytics + RAG</small></div></div>
          <div className="float-chip chip-bottom"><span className="float-icon mint-icon"><ShieldCheck size={15}/></span><div><b>Evidence-linked</b><small>Claims you can inspect</small></div></div>
        </div>
      </section>
      <section className="metrics-strip section-wrap animate-in">
        <div><strong>01</strong><span>Ask in natural language</span></div><div><strong>02</strong><span>Investigate across sources</span></div><div><strong>03</strong><span>Verify before explaining</span></div><div><strong>04</strong><span>Report with traceable evidence</span></div>
      </section>
      <section id="capabilities" className="capabilities section-wrap">
        <div className="section-heading animate-in"><div className="eyebrow">BUILT FOR THE WHY</div><h2>More than a dashboard.<br/><span className="gradient-text">An investigation engine.</span></h2><p>AgentX brings your business records and internal knowledge together to investigate questions, not just display metrics.</p></div>
        <div className="capability-grid">
          <FeatureCard icon={<Database/>} number="01" title="Structured data" desc="Query orders, products, customers, inventory and returns with clear, reproducible metrics." tone="purple"/>
          <FeatureCard icon={<BrainCircuit/>} number="02" title="Analytics & ML" desc="Compare periods, forecast demand and flag unusual patterns for further investigation." tone="blue"/>
          <FeatureCard icon={<BookOpen/>} number="03" title="Document intelligence" desc="Retrieve internal policies and operational notes with source-aware context." tone="mint"/>
          <FeatureCard icon={<ShieldCheck/>} number="04" title="Evidence verification" desc="Separate supported findings from conflicting claims and insufficient evidence." tone="amber"/>
        </div>
      </section>
      <section className="closing-cta section-wrap animate-in"><div className="cta-glow"></div><div className="eyebrow">MAKE EVERY ANSWER TRACEABLE</div><h2>Good decisions start with<br/>better questions.</h2><p>See how AgentX turns a question into a structured investigation.</p><Link className="button button-primary" to="/login">Enter AgentX <ArrowRight size={17}/></Link></section>
    </main>
    <Footer />
  </div>
}

function FeatureCard({ icon, number, title, desc, tone }) {
  return <article className="feature-card animate-in"><div className={`feature-icon ${tone}`}>{icon}</div><span className="feature-number">{number}</span><h3>{title}</h3><p>{desc}</p><div className="feature-line"></div></article>
}

function About() {
  useEntrance()
  const steps = [
    ['01', 'Understand', 'The orchestrator interprets the question, identifies the metrics and plans a useful investigation.'],
    ['02', 'Retrieve', 'SQL queries fetch structured records while RAG retrieves relevant internal document passages.'],
    ['03', 'Analyse', 'Analytics and appropriate ML tools compare patterns, quantify changes and surface anomalies.'],
    ['04', 'Verify', 'The agent checks calculations, source alignment and contradictions before writing its findings.'],
  ]
  return <div className="marketing-page"><TopNav/><main>
    <section className="page-hero section-wrap animate-in"><div className="eyebrow"><span className="live-dot"></span> ABOUT THE PLATFORM</div><h1>Intelligence you can<br/><span className="gradient-text">trace back to evidence.</span></h1><p>AgentX is a proposed autonomous, evidence-driven business intelligence platform designed to help teams investigate operational questions using data and internal documents.</p></section>
    <section className="about-principles section-wrap">
      <div className="about-intro animate-in"><div className="eyebrow">THE PRINCIPLE</div><h2>Don't just give an answer.<br/>Show <span className="gradient-text">why it holds up.</span></h2><p>A convincing explanation is not necessarily a correct one. AgentX is designed to connect each finding to query results, calculations or source passages—and to say when the available evidence is not enough.</p><div className="principle-note"><ShieldCheck size={20}/><span><b>Evidence over assumptions</b><small>Correlation alone does not establish causation.</small></span></div></div>
      <div className="about-stat-stack animate-in"><div className="about-stat"><span className="about-stat-icon"><Database/></span><div><b>Structured records</b><small>PostgreSQL · orders, stock, returns</small></div><ArrowRight size={17}/></div><div className="about-stat"><span className="about-stat-icon blue"><BookOpen/></span><div><b>Internal knowledge</b><small>RAG · policies and operations docs</small></div><ArrowRight size={17}/></div><div className="about-stat"><span className="about-stat-icon mint"><FileCheck2/></span><div><b>Traceable conclusions</b><small>Sources · metrics · limitations</small></div><ArrowRight size={17}/></div></div>
    </section>
    <section className="process-section"><div className="section-wrap"><div className="section-heading animate-in"><div className="eyebrow">HOW IT WORKS</div><h2>A clear path from question<br/>to <span className="gradient-text">supported finding.</span></h2></div><div className="process-grid">{steps.map(([n,t,d])=><article className="process-card animate-in" key={n}><span className="process-num">{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="section-wrap about-scope animate-in"><div><div className="eyebrow">DESIGNED FOR RETAIL & E-COMMERCE</div><h2>Connected data.<br/>More useful questions.</h2><p>The proposed prototype models customers, products, orders, order items, inventory history, customer activity and returns. Synthetic or authorised data can be used to test known scenarios before real-world deployment.</p></div><div className="scope-tags"><span>Sales analysis</span><span>Stockout investigation</span><span>Return-rate monitoring</span><span>Customer engagement</span><span>Demand forecasting</span><span>Anomaly detection</span></div></section>
    <section className="closing-cta section-wrap animate-in"><div className="cta-glow"></div><div className="eyebrow">READY TO INVESTIGATE?</div><h2>Ask a better question.</h2><p>Explore the AgentX workspace and its investigation workflow.</p><Link className="button button-primary" to="/login">Open workspace <ArrowRight size={17}/></Link></section>
  </main><Footer/></div>
}

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => { anime({ targets: '.login-reveal', opacity: [0,1], translateY: [15,0], delay: anime.stagger(90), duration: 600, easing: 'easeOutCubic' }) }, [])
  function submit(e) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) { setError('Enter your email and password to continue.'); return }
    setError(''); setLoading(true)
    const user = { name: email.split('@')[0].replace(/[._-]/g,' ').replace(/\b\w/g, c=>c.toUpperCase()), email }
    localStorage.setItem('agentx_user', JSON.stringify(user))
    setTimeout(() => navigate('/dashboard'), 450)
  }
  return <div className="auth-page">
    <div className="auth-left"><Link to="/" className="auth-back"><ArrowRight className="back-arrow" size={16}/> Back to home</Link><div className="auth-brand-wrap"><Brand light/><div className="auth-message login-reveal"><div className="eyebrow"><span className="live-dot"></span> EVIDENCE-DRIVEN INTELLIGENCE</div><h1>Know what<br/>happened.<br/><span className="gradient-text">Understand why.</span></h1><p>One workspace to investigate business questions, connect the dots, and make evidence-backed decisions.</p></div><div className="auth-bottom-note login-reveal"><ShieldCheck size={17}/> Designed to show its work, not just its answer.</div></div><div className="auth-orbit orbit-a"></div><div className="auth-orbit orbit-b"></div></div>
    <div className="auth-right"><div className="auth-form-wrap login-reveal"><div className="mobile-auth-brand"><Brand/></div><div className="auth-heading"><span className="auth-icon"><Fingerprint size={22}/></span><h2>Welcome back</h2><p>Sign in to continue to your AgentX workspace.</p></div>
      <form className="auth-form" onSubmit={submit} noValidate><label htmlFor="email">Email address</label><div className="input-wrap"><span><Users size={17}/></span><input id="email" type="email" autoComplete="email" placeholder="you@company.com" value={email} onChange={e=>setEmail(e.target.value)}/></div><div className="password-label"><label htmlFor="password">Password</label><button type="button" className="text-button" onClick={()=>setShowPassword(!showPassword)}>{showPassword?'Hide':'Show'}</button></div><div className="input-wrap"><span><ShieldCheck size={17}/></span><input id="password" type={showPassword?'text':'password'} autoComplete="current-password" placeholder="Enter your password" value={password} onChange={e=>setPassword(e.target.value)}/></div>{error && <div className="form-error">{error}</div>}<button className="button button-primary auth-submit" type="submit" disabled={loading}>{loading?'Opening workspace…':'Sign in to AgentX'} {!loading&&<ArrowRight size={17}/>}</button></form>
      <div className="demo-note"><Sparkles size={16}/><div><b>Prototype demo access</b><span>Use any non-empty email and password. Authentication is simulated in this frontend.</span></div></div><p className="auth-terms">By continuing, you agree to use this prototype responsibly.</p><Link to="/" className="auth-home-link"><ArrowRight size={14}/> Return to homepage</Link></div></div>
  </div>
}

const initialInvestigations = [
  { title: 'North region sales decline', sub: 'Sales · Inventory · Operations report', time: '12 min ago', status: 'Supported', tone: 'good', icon: <TrendingDown size={17}/> },
  { title: 'Return rate anomaly · Electronics', sub: 'Returns · Products · Return policy', time: 'Yesterday', status: 'Needs review', tone: 'warn', icon: <Activity size={17}/> },
  { title: 'Customer engagement trends', sub: 'Customer activity · Orders', time: 'Yesterday', status: 'Partial evidence', tone: 'partial', icon: <Users size={17}/> },
]
const queryAnswers = {
  sales: { title: 'Regional sales investigation', summary: 'Demo finding: sales in the selected region decreased compared with the previous period. Inventory shortages overlap with selected high-volume products, but this alone does not prove causation.', metrics: [['Sales change','−12.4%'],['Products affected','8'],['Evidence sources','3']], evidence: ['Orders and order items · SQL aggregate','Inventory snapshots · date-aligned records','Regional operations report · retrieved passage'] },
  stock: { title: 'Inventory & stockout investigation', summary: 'Demo finding: several products crossed their configured reorder level. Compare stockout dates with product-level sales and replenishment history before attributing lost revenue.', metrics: [['Stockout events','14'],['Products flagged','6'],['Evidence sources','2']], evidence: ['Inventory snapshots · SQL query','Product sales · period comparison'] },
  return: { title: 'Returns investigation', summary: 'Demo finding: the return rate is elevated for the selected category. Validate the denominator, return window and returned quantities before comparing periods.', metrics: [['Return rate','8.6%'],['Change vs prior','+2.1 pp'],['Evidence sources','3']], evidence: ['Returns and order items · SQL aggregate','Product category mapping','Returns policy · retrieved passage'] },
  customer: { title: 'Customer engagement investigation', summary: 'Demo finding: engagement indicators have declined for one customer segment. Browsing metrics indicate activity, not completed purchases; order records are needed to assess conversion.', metrics: [['Sessions','−9.2%'],['Product views','−6.4%'],['Evidence sources','2']], evidence: ['Customer activity · time comparison','Orders · purchase cross-check'] },
  forecast: { title: 'Demand forecast preview', summary: 'Demo finding: a forecast should be evaluated on a held-out time period against a simple baseline. This interface preview does not run a trained forecasting model.', metrics: [['Horizon','Next month'],['Validation','Time split'],['Model status','Preview only']], evidence: ['Dated order item history','Train/test split and baseline comparison'] },
}
function getAnswer(q) {
  const s=q.toLowerCase()
  if(s.includes('stock')||s.includes('inventory')) return queryAnswers.stock
  if(s.includes('return')||s.includes('refund')) return queryAnswers.return
  if(s.includes('customer')||s.includes('engagement')||s.includes('session')) return queryAnswers.customer
  if(s.includes('forecast')||s.includes('demand')||s.includes('next month')) return queryAnswers.forecast
  return queryAnswers.sales
}
function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(() => { try { return JSON.parse(localStorage.getItem('agentx_user')) || demoUser } catch { return demoUser } })
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState(null)
  const [running, setRunning] = useState(false)
  const [activeTab, setActiveTab] = useState('Overview')
  const [notice, setNotice] = useState('')
  const queryRef = useRef(null)
  useEffect(() => { anime({ targets: '.dash-animate', opacity: [0,1], translateY: [12,0], delay: anime.stagger(55), duration: 500, easing: 'easeOutCubic' }) }, [])
  function runQuery(q = question) {
    if (!q.trim() || running) return
    setQuestion(q); setRunning(true); setAnswer(null)
    setTimeout(() => { setAnswer(getAnswer(q)); setRunning(false); setActiveTab('Investigations'); if(queryRef.current) queryRef.current.scrollIntoView({behavior:'smooth',block:'nearest'}) }, 750)
  }
  function logout() { localStorage.removeItem('agentx_user'); navigate('/login') }
  const displayName = user?.name || 'Alex Morgan'
  const firstName = displayName.split(' ')[0]
  return <div className="dashboard-shell">
    <aside className={`sidebar ${sidebarOpen?'sidebar-open':''}`}><div className="sidebar-brand"><Brand light/><button className="icon-button sidebar-close" onClick={()=>setSidebarOpen(false)} aria-label="Close sidebar"><X size={18}/></button></div>
      <div className="workspace-switch"><span className="workspace-logo">A</span><span><b>AgentX Workspace</b><small>Retail intelligence</small></span><ChevronDown size={15}/></div>
      <div className="side-label">WORKSPACE</div><nav className="side-nav">
        {[['Overview',<LayoutDashboard size={18}/>],['Investigations',<FileSearch size={18}/>],['Data sources',<Database size={18}/>],['Analytics',<BarChart3 size={18}/>]].map(([label,icon])=><button key={label} className={`side-link ${activeTab===label?'side-link-active':''}`} onClick={()=>{setActiveTab(label);setSidebarOpen(false);if(label==='Investigations'&&answer) queryRef.current?.scrollIntoView({behavior:'smooth'})}}>{icon}<span>{label}</span>{label==='Investigations'&&<span className="side-count">3</span>}</button>)}
      </nav>
      <div className="side-label side-label-spaced">TOOLS</div><nav className="side-nav">
        <button className="side-link" onClick={()=>{setQuestion('Forecast demand for next month');runQuery('Forecast demand for next month');setSidebarOpen(false)}}><TrendingUp size={18}/><span>Demand forecast</span></button>
        <button className="side-link" onClick={()=>{setQuestion('Find unusual inventory stockouts');runQuery('Find unusual inventory stockouts');setSidebarOpen(false)}}><Activity size={18}/><span>Anomaly detection</span></button>
      </nav>
      <div className="sidebar-bottom"><div className="side-help"><span className="help-icon"><CircleHelp size={17}/></span><div><b>Need a hand?</b><small>Explore how AgentX works.</small></div><ArrowUpRight size={15}/></div><button className="side-link" onClick={()=>navigate('/about')}><Settings2 size={18}/><span>About AgentX</span></button><div className="sidebar-user"><div className="avatar">{firstName.slice(0,1).toUpperCase()}</div><div className="user-meta"><b>{displayName}</b><small>{user?.email || 'alex@agentx.demo'}</small></div><button className="icon-button logout-btn" title="Sign out" onClick={logout}><LogIn size={17}/></button></div></div>
    </aside>
    {sidebarOpen&&<button className="sidebar-scrim" onClick={()=>setSidebarOpen(false)} aria-label="Close navigation"/>}
    <main className="dashboard-main">
      <header className="dash-topbar"><div className="dash-top-left"><button className="icon-button dash-menu" onClick={()=>setSidebarOpen(true)} aria-label="Open navigation"><Menu size={20}/></button><div className="breadcrumb">Workspace <span>/</span> <b>{activeTab}</b></div></div><div className="dash-top-actions"><div className="system-status"><span className="live-dot"></span> All systems ready</div><button className="icon-button notification-btn" aria-label="Notifications" onClick={()=>setNotice(notice?'':'You are all caught up. No new alerts.')}><Bell size={18}/><i></i></button><div className="avatar top-avatar">{firstName.slice(0,1).toUpperCase()}</div></div></header>
      {notice&&<div className="notice-pop"><Bell size={16}/>{notice}<button onClick={()=>setNotice('')}><X size={14}/></button></div>}
      <div className="dashboard-content">
        <section className="dashboard-welcome dash-animate"><div><div className="eyebrow"><span className="live-dot"></span> YOUR INTELLIGENCE WORKSPACE</div><h1>Good day, {firstName}<span className="wave">✳</span></h1><p>Turn your business questions into evidence-backed findings.</p></div><button className="button button-primary new-investigation" onClick={()=>{document.getElementById('question-input')?.focus();window.scrollTo({top:0,behavior:'smooth'})}}><Plus size={17}/> New investigation</button></section>
        <section className="query-composer dash-animate" ref={queryRef}><div className="composer-top"><span className="composer-icon"><Sparkles size={18}/></span><div><h2>What would you like to investigate?</h2><p>Ask a question. AgentX will help structure the investigation.</p></div><span className="prototype-pill"><span className="live-dot"></span> PROTOTYPE</span></div><form onSubmit={e=>{e.preventDefault();runQuery()}} className="query-form"><MessageSquareText size={18}/><input id="question-input" value={question} onChange={e=>setQuestion(e.target.value)} placeholder="e.g. Why did sales fall in the North region?" aria-label="Ask a business question"/><button type="submit" className="button button-primary" disabled={running||!question.trim()}>{running?'Investigating…':'Investigate'} {!running&&<ArrowRight size={16}/>}</button></form><div className="prompt-suggestions"><span>TRY ASKING</span>{[['Sales decline','Why did sales decline?'],['Stockouts','Which products are often out of stock?'],['Returns','Has the return rate changed?'],['Forecast','Forecast demand next month']].map(([label,q])=><button key={label} onClick={()=>runQuery(q)} disabled={running}>{label}<ArrowUpRight size={12}/></button>)}</div></section>
        {running&&<section className="investigation-progress dash-animate"><div className="progress-spinner"></div><div><b>Structuring your investigation…</b><p>Identifying relevant records, metrics and evidence sources.</p></div><span className="progress-live">IN PROGRESS</span></section>}
        {answer&&!running&&<section className="answer-panel dash-animate"><div className="answer-head"><div className="answer-icon"><FileCheck2 size={19}/></div><div><span className="answer-kicker">INVESTIGATION PREVIEW</span><h2>{answer.title}</h2></div><span className="demo-badge">Illustrative demo</span></div><p className="answer-summary">{answer.summary}</p><div className="answer-metrics">{answer.metrics.map(([label,value])=><div key={label}><span>{label}</span><b>{value}</b></div>)}</div><div className="evidence-list-head"><b><ShieldCheck size={16}/> Evidence considered</b><span>Source traceability preview</span></div><div className="evidence-items">{answer.evidence.map((e,i)=><div key={e}><span className="evidence-index">0{i+1}</span><span>{e}</span><CheckCircle2 size={16}/></div>)}</div><div className="answer-disclaimer"><CircleHelp size={15}/> These are illustrative frontend results, not outputs from a connected database or trained model.</div></section>}
        <section className="stat-grid">
          <StatCard icon={<ShoppingCart size={18}/>} label="Total orders" value="24,892" change="+8.2%" up tone="purple" foot="vs. previous period"/>
          <StatCard icon={<TrendingUp size={18}/>} label="Net sales" value="$482.6K" change="+4.6%" up tone="blue" foot="vs. previous period"/>
          <StatCard icon={<Package size={18}/>} label="Stockout alerts" value="14" change="+3 alerts" tone="amber" foot="require investigation"/>
          <StatCard icon={<Activity size={18}/>} label="Return rate" value="6.8%" change="+0.4 pp" tone="mint" foot="vs. previous period"/>
        </section>
        <section className="dash-lower-grid">
          <div className="dash-card sales-card dash-animate"><div className="card-heading"><div><h3>Sales overview</h3><p>Illustrative weekly revenue trend</p></div><button className="select-period" onClick={()=>setNotice('Demo chart uses illustrative values for the last 7 weeks.')}>Last 7 weeks <ChevronDown size={14}/></button></div><div className="chart-legend"><span><i className="legend-dot"></i>Revenue</span><span className="chart-unit">USD · DEMO DATA</span></div><div className="chart-wrap"><div className="y-axis"><span>$80k</span><span>$60k</span><span>$40k</span><span>$20k</span><span>$0</span></div><div className="chart-area"><div className="chart-grid-lines"><i/><i/><i/><i/><i/></div><svg className="sales-svg" viewBox="0 0 560 190" preserveAspectRatio="none" role="img" aria-label="Illustrative revenue line chart"><defs><linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#8b7bff" stopOpacity=".24"/><stop offset="100%" stopColor="#8b7bff" stopOpacity="0"/></linearGradient></defs><path d="M0 132 C25 120 38 112 62 120 S105 100 124 105 S166 71 186 83 S225 96 248 74 S287 81 310 55 S352 73 372 59 S414 36 434 48 S479 22 498 34 S540 15 560 20 L560 190 L0 190 Z" fill="url(#areaFill)"/><path d="M0 132 C25 120 38 112 62 120 S105 100 124 105 S166 71 186 83 S225 96 248 74 S287 81 310 55 S352 73 372 59 S414 36 434 48 S479 22 498 34 S540 15 560 20" fill="none" stroke="#9485ff" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round"/></svg><div className="x-axis"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span><span>Week 5</span><span>Week 6</span><span>Week 7</span></div></div></div><div className="chart-foot"><span><span className="live-dot"></span> Illustrative dataset</span><button onClick={()=>{setQuestion('Compare sales across regions');runQuery('Compare sales across regions')}}>Investigate trend <ArrowRight size={14}/></button></div></div>
          <div className="dash-card source-card dash-animate"><div className="card-heading"><div><h3>Evidence sources</h3><p>Proposed data connections</p></div><button className="icon-button" onClick={()=>setActiveTab('Data sources')} aria-label="View data sources"><ArrowUpRight size={17}/></button></div><div className="source-list"><SourceRow icon={<Database size={17}/>} title="PostgreSQL database" sub="7 proposed tables" status="Schema planned" tone="purple"/><SourceRow icon={<BookOpen size={17}/>} title="Internal documents" sub="RAG knowledge base" status="Not connected" tone="blue"/><SourceRow icon={<BrainCircuit size={17}/>} title="ML analytics" sub="Forecasting & anomalies" status="Prototype" tone="mint"/></div><div className="source-card-foot"><ShieldCheck size={15}/> Connections shown are placeholders.</div></div>
        </section>
        <section className="dash-card recent-card dash-animate"><div className="card-heading"><div><h3>Recent investigations</h3><p>Review previous questions and their evidence status</p></div><button className="view-all" onClick={()=>setActiveTab('Investigations')}>View all <ArrowRight size={14}/></button></div><div className="investigation-table"><div className="table-head"><span>INVESTIGATION</span><span>LAST RUN</span><span>EVIDENCE STATUS</span><span></span></div>{initialInvestigations.map((item,i)=><button className="investigation-row" key={item.title} onClick={()=>runQuery(item.title)}><span className="investigation-title"><span className={`investigation-icon inv-${i}`}>{item.icon}</span><span><b>{item.title}</b><small>{item.sub}</small></span></span><span className="investigation-time"><Clock3 size={13}/>{item.time}</span><span><span className={`status-pill status-${item.tone}`}><i></i>{item.status}</span></span><ArrowUpRight className="row-arrow" size={16}/></button>)}</div><div className="table-foot"><span>Showing sample investigation history</span><span><span className="live-dot"></span> Demo workspace</span></div></section>
        <footer className="dash-footer"><span>© 2026 AgentX · Evidence-driven intelligence</span><span><ShieldCheck size={14}/> Human approval for consequential actions</span></footer>
      </div>
    </main>
  </div>
}
function StatCard({icon,label,value,change,up,tone,foot}) { return <article className="stat-card dash-animate"><div className="stat-top"><span className={`stat-icon ${tone}`}>{icon}</span><span className={`stat-change ${up?'positive':'attention'}`}>{up?<ArrowUpRight size={13}/>:<ArrowDownRight size={13}/>} {change}</span></div><span className="stat-label">{label}</span><b className="stat-value">{value}</b><span className="stat-foot">{foot}</span></article> }
function SourceRow({icon,title,sub,status,tone}) { return <div className="source-row"><span className={`source-icon ${tone}`}>{icon}</span><span className="source-copy"><b>{title}</b><small>{sub}</small></span><span className="source-status"><i></i>{status}</span></div> }
function Footer() { return <footer className="site-footer section-wrap"><Brand/><span>Evidence-driven intelligence for better decisions.</span><span>© 2026 AgentX · Prototype</span></footer> }

export default function App() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({top:0,behavior:'instant'}) }, [location.pathname])
  return <Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/login" element={<Login/>}/><Route path="/dashboard" element={<Dashboard/>}/><Route path="*" element={<Home/>}/></Routes>
}