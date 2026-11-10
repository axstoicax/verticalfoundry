import { schemaFor } from './structured-data.mjs';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFor('/')).replace(/</g, '\\u003c') }}
      />

      <div className="site-shell">
        <header className="site-nav-bar"><nav aria-label="Main navigation"><a href="/" aria-current="page">Home</a><a href="/products/">Products</a><a href="/store/">Store</a><a href="/about/">About Us</a><a href="/contact/">Contact</a></nav></header>
        <main className="main-content" id="main">
          <div className="hero" aria-labelledby="main-heading">
            <div className="wordmark-wrap">
              <img
                className="brand-wordmark"
                src="/logos/VerticalFoundry_Primary_Horizontal_OUTLINED.svg"
                alt="VerticalFoundry"
                width="916"
                height="180"
                decoding="async"
                loading="eager"
                fetchPriority="high"
              />
            </div>

            <div className="eyebrow" aria-label="Independent business systems brand">
              <span className="eyebrow-rule" aria-hidden="true" />
              <span>BUILT FOR REAL BUSINESSES</span>
              <span className="eyebrow-rule" aria-hidden="true" />
            </div>

            <h1 id="main-heading">Business systems<br className="desktop-break" /> built for your <span className="headline-accent">industry.</span></h1>

            <p className="lead">
              Practical, industry-specific systems for small service businesses —
              designed to help owners run smarter, look professional, and grow with confidence.
            </p>

            <div className="status" role="status" aria-label="Coming soon">
              <span className="status-dot" aria-hidden="true" />
              <span>COMING SOON</span>
            </div>

            <p className="promise">
              <span className="promise-bracket promise-bracket-left" aria-hidden="true" />
              <span className="promise-copy">Powerful Inside. <span>Simple Outside.</span></span>
              <span className="promise-bracket promise-bracket-right" aria-hidden="true" />
            </p>
          </div>
        </main>

        <footer className="site-footer">
          <div className="footer-top">
            <p className="footer-company">A <a className="parent-company-link" href="https://www.quantdataintel.com/" title="Visit Quant Data Intelligence LLC"><strong>Quant Data Intelligence LLC</strong></a> brand</p>
            <nav className="footer-links" aria-label="Contact and Etsy shop">
              <a href="/contact/" aria-label="Contact VerticalFoundry">Contact</a>
              <span aria-hidden="true">·</span>
              <a href="/about/">About Us</a>
              <span aria-hidden="true">·</span>
              <a href="/products/">Products</a>
              <span aria-hidden="true">·</span>
              <a href="/store/" aria-label="Explore the VerticalFoundry Store and FAQs">Store</a><span aria-hidden="true">·</span><a href="/media-kit/">Media Kit</a>
            </nav>
          </div>
          <nav className="footer-preferred" aria-label="Google Preferred Sources">
            <a
              className="preferred-source-link"
              href="https://www.google.com/preferences/source?q=getverticalfoundry.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find VerticalFoundry in Google Preferred Sources (opens in a new tab)"
              title="Open Google's source preferences to find VerticalFoundry"
            >
              <svg className="preferred-source-star" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
                <path d="m12 2.8 2.86 5.8 6.4.93-4.63 4.5 1.1 6.36L12 17.4l-5.73 3.01 1.1-6.36-4.63-4.5 6.4-.93L12 2.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
              </svg>
              <span>Google Preferred Sources</span>
              <span className="preferred-source-arrow" aria-hidden="true">↗</span>
            </a>
          </nav>
          <section className="vf-media-footer" aria-label="MEDIA KIT"><strong>MEDIA KIT</strong><a href="/media-kit/">Press &amp; brand resources</a><a href="/media-kit/#downloads">Download assets</a></section>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} VerticalFoundry. All rights reserved.</span>
            <span><a href="tel:+13079001944">+1 (307) 900-1944</a> · <a href="mailto:hello@getverticalfoundry.com">hello@getverticalfoundry.com</a> · <a href="mailto:help@getverticalfoundry.com">help@getverticalfoundry.com</a></span>
          </div>
          <div className="footer-business-contact">VerticalFoundry · A brand of <a className="parent-company-link" href="https://www.quantdataintel.com/" title="Visit Quant Data Intelligence LLC">Quant Data Intelligence LLC</a> · Business mailing address: 30 N Gould St. Ste N, Sheridan, WY 82801, USA</div>
          <nav className="footer-policies" aria-label="Legal and privacy"><a href="/terms-of-service/">Terms of Service</a><a href="/privacy-policy/">Privacy Policy</a><a href="/privacy/">Cookie &amp; Privacy Preferences</a></nav>
        </footer>
      </div>
    </>
  );
}
