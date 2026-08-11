'use client'
import { useState } from 'react'

export default function Loja(){
  const [show, setShow] = useState(false)
  const produtos = [
    {nome:'Caneca Preta H', preco:'49,90', bonus:'20', emoji:'☕'},
    {nome:'Caneca Branca H', preco:'49,90', bonus:'20', emoji:'🤍'},
    {nome:'Caneca Rosa H', preco:'49,90', bonus:'20', emoji:'💖'},
    {nome:'Kit 3 Canecas', preco:'129', bonus:'50', emoji:'🎁'},
  ]
  return (
    <div style={{background:'black', color:'white', minHeight:'100vh', padding:'20px'}}>
      <h1 style={{color:'#FF2E9F', fontSize:'32px', textAlign:'center', fontWeight:'900'}}>H HORA da SORTE</h1>
      <p style={{textAlign:'center', color:'#FF2E9F', marginBottom:'20px'}}>LOJA OFICIAL - Pré-venda</p>
      <div style={{background:'#FF2E9F', color:'black', textAlign:'center', padding:'10px', borderRadius:'10px', fontWeight:'bold', marginBottom:'20px'}}>
        🎉 Compre e ganhe R$20 a R$50 de bônus pra jogar!
      </div>
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px'}}>
        {produtos.map((p,i)=>(
          <div key={i} style={{border:'1px solid #FF2E9F', borderRadius:'15px', padding:'15px', textAlign:'center', background:'#18181b'}}>
            <div style={{fontSize:'40px'}}>{p.emoji}</div>
            <p style={{fontWeight:'bold', fontSize:'12px'}}>{p.nome}</p>
            <p style={{color:'#FF2E9F', fontWeight:'900'}}>R${p.preco}</p>
            <p style={{fontSize:'10px'}}>+ R${p.bonus} bônus rifa</p>
            <button onClick={()=>setShow(true)} style={{width:'100%', background:'#FF2E9F', color:'black', fontWeight:'900', padding:'8px', borderRadius:'10px', marginTop:'10px', border:'none', cursor:'pointer'}}>COMPRAR</button>
          </div>
        ))}
      </div>
      {show && (
        <div style={{position:'fixed', top:0, left:0, right:0, bottom:0, background:'rgba(0,0,0,0.9)', display:'flex', alignItems:'center', justifyContent:'center', padding:'20px', zIndex:50}}>
          <div style={{background:'#27272a', padding:'20px', borderRadius:'15px', width:'100%', border:'1px solid #FF2E9F'}}>
            <h2>Checkout PIX</h2>
            <input placeholder="Nome" style={{width:'100%', background:'black', padding:'10px', borderRadius:'8px', margin:'10px 0', color:'white', border:'1px solid #333'}} />
            <input placeholder="WhatsApp" style={{width:'100%', background:'black', padding:'10px', borderRadius:'8px', marginBottom:'10px', color:'white', border:'1px solid #333'}} />
            <button style={{width:'100%', background:'#FF2E9F', padding:'12px', borderRadius:'10px', fontWeight:'900', border:'none'}}>GERAR PIX R$49,90</button>
            <button onClick={()=>setShow(false)} style={{width:'100%', marginTop:'10px', color:'gray', background:'transparent', border:'none', cursor:'pointer'}}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  )
}
