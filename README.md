<<<<<<< HEAD
# BMS Monitor
Prototyp panelu monitoringu budynkowego wykonany w React.

### Funkcje:
- Symulacja temperatury i wilgotności w czasie rzeczywistym.
- Automatyczne alerty po przekroczeniu 24°C.
- Sterowanie HVAC i oświetleniem.
=======
# BMS Monitor

Prototyp panelu monitoringu budynkowego (Building Management System) wykonany w React + Vite.  
Projekt demonstracyjny nawiązujący do systemów IoT i Smart Buildings

🔗 **Demo live:** [bms-monitor-umber.vercel.app](https://bms-monitor-umber.vercel.app)

---

## Funkcje

- 📡 Symulacja danych z czujników temperatury i wilgotności w czasie rzeczywistym (aktualizacja co 3 s)
- 🌡️ Automatyczny alert po przekroczeniu progu temperatury 24°C
- 💡 Interaktywne sterowanie HVAC i oświetleniem (klikalne statusy)
- 👥 Symulacja occupancy (liczba osób w sali)
- 🕐 Zegar czasu rzeczywistego w nagłówku

---

## Technologie

| Technologia | Zastosowanie |
|---|---|
| React 18 | UI, zarządzanie stanem (`useState`, `useEffect`) |
| Vite | Bundler, dev server |
| CSS (vanilla) | Stylowanie bez zewnętrznych bibliotek |

---

## Uruchomienie lokalne

```bash
git clone https://github.com/baniokris-lang/bms-monitor-umber.git
cd bms-monitor-umber
npm install
npm run dev
```

Aplikacja dostępna pod `http://localhost:5173`

---

## Struktura projektu

```
src/
  App.jsx       # Główny komponent + logika symulacji
  App.css       # Style
  main.jsx      # Punkt wejścia
```

---

## Kontekst

Projekt powstał jako demonstracja umiejętności frontendowych w branży automatyki budynkowej, IoT i Smart Buildings.

Symulowane dane odzwierciedlają typowe parametry monitorowane w systemach BMS:  
temperatura, wilgotność, stan HVAC, oświetlenie, occupancy.
>>>>>>> d9c03c4 (docs: update README with project description)
