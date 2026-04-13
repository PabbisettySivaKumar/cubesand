'use client';
import React, { useState } from 'react';
import Icon from '@/components/Icons';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const formData = new FormData(e.currentTarget);
    const urlEncodedData = new URLSearchParams(formData as any).toString();
    
    fetch('https://script.google.com/macros/s/AKfycbxVNGDwXbNjtRE-fPWlVkuqDFESLtrBLyX19WET2GoDw72UXC9uXXUeEGJCQcd5oLk0zQ/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: urlEncodedData,
    })
      .then(res => res.json())
      .then(data => {
        if (data.result === 'success') {
          setFormState('success');
        } else {
          console.error('Submission error:', data);
          setFormState('idle');
        }
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setFormState('idle');
      });
  };

  return (
    <>
      <section className="section bg-charcoal text-white" style={{ paddingBottom: 'calc(var(--spacing-3xl) * 2)' }}>
        <div className="container text-center">
          <h1 className="text-white">Contact Us</h1>
          <p className="text-sand" style={{ margin: '0 auto' }}>
            Reach out for pricing, availability, and delivery options for your site.
          </p>
        </div>
      </section>

      <section className="section" style={{ marginTop: '-80px' }}>
        <div className="container">
          <div className="grid-responsive-7-5">

            <div>
              <div className="card card-padded" style={{ backgroundColor: 'white', padding: '40px' }}>
                <h2 style={{ marginBottom: '24px' }}>Request a Quote</h2>
                {formState === 'success' ? (
                  <div style={{ padding: '24px', backgroundColor: '#ecfdf5', color: '#065f46', borderRadius: '8px', border: '1px solid #a7f3d0' }}>
                    <h3 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Icon name="check" size={24} />
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
                        <input type="text" name="Name" required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem' }} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Phone Number *</label>
                        <input type="tel" name="Phone" required style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem' }} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                      <div style={{ flex: '1 1 200px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Material Required</label>
                        <select name="Material" style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem', backgroundColor: 'white' }}>
                          <option>20mm Aggregate</option>
                          <option>40mm Aggregate</option>
                          <option>M-Sand (Concrete)</option>
                          <option>M-Sand (Plastering)</option>
                          <option>Crusher Dust</option>
                          <option>Multiple Materials</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
                      <textarea name="Message" rows={4} style={{ width: '100%', padding: '12px', border: '1px solid var(--color-sand-hover)', borderRadius: '8px', fontSize: '1rem', resize: 'vertical' }}></textarea>
                    </div>

                    <button type="submit" disabled={formState === 'submitting'} className="btn btn-primary" style={{ marginTop: '8px', opacity: formState === 'submitting' ? 0.7 : 1 }}>
                      {formState === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-stone-light)', textAlign: 'center', margin: '8px 0 0 0' }}>
                      Your enquiry will be sent directly to our team.
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
                    
                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '16px' }}>
                      <div className="flex-center" style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-sand)', borderRadius: '50%', color: 'var(--color-accent)' }}>
                        <Icon name="phone" size={24} />
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>Sales Desk</p>
                        <p style={{ margin: 0, color: 'var(--color-stone-gray)' }}>+91-9562347777</p>
                      </div>
                    </div>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '16px' }}>
                      <div className="flex-center" style={{ width: '48px', height: '48px', backgroundColor: '#e2f5ea', borderRadius: '50%', color: '#16a34a' }}>
                        <Icon name="whatsapp" size={24} />
                      </div>
                      <div>
                        <p style={{ margin: 0, fontWeight: 600 }}>WhatsApp</p>
                        <a href="https://wa.me/919562347777" style={{ margin: 0, color: '#16a34a', textDecoration: 'underline' }}>Chat with us</a>
                      </div>
                    </div>

                    <div className="flex-center" style={{ justifyContent: 'flex-start', gap: '16px' }}>
                      <div className="flex-center" style={{ width: '48px', height: '48px', backgroundColor: 'var(--color-sand)', borderRadius: '50%', color: 'var(--color-accent)' }}>
                        <Icon name="mail" size={24} />
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
                  <div className="flex-center" style={{ width: '100%', height: '250px', backgroundColor: 'var(--color-sand-hover)', borderRadius: '12px', overflow: 'hidden', color: 'var(--color-stone-light)' }}>
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
