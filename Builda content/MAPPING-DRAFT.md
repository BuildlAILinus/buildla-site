# Bild-mapping draft

Källa: numreringen i `Builda content/` följer scroll-ordning på buildla.se.
Mål: var varje bild ska användas i `buildla-site/app/page.tsx`.

Bekräfta eller korrigera, så kopierar jag och renamear.

## Home (sida 1)

| # | Innehåll (vad jag ser) | Föreslagen slot i vår sajt | Förslag på filnamn | Säker? |
|---|---|---|---|---|
| 1 | Vardagsrum med ljust parkett, soffa, vy mot trädgård | **Hero bg** ELLER service "Byta golv" — beror på buildla.se | `hero.webp` ELLER `service-golv.webp` | ❓ |
| 2 | Mat-/köksrum med ljuskrona, ljust trägolv, fönster | Service "Köksrenovering" eller om-bild | `service-kok.webp` | ❓ |
| 3 | Modernt mörkt kök med diskbänk, minimalistiskt | Service "Köksrenovering" | `service-kok.webp` | ✓ |
| 4 | Badrum med vita kakelplattor, fristående badkar, takfönster | Service "Renovera badrum" | `service-badrum.webp` | ✓ |
| 5 | Sovrum med målade väggar, mustard-färgad överkast | Service "Måla och tapetsera" | `service-malning.webp` | ✓ |
| 6 | Altan ovanifrån med trädäck, möbler | Service "Altan" | `service-altan.webp` | ✓ |
| 7 | Vardagsrum med stor abstrakt målning, fishbone-parkett | Om-Buildla bild ELLER ProblemSolution-bild | `om-buildla.webp` | ❓ |
| 8 | Datorskärm med arkitekt-/CAD-modell | Kategori "Arkitekt" | `kategori-arkitekt.webp` | ✓ |
| 9 | Trähus med stort glashus, snö | Kategori "Ny- & tillbyggnad" | `kategori-tillbyggnad.webp` | ✓ |
| 10 | Vy genom dörrar (kök vänster, sovrum höger), parkett | Kategori "Renovera inomhus" | `kategori-inomhus.webp` | ✓ |
| 11 | Trähus utomhus i skogsmiljö | Kategori "Renovera utomhus" | `kategori-utomhus.webp` | ✓ |
| 12 (rimage.php-12) | Mörka trälister + grön hall med skor | Mellanrum / projekt-bild | (se nedan) | ❓ |
| 13 | Trähus utomhus (samma som 11/16?) | Projekt | `projekt-1.webp` | ❓ |
| 14 | Övervåning med trappa, beige stol | Projekt | `projekt-2.webp` | ✓ |
| 15 | Stor öppen yta vardagsrum/kök | Projekt | `projekt-3.webp` | ✓ |
| 16 | Litet trähus utomhus (croppad version av 11) | Projekt | `projekt-4.webp` | ❓ |
| 17 | Närbild trälister + grön hall | Projekt | `projekt-5.webp` | ✓ |
| 18 | Mörkt kök med matplats, runt bord | Projekt | `projekt-6.webp` | ✓ |
| 19 | Öppet vardagsrum/kök med trappa | Final CTA bg ELLER projekt | `cta-bg.webp` | ❓ |
| 20 | Garderob beige | Mellanrum / detaljbild | (osäker) | ❓ |
| 21 | Matplats med ljuskrona vid fönster | Projekt eller om-bild | (osäker) | ❓ |
| 22 | Mörkt kök med matplats (alternativ till 18?) | Projekt eller om | (osäker) | ❓ |

## Om oss (sida 2)

| # | Innehåll | Föreslagen slot | Förslag på filnamn |
|---|---|---|---|
| 2_1 | Vardagsrum med målning (samma som 7) | Om-oss page hero | `om-oss-1.webp` |
| 2_2 | Genom dörrar inomhus (samma som 10) | Om-oss page sekundär | `om-oss-2.webp` |

## Vad jag är osäker på

1. **Hero**: är det 1.webp eller 7.webp? På buildla.se är hero typiskt en wide horizontal hero-shot med text ovanpå. 1.webp är vardagsrum med tydlig parkett — kunde vara hero med "Renovering"-budskap, eller en service-tile för "Byta golv". 

2. **Numreringen 1-6**: om 1 är hero, är 2-6 = de 5 tjänsterna (Byta golv, Kök, Badrum, Måla, Altan)?
   - 2 har trägolv i fokus → kunde vara "Byta golv"
   - 3 = kök ✓
   - 4 = badrum ✓
   - 5 = måla ✓
   - 6 = altan ✓
   - Om så: 1 = hero, 2-6 = tjänster i ordning

3. **20, 21, 22, 7**: Inte uppenbart vilka projekt/om/cta-slots dessa fyller. Kan vara extra projekt, kan vara fyllnad i andra sektioner.

4. **Pillars-ikoner (shield/phone/worker)**: Inga ikoner i mappen — ska jag behålla nuvarande Squarespace-ikoner eller har du nya?

5. **Logo**: ingen logo i mappen — behåll nuvarande Squarespace eller ny?

## Förslag på workflow

Berätta vilken av dessa som stämmer:

**Alternativ A** — "1 = hero, 2-6 = tjänster i ordning, 7 = om/problem, 8-11 = kategorier, 12-18 = projekt (välj 6), 19 = cta-bg"

**Alternativ B** — annat upplägg (säg vad)

**Alternativ C** — du scrollar buildla.se till topp och tar screenshots så jag matchar visuellt 1-till-1
