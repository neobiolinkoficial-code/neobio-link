"use client";
import { useState } from "react";

export default function Page() {
  const [sel, setSel] = useState([]);
  const [nome, setNome] = useState("");
  const [linkGerado, setLinkGerado] = useState("");

  const toggle = (n) => {
    if (sel.includes(n)) setSel(sel.filter(x => x !== n));
    else setSel([...sel, n]);
  };

  const total = sel.length * 0.2;
  const premio = (1000 + total) * 0.6;

  return (
    <div style={{background:"#070707",color:"#fff",minHeight:"100vh",fontFamily:"Arial"}}>
      <div style={{background:"#000",borderBottom:"2px solid #FFD700",padding:14,textAlign:"center"}}>
        <h1 style={{color:"#FFD700",fontSize:20,fontWeight:900}}>LOJA DA CAROL OFICIAL</h1>
        <p style={{color:"#ff5cb6",fontSize:11}}>R$20 BÔNUS PRA CONCORRER A R$5 MIL</p>
      </div>
      <div style={{padding:16}}>
        <div style={{background:"linear-gradient(135deg,#FFD700,#ffb700)",borderRadius:20,padding:18,textAlign:"center",color:"#000"}}>
          <div style={{fontSize:11}}>🎰 PRÊMIO 60%</div>
          <div style={{fontSize:38,fontWeight:900}}>R$ {premio.toFixed(2).replace('.',',')}</div>
          <div style={{fontSize:12}}>PIX: 46991048053</div>
        </div>
        <div style={{background:"#111",borderRadius:18,padding:16,marginTop:16}}>
          <input value={nome} onChange={e=>setNome(e.target.value)} placeholder="Seu nome" style={{width:"100%",padding:12,background:"#000",color:"#fff",border:"1px solid #333",borderRadius:10,margin:"6px 0"}}/>
          <input placeholder="Seu Instagram/TikTok (link divulgação)" style={{width:"100%",padding:12,background:"#000",color:"#fff",border:"1px solid #ff1493",borderRadius:10}}/>
          <button onClick={()=>{const s=(nome||"carol").toLowerCase().replace(/\s+/g,"_").slice(0,15);setLinkGerado(`hora-da-sorte.com/r/${s}`)}} style={{width:"100%",padding:12,marginTop:8,background:"#FFD700",border:"none",borderRadius:10,fontWeight:900}}>GERAR MEU LINK</button>
          {linkGerado && <p style={{color:"#FFD700",fontSize:11,marginTop:6}}>✅ {linkGerado}</p>}
        </div>
        <div style={{background:"#111",borderRadius:18,padding:16,marginTop:16}}>
          <h3 style={{color:"#ff5cb6",fontSize:14}}>NÚMEROS R$0,20 - MÍN R$5</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)",gap:6,margin:"12px 0"}}>
            {Array.from({length:100},(_,i)=>i+1).map(n=>(
              <div key={n} onClick={()=>toggle(n)} style={{background:sel.includes(n)?"#FFD700":"#1a1a1a",color:sel.includes(n)?"#000":"#fff",borderRadius:10,aspectRatio:"1",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:700,cursor:"pointer"}}>{n}</div>
            ))}
          </div>
          <div style={{display:"flex",justifyContent:"space-between",fontSize:12}}><span>Sel: {sel.length}</span><span>Total: R$ {total.toFixed(2).replace('.',',')}</span></div>
          {sel.length>0 && total<5 && <p style={{color:"#ff6b6b",fontSize:11,marginTop:6}}>Mínimo R$5 (25 números)!</p>}
          <button onClick={()=>{if(total<5){alert("Mínimo R$5!");return;}alert(`Total R$${total.toFixed(2)}\nPIX 46991048053\nAcima R$50 ganha KIT CANECA!`)}} style={{width:"100%",padding:14,marginTop:10,background:"#ff1493",color:"#fff",border:"none",borderRadius:12,fontWeight:900}}>COMPRAR - PIX 46991048053</button>
        </div>
        <div style={{border:"2px dashed #ff1493",borderRadius:18,padding:16,marginTop:16,textAlign:"center"}}>
          <p style={{color:"#ff5cb6",fontWeight:900}}>🎁 R$50+ = KIT CANECA H</p>
          <p style={{fontSize:11,color:"#888"}}>Hora da Sorte embaixo do H - Preta Dourada + Branca Rosa</p>
        </div>
      </div>
    </div>
  )
}
