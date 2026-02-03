# Korekcije

**Korekcije** so logistični dokumenti, namenjeni prilagoditvi zaloge, kadar se fizično stanje ne ujema s stanjem v sistemu (npr. razlike pri štetju, napačen material ali napake pri označevanju). Z objavo korekcije se zalogovna stanja v skladišču posodobijo tako, da odražajo dejanske količine in lastnosti materialov.

Korekcije uporabite za:
- povečanje ali zmanjšanje razpoložljive količine za posamezne serije ali artikle,
- posodobitev atributov, kot je rok uporabe, kadar je bil napačno označen,
- odpravo neskladij lokacije po fizičnem štetju.

> [!NOTE]
> Ob objavi korekcije se zaloga posodobi: sistem prilagodi količine in atribute glede na vnesene razlike.

Za dostop do **Korekcij** pojdite na **Logistika / Dokumenti / Korekcije** v [**navigaciji**](../../Skupno/UI/Navigacija.md).

## Shema

<details open>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|-------|------|
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran enolični identifikator dokumenta korekcije. |
| [**Skladišče**](../Upravljanje/Skladisca.md) | Skladišče, na katero se korekcija nanaša (obvezno). |
| **Datum dokumenta** | Datum dokumenta korekcije. |

</details>

<details>
  <summary><strong>Postavke</strong></summary>

| Polje | Opis |
|-------|------|
| **Tip materiala** | Kategorija materiala, npr. [Izdelki](../../Sredstva/Materiali/Izdelki.md), [Polizdelki](../../Sredstva/Materiali/Polizdelki.md), [Surovine](../../Sredstva/Materiali/Surovine.md), [Repro materiali](../../Sredstva/Materiali/ReproMateriali.md). |
| **Material** | Izbran artikel (npr. Borova miza) iz kataloga [Sredstev](../../Sredstva/Sredstva/Sredstva.md). |
| **Serijska številka** | Serijska številka, na katero se korekcija nanaša, če je material serijsko voden. |
| **Datum do** | Datum roka uporabe, če je relevanten za pokvarljive materiale. |
| **Skladiščna lokacija** | Regal / polica v skladišču za natančno umestitev. Glejte [Lokacije](../Upravljanje/Lokacije.md). |
| **Količina** | Količina za korekcijo (vnesite končno količino ali razliko, odvisno od konfiguracije). |

</details>

## Seznam korekcij

Seznam prikazuje obstoječe dokumente **Korekcij** z možnostjo filtriranja po datumu, skladišču in stanju (*Osnutek / Objavljeno*). Uporabite iskanje po kodi ali materialu.

![Seznam korekcij](../Images/CorrectionsList.png)

## Ustvarjanje dokumenta korekcije

Korekcijo ustvarite, kadar prešteto stanje odstopa od sistemskega.

1. Pojdite na **Logistika / Dokumenti / Korekcije**.
2. Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md), da ustvarite osnutek korekcije.

   ![Nova korekcija](../Images/CorrectionsNew.png)

3. Izpolnite razdelek **Dokument**.
4. V razdelku **Podrobnosti** vnesite ali skenirajte **serijsko številko**, **EAN** ali **ime materiala**.  
   - Sistem prikaže **vsa ujemanja materialov in serijskih številk**. Če obstaja več ujemanj, izberite pravilno postavko s seznama.
   - Po potrebi uredite **Material**, **Serijsko številko** ali **Količino**.

   ![Urejanje podrobnosti korekcije](../Images/CorrectionsNewDetailsEdit.png)

5. Kliknite **Shrani**, da potrdite dodano postavko. Po potrebi ponovite korak 4.
6. Kliknite **Objavi**, da uveljavite korekcije.

Ob objavi se zaloga posodobi, dokument pa se premakne v pogled **Potrjeni**.

> [!IMPORTANT]
> Ob objavi se zaloga prilagodi: količine se povečajo ali zmanjšajo glede na korekcijo, atributi serij in lokacij pa se posodobijo skladno z vnosom.

## Urejanje

1. Kliknite **Kodo** dokumenta, da ga odprete.
2. V stanju **Osnutek** lahko urejate glavo in podrobnosti.
3. Kliknite **Shrani**, da potrdite spremembe.

## Brisanje

- Osnutke korekcij je mogoče izbrisati na zaslonu za urejanje.
- Objavljenih korekcij **ni mogoče izbrisati**.
