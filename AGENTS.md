# Contributor Guide: Cyberpunk RPG Terminal Interface

## 📦 Projekt

Ten projekt to statyczna strona w stylu retro-terminala, służąca jako interfejs RPG (`Glitchwave Terminal`). Główna logika oparta jest na custom element `<glitchwave-terminal>` oraz animacjach CSS przypominających CRT. Komendy gracza są parsowane i przekładają się na modularne interakcje.

---

## 📂 Struktura

- `index.html` – główny punkt wejścia (UI terminala)
- `animations.css` – efekty: scanlines, flicker, glitch
- `data/journal_KROKIET.json` – log startowy terminala
- `js/` *(możliwe dołączone później)* – logika web komponentów
- `tailwind.build.css` – plik generowany (nie edytuj ręcznie)
- `postcss.config.js` – konfiguracja Tailwinda (ważne dla CSS pipeline)

---

## 🧪 Testowanie & Debug

Projekt nie ma frameworka testowego — dodanie testów HTML/DOM mile widziane.

Minimalne testy manualne:
1. Strona ładuje się bez błędów w konsoli.
2. `journal_KROKIET.json` renderuje się jako boot-log.
3. Wszystkie animacje działają w przeglądarce (scanline, glitch, flicker).
4. Web komponent reaguje na wpisywane komendy.

---

## 🎨 Style & Formatowanie

- Trzymaj się stylu nazw klas zgodnych z TailwindCSS
- Animacje nazwij wg konwencji `@keyframes nazwa`
- Nie używaj `!important` bez potrzeby
- Stosuj klasy `text-green-400`, `bg-black`, `font-mono` – to core klimatu

---

## 🧠 Zadania dla Codexa (przykłady)

- Refactor: wydziel logikę renderowania `journal.json` do osobnej funkcji JS
- UI-fix: dodaj tryb nocny (np. `data-theme="dark-crt"`)
- Optymalizacja: sprawdź czy `tailwind.build.css` nie zawiera zbędnych klas
- Eksperyment: dodaj `glitch-echo` jako nowy typ animacji (`echo-shadow`)

---

## ✅ PR Guidelines

**Title:** `[GLITCHWAVE] <Co zostało zmienione>`  
**Opis:** Opisz funkcjonalność, czy coś dotyczy UI, danych, wejścia czy komponentów.
