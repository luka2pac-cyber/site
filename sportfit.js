/* ============================================================
   SPORT&FIT — dati condivisi da tutte le pagine
   (index.html, corsi.html, pole-dance.html)
   Modifica qui orari, contatti e corsi: le pagine si aggiornano da sole.
   ============================================================ */
window.SF = {
  via: "Corso Italia 187/189",
  citta: "34170 Gorizia",
  telefono1: "+39 333 835 7446",
  telefono2: "+386 40 370 360",
  email: "info@sport-fit.org",
  instagram: "https://www.instagram.com/sportfitgymgorizia/",
  facebook: "https://www.facebook.com/palestrasportfit",
  prenotaPole: "https://sport-fit-pole-dance-studio.reservio.com/",
  // Icona accanto a "Apri in Google Maps": lascia "" per l'icona standard,
  // oppure metti il nome di un file (es. "icon-maps.png")
  iconaMappe: "",

  // Orari di apertura — 0 = domenica ... 6 = sabato; null = chiuso
  apertura: {1:["06:00","22:00"],2:["06:00","22:00"],3:["06:00","22:00"],4:["06:00","22:00"],5:["06:00","22:00"],6:["08:00","14:00"],0:null},

  // Orario corsi — d: 1 = lunedì ... 6 = sabato; type: "corsi" oppure "pole"
  orario: [
    {d:1, t:"18:30", n:"SBT",                         who:"Natasha" , type:"corsi"},
    {d:1, t:"20:00", n:"Pole Base",                   who:"Gordana",  type:"pole"},
    {d:2, t:"09:00", n:"Pilates",                     who:"Nadia",    type:"corsi"},
    {d:2, t:"18:30", n:"Exotic + Choreo",             who:"Gordana",  type:"pole"},
    {d:2, t:"19:30", n:"Static Combo",                who:"Selena",   type:"pole"},
    {d:2, t:"20:30", n:"Static Combo",                who:"Selena",   type:"pole"},
    {d:3, t:"18:30", n:"SBT",                         who:"Natasha" , type:"corsi"},
    {d:3, t:"19:45", n:"Pole Tecnica",                who:"Selena",   type:"pole"},
    {d:3, t:"20:45", n:"Mobility",                    who:"Selena",   type:"pole"},
    {d:4, t:"09:00", n:"Pilates",                     who:"Nadia",    type:"corsi"},
    {d:4, t:"18:30", n:"Pole Base",                   who:"Gordana",  type:"pole"},
    {d:4, t:"19:30", n:"Spin Combo",                  who:"Gordana",  type:"pole"},
    {d:4, t:"20:30", n:"Spin Combo",                  who:"Selena",   type:"pole"},
    {d:5, t:"09:00", n:"Pilates Flow",                who:"Nadia",    type:"corsi"},
    {d:5, t:"18:30", n:"Prep Gare",                   who:"Selena",   type:"pole"},
    {d:6, t:"11:00", n:"Selenetica / Free Training*", who:"Selena",   type:"pole"}
  ],

  // Pole Dance Studio — schede dei corsi (pagina pole-dance.html)
  // foto = immagine rotonda; orario = nomi delle lezioni nell'orario qui sopra
  poleCorsi: [
    {nome:"Pole Intro",   foto:"pole-intro.png",        orario:["Pole Base"],
     testo:"Il corso ideale per chi vuole cominciare a muovere i primi passi in questa disciplina sportiva. Tra una piroetta e un volteggio, imparerete a padroneggiare le basi della pole dance focalizzandovi su tecnica e pulizia dei movimenti, al ritmo del divertimento."},
    {nome:"Spin Combo",   foto:"pole-spin-combo.png",   orario:["Spin Combo"],
     testo:"Il corso di pole dance incentrato su combinazioni di elementi al palo girevole. Ogni lezione si concentra su diversi movimenti di base su cui viene costruita una combinazione armoniosa. Livello OPEN e livello INTERMEDIO."},
    {nome:"Static Combo", foto:"pole-static-combo.png", orario:["Static Combo"],
     testo:"Il corso di pole dance incentrato su combinazioni di elementi al palo statico. A ogni lezione imparerete nuove figure e nuove transizioni che vi permetteranno di sviluppare forza e resistenza. Livello OPEN e livello INTERMEDIO."},
    {nome:"Pole Tecnica", foto:"pole-tecnica.png",      orario:["Pole Tecnica"],
     testo:"Il corso di potenziamento delle figure classiche della Pole Dance, in cui analizziamo la tecnica per eseguire correttamente i trick base, con esercizi propedeutici adatti a tutti i livelli, varianti delle figure e suggerimenti per migliorare."},
    {nome:"Spin Tecnica", foto:"pole-spin-tecnica.png", orario:[],
     testo:"Il corso si concentra sulle tecniche di base necessarie per perfezionare le transizioni al palo spinning: impareremo a lavorare con angoli, leve e distribuzione del corpo per rendere le combinazioni al palo fluide ed eleganti. Adatto a tutti i livelli."},
    {nome:"Selenetica",   foto:"pole-selenetica.png",   orario:["Selenetica / Free Training*"],
     testo:"Il nostro corso di conditioning e mobilità pensato DALLE pole dancers PER LE pole dancers, ma anche per chi vuole imparare a muoversi meglio e incrementare forza e resistenza. Il corso si concentra su esercizi di rafforzamento degli schemi motori tipici della pole dance e di bilanciamento delle leve."},
    {nome:"Exotic",       foto:"pole-exotic.png",       orario:["Exotic + Choreo"],
     testo:"Exotic Pole è la variante della Pole Dance che utilizza le basi della Pole tradizionale unendole a elementi acrobatici e coreografici. Si pratica generalmente con ginocchiere e scarpe apposite (Pleasers) che permettono di eseguire coreografie sinuose ed eleganti. Il corso è adatto a chi ha già una base di Pole Dance e vuole esplorare un nuovo modo di esprimersi."},
    {nome:"Mobility",     foto:"pole-mobility.png",     orario:["Mobility"],
     testo:"Il corso è focalizzato su esercizi e tecniche per la mobilità e stabilità articolare, lavorando all’aumento del range di movimento in maniera efficace e indolore. Il corso è adatto a tutti i livelli."}
  ],

  // Descrizioni dei corsi (pagine "Più info")
  descrizioni: {
    "Pilates":        "Rinforza il corpo, migliora la postura e ritrova equilibrio e benessere.",
    "Pilates Flow":   "Il giusto mix tra Pilates e Yoga: più stretching, respirazione e rilassamento, con campana tibetana finale.",
    "SBT":            "Scolpisci, brucia, tonifica: esercizi mirati per ridefinire il corpo, aumentare il consumo calorico e l'energia, per un corpo più forte, elastico e in forma.",
    "Pole Base":      "Il punto di partenza: prese, rotazioni e prime figure per chi inizia.",
    "Pole Tecnica":   "Lavoro sulla tecnica: salite, inversioni e pulizia dei movimenti.",
    "Static Combo":   "Combinazioni di figure sul palo statico, per forza e controllo.",
    "Spin Combo":     "Sequenze sul palo rotante, con attenzione a fluidità e ritmo.",
    "Exotic + Choreo":"Stile exotic e coreografia, con lavoro a terra e sul palo.",
    "Prep Gare":      "Preparazione per chi partecipa alle competizioni di pole dance.",
    "Mobility":       "Mobilità e flessibilità, per migliorare le figure sul palo.",
    "Selenetica / Free Training*": "Sessione del sabato, a settimane alterne: allenamento guidato o libero in studio."
  }
};

/* ---------- funzioni condivise (non serve modificarle) ---------- */
SF.giorni = ["","Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato"];
/* "Mar e gio · 09:00" — giorni raggruppati per orario */
SF.quando = function(nome){
  const short = ["","Lun","Mar","Mer","Gio","Ven","Sab"];
  const byT = {};
  SF.ordinato().filter(c => c.n === nome).forEach(c => { (byT[c.t] = byT[c.t] || []).push(short[c.d]); });
  return Object.entries(byT).map(([t,ds]) => {
    const g = ds.length > 1 ? ds.slice(0,-1).join(', ') + ' e ' + ds[ds.length-1].toLowerCase() : ds[0];
    return g.charAt(0) + g.slice(1).toLowerCase() + ' · ' + t;
  });
};
SF.chi = nome => [...new Set(SF.orario.filter(c => c.n === nome).map(c => c.who))].join(' e ');
SF.oggi = function(){
  const parts = new Intl.DateTimeFormat('en-GB',{timeZone:'Europe/Rome',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false}).formatToParts(new Date());
  return {
    wd: {Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6}[parts.find(p=>p.type==='weekday').value],
    hm: parts.find(p=>p.type==='hour').value.replace('24','00') + ":" + parts.find(p=>p.type==='minute').value
  };
};
SF.tel = v => "tel:" + v.replace(/[^0-9+]/g,"");
SF.ordinato = () => SF.orario.slice().sort((a,b) => a.d-b.d || a.t.localeCompare(b.t));
SF.mappe = () => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Sport Fit " + SF.via + " " + SF.citta);

/* Settimana dei corsi: week = contenitore, tabs = contenitore dei giorni (mobile), type = "corsi" | "pole" | null */
SF.settimana = function(week, tabs, type){
  const wd = SF.oggi().wd;
  const O = SF.ordinato().filter(c => !type || c.type === type);
  let html = '';
  for (let d = 1; d <= 6; d++) {
    const items = O.filter(c => c.d === d);
    html += '<div class="day'+(d===wd?' today':'')+'"><h3>'+SF.giorni[d]+'</h3><ul>' +
      items.map(c => '<li class="cls cls-'+c.type+'" data-type="'+c.type+'"><span class="t tab">'+c.t+'</span><span class="nm">'+c.n+'</span><span class="who">'+c.who+'</span></li>').join('') +
      '<li class="empty"'+(items.length?' hidden':'')+'>Nessun corso</li></ul></div>';
  }
  week.innerHTML = html;
  if (tabs) {
    const sel = (wd >= 1 && wd <= 6) ? wd : 1;
    tabs.innerHTML = [1,2,3,4,5,6].map(d => '<button type="button" data-d="'+d+'">'+SF.giorni[d].slice(0,3)+'</button>').join('');
    const days = week.querySelectorAll('.day');
    const pick = d => { days.forEach((el,i) => el.classList.toggle('sel', i+1 === d)); tabs.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', +b.dataset.d === d)); };
    tabs.querySelectorAll('button').forEach(b => b.addEventListener('click', () => pick(+b.dataset.d)));
    pick(sel);
  }
};

/* Elenco lezioni con orari: {nome: ["lun 18:30", ...]} */
SF.lezioni = function(type){
  const short = ["","lun","mar","mer","gio","ven","sab"];
  const g = {};
  SF.ordinato().filter(c => c.type === type).forEach(c => {
    (g[c.n] = g[c.n] || {who:new Set(), when:[]}).when.push(short[c.d] + ' ' + c.t);
    g[c.n].who.add(c.who);
  });
  return g;
};
