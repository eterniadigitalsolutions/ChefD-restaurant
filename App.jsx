import { useState } from "react";

const menu = [
  ["Truffle Pasta", "$24", "Creamy parmesan, black truffle and fresh herbs."],
  ["Royal Beef Steak", "$38", "Char-grilled tenderloin, seasonal vegetables and jus."],
  ["Lobster Risotto", "$32", "Arborio rice, lobster, saffron and aged parmesan."],
  ["Garden Burrata", "$18", "Burrata, heirloom tomatoes, basil oil and sea salt."]
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="logo" href="#home">ELEGÉNCIA<span>ROYAL RESTAURANT</span></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)}>☰</button>
      <nav className={open ? "nav open" : "nav"}>
        {["Home","About","Menu","Gallery","Contact"].map(x =>
          <a key={x} href={"#" + x.toLowerCase()} onClick={() => setOpen(false)}>{x}</a>
        )}
        <a className="nav-button" href="#reservation">Reserve a Table</a>
      </nav>
    </header>
  );
}

function Hero() {
  return <section id="home" className="hero">
    <div className="hero-overlay" />
    <div className="hero-content">
      <p className="eyebrow">WELCOME TO ELEGÉNCIA</p>
      <h1>A Taste of<br/><em>Royal Elegance</em></h1>
      <p className="hero-copy">Where refined dining, timeless hospitality and extraordinary flavours come together.</p>
      <div className="actions">
        <a className="btn primary" href="#menu">Explore Menu</a>
        <a className="btn light" href="#reservation">Book a Table</a>
      </div>
    </div>
    <div className="scroll">SCROLL <span>↓</span></div>
  </section>;
}

function About() {
  return <section id="about" className="section about">
    <div className="about-image image-one" />
    <div className="about-copy">
      <p className="eyebrow">OUR STORY</p>
      <h2>Crafted with passion.<br/><em>Served with grace.</em></h2>
      <p>Elegéncia is a celebration of contemporary cuisine inspired by classic European dining. Every plate is thoughtfully composed from carefully selected ingredients.</p>
      <p>From intimate dinners to memorable celebrations, our team creates an experience that feels both sophisticated and warmly personal.</p>
      <a className="text-link" href="#menu">Discover our story <span>→</span></a>
    </div>
  </section>;
}

function Menu() {
  return <section id="menu" className="section menu-section">
    <div className="section-head">
      <p className="eyebrow">FROM OUR KITCHEN</p>
      <h2>Signature <em>Menu</em></h2>
      <p>Seasonal ingredients. Beautiful technique. Unforgettable flavour.</p>
    </div>
    <div className="menu-grid">
      {menu.map(([name,price,desc], i) => <article className="dish" key={name}>
        <div className={"dish-photo dish-" + (i+1)} />
        <div className="dish-info"><h3>{name}</h3><span>{price}</span><p>{desc}</p></div>
      </article>)}
    </div>
  </section>;
}

function Experience() {
  return <section className="experience">
    <div className="experience-overlay"/>
    <div className="experience-content">
      <p className="eyebrow">THE ELEGÉNCIA EXPERIENCE</p>
      <h2>More than a meal.<br/><em>A memory.</em></h2>
      <p>Elegant surroundings, attentive service and food made to linger over.</p>
    </div>
  </section>;
}

function Gallery() {
  return <section id="gallery" className="section gallery">
    <div className="section-head">
      <p className="eyebrow">A GLIMPSE INSIDE</p>
      <h2>Our <em>Gallery</em></h2>
    </div>
    <div className="gallery-grid">
      {[1,2,3,4,5,6].map(n => <div key={n} className={"gallery-item g"+n}/>)}
    </div>
  </section>;
}

function Reservation() {
  return <section id="reservation" className="reservation">
    <div>
      <p className="eyebrow">RESERVE YOUR TABLE</p>
      <h2>Make tonight<br/><em>extraordinary.</em></h2>
      <p>Join us for an evening of exceptional food and gracious hospitality.</p>
    </div>
    <form onSubmit={e => e.preventDefault()}>
      <input placeholder="Your name" />
      <input type="email" placeholder="Email address" />
      <div className="form-row"><input type="date"/><input type="number" min="1" placeholder="Guests"/></div>
      <button className="btn primary" type="submit">Request Reservation</button>
    </form>
  </section>;
}

function Footer() {
  return <footer id="contact">
    <div className="footer-logo">ELEGÉNCIA<span>ROYAL RESTAURANT</span></div>
    <p>12 Royale Avenue · Your City · +1 000 000 0000</p>
    <div className="footer-links"><a href="#home">Home</a><a href="#menu">Menu</a><a href="#gallery">Gallery</a><a href="#reservation">Reservations</a></div>
    <small>© 2026 Elegéncia. Created as an independent React recreation.</small>
  </footer>;
}

export default function App() {
  return <><Header/><main><Hero/><About/><Menu/><Experience/><Gallery/><Reservation/></main><Footer/></>;
}
