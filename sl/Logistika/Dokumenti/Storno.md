# Storno

Dokument **Storno** se uporablja za razveljavitev učinka drugega logističnega dokumenta. Omogoča popravljanje napak ali prilagoditev zaloge, kadar je potrebno razveljaviti že objavljen premik. Storno je mogoče ustvariti **samo za objavljene dokumente** in **izključno prek njihovega menija → Ustvari novo storno**. Dokumentov storna **ni mogoče** ustvariti neposredno s seznama stornov.

Storno prilagodi zalogo glede na vrsto dokumenta, ki se razveljavlja:
- Storno **[Odpisa](Odpisi.md)** vrne postavke nazaj na zalogo.
- Storno **[Prevzema](Prevzemi.md)** ponovno odstrani postavke iz zaloge (kot da bi bile vrnjene dobavitelju).
- Storno **[Izdajnice](Izdajnice.md)** vrne blago, ki je bilo predhodno izdano kupcu.

Storno je lahko **delno** ali **polno**, odvisno od vnesene količine.  
Dokumentov storna **ni mogoče stornirati**.

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Storno](https://www.youtube.com/watch?v=yfGNARBWm7Q)**.

Za dostop do **Stornov** pojdite na **Logistika / Dokumenti / Storno** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Shema

### Razdelek razveljavljenega dokumenta

| Polje | Opis |
|-------|------|
| **Vrsta dokumenta** | Vrsta dokumenta, ki se razveljavlja ([prevzem](Prevzemi.md), [izdajnica](Izdajnice.md), [odpis](Odpisi.md), [med-skladiščni promet](MedSkladiscniPromet.md)). |
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Koda razveljavljenega dokumenta (klikljiva). |
| [**Skladišče**](../Sifranti/Skladisca.md) | Skladišče, v katerem je bil izvirni dokument izveden. |
| **Datum dokumenta** | Datum izvirnega dokumenta. |

### Razdelek dokumenta

| Polje | Opis |
|-------|------|
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran enolični identifikator dokumenta storna. |
| **Datum dokumenta** | Datum storna (urejanje dovoljeno). |

### Razdelek postavk

| Polje | Opis |
|-------|------|
| [**Material**](../../Sredstva/Domena/Materiali.md) | Material, ki se razveljavlja ([izdelek](../../Sredstva/Sifranti/Izdelki.md), [polizdelek](../../Sredstva/Sifranti/Polizdelki.md), [surovina](../../Sredstva/Sifranti/Surovine.md) ali [repro material](../../Sredstva/Sifranti/ReproMateriali.md)). |
| [**Lokacija**](../Sifranti/Lokacije.md) | Skladiščna lokacija razveljavljene zaloge. |
| **Izvorna količina** | Količina, obdelana v razveljavljenem dokumentu. |
| **Količina (kos)** | Količina za razveljavitev — **urejanje dovoljeno**, za delno ali polno razveljavitev. |

## Seznam dokumentov storna

Stran **Storno** prikazuje vse dokumente storna. Seznam lahko filtrirate z:

- **Datumi dokumentov**
- **Pogled**
  - *Osnutki* — ustvarjeni, vendar še ne objavljeni dokumenti storna
  - *Potrjeni* — potrjeni dokumenti storna
- **Avtor**
- **Skladišče**

Vsaka vrstica prikazuje:
- dokument storna
- razveljavljen dokument (z navedeno vrsto)

Barvni indikatorji:
- **Zelena** — objavljeno
- **Siva** — osnutek

![Seznam stornov](../Images/Reversals.png)

## Dejanja

Dokumentov storna **ni mogoče ustvariti ročno** na strani Storno. Ustvarijo se iz izvornega dokumenta prek možnosti:

**Meni → Ustvari novo storno**

Po ustvarjanju:
- če je shranjen, vendar ne objavljen → prikaže se med **Osnutki**
- če je objavljen → prikaže se med **Potrjeni**

Oznake na izvirnem dokumentu:
- **Storno v teku** — obstaja osnutek storna
- **Delno stornirano** — razveljavljen je del količine
- **V celoti stornirano** — dokument je v celoti razveljavljen

![Oznaka storna](../Images/ReversalsDocumentTag.png)

## Ustvarjanje in objava storna

### Korak 1 — Začetek storna
Odprite objavljen dokument, ki ga želite razveljaviti. V **meniju** izberite **Ustvari novo storno**.

### Korak 2 — Urejanje količin storna
Sistem samodejno ustvari **osnutek** dokumenta storna.

Vsaka postavka prikazuje:
- **Izvorno količino**
- **Količino** za razveljavitev

Primeri:
- Izvirni odpis: **4 kos** → vnesite **4** za polno razveljavitev
- Vnos **2** → delna razveljavitev

![Urejanje storna](../Images/ReversalsEdit.png)

### Korak 3 — Objava
Kliknite **Objavi**, da potrdite storno.

Če storna ne objavite takoj:
- dokument ostane med **Osnutki**
- izvirni dokument je označen kot **Storno v teku**

Po objavi:
- zaloga se posodobi
- izvirni dokument je označen kot **Delno stornirano** ali **V celoti stornirano**
- storno se premakne med **Potrjeni**

## Pregled dokumenta storna

Dokument storna vključuje:

### Razdelek razveljavljenega dokumenta
Prikazuje informacije o razveljavljenem dokumentu in povezavo za njegov ogled.

![Razveljavljen dokument](../Images/ReversalsReversedDocument.png)

### Razdelek dokumenta
Prikazuje šifro in datum storna.

![Dokument storna](../Images/ReversalsDocumentSection.png)

### Razdelek postavk
Prikazuje materiale, lokacije, izvorne količine in razveljavljene količine.

![Podrobnosti storna](../Images/ReversalsDetailsSection.png)

## Brisanje

Kliknite **Izbriši**, da odstranite **osnutek** dokumenta storna.  
Objavljenih dokumentov storna **ni mogoče izbrisati**.

---
