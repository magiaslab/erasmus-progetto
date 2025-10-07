# 🚀 Setup Rapido Sanity CMS

## Passi per Attivare il CMS (da fare UNA VOLTA)

### 1. Crea Progetto su Sanity.io (5 minuti)
1. Vai su https://www.sanity.io/
2. Clicca "Get started for free"
3. Registrati con Google o GitHub
4. Una volta dentro, clicca "Create new project"
5. Nome progetto: **"Erasmus CMS"**
6. **COPIA IL PROJECT ID** (lo trovi nelle impostazioni)

### 2. Configura Variabili d'Ambiente (2 minuti)

Crea il file `.env` nella root del progetto:

```env
PUBLIC_SANITY_PROJECT_ID=il-tuo-project-id-qui
PUBLIC_SANITY_DATASET=production
```

### 3. Inizializza Sanity (automatico)
Esegui nel terminale:

```bash
cd /Users/acipriani/Documents/GitHub/erasmus-progetto

# Installa le dipendenze (se non già fatto)
npm install

# Inizializza e configura Sanity
npx sanity init --project-id IL_TUO_PROJECT_ID --dataset production --create-project Erasmus-CMS
```

### 4. Deploy dello Studio Sanity (2 minuti)
```bash
npm run sanity:deploy
```

Questo comando pubblica l'interfaccia CMS su internet. Ti verrà dato un URL tipo:
`https://erasmus-cms.sanity.studio`

### 5. Configura CORS (1 minuto)
1. Vai su https://www.sanity.io/manage
2. Seleziona il progetto "Erasmus CMS"
3. Vai su **API** → **CORS Origins**
4. Clicca "Add CORS origin"
5. Aggiungi:
   ```
   https://erasmus.istituto-marconi.edu.it
   ```
   Con flag "Allow credentials" attivo
6. Aggiungi anche:
   ```
   http://localhost:4321
   ```
   (per sviluppo locale)

### 6. Ottieni API Token (3 minuti)
1. Sempre su https://www.sanity.io/manage → tuo progetto
2. Vai su **API** → **Tokens**
3. Clicca "Add API token"
4. Nome: "Astro Site"
5. Permessi: **Editor**
6. Copia il token
7. Aggiornare il file `.env`:
   ```env
   PUBLIC_SANITY_PROJECT_ID=il-tuo-project-id
   PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=il-token-appena-copiato
   ```

### 7. Configura Netlify (2 minuti)
1. Vai su Netlify Dashboard → tuo sito
2. **Site settings** → **Environment variables**
3. Clicca "Add a variable"
4. Aggiungi:
   - `PUBLIC_SANITY_PROJECT_ID` = il tuo project ID
   - `PUBLIC_SANITY_DATASET` = `production`
   - `SANITY_API_TOKEN` = il tuo token

### 8. Testa il CMS (1 minuto)
```bash
# Avvia in locale
npm run dev

# Apri browser su:
http://localhost:4321/studio
```

Dovresti vedere l'interfaccia di Sanity Studio!

### 9. Invita Collaboratori (2 minuti)
1. https://www.sanity.io/manage → tuo progetto
2. **Members** → **Invite members**
3. Inserisci email collaboratore
4. Ruolo: **Editor**
5. Invia invito

Il collaboratore:
- Riceverà email con invito
- Creerà account Sanity (gratuito)
- Potrà accedere allo Studio da: `https://erasmus-cms.sanity.studio`

---

## ✅ Fatto! Il CMS è pronto

### URL Importanti
- **Studio CMS**: `https://il-tuo-studio.sanity.studio` (dopo deploy)
- **Studio Locale**: `http://localhost:4321/studio`
- **Gestione Progetto**: `https://www.sanity.io/manage`

### Prossimi Passi
1. Testa creando una news di prova
2. Verifica che appaia sul sito (attendi 2-3 minuti per rebuild)
3. Invita i collaboratori
4. Condividi con loro la guida: `SANITY_CMS_GUIDA.md`

---

## 🆘 Problemi Comuni

**"Project not found"**
→ Verifica che il `PUBLIC_SANITY_PROJECT_ID` nel `.env` sia corretto

**"CORS error"**
→ Aggiungi il tuo dominio nelle CORS Origins su sanity.io/manage

**"Lo Studio non si carica"**
→ Assicurati di aver eseguito `npm run sanity:deploy`

**"I contenuti non appaiono"**
→ Verifica il token API e attendi il rebuild del sito (2-3 minuti)

---

**Tempo totale setup**: ~20 minuti
**Costo**: GRATIS (piano gratuito Sanity include fino a 3 utenti e 10K documenti)

