import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { content as c } from './content';
import './styles.css';

const ids = c.navigation.map(item => item.id);
const currentPage = () => ids.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'home';
const Arrow = () => <span aria-hidden="true">↗</span>;
function Link({ to, children, className = '' }) { return <a className={className} href={`#${to}`}>{children}<Arrow /></a>; }
function Star({ className = '' }) { return <svg className={`star ${className}`} viewBox="0 0 100 100" aria-hidden="true"><path d="M48 3 57 35 82 13 67 43 98 48 67 57 85 83 57 67 50 98 41 68 13 85 33 58 3 50 35 41 16 15 43 34Z" fill="currentColor" /></svg>; }
function Placeholder({ children }) { return <p className="placeholder">{children}</p>; }
function Photo({ photo, portrait = false }) {
  return <figure className={`photo ${portrait ? 'portrait' : ''}`}>
    {photo.src ? <img src={photo.src} alt={photo.alt} /> : <div className="photo-empty"><div className="photo-lines" aria-hidden="true"/><Star /><span>{photo.label}</span>{photo.note && <small>{photo.note}</small>}</div>}
    {photo.caption && <figcaption>{photo.caption}<span aria-hidden="true">↗</span></figcaption>}
  </figure>;
}
function PageHeading({ data }) { return <header className="page-heading"><p className="eyebrow">{data.eyebrow}</p><h1>{data.title}<span className="pink">.</span></h1><Star /></header>; }
function Sections({ sections }) { return <div className="editorial-sections">{sections.map((s, i) => <section className="editorial-row" key={s.title}><span className="number">0{i + 1}</span><h2>{s.title}</h2><Placeholder>{s.text}</Placeholder></section>)}</div>; }
function Events({ events, empty }) { return events.length ? <div className="events">{events.map(event => <article className="event" key={event.id}><p className="eyebrow">{event.date}</p><h3>{event.title}</h3><p>{event.venue} · {event.location}</p><p>{event.description}</p></article>)}</div> : <div className="empty-event"><span className="empty-mark" aria-hidden="true">↳</span><p>{empty}</p></div>; }
function Home() { const h = c.home; return <>
  <section className="hero wrap">
    <div className="hero-top"><p className="eyebrow">{h.eyebrow}<br/>{c.site.location}</p><p className="handwritten">{h.note}<span aria-hidden="true"> ⤵</span></p></div>
    <h1 className="hero-title"><span>{h.titleTop}</span><span className="jazz">{h.titleBottom}<Star /></span></h1>
    <div className="hero-bottom"><p className="tagline">{c.site.tagline}</p><span className="edition">{c.site.school} <span aria-hidden="true">/</span> CA</span></div>
  </section>
  <section className="intro-grid wrap"><div className="intro-copy"><span className="eyebrow">{c.site.descriptor}</span><p className="intro-text">{h.intro}</p><Placeholder>{h.introPlaceholder}</Placeholder><div className="button-row"><Link to="about" className="button">{h.aboutButton}</Link><Link to="ensemble" className="text-link">{h.ensembleButton}</Link></div></div><div className="photo-collage"><span className="tape" aria-hidden="true"/><Photo photo={h.photo}/><span className="photo-sticker">{c.site.tagline}</span></div></section>
  <div className="ticker">{h.ticker.map(t => <span key={t}>{t}<Star /></span>)}</div>
  <section className="performance-preview wrap"><div className="section-top"><div><p className="eyebrow">{h.performanceLabel}</p><h2>{h.performanceTitle}</h2></div><Link to="performances" className="text-link">{h.performanceButton}</Link></div><Events events={c.performances.upcomingEvents.slice(0, 2)} empty={c.performances.emptyUpcoming}/></section>
  <section className="outreach"><div className="wrap outreach-grid"><div className="outreach-art" aria-hidden="true"><Star /><span>↗</span></div><div><p className="eyebrow">{h.initiativeLabel}</p><h2>{h.initiativeTitle}</h2><p>{h.initiativeText}</p><Link to="initiatives" className="button light">{h.initiativeButton}</Link></div></div></section>
  <div className="home-contact wrap"><h2>{c.contact.title}<span className="pink">.</span></h2><Link to="contact" className="button">{h.contactButton}</Link></div>
</>; }
function InnerPage({ page }) {
  const d = c[page];
  return <div className="wrap inner-page"><PageHeading data={d}/>
    {(page === 'about' || page === 'initiatives') && <Sections sections={d.sections}/>}
    {page === 'ensemble' && <><Placeholder>{d.intro}</Placeholder><div className="member-grid">{d.members.map(m => <article className="member" key={m.id}><Photo photo={m.photo} portrait/><h2>{m.name}</h2><p className="instrument">{m.instrument}</p>{m.bio && <Placeholder>{m.bio}</Placeholder>}</article>)}</div><Photo photo={d.groupPhoto}/></>}
    {page === 'performances' && <><section className="event-section"><h2>{d.upcoming}</h2><Events events={d.upcomingEvents} empty={d.emptyUpcoming}/></section><section className="event-section"><h2>{d.past}</h2><Events events={d.pastEvents} empty={d.emptyPast}/></section><section className="callout"><div><h2>{d.bookingTitle}</h2><p>{d.bookingText}</p></div><Link to="contact" className="button">{d.bookingButton}</Link></section></>}
    {page === 'support' && <><Sections sections={d.sections}/><Link to="contact" className="button support-button">{d.button}</Link></>}
    {page === 'contact' && <div className="contact-grid"><div>{d.reasons.map((r, i) => <div className="contact-reason" key={r}><span className="number">0{i + 1}</span><h2>{r}</h2><Arrow /></div>)}</div><section className="contact-card"><Star/><h2>{d.emailLabel}</h2>{d.email ? <a className="email-link" href={`mailto:${d.email}`}>{d.email}</a> : <><Placeholder>{d.emailPlaceholder}</Placeholder><p>{d.emailNote}</p></>}<h3>{d.socialTitle}</h3>{d.socials.map(s => <p key={s.label}>{/^https:\/\//.test(s.url) ? <a href={s.url} target="_blank" rel="noopener noreferrer">{s.label} <Arrow/></a> : <span>{s.label} <small>{s.placeholder}</small></span>}</p>)}</section></div>}
  </div>;
}
function App() {
  const [page, setPage] = useState(currentPage); const [menu, setMenu] = useState(false); const main = useRef(null);
  useEffect(() => { const navigate = () => { setPage(currentPage()); setMenu(false); window.scrollTo(0, 0); requestAnimationFrame(() => main.current?.focus()); }; window.addEventListener('hashchange', navigate); return () => window.removeEventListener('hashchange', navigate); }, []);
  useEffect(() => { document.title = `${c.navigation.find(n => n.id === page).label} — ${c.site.name}`; }, [page]);
  return <><a href="#main" className="skip-link" onClick={e => { e.preventDefault(); main.current.focus(); }}>{c.site.skip}</a><header className="site-header"><div className="nav-wrap"><a href="#home" className="wordmark" aria-label={c.site.homeLabel}>a<span aria-hidden="true">✳</span>j</a><button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-controls="navigation">{menu ? c.site.menuClose : c.site.menuOpen} <span aria-hidden="true">{menu ? '−' : '+'}</span></button><nav id="navigation" aria-label={c.site.navLabel} className={menu ? 'open' : ''}>{c.navigation.map(n => <a key={n.id} href={`#${n.id}`} aria-current={page === n.id ? 'page' : undefined} onClick={() => setMenu(false)}>{n.label}{n.id === 'contact' && <Arrow/>}</a>)}</nav></div></header><main id="main" ref={main} tabIndex="-1">{page === 'home' ? <Home/> : <InnerPage page={page}/>}</main><footer className="site-footer wrap"><a href="#home" className="footer-name">{c.site.name}<Star/></a><p>{c.site.footer}</p><div><span>© {new Date().getFullYear()} {c.site.copyright}</span><span>{c.site.location}</span></div></footer></>;
}
createRoot(document.getElementById('root')).render(<App/>);
