import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Materials & Products | CubeSand',
  description: 'View our diverse list of crushed stone products, aggregates, and manufactured sand.',
};

const products = [
  {
    id: 1,
    name: '40mm Aggregate',
    use: 'Road base, railway ballast, heavy concrete.',
    availability: 'High / Ready for Dispatch',
    imageFilter: 'grayscale(0.3)'
  },
  {
    id: 2,
    name: '20mm Aggregate',
    use: 'Pillars, roof slabs, ready-mix concrete.',
    availability: 'High / Ready for Dispatch',
    imageFilter: 'none'
  },
  {
    id: 3,
    name: '12mm Aggregate',
    use: 'Precast products, pathways, finishing.',
    availability: 'Medium',
    imageFilter: 'brightness(0.9)'
  },
  {
    id: 4,
    name: 'M-Sand (Plastering)',
    use: 'Wall plastering, smooth finishes.',
    availability: 'High / Ready for Dispatch',
    imageFilter: 'sepia(0.3)'
  },
  {
    id: 5,
    name: 'M-Sand (Concrete)',
    use: 'Brickwork, foundational concrete.',
    availability: 'High / Ready for Dispatch',
    imageFilter: 'sepia(0.2)'
  },
  {
    id: 6,
    name: 'Crusher Dust / Quarry Dust',
    use: 'Paver blocks, sub-base filling.',
    availability: 'High',
    imageFilter: 'contrast(1.2)'
  }
];

export default function ProductsPage() {
  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--color-charcoal)', color: 'white', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Our Materials & Products</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-sand)' }}>
            We manufacture a comprehensive range of crushed stone products to meet varied construction requirements.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {products.map(product => (
              <div key={product.id} style={{ border: '1px solid var(--color-sand-hover)', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ position: 'relative', height: '240px' }}>
                  <Image src="/images/aggregate.png" alt={product.name} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: 'cover', filter: product.imageFilter }} />
                </div>
                <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3>{product.name}</h3>
                  <div style={{ flexGrow: 1 }}>
                    <p style={{ marginBottom: '8px' }}><strong>Typical Use:</strong> {product.use}</p>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-stone-light)' }}>
                      <strong>Availability:</strong> {product.availability}
                    </p>
                  </div>
                  <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px', alignSelf: 'flex-start' }}>Get Quote</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Need Custom Sizes or Giant Volumes?</h2>
          <p>We work with major contractors to supply customized blend ratios or extremely high volume deliveries directly to your site.</p>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: '16px' }}>Contact Sales Team</Link>
        </div>
      </section>
    </>
  );
}
