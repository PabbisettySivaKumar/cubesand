import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | CubeSand',
  description: 'Learn about CubeSand, our background, operational philosophy, and service regions.',
};

export default function AboutPage() {
  return (
    <>
      <section className="section bg-charcoal text-white" style={{ paddingBottom: 'var(--spacing-4xl)' }}>
        <div className="container text-center">
          <h1 className="text-white">About CubeSand</h1>
          <p className="text-sand" style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-sand)' }}>
            Powering progress through robust materials. We have been a trusted cornerstone in raw material supply for over two decades.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-60px' }}>
        <div className="container grid-responsive">
          <div style={{ position: 'relative', height: '500px', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            <Image src="/images/stockyard.png" alt="CubeSand Stockyard" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: 'cover' }} />
          </div>
          <div>
            <h2 className="text-accent">Our Heritage</h2>
            <p>
              Founded in the early 2000s, CubeSand began as a single-unit quarry. Today, we stand as one of the largest aggregate producers in the region, driven by an unwavering commitment to quality and logistical reliability.
            </p>
            <p>
              We operate multiple world-class crushing and screening plants, delivering premium stone aggregates and manufactured sand straight to construction sites, batching plants, and major infrastructure projects.
            </p>
            <h3 style={{ marginTop: '24px' }}>Operating Philosophy</h3>
            <ul className="text-gray" style={{ listStyleType: 'disc', marginLeft: '20px' }}>
              <li><strong>Zero Compromise on Quality:</strong> Stringent lab testing guarantees that every ton of material meets industry codes.</li>
              <li><strong>Environmental Responsibility:</strong> Utilizing advanced dust suppression and water conservation systems.</li>
              <li><strong>Customer-Centric Deadlines:</strong> We understand that delayed materials halt construction. Our logistics are optimized for punctuality.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section bg-sand">
        <div className="container text-center">
          <h2>Service Regions</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 40px auto' }}>
            Our fleet covers a vital logistical radius to supply our customers consistently without delay.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {['Metropolitan Hubs', 'Industrial Sectors', 'Highway Corridors', 'Suburban Development Zones'].map(region => (
              <div key={region} className="card card-padded" style={{ backgroundColor: 'white', fontWeight: 600 }}>
                {region}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
