import React from 'react';
import { Metadata } from 'next';
import Icon from '@/components/Icons';

export const metadata: Metadata = {
  title: 'Compliance & Quality | CubeSand',
  description: 'View our environmental approvals, quality testing procedures, and safety practices.',
};

export default function CompliancePage() {
  return (
    <>
      <section className="section bg-charcoal text-white" style={{ paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container text-center">
          <h1 className="text-white">Quality & Compliance</h1>
          <p className="text-sand" style={{ maxWidth: '800px', margin: '0 auto' }}>
            We adhere strictly to state environmental standards and national building codes for construction materials.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            <div className="card card-padded">
              <div className="text-accent" style={{ marginBottom: '16px' }}>
                <Icon name="shield" size={40} />
              </div>
              <h2 style={{ fontSize: '1.5rem' }}>Quality Assurance</h2>
              <p className="text-gray">
                Our on-site laboratory tests material strength, flakiness index, and shape consistency multiple times daily. We ensure that our M-Sand has zero silt content by employing modern multi-stage washing systems.
              </p>
            </div>

            <div className="card card-padded">
              <div className="text-accent" style={{ marginBottom: '16px' }}>
                <Icon name="package" size={40} />
              </div>
              <h2 style={{ fontSize: '1.5rem' }}>Environmental Clearances</h2>
              <p className="text-gray">
                We operate with full state environmental permissions. Dust suppression setups, water re-circulation processes, and strict noise management bounds keep our quarry friendly to the community.
              </p>
            </div>

            <div className="card card-padded">
              <div className="text-accent" style={{ marginBottom: '16px' }}>
                <Icon name="checkSquare" size={40} />
              </div>
              <h2 style={{ fontSize: '1.5rem' }}>Safety Standards</h2>
              <p className="text-gray">
                Miner and operator safety is priority one. Our staff are equipped with grade-A PPE, and heavy equipment lines are fenced and guarded.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      <section className="section bg-sand">
        <div className="container text-center">
          <h2>Documentation available upon request</h2>
          <p>If you require specific quality certificates or test reports for a tender or bid, let us know.</p>
        </div>
      </section>
    </>
  );
}
