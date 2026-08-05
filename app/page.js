'use client';
import { useState } from 'react';

export default function Home() {
  const [niche, setNiche] = useState('');
  const [bio, setBio] = useState(null);

  function gerar() {
    const n = niche.toLowerCase();
    let data;
    if (n.includes('estet') || n.includes('beleza') || n.includes('spa')) {
      data = {
        title: 'Clínica Bella Floripa',
        bio: 'Realce sua beleza natural 🌸 | Floripa | Resultados que encantam',
        links: [
          { label: '💖 Agendar Avaliação', url: 'https://wa.me/5548999999999' },
          { label: '📸 Ver Antes e Depois', url: '#' },
          { label: '📍 Onde Estamos', url: '#' }
        ]
      };
    } else if (n.includes('barb') || n.includes('cabelo') || n.includes('barber')) {
      data = {
        title: 'Barbearia José Boiteux',
        bio: 'Corte na régua desde 2020 💈 | Agende seu horário',
        links: [
          { label: '✂️ Agendar Corte', url: 'https://wa.me/5548999999999' },
          { label: '💈 Nossos Serviços', url: '#' },
          { label: '📍 Localização', url: '#' }
        ]
      };
    } else {
      data = {
        title: 'Meu Negócio - Floripa',
        bio: 'Feito em Floripa 🌊 | Bio site que nunca falha',
        links: [
          { label: '🚀 Fale no WhatsApp', url: 'https://wa.me/5548999999999' },
          { label: '⭐ Ver Avaliações', url: '#' },
          { label: '📍 Como Chegar', url: '#' }
        ]
      };
    }
    setBio(data);
  }

  return (
    <main style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', padding: '24px', fontFamily: 'system-ui' }}>
      <div style={{ maxWidth: '420px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px' }}>NeoBio Link 🚀</h1>
        <p style={{ color: '#aaa', marginBottom: '24px' }}>Gerador de Bio Site que nunca falha</p>

        <div style={{ background: '#1a1a1a', padding: '20px', borderRadius: '16px', marginBottom: '24px' }}>
          <input
            value={niche}
            onChange={(e) => setNiche(e.target.value)}
            placeholder="Seu nicho: ex: estética, barbearia, clínica..."
            style={{ width: '100%', padding: '14px', borderRadius: '10px', border: '1px solid #333', background: '#000', color: 'white', fontSize: '16px' }}
          />
          <button
            onClick={gerar}
            style={{ width: '100%', marginTop: '12px', padding: '14px', borderRadius: '10px', background: '#fff', color: '#000', fontWeight: 'bold', border: 'none', cursor: 'pointer', fontSize: '16px' }}
          >
            Gerar Meu Bio Site →
          </button>
        </div>

        {bio && (
          <div style={{ background: 'white', color: 'black', padding: '24px', borderRadius: '20px', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', background: 'linear-gradient(135deg,#667eea,#764ba2)', borderRadius: '50%', margin: '0 auto 16px' }}></div>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '4px' }}>{bio.title}</h2>
            <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>{bio.bio}</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {bio.links.map((l, i) => (
                <a key={i} href={l.url} style={{ padding: '14px', borderRadius: '12px', background: i === 0 ? '#000' : '#f1f1f1', color: i === 0 ? 'white' : 'black', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>
                  {l.label}
                </a>
              ))}
            </div>
            <p style={{ marginTop: '16px', fontSize: '11px', color: '#999' }}>Criado com NeoBio Link • neobio.link</p>
          </div>
        )}
      </div>
    </main>
  );
}
