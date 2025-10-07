# 🚀 Istruzioni per il Deployment su Netlify

## 1. Preparazione del Repository

### Inizializza Git (se non già fatto)
```bash
git init
git add .
git commit -m "Initial commit: Erasmus project with Astro, Tailwind, and Tina CMS"
```

### Collega al Repository GitHub
```bash
git remote add origin https://github.com/yourusername/erasmus-project.git
git push -u origin main
```

## 2. Configurazione Netlify

### A. Crea Account Netlify
1. Vai su [netlify.com](https://netlify.com)
2. Registrati o accedi con GitHub
3. Clicca su "New site from Git"

### B. Collega Repository
1. Seleziona "GitHub" come provider
2. Autorizza Netlify ad accedere ai tuoi repository
3. Seleziona il repository `erasmus-project`
4. Configura le impostazioni di build:

**Build Settings:**
- **Build Command**: `npm run tina-build`
- **Publish Directory**: `dist`
- **Node Version**: `18`

### C. Configura Variabili d'Ambiente
Nel pannello Netlify, vai su:
`Site settings` → `Environment variables`

Aggiungi le seguenti variabili:

```
TINA_PUBLIC_CLIENT_ID=your_client_id_from_tina_io
TINA_TOKEN=your_token_from_tina_io
```

## 3. Configurazione Tina CMS

### A. Registrati su Tina.io
1. Vai su [tina.io](https://tina.io)
2. Crea un account
3. Crea un nuovo progetto

### B. Configura il Progetto
1. Nome progetto: `erasmus-project`
2. Repository: `yourusername/erasmus-project`
3. Branch: `main`
4. Framework: `Astro`

### C. Ottieni Credenziali
1. Copia il `CLIENT_ID` e il `TOKEN`
2. Inseriscili nelle variabili d'ambiente di Netlify

## 4. Deploy

### A. Deploy Automatico
1. Netlify rileverà automaticamente il push su GitHub
2. Eseguirà il build con `npm run tina-build`
3. Pubblicherà il sito su `https://your-site-name.netlify.app`

### B. Accesso Tina CMS
1. Vai su `https://your-site-name.netlify.app/admin`
2. Accedi con le credenziali Tina.io
3. Inizia a gestire i contenuti!

## 5. Configurazione Dominio Personalizzato (Opzionale)

### A. Dominio Personalizzato
1. Nel pannello Netlify: `Domain settings`
2. Clicca su "Add custom domain"
3. Inserisci il tuo dominio
4. Configura i DNS del tuo provider

### B. SSL Certificate
- Netlify fornisce automaticamente certificati SSL gratuiti
- Il certificato viene generato automaticamente dopo la configurazione DNS

## 6. Monitoraggio e Manutenzione

### A. Analytics
- Netlify Analytics è disponibile nel pannello
- Monitora traffico, performance e errori

### B. Form Handling
- Netlify Forms per gestire i form di contatto
- Aggiungi `netlify` attribute ai form HTML

### C. Updates
- I contenuti vengono aggiornati automaticamente via Tina CMS
- I push su GitHub triggerano rebuild automatici

## 7. Troubleshooting

### Problemi Comuni:

**Build Fallisce:**
- Verifica le variabili d'ambiente
- Controlla i log di build in Netlify
- Testa localmente con `npm run build`

**Tina CMS Non Funziona:**
- Verifica `CLIENT_ID` e `TOKEN`
- Controlla la configurazione in `tina/config.ts`
- Assicurati che il branch sia corretto

**Sito Non Si Aggiorna:**
- Verifica che Tina CMS sia configurato correttamente
- Controlla i permessi del repository
- Riavvia il deploy manualmente se necessario

## 8. Comandi Utili

```bash
# Sviluppo locale
npm run dev

# Sviluppo con Tina CMS
npm run tina-dev

# Build per produzione
npm run build

# Build con Tina CMS
npm run tina-build

# Preview del build
npm run preview
```

## 9. Supporto

Per problemi tecnici:
- [Documentazione Astro](https://docs.astro.build)
- [Documentazione Tina CMS](https://tina.io/docs)
- [Documentazione Netlify](https://docs.netlify.com)

---

🎉 **Congratulazioni!** Il tuo sito Erasmus è ora live su Netlify con Tina CMS integrato!
