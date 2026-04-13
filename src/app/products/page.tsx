import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

export const metadata = {
  title: 'Products | CubeSand',
  description: 'View our full range of crushed stone aggregates and manufactured sand products.',
};

const products = [
  {
    id: 1,
    name: '40mm Aggregate',
    use: 'Road base, railway ballast, heavy concrete.',
    imageFilter: 'grayscale(0.3)'
  },
  {
    id: 2,
    name: '20mm Aggregate',
    use: 'Pillars, roof slabs, ready-mix concrete.',
    imageFilter: 'none'
  },
  {
    id: 3,
    name: '12mm Aggregate',
    use: 'Precast products, pathways, finishing.',
    imageFilter: 'brightness(0.9)'
  },
  {
    id: 4,
    name: 'M-Sand (Plastering)',
    use: 'Wall plastering, smooth finishes.',
    imageFilter: 'sepia(0.3)'
  },
  {
    id: 5,
    name: 'M-Sand (Concrete)',
    use: 'Brickwork, foundational concrete.',
    imageFilter: 'sepia(0.2)'
  },
  {
    id: 6,
    name: 'Crusher Dust / Quarry Dust',
    use: 'Paver blocks, sub-base filling.',
    imageFilter: 'contrast(1.2)'
  }
];

export default function ProductsPage() {
  return (
    <>
      <section className="section bg-charcoal text-white" style={{ paddingBottom: 'calc(var(--spacing-3xl) * 2)' }}>
        <div className="container text-center">
          <h1 className="text-white">Our Construction Materials</h1>
          <p className="text-sand" style={{ margin: '0 auto', color: 'var(--color-sand)' }}>
            High-grade aggregates sorted and washed to meet rigorous civil engineering standards.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-80px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                imageUrl="/images/aggregate.png"
                imageFilter={product.imageFilter}
                actionText="Get Quote"
                actionStyle="btn"
              >
                <p style={{ marginBottom: '8px' }}><strong>Typical Use:</strong> {product.use}</p>
              </ProductCard>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-sand">
        <div className="container text-center">
          <h2>Need Custom Sizes or Giant Volumes?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto 32px auto' }}>
            We customize crusher settings for specialized project requirements (like specific GSB layering). Let our technical team know your grading specs.
          </p>
          <Link href="/contact" className="btn btn-primary">Speak to an Expert</Link>
        </div>
      </section>
    </>
  );
}
