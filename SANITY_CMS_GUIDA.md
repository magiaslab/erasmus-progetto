# Guida CMS Sanity per Collaboratori

## Introduzione
Questo progetto utilizza **Sanity.io** come sistema di gestione dei contenuti (CMS). Sanity permette ai collaboratori di creare e modificare contenuti (news e progetti) attraverso un'interfaccia web intuitiva, senza necessità di conoscenze tecniche o di lavorare in locale.

## Come Accedere al CMS

### Opzione 1: Studio Sanity Locale (per sviluppatori)
Se stai lavorando in locale sul progetto:
1. Apri il terminale nella cartella del progetto
2. Avvia il server di sviluppo: `npm run dev`
3. Vai su: `http://localhost:4321/studio`

### Opzione 2: Studio Sanity Cloud (consigliato per collaboratori)
1. Vai su: **https://erasmus.istituto-marconi.edu.it/studio** (dopo il deploy)
2. Oppure accedi direttamente a: **https://erasmus-cms.sanity.studio**
3. Effettua il login con le credenziali fornite

## Configurazione Iniziale (Solo per l'amministratore)

### 1. Creare un Progetto Sanity
```bash
cd /Users/acipriani/Documents/GitHub/erasmus-progetto
npx sanity init --project-id your-project-id --dataset production
```

Oppure crea un progetto manualmente su [sanity.io](https://www.sanity.io):
1. Vai su https://www.sanity.io/manage
2. Clicca su "Create new project"
3. Dai un nome al progetto (es. "Erasmus CMS")
4. Copia il **Project ID**

### 2. Configurare le Variabili d'Ambiente
Crea un file `.env` nella root del progetto:
```env
PUBLIC_SANITY_PROJECT_ID=il-tuo-project-id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=il-tuo-api-token
```

Per ottenere l'API token:
1. Vai su https://www.sanity.io/manage
2. Seleziona il tuo progetto
3. Vai su **API** → **Tokens**
4. Clicca "Add API token"
5. Dai un nome (es. "Astro Site")
6. Seleziona permessi: **Editor** o **Viewer**
7. Copia il token generato

### 3. Deploy di Sanity Studio
Dopo aver configurato il progetto:

```bash
# Deploy dello studio
npm run sanity:deploy
```

Questo comando pubblica l'interfaccia CMS su Sanity Cloud, rendendola accessibile a tutti i collaboratori da qualsiasi browser.

### 4. Configurare CORS
Per permettere al sito di accedere ai dati:
1. Vai su https://www.sanity.io/manage
2. Seleziona il tuo progetto
3. Vai su **API** → **CORS Origins**
4. Aggiungi questi origins:
   - `https://erasmus.istituto-marconi.edu.it`
   - `https://*.netlify.app` (per deploy di staging)
   - `http://localhost:4321` (per sviluppo locale)

### 5. Configurare Variabili d'Ambiente su Netlify
1. Vai su Netlify Dashboard → Site settings → Environment variables
2. Aggiungi:
   - `PUBLIC_SANITY_PROJECT_ID` = il tuo project ID
   - `PUBLIC_SANITY_DATASET` = `production`
   - `SANITY_API_TOKEN` = il tuo API token

## Gestione Contenuti

### Creare una News
1. Accedi allo Studio Sanity
2. Clicca su **"News"** nel menu laterale
3. Clicca sul pulsante **"+ Create"**
4. Compila i campi:
   - **Titolo**: Titolo dell'articolo
   - **Slug**: Generato automaticamente dal titolo (es. "benvenuti-erasmus")
   - **Descrizione**: Breve descrizione (1-2 frasi)
   - **Data di pubblicazione**: Seleziona data e ora
   - **Immagine principale**: Carica un'immagine (opzionale)
   - **Contenuto**: Scrivi l'articolo usando l'editor ricco di testo
5. Clicca **"Publish"** per pubblicare

### Creare un Progetto Erasmus
1. Accedi allo Studio Sanity
2. Clicca su **"Progetti Erasmus"** nel menu laterale
3. Clicca sul pulsante **"+ Create"**
4. Compila i campi:
   - **Titolo del progetto**: Nome del progetto
   - **Slug**: Generato automaticamente
   - **Descrizione breve**: Sintesi del progetto
   - **Paese**: Paese di destinazione
   - **Durata**: Es. "6 mesi", "1 anno"
   - **Immagine principale**: Carica un'immagine (opzionale)
   - **Dettagli del progetto**: Descrizione completa
5. Clicca **"Publish"** per pubblicare

### Modificare Contenuti Esistenti
1. Nel menu laterale, seleziona **"News"** o **"Progetti Erasmus"**
2. Clicca sul contenuto che vuoi modificare
3. Modifica i campi necessari
4. Clicca **"Publish"** per salvare le modifiche

### Eliminare Contenuti
1. Apri il contenuto da eliminare
2. Clicca sui tre puntini in alto a destra
3. Seleziona **"Delete"**
4. Conferma l'eliminazione

### Gestione Immagini
Quando carichi un'immagine:
- **Dimensioni consigliate**: minimo 1200x630px
- **Formato**: JPG, PNG, WebP
- **Peso massimo**: 5MB (preferibilmente sotto 1MB)
- **Testo alternativo**: Aggiungi sempre una descrizione per l'accessibilità

### Editor di Testo Ricco
L'editor supporta:
- **Formattazione**: grassetto, corsivo, sottolineato
- **Liste**: puntate e numerate
- **Link**: collegamenti esterni
- **Immagini**: inserimento inline nel testo
- **Titoli**: H2, H3, H4 per organizzare il contenuto

## Invitare Collaboratori

### Aggiungere Membri al Progetto
1. Vai su https://www.sanity.io/manage
2. Seleziona il progetto "Erasmus CMS"
3. Vai su **Members**
4. Clicca **"Invite members"**
5. Inserisci l'email del collaboratore
6. Scegli il ruolo:
   - **Administrator**: Accesso completo (per il responsabile)
   - **Editor**: Può creare e modificare contenuti (per collaboratori)
   - **Viewer**: Solo visualizzazione
7. Clicca **"Send invites"**

Il collaboratore riceverà un'email con le istruzioni per creare un account Sanity (gratuito) e accedere allo Studio.

## Workflow Consigliato

### Per Nuove News
1. Scrivi il contenuto in bozza
2. Carica le immagini necessarie
3. Rivedi il contenuto per errori
4. Pubblica quando pronto
5. Verifica sul sito che tutto sia corretto (potrebbe richiedere 1-2 minuti per il rebuild)

### Per Nuovi Progetti
1. Raccogli tutte le informazioni (paese, durata, descrizione)
2. Prepara immagini di qualità
3. Crea il progetto nello Studio
4. Compila tutti i campi obbligatori
5. Aggiungi dettagli completi nel corpo del progetto
6. Pubblica

## Risoluzione Problemi

### Il contenuto non appare sul sito
- **Attendi 2-3 minuti**: Il sito deve essere ricostruito dopo ogni modifica
- **Verifica che sia pubblicato**: Il pulsante deve dire "Published" non "Publish"
- **Controlla lo slug**: Assicurati che sia stato generato correttamente
- **Ricarica la pagina**: Prova con Ctrl+F5 o Cmd+Shift+R

### Non riesco ad accedere allo Studio
- **Verifica le credenziali**: Controlla email e password
- **Controlla di essere stato invitato**: Chiedi all'amministratore
- **Prova un altro browser**: Alcuni blocchi potrebbero interferire

### Le immagini non si caricano
- **Riduci dimensioni**: Le immagini troppo grandi potrebbero fallire
- **Controlla il formato**: Usa JPG, PNG o WebP
- **Verifica la connessione**: Assicurati di avere una buona connessione internet

### Errore "Schema validation failed"
- **Campi obbligatori**: Assicurati di compilare tutti i campi con asterisco (*)
- **Slug mancante**: Clicca su "Generate" accanto al campo Slug

## Best Practices

### SEO e Visibilità
- **Titoli descrittivi**: Usa titoli chiari e informativi
- **Descrizioni complete**: Le descrizioni aiutano Google a indicizzare il contenuto
- **Testo alternativo**: Sempre aggiungere descrizione alle immagini
- **Date corrette**: Usa la data di pubblicazione effettiva per ordine cronologico

### Qualità Contenuti
- **Revisione**: Rileggi sempre prima di pubblicare
- **Coerenza**: Mantieni uno stile uniforme tra i contenuti
- **Immagini**: Usa immagini di qualità e pertinenti
- **Link**: Verifica che i link esterni funzionino

### Organizzazione
- **Slug chiari**: Usa slug descrittivi (es. "progetto-spagna-2024")
- **Categorie**: Usa nomi di paesi consistenti
- **Date**: Mantieni le date aggiornate

## Supporto e Contatti

Per problemi tecnici o domande:
- **Email amministratore**: [inserire email]
- **Documentazione Sanity**: https://www.sanity.io/docs
- **Video tutorial**: https://www.sanity.io/guides

## Comandi Utili (per sviluppatori)

```bash
# Avvia dev server (include Sanity Studio)
npm run dev

# Deploy Sanity Studio su cloud
npm run sanity:deploy

# Gestisci progetto Sanity
npm run sanity:manage

# Build sito
npm run build

# Preview build
npm run preview
```

## Struttura Contenuti

### Schema News (Post)
- `title`: Titolo (obbligatorio)
- `slug`: URL-friendly slug (obbligatorio, auto-generato)
- `description`: Descrizione breve (obbligatorio)
- `pubDate`: Data pubblicazione (obbligatorio)
- `heroImage`: Immagine principale (opzionale)
- `body`: Contenuto (opzionale, rich text)

### Schema Progetti
- `title`: Titolo progetto (obbligatorio)
- `slug`: URL-friendly slug (obbligatorio, auto-generato)
- `description`: Descrizione breve (obbligatorio)
- `country`: Paese destinazione (obbligatorio)
- `duration`: Durata progetto (obbligatorio)
- `heroImage`: Immagine principale (opzionale)
- `body`: Dettagli completi (opzionale, rich text)

---

**Data ultimo aggiornamento**: Ottobre 2025  
**Versione**: 1.0

