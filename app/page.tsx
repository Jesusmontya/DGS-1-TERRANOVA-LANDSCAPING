"use client"

import ScrollHero from '../components/ScrollHero'
import FloatingQuoteButton from '../components/FloatingQuoteButton'
import ServiceAreaMap from '../components/ServiceAreaMap'
import { getLeadAttribution, rememberQuoteOrigin, trackEvent } from '@/lib/analytics'
import { useLeadFormSecurity } from '@/lib/leadFormSecurity'
import floating from './FloatingContact.module.css'
import homeStyles from './HomeEnhancements.module.css'

const services = [
  {
    title: 'Backyard Design',
    text: 'Start with a blank yard or an unfinished idea. We help organize the layout, materials, and project priorities before construction.',
    image: '/images/imgs/IMG_0249.PNG',
    href: '/backyard-design',
  },
  {
    title: 'Pavers & Hardscape',
    text: 'Patios, walkways, retaining walls, masonry, and hardscape features planned as part of the complete outdoor space.',
    image: '/images/imgs/IMG_0252.PNG',
    href: '/paver-patio-reno',
  },
  {
    title: 'Xeriscaping & Turf',
    text: 'Low-water landscape planning with artificial turf, decorative rock, planting, irrigation, and usable outdoor areas.',
    image: '/images/imgs/IMG_0250.PNG',
    href: '/xeriscaping-reno',
  },
  {
    title: 'Landscape Construction',
    text: 'Coordinate concrete, fencing, irrigation, planting, hardscape, and finish work so the yard is built as one connected project.',
    image: '/images/imgs/IMG_0251.PNG',
    href: '/backyard-design',
  },
]

export default function Home() {
  const { startedAt } = useLeadFormSecurity()
  const handleQuoteClick = (placement: string) => {
    rememberQuoteOrigin()
    trackEvent('click_free_quote', { placement, page_path: window.location.pathname })
  }

  const handlePhoneClick = (placement: string) => {
    trackEvent('click_phone', { placement, page_path: window.location.pathname })
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TerraNova Landscaping home">
          <span className="brand-mark">TN</span>
          <span><strong>TERRANOVA</strong><small>LANDSCAPING</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#about">About</a><a href="#work">Our Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact" onClick={() => handleQuoteClick('home_header')}>Get a Free Quote</a>
      </header>

      <ScrollHero />
      <FloatingQuoteButton />

      <section className={homeStyles.realWork} id="work">
        <div className="page-width">
          <div className={homeStyles.realWorkHeading}>
            <div>
              <p className="eyebrow">REAL TERRANOVA WORK</p>
              <h2>Built projects. Real properties. Real work by our team.</h2>
            </div>
            <p>Before we show design concepts, see actual TerraNova work. These photos and videos are from real projects completed by the team.</p>
          </div>
          <div className={homeStyles.realMediaGrid}>
            <article className={homeStyles.videoCard}>
              <video autoPlay muted loop playsInline preload="metadata" aria-label="Real TerraNova landscaping project video">
                <source src="/images/imgs/videos_reales/IMG_3041.mp4" type="video/mp4" />
              </video>
              <div className={homeStyles.mediaBadge}>REAL PROJECT VIDEO</div>
            </article>
            <div className={homeStyles.realPhotoStack}>
              <article className={homeStyles.realPhotoLarge} style={{ backgroundImage: "url('/images/imgs/imgs_reales/IMG_2031.PNG')" }}>
                <div className={homeStyles.mediaBadge}>COMPLETED PROJECT</div>
              </article>
              <article className={homeStyles.realPhotoSmall} style={{ backgroundImage: "url('/images/imgs/imgs_reales/PHOTO-2026-08-26-17-37-52.jpg')" }}>
                <div className={homeStyles.mediaBadge}>REAL TERRANOVA WORK</div>
              </article>
            </div>
          </div>
          <div className={homeStyles.realWorkFooter}>
            <p>Have a yard you want to transform?</p>
            <a className="button button-dark" href="#contact" onClick={() => handleQuoteClick('home_real_work')}>Get a Free Quote <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="intro section page-width" id="about">
        <div><p className="eyebrow">WHY TERRANOVA</p><h2>Design and build your backyard from zero—with a clear plan before construction starts.</h2></div>
        <div className="intro-copy"><p>With 15+ years of experience, TerraNova helps homeowners turn outdoor spaces into complete landscape projects. You do not need to arrive knowing the layout or exact materials—we help work through those decisions with you.</p><a className="text-link" href="#contact" onClick={() => handleQuoteClick('home_about')}>Get a Free Quote <span>→</span></a></div>
      </section>

      <section className="services section" id="services"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Backyard design and landscape construction for Reno-area homes.</h2></div><p>Start with the problem you want to solve. Explore the service, understand the options, then request a free quote when you are ready.</p></div>
        <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-image" role="img" aria-label={`${service.title} design visualization by TerraNova Landscaping`} style={{ backgroundImage: `url(${service.image})` }}><span>0{index + 1}</span><div className={homeStyles.renderLabel}>DESIGN VISUALIZATION</div></div><div className="service-body"><h3>{service.title}</h3><p>{service.text}</p><a className={homeStyles.serviceExplore} href={service.href}>Learn More <span>→</span></a></div></article>)}</div>
      </div></section>

      <section className={homeStyles.designIntro + ' section page-width'}>
        <div className="section-heading compact-heading"><div><p className="eyebrow">DESIGN + VISUALIZATION</p><h2>See the direction before construction begins.</h2></div><p>The images below are design visualizations used to help homeowners understand layout, materials, and possibilities before a final construction plan is built.</p></div>
        <div className="comparison-grid">
          <article className="comparison-card"><div className="comparison-image before-image" role="img" aria-label="TerraNova landscape design visualization" style={{ backgroundImage: "url('/images/imgs/IMG_0272.PNG')" }} /><div className="comparison-label"><span>01</span> DESIGN CONCEPT</div></article>
          <article className="comparison-card"><div className="comparison-image after-image" role="img" aria-label="TerraNova landscape design visualization" style={{ backgroundImage: "url('/images/imgs/IMG_0273.PNG')" }} /><div className="comparison-label"><span>02</span> DESIGN CONCEPT</div></article>
        </div>
      </section>

      <section className="split-feature section page-width"><div className="feature-photo" role="img" aria-label="Real TerraNova completed landscaping project" style={{ backgroundImage: "url('/images/imgs/imgs_reales/IMG_2031.PNG')" }} /><div className="feature-copy"><p className="eyebrow">BUILT FOR NORTHERN NEVADA</p><h2>Your property deserves more than a one-size-fits-all solution.</h2><p>We take the time to understand the space, the conditions, and what you actually want from your yard. The result is a landscape that looks intentional and works for you.</p><ul className="check-list"><li>15+ years of landscaping experience</li><li>Clear communication from quote to completion</li><li>Solutions tailored to your property and goals</li></ul><a className="button button-dark" href="#contact" onClick={() => handleQuoteClick('home_feature')}>Get a Free Quote <span>↗</span></a></div></section>

      <ServiceAreaMap />

      <section className="reviews section page-width" id="experience"><div className="review-intro"><p className="eyebrow">WHY CLIENTS CHOOSE TERRANOVA</p><h2 className={homeStyles.trustTitle}>15+ years of landscaping experience.</h2><p>We are leaving customer testimonials off the site until verified Google reviews are ready. For now, the focus is on the process and services TerraNova can actually stand behind.</p></div><div className={homeStyles.experienceGrid}><article className={homeStyles.experienceItem}><strong>Custom planning</strong><p>Start with your goals and build the layout around the property.</p></article><article className={homeStyles.experienceItem}><strong>Material guidance</strong><p>Compare practical options before final products are selected.</p></article><article className={homeStyles.experienceItem}><strong>Residential & commercial</strong><p>Project scope is confirmed during the quote process.</p></article><article className={homeStyles.experienceItem}><strong>Free project quote</strong><p>Share the service, budget range, timing, and project details to start.</p></article></div></section>

      <section className="cta-section" id="contact"><div className="page-width cta-inner"><div><p className="eyebrow light">READY WHEN YOU ARE</p><h2>Tell us what you want to build.</h2><p>Send the basics about your project. TerraNova can review the request, contact you, and help determine the next step for design and pricing.</p><div className="cta-contact-links"><a href="tel:+17758707224" onClick={() => handlePhoneClick('contact_section')}>Call 775-870-7224 <span>↗</span></a><a href="mailto:info@terranovalandscapingnv.com">Email us <span>↗</span></a></div></div><form className="lead-form" onSubmit={async (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const fd = new FormData(form)
        const attribution = getLeadAttribution()
        const service = String(fd.get('service') || '')
        const budget = String(fd.get('budget') || '')
        const timeline = String(fd.get('timeline') || '')
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: fd.get('name'),
            phone: fd.get('phone'),
            email: fd.get('email'),
            city: fd.get('address') || 'Reno, NV',
            service,
            budget,
            timeline,
            message: fd.get('message'),
            company_website: fd.get('company_website'),
            form_started_at: fd.get('form_started_at'),
            ...attribution,
          }),
        })
        const result = await res.json().catch(() => null)
        if (res.ok) {
          trackEvent('generate_lead', { service, budget, timeline, page_path: attribution.landing_page, conversion_eligible: result?.conversionEligible === true })
          form.reset()
          window.setTimeout(() => window.location.assign('/thank-you'), 150)
        } else {
          alert('We could not submit the form. Please call 775-870-7224.')
        }
      }}>
        <input name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="honeypot" />
        <input type="hidden" name="form_started_at" value={startedAt} />
        <label>Name<input name="name" placeholder="Your name" required /></label>
        <label>Phone<input name="phone" type="tel" placeholder="(775) 000-0000" required /></label>
        <label>Email<input name="email" type="email" placeholder="you@example.com" /></label>
        <label>Service<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Full Backyard / Landscape Design</option><option>Paver Patio</option><option>Concrete</option><option>Artificial Turf</option><option>Xeriscaping</option><option>Retaining Wall</option><option>Fencing</option><option>Irrigation</option><option>Masonry</option><option>Other</option></select></label>
        <label>Project budget<select name="budget" defaultValue="" required><option value="" disabled>Select a range</option><option>Under $10,000</option><option>$10,000 – $20,000</option><option>$20,000 – $35,000</option><option>$35,000 – $50,000</option><option>$50,000+</option><option>Not sure yet</option></select></label>
        <label>When do you want to start?<select name="timeline" defaultValue="" required><option value="" disabled>Select timing</option><option>As soon as possible</option><option>Within 1 month</option><option>1–3 months</option><option>3–6 months</option><option>Just planning</option></select></label>
        <label className={homeStyles.formWide}>Project address<input name="address" placeholder="Reno, NV" /></label>
        <label className={homeStyles.formWide}>Tell us about your project<textarea name="message" placeholder="What would you like to build or change?" rows={4} /></label>
        <p className={homeStyles.formHint}>Not sure about the exact material or budget? Choose the closest option and explain what you have in mind.</p>
        <button className="button button-primary form-button" type="submit">Get My Free Quote <span>↗</span></button>
        <small>By submitting this form, you agree that TerraNova may contact you about your request.</small>
      </form></div></section>

      <footer className="footer"><div className="page-width footer-inner"><div className="brand footer-brand"><span className="brand-mark">TN</span><span><strong>TERRANOVA</strong><small>LANDSCAPING</small></span></div><p>Professional landscaping in Reno, Sparks & Northern Nevada.</p><a href="mailto:info@terranovalandscapingnv.com">info@terranovalandscapingnv.com</a></div></footer>

      <a className={floating.button} href="tel:+17758707224" aria-label="Call TerraNova at 775-870-7224" onClick={() => handlePhoneClick('floating_phone')}>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.7 2.8 9.1 8c.2.5.1 1-.3 1.4l-1.7 1.7a15.2 15.2 0 0 0 5.8 5.8l1.7-1.7c.4-.4.9-.5 1.4-.3l5.2 2.4c.5.2.8.7.7 1.3l-.5 2.7c-.1.6-.7 1.1-1.3 1.1C10 22.4 1.6 14 1.6 3.9c0-.6.5-1.2 1.1-1.3l2.7-.5c.6-.1 1.1.2 1.3.7Z" fill="currentColor" />
        </svg>
        <span>Call</span>
      </a>
    </main>
  )
}
