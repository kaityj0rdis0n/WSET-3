# WSET-3 Study Apps

A collection of personal study apps for the WSET Level 3 Award in Wines. Each app is a standalone Vite + React + TypeScript project.

## Apps

### [`/bordeaux`](./bordeaux)

A flashcard and quiz app covering the Bordeaux module of the WSET 3 curriculum.

**Topics:** Geography · Appellations · Grapes · Soils · Classification · Styles & Quality

**Modes:**
- **Flashcards** — flip-card study with topic filtering, shuffle, and known/unknown tracking
- **Quiz** — multiple choice with instant feedback, explanations, and end-of-session review

**Running it:**
```bash
cd bordeaux
npm install
npm run dev
```

---

## Next Steps

### Content
- [ ] Add more flashcards and quiz questions (bulk import from Brainscape or manual)
- [ ] Add remaining WSET 3 modules as new apps (Champagne, Burgundy, SAT, etc.)

### Features
- [ ] **Free-text answer mode** — instead of multiple choice, you type your answer. The app checks it loosely (keywords, not exact match), scores it, then regardless of whether you got it right, surfaces 2–3 follow-up prompts to dig deeper into the concept. Good for exam prep where you need to construct written responses, not just recognise the right answer.
- [ ] **Map mode** — interactive map of Bordeaux where you identify appellations, banks, and rivers by location
- [ ] **Game mode** — time-pressured or competitive format (e.g. match the château to its appellation, fastest finger style)
- [ ] **Spaced repetition** — resurface cards you marked "still learning" more frequently
- [ ] **Progress persistence** — save session results to localStorage so known/unknown state carries across sessions
- [ ] **Deployment** — host on Vercel or Netlify for mobile access without running a local dev server
