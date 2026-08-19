const services = [
  {
    title: 'Landscaping',
    text: 'Thoughtful outdoor spaces designed around your property, lifestyle, and goals.',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Lawn Care',
    text: 'Consistent, professional care that keeps your lawn clean, healthy, and ready to enjoy.',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Irrigation',
    text: 'Efficient irrigation solutions that help protect your landscape while using water wisely.',
    image: 'https://images.unsplash.com/photo-1599685315640-2b4b4f5d0f5f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Hardscapes',
    text: 'Pavers, walkways, patios, and outdoor features built to make your property feel complete.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
  },
]

const areas = ['Reno', 'Sparks', 'Northern Nevada']

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="TerraNova Landscaping home">
          <span className="brand-mark">TN</span>
          <span>
            <strong>TERRANOVA</strong>
            <small>LANDSCAPING</small>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#work">Our Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="#contact">Get a Free Estimate</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content page-width">
          <p className="eyebrow light">LANDSCAPING • RENO • SPARKS • NORTHERN NEVADA</p>
          <h1>Make your outdoor space feel like home.</h1>
          <p className="hero-copy">Professional landscaping built around your property, your vision, and the way you want to live outside.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Get a Free Estimate <span>↗</span></a>
            <a className="button button-ghost" href="tel:+17750000000">Call TerraNova</a>
          </div>
          <div className="trust-row">
            <span><b>15+</b> Years Experience</span>
            <span><b>Local</b> Reno Team</span>
            <span><b>Free</b> Estimates</span>
          </div>
        </div>
      </section>

      <section className="intro section page-width" id="about">
        <div>
          <p className="eyebrow">WHY TERRANOVA</p>
          <h2>Professional landscaping without the runaround.</h2>
        </div>
        <div className="intro-copy">
          <p>From a clean-up that changes the look of your property to a complete backyard transformation, TerraNova brings experience, communication, and attention to detail to every project.</p>
          <a className="text-link" href="#contact">Talk about your project <span>→</span></a>
        </div>
      </section>

      <section className="services section" id="services">
        <div className="page-width">
          <div className="section-heading">
            <div>
              <p className="eyebrow">WHAT WE DO</p>
              <h2>Landscaping services for real properties.</h2>
            </div>
            <p>Whether you need ongoing care or a complete outdoor upgrade, we can help you plan the next step.</p>
          </div>

          <div className="service-grid">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}>
                  <span>0{index + 1}</span>
                </div>
                <div className="service-body">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">Learn more <span>→</span></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-feature section page-width" id="work">
        <div className="feature-photo" />
        <div className="feature-copy">
          <p className="eyebrow">BUILT FOR NORTHERN NEVADA</p>
          <h2>Your property deserves more than a one-size-fits-all solution.</h2>
          <p>We take the time to understand the space, the conditions, and what you actually want from your yard. The result is a landscape that looks intentional and works for you.</p>
          <ul className="check-list">
            <li>Experienced local professionals</li>
            <li>Clear communication from estimate to completion</li>
            <li>Landscape solutions tailored to your property</li>
          </ul>
          <a className="button button-dark" href="#contact">Start Your Project <span>↗</span></a>
        </div>
      </section>

      <section className="areas section">
        <div className="page-width areas-inner">
          <div>
            <p className="eyebrow light">SERVICE AREA</p>
            <h2>Proudly serving the Reno area.</h2>
          </div>
          <div className="area-list">
            {areas.map((area) => <span key={area}>{area}</span>)}
          </div>
        </div>
      </section>

      <section className="reviews section page-width">
        <div className="review-intro">
          <p className="eyebrow">CUSTOMER EXPERIENCE</p>
          <h2>Great work should be easy to recommend.</h2>
        </div>
        <div className="review-card">
          <div className="stars">★★★★★</div>
          <blockquote>“TerraNova made the whole process simple. The team understood what we wanted and delivered a space we actually enjoy using.”</blockquote>
          <p className="review-author">Google Review <span>•</span> TerraNova Customer</p>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="page-width cta-inner">
          <div>
            <p className="eyebrow light">READY WHEN YOU ARE</p>
            <h2>Let’s make your yard the best part of your property.</h2>
            <p>Tell us what you have in mind. We’ll help you figure out the next step.</p>
          </div>
          <form className="lead-form" action="#" method="post">
            <label>Name<input name="name" placeholder="Your name" required /></label>
            <label>Phone<input name="phone" type="tel" placeholder="(775) 000-0000" required /></label>
            <label>What do you need?<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Landscaping</option><option>Lawn Care</option><option>Irrigation</option><option>Hardscaping</option><option>Other</option></select></label>
            <label>Tell us about your project<textarea name="message" placeholder="A few details about your property or project..." rows={4} /></label>
            <button className="button button-primary form-button" type="submit">Request My Free Estimate <span>↗</span></button>
            <small>We’ll use your information only to respond to your request.</small>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="page-width footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark">TN</span>
            <span><strong>TERRANOVA</strong><small>LANDSCAPING</small></span>
          </div>
          <p>Professional landscaping in Reno, Sparks & Northern Nevada.</p>
          <a href="mailto:info@terranovalandscapingnv.com">info@terranovalandscapingnv.com</a>
        </div>
      </footer>
    </main>
  )
}
