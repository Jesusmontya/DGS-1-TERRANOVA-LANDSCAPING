import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for TerraNova Landscaping, including website and Google Ads lead form submissions.',
  alternates: { canonical: '/privacy-policy' },
}

const sectionStyle = { color: '#1f2933' }
const headingStyle = { color: '#101828', marginBottom: 10 }

export default function PrivacyPolicyPage() {
  return (
    <main style={{ background: '#ffffff', color: '#1f2933' }}>
      <header className="site-header">
        <a className="brand" href="/" aria-label="TerraNova Landscaping home">
          <span className="brand-mark">TN</span>
          <span><strong>TERRANOVA</strong><small>LANDSCAPING</small></span>
        </a>
        <a className="header-cta" href="/#contact">Get a Free Quote</a>
      </header>

      <section className="section page-width" style={{ maxWidth: 920, paddingTop: 140, color: '#1f2933' }}>
        <p className="eyebrow" style={{ color: '#315f43', fontWeight: 700 }}>PRIVACY POLICY</p>
        <h1 style={{ marginBottom: 16, color: '#0b1220' }}>How TerraNova Landscaping handles your information.</h1>
        <p style={{ marginBottom: 36, color: '#475467', fontWeight: 500 }}>Effective August 31, 2026</p>

        <div style={{ display: 'grid', gap: 32, lineHeight: 1.75, color: '#1f2933' }}>
          <section style={sectionStyle}><h2 style={headingStyle}>Information we collect</h2><p>When you request a quote, submit a website form, use a Google Ads lead form, call us, or contact us by email, we may collect information you provide such as your name, phone number, email address, ZIP or postal code, project address, requested service, project budget range, desired timeline, and details about your landscaping project.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>How we use your information</h2><p>We use the information you provide to respond to your request, contact you about your project, schedule consultations or estimates, prepare project information and pricing, provide landscaping services, improve our customer experience, and maintain appropriate business records.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>Google Ads lead forms</h2><p>TerraNova Landscaping may use lead forms provided through Google Ads. If you submit information through a Google lead form, the information you choose to provide is made available to TerraNova Landscaping so we can respond to your request. Google may also process information according to Google&apos;s own privacy practices.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>Calls, email, and text messages</h2><p>By submitting a request, you authorize TerraNova Landscaping to contact you about that request using the contact information you provide. This may include a phone call, email, or text message when appropriate to discuss your project, estimate, appointment, or requested service. Submitting a request does not require you to purchase any service.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>Analytics and website technology</h2><p>Our website may use analytics and advertising technologies, including Google Analytics and Google Ads, to understand website visits, measure advertising performance, and improve our marketing. These services may use cookies or similar technologies and may process information such as device, browser, page visit, and interaction data according to their own terms and privacy practices.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>How we share information</h2><p>We do not sell your personal information. We may share information with service providers that help us operate our website, advertising, communications, lead management, or other business functions, or when disclosure is required by law. We only use these providers as reasonably necessary to operate our business and respond to customer requests.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>Data retention and security</h2><p>We retain information for as long as reasonably necessary to respond to requests, provide services, maintain business records, meet legal obligations, and resolve disputes. We use reasonable administrative and technical measures intended to protect the information we handle, but no internet or electronic storage system can be guaranteed to be completely secure.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>Your choices</h2><p>You may ask us to update or delete information you previously provided, subject to information we may need to retain for legal, accounting, fraud-prevention, or legitimate business purposes. You may also ask us to stop contacting you for a particular request by telling us directly.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>Children&apos;s privacy</h2><p>Our services are intended for property owners and customers seeking landscaping services and are not directed to children. We do not knowingly collect personal information from children through our quote forms.</p></section>
          <section style={sectionStyle}><h2 style={headingStyle}>Changes to this policy</h2><p>We may update this Privacy Policy from time to time to reflect changes in our website, advertising, business practices, or legal requirements. The effective date above indicates when this version was last updated.</p></section>
          <section style={sectionStyle}>
            <h2 style={headingStyle}>Contact us</h2>
            <p>If you have questions about this Privacy Policy or your information, contact TerraNova Landscaping at <a href="mailto:info@terranovalandscapingnv.com" style={{ color: '#245b39', fontWeight: 600, textDecoration: 'underline' }}>info@terranovalandscapingnv.com</a> or call <a href="tel:+17758707224" style={{ color: '#245b39', fontWeight: 600, textDecoration: 'underline' }}>775-870-7224</a>.</p>
          </section>
        </div>
      </section>

      <footer className="footer">
        <div className="page-width footer-inner">
          <div className="brand footer-brand"><span className="brand-mark">TN</span><span><strong>TERRANOVA</strong><small>LANDSCAPING</small></span></div>
          <p>Professional landscaping in Reno, Sparks & Northern Nevada.</p>
          <a href="mailto:info@terranovalandscapingnv.com">info@terranovalandscapingnv.com</a>
        </div>
      </footer>
    </main>
  )
}
