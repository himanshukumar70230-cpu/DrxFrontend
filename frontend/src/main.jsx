import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Factory,
  CarFront,
  Truck,
  BadgeCheck,
  Headphones,
   ShoppingCart, 
  Star
} from "lucide-react";
import './style.css';
import { products, values, upcoming } from './data/catalog';
import  { useState } from "react";
// import { Headphones } from "lucide-react";

const asset = (name) => new URL(`./assets/${name}`, import.meta.url).href;

function Header(){
  return <header className="nav">
    <a className="brand" href="#home"><span>DRX</span><small>Redefining Accessories</small></a>
    <nav><a href="#about">About</a><a href="#catalog">Price List</a><a href="#upcoming">Upcoming</a><a href="#brochure">Brochure</a><a href="#contact">Contact</a></nav>
  </header>
}
function Hero(){
  return <section id="home" className="hero">
    <div className="heroText">
      <p className="eyebrow">A Standard Automotive Industries Brand</p>
      <h1>Premium laser-fit TPE car mats for total, all-season coverage.</h1>
      <p>Built around DRX's principles: Quality First, Innovation and Integrity. Designed for modern vehicle owners who expect durable, aesthetic and reliable automobile accessories.</p>
      <div className="heroCtas"><a href="#catalog" className="btn primary">View price list</a><a href="#contact" className="btn">Get in touch</a></div>
      <div className="heroStats"><span><b>7</b>Vehicle brands</span><span><b>47</b>Listed variants</span><span><b>10</b>Upcoming products</span></div>
    </div>
    <div className="heroImage"><img src={asset('hero-mats.png')} alt="DRX TPE car mats" /></div>
  </section>
}

function AddCart() {
 const products = [
  { id: 1, image: asset("img.png"), name: "Product 1", price: "₹999" },
  { id: 2, image: asset("img2.png"), name: "Product 2", price: "₹1299" },
  { id: 3, image: asset("img3.png"), name: "Product 3", price: "₹1499" },
  { id: 4, image: asset("img4.png"), name: "Product 4", price: "₹899" },
  { id: 5, image: asset("img5.png"), name: "Product 5", price: "₹1999" },
  { id: 6, image: asset("mats-pair.png"), name: "Product 6", price: "₹1099" },
];
  return (
    <section id="addCart" className="cartSection">
      <h2 className="sectionTitle">Featured Products</h2>

      <div className="productGrid">
        {products.map((product) => (
          <div className="productCard" key={product.id}>
            <img
              src={product.image}
              alt={product.name}
              className="productImage"
            />

            <div className="productInfo">
              <h3>{product.name}</h3>
              <p>{product.price}</p>

              <button className="cartBtn">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


function About(){
  return <section id="about" className="section aboutGrid">
    <div><p className="eyebrow">About DRX</p><h2>Manufacturing-driven automobile accessories brand.</h2>
      <p>DRX designs and manufactures high-performance automobile accessories that meet international quality benchmarks and the functional expectations of modern vehicle owners. Engineered with precision and built for durability, DRX products combine innovation, aesthetics, and reliability to deliver superior value across diverse driving conditions.</p>
      <p>DRX is equipped with focused in-house manufacturing: CNC machining for accurate cutting, shaping and finishing; an extrusion line for uniform profiles; and two vacuum forming machines for efficient thermoforming with consistent thickness, structural integrity and smooth finishes.</p>
      <p>These capabilities help DRX control quality, lead times and customization while aligning with aftermarket standards today and OEM-grade requirements in the future.</p>
    </div>
    <div className="mediaStack"><img src={asset('factory-building.png')} alt="DRX factory building"/><img src={asset('manufacturing-line.png')} alt="DRX manufacturing line"/></div>
  </section>
}
function Founders(){
  return <section className="section founders"><div><p className="eyebrow">A note from founders</p><h2>Quality, precision and long-term value creation.</h2><p>When we founded DRX, our vision was clear, to build a manufacturing-driven brand rooted in quality, precision, and long-term value creation. Every product is developed with close attention to design, material integrity, and performance, ensuring consistency and reliability across all applications.</p><p>DRX aims to strengthen its presence in the aftermarket while building the foundation to serve as a trusted Tier-1 OEM partner.</p><p className="sign">Warm Regards,<br/>Anil Juneja · Sumit Juneja · Amit Juneja</p></div><div className="values">{values.map(v=><article key={v.title}><ShieldCheck size={22}/><h3>{v.title}</h3><p>{v.text}</p></article>)}</div></section>
}
/*function Catalog(){
  return <section id="catalog" className="section">
    <div className="sectionTitle">
      <p className="eyebrow">TPE Car Mats</p>
      <h2>Vehicle-wise DRX price list</h2>
      <p>Laser-fit TPE floor mats for total, all-season coverage.</p>
      </div>
      <div className="productImages">
        <img src={asset('mats-wide.png')} alt="DRX car mats top view"/>
        <img src={asset('mats-pair.png')} alt="DRX car mats pair"/>
        <img src={asset('mats-set.png')} alt="DRX mat set"/></div>
        <div className="catalogGrid">
          {products.map(group=><article className="card" key={group.brand}>
            <h3>{group.brand}</h3>
            <table><thead><tr><th>Part No.</th><th>Vehicle</th><th>MRP</th></tr></thead><tbody>{group.items.map(([part,vehicle,mrp])=><tr key={part}><td>{part}</td><td>{vehicle}</td><td>₹{mrp}</td></tr>)}</tbody></table></article>)}</div></section>
}*/

function Catalog({ setCartCount }) {
  return (
    <section id="catalog" className="section">
      <div className="sectionTitle">
        <p className="eyebrow">Shop DRX Mats</p>
        <h2>Premium TPE Car Mats Price List</h2>
        <p>Choose your vehicle and send enquiry instantly.</p>
      </div>

      <div className="shopFeatures">
        <div><Truck size={22} /> Fast Delivery</div>
        <div><BadgeCheck size={22} /> Premium Quality</div>
        <div><ShieldCheck size={22} /> All-Season Protection</div>
        <div><Headphones size={22} /> Customer Support</div>
      </div>

      <div className="productImages">
        <img src={asset("mats-wide.png")} alt="DRX car mats top view" />
        <img src={asset("mats-pair.png")} alt="DRX car mats pair" />
        <img src={asset("mats-set.png")} alt="DRX mat set" />
      </div>

      <div className="catalogGrid">
        {products.map((group) => (
          <article className="card ecommerceCard" key={group.brand}>
            <div className="cardTop">
              <h3>{group.brand}</h3>

              <span className="rating">
                <Star size={16} fill="currentColor" /> 4.8
              </span>
            </div>

            <table>
              <thead>
                <tr>
                  <th>Part No.</th>
                  <th>Vehicle</th>
                  <th>MRP</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {group.items.map(([part, vehicle, mrp]) => (
                  <tr key={part}>
                    <td>{part}</td>
                    <td>{vehicle}</td>
                    <td>₹{mrp}</td>
                    <td className="actionBtns">
                      <button
                        className="cartBtn"
                        onClick={() => setCartCount((prev) => prev + 1)}
                      >
                        Add to Cart
                      </button>

                      <a
                        className="enquiryBtn"
                        href={`https://wa.me/916262393963?text=Hello DRX, I want to enquire about ${vehicle} mat. Part No: ${part}, Price: ₹${mrp}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Enquire
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </article>
        ))}
      </div>
    </section>
  );
}


function Upcoming(){
  return <section id="upcoming" className="section upcoming"><div><p className="eyebrow">Upcoming Products</p><h2>Redefining car accessories with high-quality products driven by design and detail.</h2><div className="chips">{upcoming.map((u,i)=><span key={u}>{String(i+1).padStart(2,'0')} {u}</span>)}</div></div><img src={asset('upcoming-products.png')} alt="DRX upcoming car accessories"/></section>
}
function Brochure(){
  const pages = Array.from({length:8},(_,i)=>`page-${i+1}.png`);
  return <section id="brochure" className="section"><div className="sectionTitle"><p className="eyebrow">Original PDF pages</p><h2>Complete visual brochure reference</h2><p>Included so no PDF image or visual detail is missed while presenting the polished frontend.</p></div><div className="brochureGrid">{pages.map((p,i)=><a href={asset(p)} target="_blank" key={p}><img src={asset(p)} alt={`DRX PDF page ${i+1}`} /><span>Page {i+1}</span></a>)}</div></section>
}
function Contact(){
  return <section id="contact" className="contact"><div><p className="eyebrow">Get in Touch</p><h2>Standard Automotive Industries</h2><p><Mail size={18}/> Standardautomotiveindustries@gmail.com</p><p><Phone size={18}/> +91 62623 93963</p><p><CarFront size={18}/> @drxautomotives</p><p><MapPin size={18}/> Corporate Office: 8/4 WEA, Abdul Aziz Road, Karol Bagh, New Delhi, Delhi 110005</p><p><Factory size={18}/> Manufacturing Unit: STANDARD AUTOMOTIVE INDUSTRIES, 11-B, Tehsil, Sampla District, Rohtak, Haryana - 124501</p></div></section>
}
function Call() {
  return (
    <div id="support-box">
      <span>Support</span>
      <div className="call-icon">📞</div>
    </div>
  );
}
function CartButton({ cartCount }) {
  return (
    <a href="#catalog" id="cart-box">
      <ShoppingCart size={24} />
      <span>{cartCount}</span>
    </a>
  );
}

export default Call;
function App(){
    const [cartCount, setCartCount] = useState(0);
  return <><Header/><Hero/><AddCart/><About/><Founders/><CartButton cartCount={cartCount} /><Catalog  setCartCount={setCartCount}/><Upcoming/><Brochure/><Contact/><Call/>
<footer>DRX - Redefining Accessories </footer></>}

createRoot(document.getElementById('root')).render(<App/>);
