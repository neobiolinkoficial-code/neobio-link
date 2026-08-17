<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Loja da Carol Oficial - R$0,20</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#070707;color:#fff;font-family:Arial,sans-serif}
.top{background:#000;border-bottom:2px solid #FFD700;padding:14px;text-align:center;position:sticky;top:0;z-index:99}
.top h1{color:#FFD700;font-size:22px;letter-spacing:2px;font-weight:900}
.top p{color:#ff5cb6;font-size:11px;margin-top:2px}
.hero{padding:24px 16px;background:radial-gradient(circle at 50% 0%, #222 0%, #000 70%)}
.prize{background:linear-gradient(135deg,#FFD700,#ffb700);border-radius:20px;padding:18px;text-align:center;color:#000;max-width:420px;margin:0 auto;box-shadow:0 10px 40px rgba(255,215,0,.4)}
.prize .valor{font-size:44px;font-weight:900;margin:8px 0}
.card{background:#111;border:1px solid #222;border-radius:18px;padding:16px;margin:16px;border-left:4px solid #FFD700}
.card.pink{border-left-color:#ff1493}
.card h3{color:#FFD700;font-size:14px;margin-bottom:8px}
.card.pink h3{color:#ff5cb6}
.small{font-size:11px;color:#888}
.input{width:100%;background:#000;border:1px solid #333;border-radius:10px;padding:12px;color:#fff;margin:6px 0;font-size:13px}
.btn{width:100%;padding:14px;border:none;border-radius:12px;font-weight:900;font-size:14px;cursor:pointer;margin-top:10px}
.btn-gold{background:linear-gradient(135deg,#FFD700,#ffae00);color:#000}
.btn-pink{background:linear-gradient(135deg,#ff1493,#ff69b4);color:#fff}
.grid{display:grid;grid-template-columns:repeat(5,1fr);gap:7px;margin:12px 0}
.num{background:#1a1a1a;border:1px solid #333;border-radius:10px;aspect-ratio:1;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;cursor:pointer}
.num.sel{background:#FFD700;color:#000;box-shadow:0 0 12px #FFD700}
.bar{display:flex;justify-content:space-between;background:#000;border-radius:10px;padding:10px 12px;margin:10px 0;font-size:12px;border:1px solid #222}
.bar b{color:#FFD700}
.bonus{border:2px dashed #ff1493;border-radius:18px;padding:16px;margin:16px;text-align:center}
.pix{background:#000;border:2px solid #00c851;border-radius:14px;padding:14px;margin-top:12px;text-align:center}
.pix .key{font-size:22px;font-weight:900;color:#00ff88;margin:8px 0}
.warn{font-size:11px;color:#ff6b6b;margin-top:6px;display:none}
.warn.show{display:block}
</style>
</head>
<body>
<div class="top">
<h1>LOJA DA CAROL OFICIAL</h1>
<p>CANECAS EXCLUSIVAS + R$20 DE BÔNUS PRA CONCORRER A R$5 MIL</p>
</div>

<div class="hero">
<div class="prize">
<div style="font-size:11px;letter-spacing:2px">🎰 PRÊMIO ATUAL - 60% DO TOTAL</div>
<div class="valor" id="premio">R$ 600,00</div>
<div style="font-size:12px">Arrecadado: <span id="arrec">R$ 1.000,00</span> • Sorteio Automático</div>
<div style="background:#ff1493;color:#fff;padding:6px 12px;border-radius:20px;font-size:11px;margin-top:10px;display:inline-block">🔴 AO VIVO - SORTEIO HOJE</div>
</div>
</div>

<div class="card">
<h3>🔐 1. LOGIN + SEU LINK DE DIVULGAÇÃO</h3>
<p class="small">Esse link é ESSENCIAL para tracionamento orgânico!</p>
<input class="input" id="nome" placeholder="Seu nome completo">
<input class="input" id="zap" placeholder="Seu WhatsApp (47) 9xxxx-xxxx">
<input class="input" id="link" placeholder="Seu Instagram / TikTok / Kwai (link divulgação)" style="border-color:#ff1493">
<button class="btn btn-gold" onclick="gerarLink()">GERAR MEU LINK DE DIVULGAÇÃO →</button>
<p class="small" id="linkGerado" style="margin-top:8px;color:#FFD700;display:none"></p>
</div>

<div class="card pink">
<h3>🎫 2. ESCOLHA SEUS NÚMEROS - R$0,20 CADA</h3>
<p class="small">Mínimo R$5,00 = 25 números. Quanto mais comprar, mais chance!</p>
<div class="grid" id="grid"></div>
<div class="bar"><span>Selecionados: <b id="qtd">0</b></span><span>Total: <b id="total">R$0,00</b></span></div>
<p class="warn" id="warn">⚠️ Mínimo R$5,00 (25 números) para participar!</p>
<div class="bar"><span>Novo Prêmio se comprar: <b id="novoPremio">R$600,00</b></span></div>
<button class="btn btn-pink" onclick="comprar()">COMPRAR COM PIX - 46991048053 ⚡</button>
</div>

<div class="bonus">
<h3 style="color:#ff5cb6;font-size:14px">🎁 BÔNUS EXCLUSIVO - R$50+</h3>
<p style="font-size:13px;margin:8px 0"><b>RECARGA ACIMA DE R$50 GANHA</b><br>KIT CANECA EXCLUSIVA H - Hora da Sorte</p>
<p class="small">Preta Dourada + Branca Rosa • Frete grátis • Embaixo do H escrito Hora da Sorte</p>
</div>

<div class="card">
<h3>🚀 3. INDICAÇÃO = DINHEIRO GIRANDO NO ORGÂNICO</h3>
<p style="font-size:12px;line-height:1.6">✅ Você ganha +5 números grátis por amigo<br>✅ Sobe no ranking de divulgadores<br>✅ Prêmio aumenta (60%)<br>✅ Traz tracionamento sem pagar anúncio</p>
<div style="background:#000;padding:10px;border-radius:8px;margin-top:10px;font-size:11px;color:#666;word-break:break-all" id="linkBox">Seu link aparecerá aqui: hora-da-sorte.com/r/SEULINK</div>
</div>

<div class="card">
<div class="pix">
<h3 style="color:#00c851;font-size:13px">💸 PAGAMENTO VIA PIX - CHAVE TELEFONE</h3>
<div class="key">46991048053</div>
<button class="btn btn-gold" style="padding:10px;font-size:12px" onclick="navigator.clipboard.writeText('46991048053');alert('PIX 46991048053 copiado!')">COPIAR PIX</button>
<p class="small" style="margin-top:8px">Após pagar, envie comprovante no WhatsApp e seus números são confirmados automaticamente!</p>
</div>
<p class="small" style="text-align:center;margin-top:12px">Sorteio automático transparente • Resultado ao vivo @carolpeper<br>60% do arrecadado para o ganhador</p>
</div>

<script>
const grid=document.getElementById('grid');let sel=[];const preco=0.20;
for(let i=1;i<=100;i++){
  let d=document.createElement('div');d.className='num';d.innerText=i;
  d.onclick=()=>{
    if(d.classList.contains('sel')){d.classList.remove('sel');sel=sel.filter(n=>n!=i);}
    else{d.classList.add('sel');sel.push(i);}
    update();
  };
  grid.appendChild(d);
}
function update(){
  const qtd=sel.length;const total=qtd*preco;
  document.getElementById('qtd').innerText=qtd;
  document.getElementById('total').innerText='R$'+total.toFixed(2).replace('.',',');
  const arrec=1000+total;
  document.getElementById('arrec').innerText='R$ '+arrec.toFixed(2).replace('.',',');
  document.getElementById('premio').innerText='R$ '+(arrec*0.6).toFixed(2).replace('.',',');
  document.getElementById('novoPremio').innerText='R$ '+(arrec*0.6).toFixed(2).replace('.',',');
  const warn=document.getElementById('warn');
  if(qtd>0&&total<5)warn.classList.add('show');else warn.classList.remove('show');
}
function gerarLink(){
  const nome=document.getElementById('nome').value||'carol';
  const slug=nome.toLowerCase().replace(/\s+/g,'_').substring(0,15);
  const link='hora-da-sorte.com/r/'+slug;
  document.getElementById('linkGerado').style.display='block';
  document.getElementById('linkGerado').innerText='✅ Seu link gerado: '+link;
  document.getElementById('linkBox').innerText=link+' - Copie e divulgue!';
  document.getElementById('linkBox').style.color='#FFD700';
}
function comprar(){
  const total=sel.length*preco;
  if(total<5){alert('Mínimo R$5,00 (25 números)! Selecione mais.');return;}
  alert('Você selecionou '+sel.length+' números = R$'+total.toFixed(2)+'\n\nPIX: 46991048053\n\nCopie o PIX, pague e envie comprovante!\nSe for acima de R$50 ganha KIT CANECA EXCLUSIVO!');
}
update();
</script>
</body>
</html>
