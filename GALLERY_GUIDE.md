# Guida Gallery Fotografica - Progetti Erasmus

## ✨ Funzionalità Implementate

La gallery fotografica è stata aggiunta ai progetti Erasmus con le seguenti caratteristiche:

### 📸 Layout
- **Griglia responsive**: 2 colonne su mobile, 3 su tablet, 4 su desktop
- **Animazioni di caricamento**: le immagini appaiono con effetto fade-in progressivo
- **Effetti hover**: zoom dell'immagine e visualizzazione della didascalia

### 🔍 Lightbox
- **Visualizzazione a schermo intero** delle immagini in alta qualità
- **Navigazione**: frecce laterali per scorrere tra le immagini
- **Contatore**: mostra "immagine X di Y"
- **Didascalie**: visualizzazione delle descrizioni sotto l'immagine

### 🎮 Controlli
- **Click** sull'immagine per aprire il lightbox
- **Frecce sinistra/destra** per navigare tra le immagini
- **ESC** per chiudere il lightbox
- **Click fuori** dall'immagine per chiudere
- **Swipe** su mobile per navigare tra le immagini

## 📝 Come Aggiungere una Gallery

### 1. Accedi a Sanity Studio
Vai su `https://tuosito.com/studio` (o avvia lo studio localmente)

### 2. Modifica un Progetto
1. Seleziona "Progetti Erasmus" dalla sidebar
2. Apri il progetto a cui vuoi aggiungere la gallery
3. Scorri fino al nuovo campo **"Gallery fotografica"**

### 3. Aggiungi le Immagini
1. Clicca su **"Add item"** nel campo Gallery
2. Carica un'immagine
3. Compila i campi:
   - **Testo alternativo**: descrizione per accessibilità (obbligatorio)
   - **Didascalia**: testo che appare al passaggio del mouse e nel lightbox (opzionale)
4. Ripeti per ogni immagine

### 4. Ordina le Immagini
- Trascina le immagini per riordinarle
- L'ordine in Sanity corrisponde all'ordine nella gallery

### 5. Pubblica
Clicca su **"Publish"** in alto a destra

## 🎨 Personalizzazione

### Modificare il Layout della Griglia
Nel file `src/pages/progetti/[slug].astro`, linea ~93:
```astro
<div class="gallery-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
```
Modifica i valori `grid-cols-X` per cambiare il numero di colonne

### Modificare l'Altezza delle Immagini
Nel file `src/pages/progetti/[slug].astro`, linea ~100:
```astro
class="w-full h-64 object-cover..."
```
Cambia `h-64` con valori come `h-48`, `h-80`, etc.

### Personalizzare gli Stili
Gli stili della gallery si trovano in `src/styles/global.css` dalla linea 192

## 🔧 Struttura Tecnica

### Schema Sanity
- File: `sanity/schemas/project.ts`
- Campo: `gallery` (array di immagini)
- Supporta hotspot per ritaglio intelligente

### Tipi TypeScript
- File: `src/lib/sanity-types.ts`
- Interfaccia: `GalleryImage` (estende `SanityImage` con `caption`)

### Template
- File: `src/pages/progetti/[slug].astro`
- Sezione: Gallery Section (linea ~86-228)

## 📱 Compatibilità

- ✅ Desktop (Chrome, Firefox, Safari, Edge)
- ✅ Tablet (iPad, Android tablets)
- ✅ Mobile (iOS, Android)
- ✅ Touch gestures su dispositivi mobili
- ✅ Navigazione da tastiera (accessibilità)

## 🚀 Prossimi Passi

1. **Riavvia il dev server** se è in esecuzione:
   ```bash
   cd /Users/acipriani/Documents/GitHub/erasmus-progetto
   npm run dev
   ```

2. **Accedi a Sanity Studio** e aggiungi le prime immagini a un progetto

3. **Visualizza il progetto** sul sito per vedere la gallery in azione

## ⚠️ Note Importanti

- Le immagini vengono automaticamente ottimizzate da Sanity CDN
- Le thumbnail nella griglia sono ridimensionate a 400x300px
- Nel lightbox le immagini sono caricate in alta qualità (1920px di larghezza)
- Il lazy loading migliora le performance su mobile

---

**Supporto**: Per problemi o domande sull'implementazione, consulta la documentazione completa del progetto.

