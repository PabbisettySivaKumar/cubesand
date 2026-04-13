import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  title: string;
  imageUrl: string;
  imageFilter?: string;
  children: React.ReactNode;
  actionHref?: string;
  actionText?: string;
  actionStyle?: 'link' | 'btn';
}

export default function ProductCard({
  title,
  imageUrl,
  imageFilter = 'none',
  children,
  actionHref = '/contact',
  actionText = 'Enquire Now',
  actionStyle = 'link'
}: ProductCardProps) {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ position: 'relative', height: '240px' }}>
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw" 
          style={{ objectFit: 'cover', filter: imageFilter }} 
        />
      </div>
      <div className="card-padded" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3 style={{ marginBottom: '8px' }}>{title}</h3>
        <div style={{ flexGrow: 1, color: 'var(--color-stone-gray)' }}>
          {children}
        </div>
        
        {actionStyle === 'btn' ? (
           <Link href={actionHref} className="btn btn-primary" style={{ marginTop: '20px', alignSelf: 'flex-start' }}>
             {actionText}
           </Link>
        ) : (
           <Link href={actionHref} style={{ color: 'var(--color-accent)', fontWeight: 600, marginTop: '16px', display: 'inline-block' }}>
             {actionText} &rarr;
           </Link>
        )}
      </div>
    </div>
  );
}
