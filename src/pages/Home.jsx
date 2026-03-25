import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "../styles/home.css"
import ss1 from "../pictures/ss1.jpg"
import ss2 from "../pictures/ss2.jpg"
import ss3 from "../pictures/ss3.jpeg"
import h1 from "../pictures/h1.jpg"
import h2 from "../pictures/h2.jpg"
import h3 from "../pictures/h3.jpg"
import h4 from "../pictures/h4.jpg"
import h5 from "../pictures/h5.jpg"
import h6 from "../pictures/h6.jpg"
const slides = [
  {
    image: ss3,
    tag: "Manufacturer",
    heading: "Built for the\nHardest Floors.",
    sub: "Industrial-grade rubber matting. Made in Kottayam, Kerala.",
    cta: "See Products",
  },
  {
    image: ss2,
    tag: "Anti-Fatigue",
    heading: "Protect Your\nPeople.",
    sub: "Reduce fatigue. Reduce accidents. Raise productivity.",
    cta: "Explore Range",
  },
  {
    image: ss1,
    tag: "Livestock",
    heading: "Farm to\nFactory Floor.",
    sub: "Cattle mats, stable mats, cage mats — all in one place.",
    cta: "View Catalog",
  },
]

const categories = [
  { id:1, label:"01", title:"Industrial Mats",       desc:"Heavy-duty rubber engineered for factories, warehouses, and production floors.",                  image: h1 },
  { id:2, label:"02", title:"Anti-Fatigue Mats",     desc:"Ergonomic cushioning that cuts standing fatigue — ideal for assembly lines and workstations.",    image: h2 },
  { id:3, label:"03", title:"Indoor Flooring",       desc:"Interlocking and roll-out systems for gyms, sports halls, and commercial spaces.",                 image: h3 },
  { id:4, label:"04", title:"Cattle Flooring",       desc:"Agricultural-grade rubber for livestock comfort, hoof health, and animal welfare.",                image: h4 },
  { id:5, label:"05", title:"Domestic Mats",         desc:"Entrance mats, stair treads, door mats — where function meets everyday life.",                    image: h5 },
  { id:6, label:"06", title:"Commercial Solutions",  desc:"Contract-grade flooring for hotels, offices, retail, and hospitality. Bulk supply available.",    image: h6 },
]

const features = [
  { title:"Recyclable",      sub:"Eco-Friendly",      color:"#4caf85" },
  { title:"Anti Slip",       sub:"Safety First",      color:"#E8012E" },
  { title:"Anti Fatigue",    sub:"Ergonomic Comfort", color:"#f5a623" },
  { title:"Oil Resistant",   sub:"Industrial Grade",  color:"#c8a044" },
  { title:"Water Resistant", sub:"All-Weather Ready", color:"#4a9eca" },
  { title:"Non Toxic",       sub:"Safe for All",      color:"#7ab648" },
  { title:"Fire Resistant",  sub:"Flame Retardant",   color:"#ff6b35" },
]

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function OfferingCard({ item, index }) {
  const [ref, inView] = useInView(0.08)
  return (
    <div ref={ref} className={`offer-card ${inView ? 'card-visible' : ''}`} style={{ '--delay': `${index * 0.08}s` }}>
      <div className="offer-img-wrap">
        <div className="offer-img" style={{ backgroundImage: `url(${item.image})` }} />
        <span className="offer-num">{item.label}</span>
      </div>
      <div className="offer-body">
        <h3 className="offer-title">{item.title}</h3>
        <div className="offer-bar" />
        <p className="offer-desc">{item.desc}</p>
        <Link to="/products" className="offer-btn">Shop Now</Link>
      </div>
    </div>
  )
}

function FeatCard({ feature, index }) {
  const [ref, inView] = useInView(0.08)
  return (
    <div
      ref={ref}
      className={`feat-card ${inView ? 'feat-visible' : ''}`}
      style={{ '--delay': `${index * 0.07}s`, '--feat-color': feature.color }}
    >
      <div className="feat-dot" />
      <div className="feat-text">
        <span className="feat-sub">{feature.sub}</span>
        <h3 className="feat-title">{feature.title}</h3>
      </div>
    </div>
  )
}

function Home() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [headerRef, headerInView] = useInView(0.15)
  const [qualRef, qualInView] = useInView(0.1)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', h)
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    const t = setInterval(() => triggerSlide((current + 1) % slides.length), 6000)
    return () => clearInterval(t)
  }, [current])

  const triggerSlide = (index) => {
    if (index === current) return
    setAnimating(true)
    setTimeout(() => { setCurrent(index); setAnimating(false) }, 500)
  }

  const closeMenu = () => setMenuOpen(false)
  const slide = slides[current]

  return (
    <div className="homemain">

      {/* NAV */}
      <nav className={`menus ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo" />

        <div className="options">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <a href="#" className="nav-cta">Get a Quote</a>
        </div>

        <button
          className={`ham-btn ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(p => !p)}
          aria-label="Toggle menu"
        >
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={closeMenu}><Link to="/">Home</Link></li>
          <li onClick={closeMenu}><Link to="/products">Products</Link></li>
          <li onClick={closeMenu}><a href="#">About</a></li>
          <li onClick={closeMenu}><a href="#">Contact</a></li>
        </ul>
      </div>
      {menuOpen && <div className="overlay" onClick={closeMenu} />}

      {/* HERO */}
      <div className="land">
        <div className="gymslides">
          <div
            className={`slide-bg ${animating ? 'bg-out' : 'bg-in'}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="slide-overlay" />

          <div className={`slide-content ${animating ? 'content-out' : 'content-in'}`}>
            <span className="slide-tag">{slide.tag}</span>
            <h1 className="slide-heading">
              {slide.heading.split('\n').map((line, i) => (
                <span key={i} className="heading-line">{line}</span>
              ))}
            </h1>
            <p className="slide-sub">{slide.sub}</p>
            <Link to="/products" className="slide-cta">{slide.cta}</Link>
          </div>

          <div className="slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => triggerSlide(i)}
              />
            ))}
          </div>

          <div className="slide-counter">
            <span className="count-current">0{current + 1}</span>
            <span className="count-sep">&nbsp;/&nbsp;</span>
            <span className="count-total">0{slides.length}</span>
          </div>
        </div>
      </div>

      {/* OFFERINGS */}
      <div className="offerings">
        <div ref={headerRef} className={`offerings-header ${headerInView ? 'header-visible' : ''}`}>
          <span className="offerings-eyebrow">What We Supply</span>
          <h2 className="offerings-heading">Our Product Range</h2>
          <p className="offerings-subhead">
            From factory floors to farmyards — premium matting engineered for every environment.
          </p>
        </div>

        <div className="offerings-grid">
          {categories.map((item, i) => (
            <OfferingCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div className={`offerings-cta-row ${headerInView ? 'cta-visible' : ''}`}>
          <p>Need something custom? We handle bulk orders.</p>
          <Link to="/products" className="offerings-cta-btn">
            <span>Request a Free Quote</span>
          </Link>
        </div>
      </div>

      {/* QUALITY */}
      <div className="quality">
        <div ref={qualRef} className={`quality-header ${qualInView ? 'q-header-visible' : ''}`}>
          <span className="quality-eyebrow">Why Our Mats</span>
          <h2 className="quality-heading">Built to a Higher Standard</h2>
          <p className="quality-subhead">
            Seven core quality benchmarks. Every single mat. No exceptions.
          </p>
        </div>
        <div className="quality-grid">
          {features.map((f, i) => (
            <FeatCard key={i} feature={f} index={i} />
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-inner">

          <div className="footer-brand">
            <div className="footer-logo" />
            <p className="footer-tagline">
              Premium matting & flooring for industrial, agricultural, domestic and commercial use. Made in Kottayam, Kerala.
            </p>
            <div className="footer-socials">
              {[
                <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>,
                <svg key="fb" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>,
                <svg key="li" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>,
              ].map((icon, i) => (
                <a key={i} href="#" className="social-icon">{icon}</a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul>
              {["Industrial Mats","Anti-Fatigue Mats","Indoor Flooring","Cattle Flooring","Domestic Mats","Commercial Solutions"].map(t => (
                <li key={t}><Link to="/products">{t}</Link></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-title">Company</h4>
            <ul>
              {["About Us","Certifications","Careers","Privacy Policy"].map(t => (
                <li key={t}><a href="#">{t}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col footer-contact">
            <h4 className="footer-col-title">Get In Touch</h4>
            <ul>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.27 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l1.27-.63a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </span>
                +91 9778745017
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                sprubbers990@gmail.com
              </li>
              <li>
                <span className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                SY No.471/1,2 Poovanthuruthu, Kottayam — 686012
              </li>
            </ul>
            <a href="mailto:sprubbers990@gmail.com" className="footer-cta-link">
              Send Us a Message
            </a>
          </div>

        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SP Industries. All rights reserved.</span>
          <span>Made in Kerala, India</span>
        </div>
      </footer>

    </div>
  )
}

export default Home