import React, { useState, useEffect, useRef } from 'react'
import "../styles/products.css"

// ── Default image ─────────────────────────────────────────────
import gymMat from '../pictures/gym matt.jpeg'

import aa from "../pictures/aa.png"
import a1 from "../pictures/a1.png"
import a2 from "../pictures/a2.png"
import a3 from "../pictures/a3.png"
import a4 from "../pictures/a4.png"
import a5 from "../pictures/a5.png"

import bb from "../pictures/bb.png"
import b1 from "../pictures/b1.png"
import b2 from "../pictures/b2.png"

import cc from "../pictures/cc.jpeg"
import c1 from "../pictures/c1.png"
import c2 from "../pictures/c2.png"
import c3 from "../pictures/c3.png"
import c4 from "../pictures/c4.png"

import dd from "../pictures/dd.png"
import d1 from "../pictures/d1.png"
import d2 from "../pictures/d2.png"
import d3 from "../pictures/d3.png"
import d4 from "../pictures/d4.png"
import d5 from "../pictures/d5.png"
import d6 from "../pictures/d6.png"
import d7 from "../pictures/d7.png"
import d8 from "../pictures/d8.png"
// ── Intersection observer hook ────────────────────────────────
function useInView(threshold = 0.08) {
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

// ── All product data from catalog ─────────────────────────────
const sections = [
  {
    id: 'industrial',
    category: 'Industrial / Anti-Fatigue Mats',
    intro: 'Anti-fatigue mats reduce fatigue caused by prolonged standing on hard surfaces. They decrease foot and lower limb disorders, improve safety by reducing slip and fall hazards, and are available for individual use and large work areas.',
    image: aa,
    products: [
      {
        name: 'Open Top Anti-Fatigue Mat',
        code: 'SPR 02',
        image: a1,
        desc: 'Fast-moving anti-fatigue mat for wet and oily working conditions. Anti-slip top pattern provides grip; studs at the bottom give comfort for long working hours. Lightweight, easy to connect and clean. Optional bevelled edges in black or yellow.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Open top with anti-slip design'],
          ['Thickness', '12mm / 14mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Workplace, industrial, restaurants'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['90×90 cm × 12mm', '4.1 kg'],
          ['90×90 cm × 12mm', '4.4 kg'],
          ['90×90 cm × 12mm', '4.8 kg'],
          ['90×90 cm × 14mm', '5.4 kg'],
        ],
      },
      {
        name: 'Ramp Mat',
        code: 'SPR 04',
        image: a2,
        desc: 'Traditional anti-fatigue mat with holes. Gives cushioning and anti-slip surface for workshops and service areas. Unique taper edges prevent tripping hazards; holes allow fluid and oils to flow through. Can also be used as an outdoor entrance mat.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Open top with anti-slip design'],
          ['Thickness', '14mm / 12mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Workplace, industrial, restaurants'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['60×90 cm', '3.5 kg'],
          ['80×120 cm', '5.5 kg'],
          ['90×150 cm', '8.7 kg'],
        ],
      },
      {
        name: 'Bubble Mat',
        code: 'SPR 06',
        image: a3,
        desc: 'Most functional and popular type in category. Unique raised rubber dome design gives cushioning effect as you step in and returns to its original shape for maximum comfort. Domed surface promotes blood circulation and allows debris and fluids to settle.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Capsule studs with anti-slip pattern'],
          ['Thickness', '9mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Welding base, wet and oily work areas'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['45×75 cm', '2.2 kg'],
          ['60×90 cm', '3.5 kg'],
          ['80×120 cm', '7.0 kg'],
          ['90×150 cm', '12.3 kg'],
        ],
      },
      {
        name: 'Capsule Grip Mat',
        code: 'SPR 08',
        image: a4,
        desc: 'Recommended as a welding base and for similar industrial use. Fire retardant version most suitable. Use of this mat prevents tripping and slip hazard, providing a safe and clean working atmosphere.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Capsule studs with anti-slip pattern'],
          ['Thickness', '9mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Welding base, wet and oily work areas'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['45×75 cm', '1.8 kg'],
          ['60×90 cm', '3.4 kg'],
          ['90×150 cm', '9.7 kg'],
        ],
      },
      {
        name: 'Solid Top Anti-Fatigue Mat',
        code: 'SPR 10',
        image: a5,
        desc: 'Ideal workplace anti-fatigue mat. Single piece can be used with 4-side yellow/black edging as per safety regulations. Larger areas covered with male-female connectors. Studs at the bottom give comfortable cushioning. Anti-slip top prevents slipping in oily conditions.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Elephant skin pattern'],
          ['Thickness', '16mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Workplace, industrial anti-fatigue'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['90×90 cm', '8.7 kg'],
        ],
      },
    ],
  },
  {
    id: 'indoor',
    category: 'Indoor Flooring',
    intro: 'Modern rubber technology has converted this natural resource for sports flooring. Widely used in gymnasiums, playgrounds, physical training centres, ski resorts, swimming pools, and exercise areas. Rubber tiles cover outdoor sports floors for badminton and volleyball courts.',
    image: bb,
    products: [
      {
        name: 'Solid Top (Gym)',
        code: 'SPR 12',
        image: b1,
        desc: 'Perfect for gymnasiums — prevents slipping, gives comfort and safety. Anti-slip top gives excellent grip during exercise; studs at bottom provide cushioning. Minimises damage to knees and ankles and reduces shock to leg joints. Edging available in black or yellow.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Elephant skin pattern'],
          ['Thickness', '16mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Gymnasiums and exercise areas'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['90×90 cm', '8.7 kg'],
        ],
      },
      {
        name: 'Solid Top Multiplier',
        code: 'SPR 14',
        image: b2,
        desc: 'Same usage as Solid Top. Used where thick rubber flooring is required. Holes at the bottom provide cushioning and comfort. Lock pattern interlocking for seamless coverage of large areas.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Elephant skin pattern'],
          ['Thickness', '28mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Gymnasiums and warm-up exercise areas'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['90×90 cm', '7.8 kg'],
        ],
      },
    ],
  },
  {
    id: 'cattle',
    category: 'Cattle Floor Coverings',
    intro: 'Durable and comfortable cattle floor covering mats designed for livestock comfort and safety. Made from high-quality rubber, these mats provide a slip-resistant surface, reduce stress and fatigue, and are easy to clean. Ideal for dairy farms, stables, and animal shelters.',
    image: cc,
    products: [
      {
        name: 'Studded Comfort — Stable Mats',
        code: 'SPR 16',
        image: c1,
        desc: 'Studs at the bottom give extra cushioning; anti-slip top provides comfort and safety. Studs facilitate easy flow of urine and water. Available in Amebic and Hammer Blow surface finishes. Easy to install, maintain and clean.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Amebic, Hammer Blow'],
          ['Thickness', '17mm'],
          ['Use', 'Horse stables and cow sheds'],
          ['Installation', 'Lay flat, connect to cover desired area'],
          ['Maintenance', 'Wash with lukewarm water'],
        ],
        sizes: [
          ['1.22m × 1.83m × 17mm', '36 kg'],
          ['1.22m × 0.91m × 17mm', '18 kg'],
        ],
      },
      {
        name: 'Tough-Tread Comfort — Interlocking Stable Mats',
        code: 'SPR 18',
        image: c2,
        desc: 'Interlocking version of the stable mat. Grooves at the bottom and two top designs. Interlocking ramps also available. Provides superior coverage for large barn areas.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Amebic, Hammer Blow'],
          ['Thickness', '17mm'],
          ['Use', 'Horse stables and cow sheds'],
          ['Installation', 'Lay flat, interlock to cover desired area'],
          ['Maintenance', 'Wash with lukewarm water'],
        ],
        sizes: [
          ['1.22m × 1.83m', '36 kg'],
        ],
      },
      {
        name: 'Cubicle Cow Mats',
        code: 'SPF 20',
        image: c3,
        desc: 'Rubber cow mats protect cows from hard and cold floors. Anti-slip cobble surface reduces risk of falling. Use of cow mats increases yield of milk and meat. Gives safe and sterile bedding, preventing bacteria and disease. Easy to install and clean.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Anti-slip cobble'],
          ['Thickness', '25mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Cow barns'],
          ['Installation', 'Lay flat to cover desired area'],
          ['Maintenance', 'Wash with warm water'],
          ['Fire', 'Standard version not fire retardant'],
        ],
        sizes: [],
      },
      {
        name: 'Cage Mats',
        code: 'SPC 001',
        image: c4,
        desc: 'Benefits include good drainage, easy cleaning, cushioned support, and better leg health for hens in cages or floor systems. Improves egg production and bird welfare. Key types include soft fiber mats for nesting, durable plastic grids, and cushioned rubber mats for breeder comfort.',
        specs: [
          ['Use', 'Poultry cages and floor systems'],
          ['Benefits', 'Good drainage, easy cleaning, cushioned support'],
        ],
        sizes: [
          ['45×75 cm', '2 kg'],
        ],
      },
    ],
  },
  {
    id: 'domestic',
    category: 'Domestic & Commercial',
    intro: 'Entrance mats guard establishments from dust and mud, minimise the slip hazard, and decorate the front door. A recent study shows most contaminants in any facility come from shoes — entrance mats at every door are indispensable for homes and commercial establishments.',
    image: dd,
    products: [
      {
        name: 'Multi Utility Hollow Mats',
        code: 'SPR 22',
        image: d1,
        desc: 'Widely used for varied purposes: entrance, swimming pool, children\'s play area, muddy fields, wet areas. Holes allow easy flow of water, fluids and snow. Raised wipers give high scraping effect; studs at the bottom prevent movement. Long walkways can be covered with locks. Can be decorated with plastic bristles in different colours.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Hollow finish'],
          ['Thickness', '22mm / 16mm'],
          ['UV Resistance', 'Black color resistant'],
          ['Use', 'Entrances, pools, playgrounds, walkways, ski resorts'],
          ['Maintenance', 'Wash with lukewarm water'],
          ['Oil/Grease', 'Nitrile version resistant'],
          ['Fire', 'Fire retardant version available'],
        ],
        sizes: [
          ['100×150 cm × 22mm', '11.2 kg'],
          ['100×150 cm × 16mm', '10.0 kg'],
          ['80×120 cm × 22mm', '7.0 kg'],
          ['80×120 cm × 16mm', '5.5 kg'],
          ['50×100 cm × 22mm', '3.5 kg'],
          ['50×100 cm × 16mm', '2.5 kg'],
          ['40×60 cm × 22mm', '1.5 kg'],
          ['40×60 cm × 16mm', '1.0 kg'],
          ['60×80 cm × 22mm', '4.0 kg'],
          ['50×80 cm × 22mm', '3.0 kg'],
          ['45×75 cm × 22mm', '2.5 kg'],
          ['40×80 cm × 22mm', '2.2 kg'],
        ],
      },
      {
        name: 'Rubber Stud Mats',
        code: 'SPR 40',
        image: d2,
        desc: 'Tough and reliable! Short, thick studs spaced just right take on heavy scrubbing and harsh weather. Clever design traps dirt and dust, keeping floors clean. Made from top-notch natural rubber — stays flat and flexible, never curling or cracking. Weight keeps them firmly in place.',
        specs: [
          ['Material', 'Natural rubber & recycled rubber'],
          ['Surface Finish', 'Studs finish'],
          ['Thickness', '11mm'],
          ['Use', 'Home and commercial entrances'],
          ['Installation', 'Lay flat on designated area'],
          ['Maintenance', 'Vacuum / wash with water'],
        ],
        sizes: [
          ['90×150 cm', '12 kg'],
          ['90×120 cm', '7.7 kg'],
          ['80×100 cm', '5.6 kg'],
          ['60×100 cm', '3.6 kg'],
          ['60×80 cm', '3.0 kg'],
          ['45×75 cm', '1.5 kg'],
          ['40×60 cm', '1.0 kg'],
        ],
      },
      {
        name: 'Scraper Mats — Ramp, Arrow, Holey, Maze',
        code: 'SPB 26–34',
        image: d3,
        desc: 'A complete range of scraper mats for entrances and commercial use. Each design offers effective soil and debris removal. Available in multiple sizes.',
        specs: [
          ['SPB 26', 'Ramp mat — 90×150, 80×120, 60×90 cm'],
          ['SPB 28', 'Arrow scraper — 60×90, 40×70 cm'],
          ['SPB 32', 'Holey scraper — 60×90, 45×75 cm'],
          ['SPB 34', 'Maze scraper — 90×150 cm (9 kg)'],
        ],
        sizes: [
          ['Ramp 90×150 cm', '8.7 kg'],
          ['Ramp 80×120 cm', '5.5 kg'],
          ['Arrow 60×90 cm', '3.4 kg'],
          ['Holey 60×90 cm', '3.7 kg'],
          ['Maze 90×150 cm', '9.0 kg'],
        ],
      },
      {
        name: 'Door Mats (Cast Iron Design)',
        code: 'SPS 60–94',
        image: d4,
        desc: 'Cast iron designed rubber door mats with scraping and anti-slip properties. Elegant cast iron appearance gives a cheery welcome. Strong, durable, available in crescent, oval and rectangular shapes.',
        specs: [
          ['Shapes', 'Crescent, oval, rectangular'],
          ['Properties', 'Scraping and anti-slip'],
          ['Material', 'Rubber'],
          ['Style', 'Cast iron appearance'],
        ],
        sizes: [
          ['SPS 60 — 45×75 cm', '1.8 kg'],
          ['SPS 62 — 45×75 cm', '2.7 kg'],
          ['SPS 64 — 45×75 cm', '2.4 kg'],
          ['SPS 66 — 60×90 cm', '3.2 kg'],
          ['SPS 68–94 — 45×75 cm', '~2 kg each'],
        ],
      },
      {
        name: 'Rub & Eco Poly Mats',
        code: 'SPR 03 / SPR 09',
        image: d5,
        desc: 'Combines the best of polypropylene and rubber — tough, elegant, and built to last. Laughs at fatigue, shrugs off chemicals, and withstands harsh weather. Mildew, rot, and wear resistant. Easy to clean and wash. Practical as it is stylish.',
        specs: [
          ['Material', 'Polypropylene top with rubber backing'],
          ['Surface Finish', 'Anti-slip fabric finish'],
          ['Thickness', '9mm'],
          ['Use', 'Home and commercial entrances'],
          ['Installation', 'Lay flat on designated area'],
          ['Maintenance', 'Vacuum / lukewarm water wash'],
        ],
        sizes: [
          ['180×120 cm', '10.2 kg'],
          ['90×150 cm', '5.7 kg'],
          ['80×120 cm', '4.3 kg'],
          ['60×90 cm', '2.7 kg'],
          ['45×75 cm', '1.5 kg'],
          ['40×70 cm', '1.4 kg'],
          ['40×60 cm', '1.2 kg'],
        ],
      },
      {
        name: 'Rubberised Coir Mats',
        code: 'SPR 65 / SPR 87',
        image: d6,
        desc: 'In rub-coco door mats, the benefits of coir and rubber are combined. Coir provides elegance and scraping effect; rubber backing enhances strength, stability and durability. Fibrous brush effect on top. Crush-proof fiber surface creates a non-slip top. Ideal for environmentally responsible users.',
        specs: [
          ['Material', 'Coir fiber top with rubber backing'],
          ['Surface Finish', 'Anti-slip coco finish'],
          ['Thickness', '19mm'],
          ['Use', 'Home and commercial entrances'],
          ['Installation', 'Lay flat on designated area'],
          ['Maintenance', 'Vacuum cleaning'],
        ],
        sizes: [
          ['SPR 65 — 45×75 cm', '2.1 kg'],
          ['SPR 87 — 60×100 cm', '3.3 kg'],
          ['SPR 87 — 60×90 cm', '3.3 kg'],
        ],
      },
      {
        name: 'Stair Treads',
        code: 'SPRS 20–28',
        image: d7,
        desc: 'Non-slip stair treads used to cover steps for added safety. Improve the stability and grip of each step. Extremely effective at reducing the risk of slipping or falling. Also minimise scratches and stains on the surface.',
        specs: [
          ['Properties', 'Non-slip, anti-fatigue'],
          ['Use', 'Stairs in homes and commercial spaces'],
          ['Installation', 'Lay flat on step'],
          ['Maintenance', 'Vacuum / wash'],
        ],
        sizes: [
          ['SPRS 20 — 25×75 cm', '1.2 kg'],
          ['SPRS 22 — 26×77 cm', '1.1 kg'],
          ['SPRS 24 — 25×75 cm', '1.3 kg'],
          ['SPRS 26 — 25×76 cm', '1.2 kg'],
          ['SPRS 28 — 25×75 cm', '1.5 kg'],
        ],
      },
      {
        name: 'Rubber Boot Tray Mats',
        code: 'SPB 70–76',
        image: d8,
        desc: 'Protects floors from stains, spills, dirt and debris. Ideal for shoes with water or snow — keeps hardwood floors clean and safe. Compact tray design with drainage-friendly surface.',
        specs: [
          ['Use', 'Indoor shoe and boot storage'],
          ['Benefit', 'Floor protection from water and dirt'],
        ],
        sizes: [
          ['SPB 70 — 40×80 cm', '1.7 kg'],
          ['SPB 72 — 40×80 cm', '1.7 kg'],
          ['SPB 74 — 40×80 cm', '1.3 kg'],
          ['SPB 76 — 40×70 cm', '1.5 kg'],
        ],
      },
    ],
  },
]

// ── Product Card ──────────────────────────────────────────────
function ProductCard({ product, index }) {
  const [ref, inView] = useInView(0.05)
  const [open, setOpen] = useState(false)

  return (
    <div
      ref={ref}
      className={`prod-card ${inView ? 'prod-visible' : ''} ${open ? 'prod-open' : ''}`}
      style={{ '--i': index }}
    >
      <div className="prod-top">
        <div className="prod-img-wrap">
          <img src={product.image} alt={product.name} className="prod-img" loading="lazy" />
          <span className="prod-code-badge">{product.code}</span>
        </div>

        <div className="prod-body">
          <h3 className="prod-name">{product.name}</h3>
          <p className="prod-desc">{product.desc}</p>
          <div className="prod-actions">
            <button
              className={`prod-expand-btn ${open ? 'btn-open' : ''}`}
              onClick={() => setOpen(o => !o)}
            >
              <span>{open ? 'Hide Specs' : 'View Specs & Sizes'}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <span className="prod-enquire">Enquire →</span>
          </div>
        </div>
      </div>

      {open && (
        <div className="prod-details">
          <div className="prod-specs">
            <h4>Technical Specifications</h4>
            <table><tbody>
              {product.specs.map(([k, v], i) => (
                <tr key={i}>
                  <td className="spec-key">{k}</td>
                  <td className="spec-val">{v}</td>
                </tr>
              ))}
            </tbody></table>
          </div>
          {product.sizes.length > 0 && (
            <div className="prod-sizes">
              <h4>Sizes & Weights</h4>
              <table>
                <thead><tr><th>Size</th><th>Weight</th></tr></thead>
                <tbody>
                  {product.sizes.map(([s, w], i) => (
                    <tr key={i}><td>{s}</td><td>{w}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── Section ───────────────────────────────────────────────────
function Section({ section }) {
  const [hRef, hInView] = useInView(0.15)

  return (
    <section className="prod-section" id={section.id}>
      <div className="section-hero" style={{ backgroundImage: `url(${section.image})` }}>
        <div className="section-hero-overlay" />
        <div ref={hRef} className={`section-hero-text ${hInView ? 'hero-text-in' : ''}`}>
          <span className="section-tag">Product Line</span>
          <h2 className="section-title">{section.category}</h2>
          <p className="section-intro">{section.intro}</p>
        </div>
      </div>
      <div className="prod-list">
        {section.products.map((p, i) => (
          <ProductCard key={p.code} product={p} index={i} />
        ))}
      </div>
    </section>
  )
}

// ── Page ──────────────────────────────────────────────────────
function Products() {
  const [active, setActive] = useState('industrial')

  const navItems = [
    { id: 'industrial', label: 'Industrial / Anti-Fatigue' },
    { id: 'indoor',     label: 'Indoor Flooring' },
    { id: 'cattle',     label: 'Cattle Flooring' },
    { id: 'domestic',   label: 'Domestic & Commercial' },
  ]

  const scrollTo = (id) => {
    setActive(id)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    const handler = () => {
      for (const { id } of navItems) {
        const el = document.getElementById(id)
        if (!el) continue
        if (el.getBoundingClientRect().top <= 120) setActive(id)
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <div className="products-page">

      <nav className="prod-nav">
        <span className="prod-nav-label">Products</span>
        <div className="prod-nav-tabs">
          {navItems.map(({ id, label }) => (
            <button
              key={id}
              className={`prod-nav-tab ${active === id ? 'tab-active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>

      <div className="prod-page-header">
        <span className="prod-page-eyebrow">SP Industries</span>
        <h1 className="prod-page-title">Our Complete<br/>Product Range</h1>
        <p className="prod-page-sub">
          Multi-purpose flooring mats — industrial, indoor, agricultural, and domestic.
          Crafted to international standards in Kottayam, Kerala.
        </p>
      </div>

      {sections.map(s => <Section key={s.id} section={s} />)}

    </div>
  )
}

export default Products