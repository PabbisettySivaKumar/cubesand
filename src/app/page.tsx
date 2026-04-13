import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section style={{
        position: 'relative',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0 20px',
        overflow: 'hidden'
      }}>
        {/* Background Image with Overlay */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
          <Image 
            src="/images/stockyard.png" 
            alt="Stockyard" 
            fill 
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
            priority
          />
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(31, 41, 55, 0.7)' }}></div>
        </div>

        <div className="container" style={{ textAlign: 'center', color: 'white', maxWidth: '800px', zIndex: 10 }}>
          <h1 style={{ color: 'white', marginBottom: '20px' }}>Premium Quality Stone Aggregates for Reliable Infrastructure</h1>
          <p style={{ color: '#e5e7eb', fontSize: '1.25rem', marginBottom: '40px' }}>
            We supply M-Sand, P-Sand, and graded rock aggregates to top contractors, builders, and developers with unmatched quality and on-time delivery.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '12px 32px' }}>
              Request a Quote
            </Link>
            <Link href="/products" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-charcoal)', fontSize: '1.125rem', padding: '12px 32px' }}>
              View Materials
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section style={{ backgroundColor: 'var(--color-charcoal)', color: 'white', padding: '40px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', textAlign: 'center' }}>
          <div>
            <h3 style={{ color: 'var(--color-accent)', fontSize: '2.5rem', marginBottom: '8px' }}>20+</h3>
            <p style={{ fontWeight: 600 }}>Years Expcrience</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-accent)', fontSize: '2.5rem', marginBottom: '8px' }}>2M+</h3>
            <p style={{ fontWeight: 600 }}>Tons Delivered</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-accent)', fontSize: '2.5rem', marginBottom: '8px' }}>50+</h3>
            <p style={{ fontWeight: 600 }}>Fleet Trucks</p>
          </div>
          <div>
            <h3 style={{ color: 'var(--color-accent)', fontSize: '2.5rem', marginBottom: '8px' }}>100%</h3>
            <p style={{ fontWeight: 600 }}>Quality Compliant</p>
          </div>
        </div>
      </section>

      {/* Products Highlights */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2>Our Materials</h2>
            <p>High-grade outputs tuned for concrete mixes and heavy foundation works.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {/* Card 1 */}
            <div style={{ border: '1px solid var(--color-sand-hover)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ position: 'relative', height: '240px' }}>
                <Image src="/images/aggregate.png" alt="20mm Aggregate" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3>20mm Aggregate</h3>
                <p>Perfect for ready-mix concrete and roof slab casting.</p>
                <Link href="/contact" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Enquire Now &rarr;</Link>
              </div>
            </div>
            {/* Card 2 */}
            <div style={{ border: '1px solid var(--color-sand-hover)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ position: 'relative', height: '240px' }}>
                <Image src="/images/aggregate.png" alt="40mm Aggregate" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', filter: 'grayscale(0.3)' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3>40mm Aggregate</h3>
                <p>The standard choice for railway blast and road base.</p>
                <Link href="/contact" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Enquire Now &rarr;</Link>
              </div>
            </div>
            {/* Card 3 */}
            <div style={{ border: '1px solid var(--color-sand-hover)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ position: 'relative', height: '240px' }}>
                <Image src="/images/aggregate.png" alt="M-Sand" fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', filter: 'sepia(0.2)' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <h3>M-Sand</h3>
                <p>Manufactured sand ideal for strong brickwork and concrete.</p>
                <Link href="/contact" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>Enquire Now &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plant Preview */}
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div className="grid-responsive">
            <div>
              <h2>State-of-the-art Infrastructure</h2>
              <p>Our heavy-duty crushing plants process up to 500 tons per hour, ensuring that high-volume orders are fulfilled effortlessly. Built with top-tier multi-stage crushers and extensive conveyor networks to maintain consistency.</p>
              <ul style={{ marginBottom: '24px', listStyleType: 'disc', marginLeft: '20px', color: 'var(--color-stone-gray)'}}>
                <li style={{ marginBottom: '8px' }}>Tertiary VSI Crushers for precise M-Sand cubical shape.</li>
                <li style={{ marginBottom: '8px' }}>Large Stockyards scaling up to 100,000 tons.</li>
                <li style={{ marginBottom: '8px' }}>Automated Weighbridges for exact fleet dispatching.</li>
              </ul>
            </div>
            <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="/images/stone_crusher.png" alt="Crushing Plant" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2>Ready to order?</h2>
          <p style={{ marginBottom: '32px' }}>Our dedicated dispatch team works around the clock to meet your crucial project deadlines.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <Link href="/contact" className="btn btn-primary">Enquire Online</Link>
            <a href="https://wa.me/919562347777" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
