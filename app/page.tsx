import ScrollHero from '../components/ScrollHero'

const services = [
  {
    title: 'Landscaping',
    text: 'Thoughtful outdoor spaces designed around your property, lifestyle, and goals.',
    image: '/images/imgs/IMG_0249.PNG',
  },
  {
    title: 'Lawn Care',
    text: 'Consistent, professional care that keeps your lawn clean, healthy, and ready to enjoy.',
    image: '/images/imgs/IMG_0250.PNG',
  },
  {
    title: 'Irrigation',
    text: 'Efficient irrigation solutions that help protect your landscape while using water wisely.',
    image: '/images/imgs/IMG_0251.PNG',
  },
  {
    title: 'Hardscapes',
    text: 'Pavers, walkways, patios, and outdoor features built to make your property feel complete.',
    image: '/images/imgs/IMG_0252.PNG',
  },
]

const areas = ['Reno', 'Sparks', 'Northern Nevada']

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TerraNova Landscaping home">
          <span className="brand-mark">TN</span>
          <span><strong>TERRANOVA</strong><small>LANDSCAPING</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a><a href="#about">About</a><a href="#work">Our Work</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">Get a Free Estimate</a>
      </header>

      <ScrollHero />

      <section className="intro section page-width" id="about">
        <div><p className="eyebrow">WHY TERRANOVA</p><h2>A local team that treats your property like it matters.</h2></div>
        <div className="intro-copy"><p>With 15+ years of experience, TerraNova helps homeowners turn outdoor spaces into places they are proud to own. We focus on clear communication, practical solutions, and quality work from the first conversation to the finished project.</p><a className="text-link" href="#contact">Talk about your project <span>→</span></a></div>
      </section>

      <section className="services section" id="services"><div className="page-width">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>Landscaping services for real properties.</h2></div><p>Whether you need ongoing care or a complete outdoor upgrade, we can help you plan the next step.</p></div>
        <div className="service-grid">{services.map((service, index) => <article className="service-card" key={service.title}><div className="service-image" style={{ backgroundImage: `url(${service.image})` }}><span>0{index + 1}</span></div><div className="service-body"><h3>{service.title}</h3><p>{service.text}</p><a href="#contact">Request an estimate <span>→</span></a></div></article>)}</div>
      </div></section>

      <section className="before-after section page-width" id="work">
        <div className="section-heading compact-heading"><div><p className="eyebrow">OUR WORK</p><h2>See the difference professional landscaping can make.</h2></div><p>Real TerraNova project photos from the company's uploaded portfolio.</p></div>
        <div className="comparison-grid">
          <article className="comparison-card"><div className="comparison-image before-image" style={{ backgroundImage: "url('/images/imgs/IMG_0272.PNG')" }} /><div className="comparison-label"><span>01</span> PROJECT</div></article>
          <article className="comparison-card"><div className="comparison-image after-image" style={{ backgroundImage: "url('/images/imgs/IMG_0273.PNG')" }} /><div className="comparison-label"><span>02</span> PROJECT</div></article>
        </div>
      </section>

      <section className="split-feature section page-width"><div className="feature-photo" style={{ backgroundImage: "url('/images/imgs/IMG_0274.PNG')" }} /><div className="feature-copy"><p className="eyebrow">BUILT FOR NORTHERN NEVADA</p><h2>Your property deserves more than a one-size-fits-all solution.</h2><p>We take the time to understand the space, the conditions, and what you actually want from your yard. The result is a landscape that looks intentional and works for you.</p><ul className="check-list"><li>15+ years of landscaping experience</li><li>Clear communication from estimate to completion</li><li>Solutions tailored to your property and goals</li></ul><a className="button button-dark" href="#contact">Start Your Project <span>↗</span></a></div></section>

      <section className="areas section"><div className="page-width areas-inner"><div><p className="eyebrow light">SERVICE AREA</p><h2>Serving homeowners across the Reno area.</h2><p className="areas-copy">TerraNova serves Reno, Sparks, and surrounding Northern Nevada communities. Exact service availability can be confirmed when you request an estimate.</p></div><div className="area-list">{areas.map((area) => <span key={area}>{area}</span>)}</div></div></section>

      <section className="reviews section page-width" id="reviews"><div className="review-intro"><p className="eyebrow">CUSTOMER EXPERIENCE</p><h2>When the work is good, customers tell people.</h2><p>We will connect this section to TerraNova's verified Google reviews once the Business Profile is ready.</p></div><div className="review-card review-placeholder"><div className="stars">★★★★★</div><blockquote>“Your verified Google reviews will appear here.”</blockquote><p className="review-author">Google Reviews <span>•</span> Connected after Business Profile setup</p></div></section>

      <section className="cta-section" id="contact"><div className="page-width cta-inner"><div><p className="eyebrow light">READY WHEN YOU ARE</p><h2>Let’s talk about your next outdoor project.</h2><p>Tell us what you have in mind. Request a free estimate and a TerraNova representative can follow up with you.</p><div className="cta-contact-links"><a href="tel:+17750000000">Call TerraNova <span>↗</span></a><a href="mailto:info@terranovalandscapingnv.com">Email us <span>↗</span></a></div></div><form className="lead-form" action="#" method="post"><label>Name<input name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" type="tel" placeholder="(775) 000-0000" required /></label><label>Email<input name="email" type="email" placeholder="you@example.com" /></label><label>Service<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Landscaping</option><option>Lawn Care</option><option>Irrigation</option><option>Hardscaping</option><option>Other</option></select></label><label>Project address<input name="address" placeholder="Reno, NV" /></label><label>Tell us about your project<textarea name="message" placeholder="A few details about your property or project..." rows={4} /></label><button className="button button-primary form-button" type="submit">Request My Free Estimate <span>↗</span></button><small>By submitting this form, you agree that TerraNova may contact you about your request.</small></form></div></section>

      <footer className="footer"><div className="page-width footer-inner"><div className="brand footer-brand"><span className="brand-mark">TN</span><span><strong>TERRANOVA</strong><small>LANDSCAPING</small></span></div><p>Professional landscaping in Reno, Sparks & Northern Nevada.</p><a href="mailto:info@terranovalandscapingnv.com">info@terranovalandscapingnv.com</a></div></footer>
    </main>
  )
}
