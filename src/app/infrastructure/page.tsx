import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Infrastructure | CubeSand',
  description: 'Explore our multi-stage crushing plants, conveyors, and logistics infrastructure.',
};

export default function InfrastructurePage() {
  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--color-charcoal)', color: 'white', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>World-Class Infrastructure</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-sand)' }}>
            Our crushing plant isn’t just a line of machinery; it’s an engineered solution for high-volume demand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-responsive">
            <div>
              <h2>Multi-Stage Crushing Process</h2>
              <p>We deploy modern primary jaw crushers, secondary cone crushers, and tertiary Vertical Shaft Impactors (VSI) to ensure product perfect cubical shapes across all sizes.</p>
              
              <h3 style={{ marginTop: '24px' }}>Key Plant Assets:</h3>
              <ul style={{ listStyleType: 'disc', marginLeft: '20px', color: 'var(--color-stone-gray)' }}>
                <li><strong>500 TPH Jaw Crushers:</strong> For massive primary breakdowns.</li>
                <li><strong>VSI M-Sand Technology:</strong> Specialized washing and crushing logic to produce flawless manufactured sand.</li>
                <li><strong>Automated Conveyors:</strong> Kilometers of robust belts reducing manual handling and spillage.</li>
              </ul>
            </div>
            <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="/images/stone_crusher.png" alt="Multi-stage crushing" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '40px', alignItems: 'center' }}>
            <div style={{ position: 'relative', height: '400px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
              <Image src="/images/stockyard.png" alt="Logistics and Weighbridge" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <h2>Logistics & Dispatch</h2>
              <p>Producing the best material is useless if it isn’t delivered on time.</p>
              
              <ul style={{ marginTop: '24px', listStyleType: 'disc', marginLeft: '20px', color: 'var(--color-stone-gray)' }}>
                <li><strong>Massive Stockyards:</strong> Segregated areas for different aggregates to prevent mixing.</li>
                <li><strong>Heavy Earth Movers:</strong> Rapid loading of 30+ ton dumpers in minutes.</li>
                <li><strong>Digital Weighbridges:</strong> Tamper-proof, fully automated weighing ensuring exact billing.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
