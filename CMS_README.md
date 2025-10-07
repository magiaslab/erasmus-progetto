# 📝 Sistema CMS - Sanity

## ✨ Novità: CMS Sanity Integrato

Il progetto ora include **Sanity.io** come sistema di gestione contenuti completamente cloud-based!

### 🎯 Vantaggi
- ✅ **Completamente Cloud**: Nessun setup locale richiesto per i collaboratori
- ✅ **Interfaccia Intuitiva**: Editor visuale facile da usare
- ✅ **Collaborazione Real-time**: Più utenti possono lavorare contemporaneamente
- ✅ **Gestione Media**: Upload e gestione immagini integrata
- ✅ **Versioning**: Cronologia delle modifiche
- ✅ **GRATIS**: Piano gratuito fino a 3 utenti e 10.000 documenti

### 🚀 Quick Start

#### Per Amministratori (Setup Iniziale)
Leggi: **[SANITY_SETUP_RAPIDO.md](./SANITY_SETUP_RAPIDO.md)** (~20 minuti)

#### Per Collaboratori (Utilizzo)
Leggi: **[SANITY_CMS_GUIDA.md](./SANITY_CMS_GUIDA.md)**

### 📦 Cosa è Incluso

**Tipi di Contenuto Configurati:**
1. **News/Blog** - Articoli e aggiornamenti
2. **Progetti Erasmus** - Schede progetto complete
3. **Pagine** - Pagine statiche del sito

**Funzionalità:**
- Rich text editor per contenuti formattati
- Upload immagini con ottimizzazione automatica
- Generazione automatica slug
- Anteprima contenuti
- Supporto multilingua (futuro)

### 🔧 Comandi Disponibili

```bash
# Sviluppo locale (include Sanity Studio)
npm run dev
# → Studio disponibile su http://localhost:4321/studio

# Deploy Sanity Studio su cloud
npm run sanity:deploy
# → Pubblica l'interfaccia CMS online

# Gestione progetto Sanity
npm run sanity:manage
# → Apre dashboard di gestione

# Build e deploy sito
npm run build
npm run preview
```

### 🌐 Accesso allo Studio

**Locale**: http://localhost:4321/studio  
**Produzione**: https://erasmus.istituto-marconi.edu.it/studio (dopo deploy)  
**Sanity Cloud**: URL fornito dopo `sanity:deploy`

### 👥 Gestione Utenti

Gli utenti possono essere invitati dal dashboard Sanity:
- https://www.sanity.io/manage → [tuo progetto] → Members

**Ruoli disponibili:**
- **Administrator**: Controllo totale
- **Editor**: Crea e modifica contenuti
- **Viewer**: Solo visualizzazione

### 🔐 Variabili d'Ambiente Necessarie

```env
PUBLIC_SANITY_PROJECT_ID=your-project-id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your-api-token
```

### 📚 Struttura File CMS

```
erasmus-progetto/
├── sanity/
│   ├── schemas/
│   │   ├── post.ts          # Schema News
│   │   ├── project.ts       # Schema Progetti
│   │   ├── page.ts          # Schema Pagine
│   │   └── index.ts         # Export schemi
├── src/
│   └── lib/
│       └── sanity.ts        # Client Sanity + utilities
├── sanity.config.ts         # Configurazione principale
├── sanity.cli.ts            # CLI config
└── .env                     # Variabili d'ambiente (NON committare!)
```

### 🔄 Migrazione da Astro Content Collections

Le pagine sono state aggiornate per usare Sanity invece delle Content Collections:
- `/src/pages/blog/` → ora usa Sanity
- `/src/pages/progetti/` → ora usa Sanity
- Le vecchie collection in `/src/content/` possono essere migrate o mantenute per backup

### 🆘 Supporto

**Documentazione completa:**
- [Guida Collaboratori](./SANITY_CMS_GUIDA.md)
- [Setup Rapido](./SANITY_SETUP_RAPIDO.md)

**Risorse esterne:**
- [Sanity Documentation](https://www.sanity.io/docs)
- [Sanity + Astro Guide](https://www.sanity.io/plugins/astro-sanity)

### ⚠️ Note Importanti

1. **Mai committare** il file `.env` con le credenziali
2. **Configurare CORS** per permettere l'accesso ai dati
3. **Configurare variabili** su Netlify per il deploy
4. **Attendere 2-3 minuti** dopo la pubblicazione per vedere i contenuti sul sito

### 🎓 Prossimi Passi

1. ✅ Completa il setup iniziale (vedi SANITY_SETUP_RAPIDO.md)
2. ✅ Testa creando contenuti di prova
3. ✅ Invita i collaboratori
4. ✅ Forma il team sull'utilizzo (condividi SANITY_CMS_GUIDA.md)
5. ⬜ (Opzionale) Migra contenuti esistenti da markdown a Sanity
6. ⬜ (Futuro) Configura webhook per rebuild automatico

---

**Ultimo aggiornamento**: Ottobre 2025  
**CMS Version**: Sanity v3  
**Integration**: @sanity/astro v3.2+

