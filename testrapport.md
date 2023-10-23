# Testrapport - ZodiacCompanion
Fredrik Svensson (fs222id) - 1DV610

## Automatiska enhetstester
Ramverk: Jest.

Testerna körs efter ``npm install`` genom kommandot ``npm run test``.

### Zodiakens tecken vid angivna datum
Applikationen skapar ett objekt som innehåller en lista över stjärntecken och datum när dessa infaller. Testet sätter några datum och jämför sedan returnerade namn på stjärntecken med de förväntade.

Testet kollar även särskilt på specialfallet Stenbocken (Capricorn), som infaller både före och efter årsskiftet.

Testfil: ``./tests/ZodiacSigns.test.js``

|Vad som testats | Hur det testats | Resultat |
|---|---|---|
| getZodiacSign - Returnerat tecken vid datum 2000-03-21 | setZodiacSign anropas med datumet. Svaret jämförs med Aries.| Lyckat |
| getZodiacSign - Returnerat tecken vid datum 2000-04-21 | setZodiacSign anropas med datumet. Svaret jämförs med Taurus.| Lyckat |
| getZodiacSign - Returnerat tecken vid datum 2000-05-22 | setZodiacSign anropas med datumet. Svaret jämförs med Gemini.| Lyckat |
| getZodiacSign - Returnerat tecken vid datum 2000-01-10 | setZodiacSign anropas med datumet. Svaret jämförs med Capricorn.| Lyckat |
| getZodiacSign - Returnerat tecken vid datum 2000-12-30 | setZodiacSign anropas med datumet. Svaret jämförs med Capricorn.| Lyckat |


## Manuella tester
Applikationens funktion och användargränssnitt har testats manuellt.

### 1. Aktuellt tecken visas
1. Öppna applikationen.
2. Kontrollera att det korrekta tecknet visas enligt kalendern (astrologiskt).
3. Kontrollera att det korrekta tecknet visas enligt annan källa, exempelvis [Stellarium](https://stellarium.org/) (astronomiskt).

### 2. Framtida tecken visas
1. Ange ett framtida datum - 3023-10-10. 
2. Kontrollera att det korrekta tecknet visas enligt kalendern (astrologiskt).
3. Kontrollera att det korrekta tecknet visas enligt annan källa, exempelvis [Stellarium](https://stellarium.org/) (astronomiskt).

### 3. Dåtida tecken visas
1. Ange ett dåtida datum - 1023-10-10. 
2. Kontrollera att det korrekta tecknet visas enligt kalendern (astrologiskt).
3. Kontrollera att det korrekta tecknet visas enligt annan källa, exempelvis [Stellarium](https://stellarium.org/) (astronomiskt).

### 4. Felaktiga datum
1. Skriv inget. 
2. Skriv text.
3. Ange ett felaktigt årtal - 252525-10-10.
4. Ange en felaktig månad - 2023-13-10.
5. Ange en felaktig dag - 2023-02-29.
- Kontrollera att felmeddelande visas i samtliga fall.

### Testrapport

Version ac750fa20b93f0d3d19b5c09f0cd5cb76b79bf8f 
Datum: 2023.10.23, 16:40  
Miljö: Windows 
Utförd av: Fredrik Svensson

|Fall | Resultat | Kommentar |
|---|---|---|
| 1.1 | Lyckat |
| 1.2 | Lyckat |
| 1.3 | Misslyckas | Felaktiga positioner
| 2.1 | Lyckat |
| 2.2 | Lyckat |
| 2.3 | Lyckat |
| 3.1 | Lyckat |
| 3.2 | Lyckat | 
| 3.3 | Misslyckat | Solen korrekt, månen fel
| 4.1 | Lyckat |
| 4.2 | Lyckat |
| 4.3 | Lyckat |
| 4.4 | Lyckat |
| 4.5 | Lyckat |

**Kommentar:** Felaktigheter i solens och månens positioner ger fel tecken. Felen kommer från modulen CelestialFinder.
