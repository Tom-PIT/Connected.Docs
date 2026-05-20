<!-- app_route: /warehouse/documents/reversals --> 
<!-- app_label: Storno --> 
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Dokumenti/Storno.md --> 
<!-- canonical_source_title: Storno -->

<!-- app_route: /warehouse/documents/reversals -->

<!-- app_label: Storno -->

<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Dokumenti/Storno.md -->

<!-- canonical_source_title: Storno -->

# Storno

Dokument **Storno** se uporablja za razveljavitev učinka drugega logističnega dokumenta. Omogoča popravljanje napak ali prilagoditev zaloge, kadar je potrebno razveljaviti že objavljen premik. Storno je mogoče ustvariti **samo za objavljene dokumente** in **izključno prek njihovega menija → Ustvari novo storno**. Dokumentov storna **ni mogoče** ustvariti neposredno s seznama stornov.

Storno prilagodi zalogo glede na vrsto dokumenta, ki se razveljavlja:

* Storno **[Odpisa](Odpisi.md)** vrne postavke nazaj na zalogo.
* Storno **[Prevzema](Prevzemi.md)** ponovno odstrani postavke iz zaloge (kot da bi bile vrnjene dobavitelju).
* Storno **[Izdajnice](Izdajnice.md)** vrne blago, ki je bilo predhodno izdano kupcu.

Storno je lahko **delno** ali **polno**, odvisno od vnesene količine. Dokumentov storna **ni mogoče stornirati**.

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Storno](https://www.youtube.com/watch?v=yfGNARBWm7Q)**.

Za dostop do **Stornov** pojdite na **Logistika / Dokumenti / Storno** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Shema


<details open>
  <summary><strong>Razdelek razveljavljenega dokumenta</strong></summary>

| Polje | Opis |
|-------|------|
| **Vrsta dokumenta** | Vrsta dokumenta, ki se razveljavlja ([prevzem](Prevzemi.md), [izdajnica](Izdajnice.md), [odpis](Odpisi.md), [med-skladiščni promet](MedSkladiscniPromet.md)). |
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Identifikator razveljavljenega dokumenta (klikljiv). |
| [**Skladišče**](../Upravljanje/Skladisca.md) | Skladišče, v katerem je bil izvirni dokument izveden. |
| **Datum dokumenta** | Datum izvirnega dokumenta. |

</details>


<details>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|-------|------|
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Sistemsko generirana številka dokumenta storna. |
| **Datum dokumenta** | Datum storna (urejanje dovoljeno). |

</details>


<details>
  <summary><strong>Podrobnosti</strong></summary>

| Polje | Opis |
|-------|------|
| [**Material**](../../Sredstva/Domena/Materiali.md) | Material, ki se razveljavlja ([izdelek](../../Sredstva/Materiali/Izdelki.md), [polizdelek](../../Sredstva/Materiali/Polizdelki.md), [surovina](../../Sredstva/Materiali/Surovine.md) ali [repro material](../../Sredstva/Materiali/ReproMateriali.md)). |
| [**Lokacija**](../Upravljanje/Lokacije.md) | Skladiščna lokacija razveljavljene zaloge. |
| **Izvorna količina** | Količina, prvotno obdelana v razveljavljenem dokumentu. |
| **Količina (kos)** | Količina za razveljavitev — **urejanje dovoljeno**, za delno ali polno razveljavitev. |

</details>

## Seznam dokumentov storna

Stran **Storno** prikazuje vse dokumente storna. Seznam lahko filtrirate z:

* **Datumi dokumentov**
* **Pogled**

  * *Osnutki* — dokumenti storna, ustvarjeni, vendar še ne objavljeni
  * *Potrjeni* — potrjeni dokumenti storna
* **Avtor**
* **Skladišče**

Vsaka vrstica prikazuje:

* dokument storna
* razveljavljen dokument (z navedeno vrsto dokumenta)

Barvni indikatorji:

* **Zelena** — potrjeno
* **Siva** — osnutek

![Seznam stornov](../Images/Reversals.png)

## Dejanja

### Ustvariti storno

Dokumentov storna **ni mogoče ustvariti ročno** na strani **Storno**. Ustvarijo se samo iz izvornega dokumenta prek naslednjih korakov:

#### Korak 1 — Začetek storna

Odprite objavljen dokument, ki ga želite razveljaviti. Odprite **meni** in izberite **Ustvari novo storno**.

#### Korak 2 — Urejanje količin storna

Sistem samodejno ustvari osnutek dokumenta storna.

Vsaka postavka prikazuje:

* **Izvorno količino**
* polje **Količina** za urejanje

Primeri:

* Izvirni odpis: **4 kos** → vnesite **4** za polno razveljavitev
* Vnesite **2** → delna razveljavitev

![Urejanje storna](../Images/ReversalsEdit.png)

Če je dokument shranjen, vendar ne objavljen → prikaže se med **Osnutki**

#### Korak 3 — Objava

Kliknite **Objavi**, da potrdite storno.

Če storna ne objavite takoj:

* storno se prikaže med **Osnutki**
* izvirni dokument je označen kot **Storno v teku**

Po objavi:

* zaloga se posodobi
* razveljavljen dokument je označen kot **Delno stornirano** ali **V celoti stornirano**
* storno se premakne med **Potrjeni**

Oznake, prikazane na izvirnem dokumentu:

* **Storno v teku** — obstaja osnutek storna
* **Delno stornirano** — razveljavljen je del količine
* **V celoti stornirano** — dokument je v celoti razveljavljen

![Oznaka storna](../Images/ReversalsDocumentTag.png)

### Urediti dokument storna

Kliknite dokument storna na seznamu, da ga odprete in pregledate njegove podrobnosti.

Objavljenih stornov **ni mogoče** urejati. Osnutke stornov je mogoče urejati, vendar upoštevajte, da lahko vplivajo na status izvirnega dokumenta (na primer, če spremenite količino, se lahko izvirni dokument preklopi med statusi *Storno v teku*, *Delno stornirano* ali *V celoti stornirano*).

Dokument storna vsebuje:

#### Razdelek razveljavljenega dokumenta

Prikazuje informacije o dokumentu, ki se razveljavlja, in povezavo za njegov ogled.

![Razveljavljen dokument](../Images/ReversalsReversedDocument.png "Povezava do razveljavljenega dokumenta")

#### Razdelek dokumenta

Prikazuje šifro in datum storna.

![Dokument storna](../Images/ReversalsDocumentSection.png "Dokument storna")

#### Razdelek podrobnosti

Prikazuje prizadete materiale, njihove lokacije, izvorne količine in razveljavljene količine.

![Podrobnosti storna](../Images/ReversalsDetailsSection.png "Podrobnosti storna")

### Brisati dokument storna

Na zaslonu za urejanje kliknite **Izbriši**, da odstranite **osnutek** dokumenta storna. Po potrditvi se dokument odstrani iz sistema brez vpliva na zalogo ali izvirni dokument.

Objavljenih stornov **ni mogoče** izbrisati.
