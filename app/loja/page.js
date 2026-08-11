"use client";
import { useState } from "react";

const produtos = [
  { id: 1, nome: "Caneca Preta H", preco: "R$49,90", bonus: "R$20", emoji: "☕️", valor: 49.90 },
  { id: 2, nome: "Caneca Branca H", preco: "R$49,90", bonus: "R$20", emoji: "🤍", valor: 49.90 },
  { id: 3, nome: "Caneca Rosa H", preco: "R$49,90", bonus: "R$20", emoji: "💖", valor: 49.90 },
  { id: 4, nome: "Kit 3 Canecas", preco: "R$129", bonus: "R$50", emoji: "🎁", valor: 129.00 },
];

export default function Loja() {
  const [prod, setProd] = useState(null);
  const [nome, setNome] = useState("");
  const [zap, setZap] = useState("");

  const comprarWhats = () => {
    if(!nome || !zap) return alert("Preenche nome e zap!");
    const msg = `Olá! Quero ${prod.nome} - ${prod.preco} + ${prod.bonus} bônus pra jogar na Hora da Sorte!%0A%0ANome: ${nome}%0AMeu Zap: ${zap}%0A%0APode me mandar o PIX?`;
    window.open(`https://wa.me/5546991048053?text=${msg}`, "_blank");
    setProd(null);
  };

  return (
    <div style={{background:"black", minHeight:"100vh", padding:20, color:"white", fontFamily:"sans-serif"}}>
      <h1 style={{textAlign:"center", color:"#FF2E9F", fontSize:28}}>H HORA da SORTE</h1>
      <p style={{textAlign:"center", color:"#FF2E9F", opacity:0.8}}>LOJA OFICIAL - Pré-venda</p>
      
      <div style={{background:"#FF2E9F", color:"black", padding:12, borderRadius:10, textAlign:"center", margin:"15px 0", fontWeight:"bold"}}>
        🎉 Compre e ganhe {prod?.bonus || "R$20 a R$50"} de bônus pra jogar!
      </div>

      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:15}}>
        {produtos.map(p=>(
          <div key={p.id} style={{background:"#111", border:"1px solid #FF2E9F", borderRadius:15, padding:20, textAlign:"center"}}>
            <div style={{fontSize:40}}>{p.emoji}</div>
            <h3 style={{fontSize:14, margin:"10px 0"}}>{p.nome}</h3>
            <p style={{color:"#FF2E9F", fontWeight:"bold"}}>{p.preco}</p>
            <p style={{fontSize:11, opacity:0.7}}>+ {p.bonus} bônus rifa</p>
            <button onClick={()=>setProd(p)} style={{background:"#FF2E9F", color:"black", border:"none", width:"100%", padding:10, borderRadius:20, fontWeight:"bold", marginTop:10, cursor:"pointer"}}>COMPRAR</button>
          </div>
        ))}
      </div>

      {prod && (
        <div style={{position:"fixed", top:0, left:0, right:0, bottom:0, background:"rgba(0,0,0,0.8)", display:"flex", alignItems:"center", justifyContent:"center", padding:20}}>
          <div style={{background:"#222", border:"1px solid #FF2E9F", borderRadius:15, padding:20, width:"100%", maxWidth:400}}>
            <h2>Checkout - {prod.nome}</h2>
            <input placeholder="Seu nome" value={nome} onChange={e=>setNome(e.target.value)} style={{width:"100%", padding:12, margin:"10px 0", borderRadius:10, background:"black", color:"white", border:"1px solid #444"}}/>
            <input placeholder="Seu WhatsApp" value={zap} onChange={e=>setZap(e.target.value)} style={{width:"100%", padding:12, marginBottom:15, borderRadius:10, background:"black", color:"white", border:"1px solid #444"}}/>
            <button onClick={comprarWhats} style={{background:"#25D366", color:"white", border:"none", width:"100%", padding:14, borderRadius:20, fontWeight:"bold", cursor:"pointer"}}>🟢 COMPRAR NO WHATSAPP - {prod.preco}</button>
            <p onClick={()=>setProd(null)} style={{textAlign:"center", marginTop:12, cursor:"pointer", opacity:0.6}}>Fechar</p>
          </div>
        </div>
      )}
    </div>
  );
}
