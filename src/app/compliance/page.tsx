import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compliance & Quality | CubeSand',
  description: 'View our environmental approvals, quality testing procedures, and safety practices.',
};

export default function CompliancePage() {
  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--color-charcoal)', color: 'white', paddingBottom: 'var(--spacing-3xl)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Quality & Compliance</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', color: 'var(--color-sand)' }}>
            We adhere strictly to state environmental standards and national building codes for construction materials.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            
            <div style={{ padding: '32px', border: '1px solid var(--color-sand-hover)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </div>
              <h2 style={{ fontSize: '1.5rem' }}>Quality Assurance</h2>
              <p style={{ color: 'var(--color-stone-gray)' }}>
                Our on-site laboratory tests material strength, flakiness index, and shape consistency multiple times daily. We ensure that our M-Sand has zero silt content by employing modern multi-stage washing systems.
              </p>
            </div>

            <div style={{ padding: '32px', border: '1px solid var(--color-sand-hover)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h2 style={{ fontSize: '1.5rem' }}>Environmental Clearances</h2>
              <p style={{ color: 'var(--color-stone-gray)' }}>
                We operate with full state environmental permissions. Dust suppression setups, water re-circulation processes, and strict noise management bounds keep our quarry friendly to the community.
              </p>
            </div>

            <div style={{ padding: '32px', border: '1px solid var(--color-sand-hover)', borderRadius: '12px', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: 'var(--color-accent)', marginBottom: '16px' }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"></path><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
              </div>
              <h2 style={{ fontSize: '1.5rem' }}>Safety Standards</h2>
              <p style={{ color: 'var(--color-stone-gray)' }}>
                Miner and operator safety is priority one. Our staff are equipped with grade-A PPE, and heavy equipment lines are fenced and guarded.
              </p>
            </div>

          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-sand)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Documentation available upon request</h2>
          <p>If you require specific quality certificates or test reports for a tender or bid, let us know.</p>
        </div>
      </section>
    </>
  );
}
