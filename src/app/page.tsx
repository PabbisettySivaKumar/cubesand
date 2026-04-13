import Image from "next/image";
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-charcoal text-white" style={{ position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <Image 
            src="/images/stockyard.png" 
            alt="Stockyard Background" 
            fill 
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.3 }} 
            priority 
          />
        </div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
          <h1 className="text-white" style={{ marginBottom: '20px' }}>Premium Quality Stone Aggregates for Reliable Infrastructure</h1>
          <p style={{ color: '#e5e7eb', fontSize: '1.25rem', marginBottom: '40px' }}>
            Operating one of the region&apos;s largest crushing facilities. We deliver precision-crushed M-Sand and construction aggregates for commercial, civil, and residential projects.
          </p>
          <div className="flex-center gap-md" style={{ flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '12px 32px' }}>
              Request a Quote
            </Link>
            <Link href="/products" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-charcoal)', fontSize: '1.125rem', padding: '12px 32px', borderRadius: 'var(--radius-md)', fontWeight: 600 }}>
              View Our Products
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-charcoal text-white" style={{ padding: '40px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container flex-center" style={{ justifyContent: 'space-around', flexWrap: 'wrap', gap: '20px', textAlign: 'center' }}>
          <div>
            <h3 className="text-accent" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>20+</h3>
            <p style={{ fontWeight: 600, margin: 0 }}>Years Experience</p>
          </div>
          <div>
            <h3 className="text-accent" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>2M+</h3>
            <p style={{ fontWeight: 600, margin: 0 }}>Tons Delivered</p>
          </div>
          <div>
            <h3 className="text-accent" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>50+</h3>
            <p style={{ fontWeight: 600, margin: 0 }}>Fleet Trucks</p>
          </div>
          <div>
            <h3 className="text-accent" style={{ fontSize: '2.5rem', marginBottom: '8px' }}>100%</h3>
            <p style={{ fontWeight: 600, margin: 0 }}>Quality Compliant</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2>Core Products</h2>
            <p>Engineered for strength and consistency.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <ProductCard 
              title="20mm Aggregate" 
              imageUrl="/images/aggregate.png"
              actionText="Enquire Now"
            >
              Essential for ready-mix concrete, foundations, and robust pillars.
            </ProductCard>

            <ProductCard 
              title="40mm Aggregate" 
              imageUrl="/images/aggregate.png"
              imageFilter="grayscale(0.3)"
              actionText="Enquire Now"
            >
              Heavy-duty aggregate for road bases, railway ballast, and mass concrete.
            </ProductCard>

            <ProductCard 
              title="M-Sand" 
              imageUrl="/images/aggregate.png"
              imageFilter="sepia(0.2)"
              actionText="Enquire Now"
            >
              Eco-friendly manufactured sand with perfect cubical shape for supreme bonding.
            </ProductCard>
          </div>
        </div>
      </section>

      {/* Infrastructure Highlight */}
      <section className="section bg-sand">
        <div className="container">
          <div className="grid-responsive">
            <div>
              <h2>State-of-the-art Infrastructure</h2>
              <p>Our heavy-duty crushing plants process up to 500 tons per hour, ensuring that high-volume orders are fulfilled effortlessly. Built with top-tier multi-stage crushers and extensive conveyor networks to maintain consistency.</p>
              <ul style={{ marginBottom: '24px', listStyleType: 'disc', marginLeft: '20px' }} className="text-gray">
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
      <section className="section text-center">
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2>Ready to order?</h2>
          <p style={{ marginBottom: '32px' }}>Our dedicated dispatch team works around the clock to meet your crucial project deadlines.</p>
          <div className="flex-center gap-md">
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
