# Progetto Erasmus - Sito di Approfondimento

Un sito web moderno per la gestione e presentazione dei progetti Erasmus, costruito con Astro, Tailwind CSS e Tina CMS.

## 🚀 Tecnologie Utilizzate

- **Astro** - Framework web moderno per siti statici
- **Tailwind CSS** - Framework CSS utility-first
- **Tina CMS** - CMS headless per la gestione dei contenuti
- **Netlify** - Piattaforma di hosting e deployment

## 📁 Struttura del Progetto

```
erasmus/
├── src/
│   ├── content/          # Contenuti gestiti da Tina CMS
│   │   ├── posts/        # Articoli del blog
│   │   ├── pages/        # Pagine statiche
│   │   └── projects/     # Progetti Erasmus
│   ├── layouts/          # Layout Astro
│   └── pages/            # Pagine del sito
├── tina/
│   └── config.ts         # Configurazione Tina CMS
├── public/               # File statici
├── netlify.toml          # Configurazione Netlify
└── astro.config.mjs      # Configurazione Astro
```

## 🛠️ Installazione e Setup

### 1. Installazione Dipendenze

```bash
npm install
```

### 2. Configurazione Tina CMS

1. Registrati su [tina.io](https://tina.io)
2. Crea un nuovo progetto
3. Ottieni il `CLIENT_ID` e il `TOKEN`
4. Configura le variabili d'ambiente:

```bash
# Per sviluppo locale
export TINA_PUBLIC_CLIENT_ID="your_client_id"
export TINA_TOKEN="your_token"
```

### 3. Avvio in Modalità Sviluppo

```bash
# Solo Astro
npm run dev

# Con Tina CMS
npm run tina-dev
```

## 🌐 Deployment su Netlify

### 1. Configurazione Netlify

1. Collega il repository GitHub a Netlify
2. Configura le variabili d'ambiente nel pannello Netlify:
   - `TINA_PUBLIC_CLIENT_ID`
   - `TINA_TOKEN`

### 2. Build Settings

- **Build Command**: `npm run tina-build`
- **Publish Directory**: `dist`
- **Node Version**: `18`

### 3. Configurazione Tina CMS per Netlify

Il file `netlify.toml` è già configurato per:
- Redirect dell'admin Tina CMS
- Headers di sicurezza
- Cache per asset statici

## 📝 Gestione Contenuti

### Tina CMS Admin

Accedi all'interfaccia di amministrazione su: `https://your-site.netlify.app/admin`

### Tipi di Contenuto

1. **Posts** (`src/content/posts/`)
   - Articoli del blog
   - News e aggiornamenti

2. **Pages** (`src/content/pages/`)
   - Pagine statiche
   - Contenuti informativi

3. **Projects** (`src/content/projects/`)
   - Progetti Erasmus
   - Opportunità di mobilità

## 🎨 Personalizzazione

### Colori e Stili

Il sito utilizza Tailwind CSS con una palette di colori personalizzata:
- **Primary**: Blue (600-800)
- **Secondary**: Green, Purple, Indigo, Teal
- **Background**: White e Gray-50

### Layout

- **Header**: Navigazione principale con logo
- **Footer**: Informazioni di contatto e link utili
- **Sections**: Hero, Features, CTA per ogni pagina

## 📱 Responsive Design

Il sito è completamente responsive e ottimizzato per:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔧 Script Disponibili

```bash
npm run dev          # Avvia il server di sviluppo Astro
npm run build        # Build per produzione
npm run preview      # Preview del build
npm run tina-dev     # Avvia con Tina CMS
npm run tina-build   # Build con Tina CMS
```

## 📞 Supporto

Per supporto tecnico o domande sul progetto:
- Email: erasmus@istituto.it
- Telefono: +39 123 456 7890

## 📄 Licenza

Questo progetto è sviluppato per scopi educativi nell'ambito del programma Erasmus+.