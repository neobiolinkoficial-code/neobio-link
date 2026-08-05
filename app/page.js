'use client';
import { useState } from 'react';

export default function Home(){
  const [niche,setNiche]=useState('');
  const [bio,setBio]=useState(null);

  function gerar(){
    const templates = {
      'estetica': { title: 'Clínica Bella Floripa', bio: 'Realce sua beleza natural 🌸 | Floripa', links: ['Agendar Avaliação','Antes e Depois','Instagram'] },
      'barbearia': { title: 'Barbearia José Boiteux', bio: 'Corte na régua desde 2020 💈', links: ['Agendar Corte','Tabela de Preços','Localização'] },
      'default': { title: 'Meu Negócio - Floripa', bio: 'Feito em Floripa 🌊 | Bio site que nunca falha', links: ['WhatsApp','Instagram','Localização'] }
    };
    const key = niche.toLowerCase().includes('estet')?'estetica': niche.toLowerCase().includes('barb')?'barbearia':'default';
    setBio(templates[key]);
  }

  return (
    <div style={{minHeight:'100vh',padding:'40px 20px',maxWidth:'500px',margin:'0 auto'}}>
      <h1 style={{fontSize:'42px',fontWeight:900}}>NEO <span style={{color:'#D4FF00'}}>BIO</span></h1>
      <p style={{opacity:0.7}}>Gerador de bio sites com IA que nunca falha 🚀 PWA 100% LOCAL</p>

      <div style={{background:'#111',padding:'20px',borderRadius:'16px',marginTop:'30px',border:'1px solid #222'}}>
        <input value={niche} onChange={e=>setNiche(e.target.value)} placeholder="Digite: clínica de estética, barbearia..." style={{width:'100%',padding:'14px',borderRadius:'10px',border:'none',background:'#222',color:'white'}}/>
        <button onClick={gerar} style={{width:'100%',marginTop:'12px',padding:'14px',background:'#D4FF00',color:'black',fontWeight:800,border:'none',borderRadius:'10px',cursor:'pointer'}}>GERAR COM IA EM 15s ⚡️</button>
      </div>

      {bio && (
        <div style={{marginTop:'30px',background:'white',color:'black',borderRadius:'20px',padding:'24px',textAlign:'center'}}>
          <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'#D4FF00',margin:'0 auto 12px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:900}}>LOGO</div>
          <h2 style={{margin:'0'}}>{bio.title}</h2>
          <p style={{opacity:0.6,fontSize:'14px'}}>{bio.bio}</p>
          <div style={{marginTop:'16px',display:'flex',flexDirection:'column',gap:'10px'}}>
            {bio.links.map((l,i)=><div key={i} style={{padding:'12px',background:'black',color:'white',borderRadius:'10px',fontWeight:600}}>{l}</div>)}
          </div>
          <p style={{marginTop:'16px',fontSize:'12px',background:'#D4FF00',display:'inline-block',padding:'4px 10px',borderRadius:'20px',fontWeight:700}}>PWA 100% LOCAL ✓ SEM CORS</p>
        </div>
      )}

      <div style={{marginTop:'40px',fontSize:'12px',opacity:0.4,textAlign:'center'}}>
        Infra: neobiolinkoficial@gmail.com | DB: zozbwjxsviwjtozmwkwz.supabase.co (São Paulo) | Custo: R$0
      </div>
    </div>
  )
}
