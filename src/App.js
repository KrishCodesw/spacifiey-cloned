import React, { useEffect } from 'react';
import './App.css';
import GLSlider from './components/GLSlider';
import SocialIcons from './components/SocialIcons';
import UiverseTooltipButton from './components/UiverseTooltipButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, 
      mirror: true,
    });
  }, []);
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#121212', color: '#ffffff' }}>

      {/* Brand Logos */}
      <section style={{ backgroundColor: '#181818', padding: '2rem 1rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {['aetheronai-logo.jpeg', 'spaciefylogo.png'].map((file, i) => (
          <div key={i} style={{ flex: '0 1 auto' }}>
            <img
              src={`/images/${file}`}
              alt={`Brand ${i + 1}`}
              style={{ height: '50px', opacity: 0.8 }}
            />
          </div>
        ))}

        {/* Wrap the button in a div to control its layout */}
        <div style={{ flex: '0 1 auto' }}>
          <UiverseTooltipButton />
        </div>
      </div>
    </section>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '4rem 1rem', background: '#1a1a1a' }}>
        <h1 style={{ fontSize: '5.5rem', fontWeight: 'bold', color: '#009dffff',fontFamily: 'Dancing Script' }}>Spaciefy</h1>
        <p style={{ fontSize: '1.5rem', marginTop: '0.7rem', color: '#cccccc' }}>
          Augmented Reality powered interior design studio that brings your imagination to life.
        </p>
      </section>

      <section
        style={{
          padding: '3rem 3rem',
          backgroundColor: '#181818',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
        }}
      >
        <div
          className="description-wrapper"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'row', // default direction for desktop
            flexBasis: '100%',
          }}
        >
        <div
          className="description"
          data-aos="fade-right"
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}
        >
          <div className="description2" style={{ flex: '1 1 300px', color: 'white' }}>
            Spaciefy is transforming the way spatial design is conceived, customized, and commercialized. As a next-generation B2B SaaS platform, Spaciefy empowers interior designers, furniture studios, and architects to visualize and deliver immersive interior experiences through Augmented Reality (AR), AI-driven customization, cultural intelligence (Vastu), and integrated commerce.
          </div>
        </div>
          <div className="description2" data-aos="fade-left" style={{ flex: '1 1 300px' }}>
            <video
              src="/images/demovideo.mp4"
              controls
              autoPlay
              muted
              loop
              style={{ width: '100%', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* Carousel */}
      {/* <section style={{ padding: '3rem 1rem', background: '#101010' }}>
        <div className="simple-carousel">
          <div className="carousel-track">
            <img src="https://thumbs.dreamstime.com/b/smart-assistant-interacts-family-members-modern-living-space-robot-engages-household-contemporary-room-filled-natural-366614870.jpg" alt="Design 1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCW6j0ZY8xlG7YolHE8qHGrIk5FbYW_Valcw&s" alt="Design 2" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgcs9IwBbKNnXddbs_amk9AKcQTbOSR3hK3A&s" alt="Design 3" />
          </div>
        </div>
      </section> */}
      <section style={{ backgroundColor: '#101010', padding: '3rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Design Showcase</h2>
        <GLSlider />
      </section>

      {/* 3D Card Section */}
      <section style={{ padding: '3rem 1rem', backgroundColor: '#121212' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem' }}>Features</h2>
        <div className="cards-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem' }}>
          
          <div className="parent" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div
                className="content-box"
                style={{ backgroundImage: `url("https://img.freepik.com/free-vector/augmented-reality-concept-illustration_52683-51782.jpg?semt=ais_hybrid&w=740")` }}
              >
                <span className="card-title">Live AR Furniture & Decor Placement</span>
                <p className="card-content">Place and customize 3D objects in real-time using AR—helping clients see before they buy.</p>
                <span className="see-more">See More</span>
              </div>
            </div>
          </div>

          <div className="parent" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div
                className="content-box"
                style={{ backgroundImage: `url("https://rukminim2.flixcart.com/image/300/300/xif0q/office-study-table/h/w/j/18-mango-wood-engineered-wood-mtf-027-modular-tech-furniture-30-original-imagqp48jc5ephxg.jpeg")` }}
              >
                <span className="card-title">AI-Driven Design Recommendations</span>
                <p className="card-content">AI recommends mood-based, culturally-aligned designs—saving hours of manual ideation.</p>
                <span className="see-more">See More</span>
              </div>
            </div>
          </div>

          <div className="parent" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div
                className="content-box"
                style={{ backgroundImage: `url("https://images.adsttc.com/media/images/5ea1/e8ed/b357/65a9/bf00/000f/newsletter/Morpholio_Board_AR_01_hero_02b_Knoll_Harry_Bertoia_Bird_Chair.jpg?1587669223")` }}
              >
                <span className="card-title">AutoGenerated 3D Rooms</span>
                <p className="card-content">Generate editable 3D layouts from room dimensions—no design software needed.</p>
                <span className="see-more">See More</span>
              </div>
            </div>
          </div>

          <div className="parent" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div
                className="content-box"
                style={{ backgroundImage: `url("https://i.pinimg.com/736x/f0/aa/ab/f0aaab712eb110757b07ff8bb5ed9e99.jpg")` }}
              >
                <span className="card-title">Vastu Integration</span>
                <p className="card-content">Check and rearrange layouts for Vastu compliance in one click—blend tradition with tech.</p>
                <span className="see-more">See More</span>
              </div>
            </div>
          </div>

          <div className="parent"data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div
                className="content-box"
                style={{ backgroundImage: `url("https://i.pinimg.com/1200x/c1/f5/42/c1f5420d9d75061b0240a43920c484bf.jpg")` }}
              >
                <span className="card-title">Client Collaboration & Sharing</span>
                <p className="card-content">Share projects with real-time edits and approvals—keeping clients and teams in sync.</p>
                <span className="see-more">See More</span>
              </div>
            </div>
          </div>

          <div className="parent" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div
                className="content-box"
                style={{ backgroundImage: `url("https://i.pinimg.com/1200x/64/2f/9a/642f9a47c096ce910383f3da62837a19.jpg")` }}
              >
                <span className="card-title">Template Save, Load & Custom Library</span>
                <p className="card-content">Reuse full room setups or collections—cutting weeks from design cycles.</p>
                <span className="see-more">See More</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* Services */}
      <section style={{ padding: '3rem 1rem', background: '#181818' }}>
        <h2 style={{ fontSize: '2rem', textAlign: 'center' }}>Our Services</h2>
        <div className="service-boxes">
          {[
            'AR Interior Visualization',
            'Custom Room Design',
            'Smart Furniture Placement',
            'Material & Color Matching',
            'Virtual Walkthroughs',
            'Studio OS Consultation'
          ].map((service, idx) => (
            <div key={idx} className="service-card">
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Form */}
      <section style={{ background: '#1e1e1e', padding: '3rem 1rem' }}>
        <h2 style={{ textAlign: 'center', fontSize: '2rem' }}>Book a Free Consultation</h2>
        <form className="form-style">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Tell us more about you..." rows="4" />
          {/* <button type="submit" className="button-85">Submit</button> */}
          <button type="submit" className="button-85" class="button">Submit</button>

        </form>
      </section>

      <SocialIcons />

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '1rem', color: '#777', backgroundColor: '#101010' }}>
        © 2025 Spaciefy. All rights reserved.
      </footer>
    </main>
  );
}

export default App;
