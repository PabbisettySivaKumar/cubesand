'use client';
import React, { useState } from 'react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <>
      <section className="section" style={{ backgroundColor: 'var(--color-charcoal)', color: 'white', paddingBottom: 'calc(var(--spacing-3xl) * 2)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white' }}>Contact Us</h1>
          <p style={{ margin: '0 auto', color: 'var(--color-sand)' }}>
            Reach out for pricing, availability, and delivery options for your site.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-80px' }}>
        <div className="container">
          <div className="grid-responsive-7-5">

            <div>
              <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-lg)' }}>
                <h2 style={{ marginBottom: '24px' }}>Request a Quote</h2>
                {formState === 'success' ? (
                  <div style={{ padding: '24px', backgroundColor: '#ecfdf5', color: '#065f46', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
                    <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Request Sent Successfully
                    </h3>
                    <p style={{ marginTop: '8px', marginBottom: 0 }}>Our team will review your requirements and get back to you shortly.</p>
                    <button onClick={() => setFormState('idle')} className="btn btn-outline" style={{ marginTop: '16px' }}>Send another request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Name *</label>
                        <input type="text" required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem' }} />
                      </div>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Company Name</label>
                        <input type="text" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem' }} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Phone Number *</label>
                        <input type="tel" required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem' }} />
                      </div>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Project Location *</label>
                        <input type="text" required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem' }} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Material Required</label>
                        <select style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white' }}>
                          <option>20mm Aggregate</option>
                          <option>40mm Aggregate</option>
                          <option>M-Sand (Concrete)</option>
                          <option>M-Sand (Plastering)</option>
                          <option>Crusher Dust</option>
                          <option>Multiple Materials</option>
                        </select>
                      </div>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Approx. Quantity (Tons)</label>
                        <input type="number" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem' }} />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
                      <textarea rows={4} style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}></textarea>
                    </div>

                    <button type="submit" disabled={formState === 'submitting'} className="btn btn-primary" style={{ marginTop: '8px', opacity: formState === 'submitting' ? 0.7 : 1 }}>
                      {formState === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-stone-light)', textAlign: 'center', marginTop: '8px' }}>
                      Note: This is a local preview demonstration form.
                    </p>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <h3 style={{ marginBottom: '16px' }}>Direct Contact</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-sand)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>Sales Desk</p>
                        <p style={{ margin: 0, color: 'var(--color-stone-gray)' }}>+91-9562347777</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', backgroundColor: '#e2f5ea', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#16a34a' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>WhatsApp</p>
                        <a href="https://wa.me/919562347777" style={{ margin: 0, color: '#16a34a', textDecoration: 'underline' }}>Chat with us</a>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-sand)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-accent)' }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>Email Support</p>
                        <a href="mailto:sufiyan@cubicsglobal.in" style={{ margin: 0, color: 'var(--color-stone-gray)' }}>sufiyan@cubicsglobal.in</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 style={{ marginBottom: '16px' }}>Headquarters & Plant</h3>
                  <div style={{ width: '100%', height: '250px', backgroundColor: 'var(--color-sand-hover)', borderRadius: '12px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-stone-light)' }}>
                    <span>Map Embed Placeholder</span>
                  </div>
                  <p style={{ marginTop: '16px', color: 'var(--color-stone-gray)', lineHeight: 1.6 }}>
                    123 Quarry Road, Industrial Area,<br />
                    State District, Zip Code 12345
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
