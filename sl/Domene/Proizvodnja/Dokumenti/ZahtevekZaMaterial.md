<!-- app_route: /warehouse/documents/material-requests -->
<!-- TODO: Confirm app_route against the live app. -->
<!-- app_label: Zahtevek za material -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/sl/Domene/Proizvodnja/Dokumenti/ZahtevekZaMaterial/ -->
<!-- canonical_source_title: Zahtevek za material -->

# Zahtevek za material

Dokument **Zahtevek za material** se uporablja za zahtevo za materiale iz skladišča. Je zahtevek, ki pride pred prenosom. Planer ali vodja izmene navede materiale in količine, ki jih potrebuje proizvodno območje. Skladišče nato zahtevek pregleda in materiale premakne z enim ali več dokumenti [**Med-skladiščni promet**](../../Logistika/Dokumenti/MedSkladiscniPromet.md).

Zahtevek za material ne spremeni zaloge. Materiale premaknejo šele dokumenti med-skladiščnega prometa, ustvarjeni iz zahtevka.

Za dostop do dokumentov **Zahtevka za material** pojdite na **Logistika / Dokumenti / Zahtevek za material** v [navigaciji](../../../Skupno/UI/Navigacija.md).

<!-- ![Seznam zahtevkov za material](../Images/ZahtevekZaMaterialSeznam.png "Seznam zahtevkov za material") -->

## Shema

<details open markdown="1">
<summary><strong>Dokument</strong></summary>

| Polje | Opis |
|------|------|
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran enolični identifikator zahtevka za material. |
| **Datum dokumenta** | Datum zahtevka. |
| **Ustvaril** | Uporabnik, ki je ustvaril dokument. Izpolni se samodejno. |
| **Lastnik** | Uporabnik, odgovoren za zahtevek. Izpolni se samodejno. |
| **Opombe** | Dodatne opombe za skladišče. |
| **Priponke** | Datoteke, povezane z zahtevkom. |

</details>

<details markdown="1">
<summary><strong>Postavke</strong></summary>

| Polje | Opis |
|------|------|
| [**Material**](../../Sredstva/Materiali/README.md) | Zahtevani material. |
| **Količina** | Zahtevana količina. |

</details>

> [!NOTE]
> Postavke ne vsebujejo cen in davkov. Zahtevek za material je zahteva za zalogo, ne finančni dokument.

## Seznam dokumentov zahtevkov za material

Stran **Zahtevek za material** prikazuje vse zahtevke. Dokument lahko poiščete z iskalno vrstico ali filtrirate seznam v levi stranski vrstici. Filtri delujejo enako kot na strani [**Prevzemi**](../../Logistika/Dokumenti/Prevzemi.md). Filtra po skladišču še ni.

Dokument je lahko v enem od štirih stanj:

<!-- TODO: Potrdite slovenske oznake stanj v aplikaciji. -->

- **Osnutek** — zahtevek se pripravlja in ga je še mogoče spremeniti.
- **Na voljo** — zahtevek je objavljen, skladišče pa lahko ukrepa.
- **V zaključevanju** — skladišče zahtevek dokončuje.
- **Zaključen** — zahtevek je dokončan.

## Akcije

### Ustvarjanje zahtevka za material

1. Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Dodaj novo**.
2. V razdelku **Postavke** dodajte materiale, ki jih potrebujete. Vrstice dodajate enako kot na nabavnem nalogu.
3. Po potrebi vnesite **Opombe** ali priložite datoteke za skladišče.
4. Kliknite **Shrani**, da dokument shranite kot osnutek.

Zahtevek se prikaže v stanju **Osnutek**. Preden ga pošljete skladišču, ga lahko natisnete ali izvozite iz [menija](#meni).

<!-- TODO: Potrdite korak, s katerim osnutek preide v stanje Na voljo (Objavi ali druga akcija). -->

### Vrnitev zahtevka v osnutek

Z akcijo **Povrni v osnutek** lahko spremenite zahtevek, ki je že objavljen, na primer da popravite količino. Zahtevek se nato vrne v stanje **Osnutek**.

<!-- TODO: Potrdite, v katerih stanjih je akcija Povrni v osnutek na voljo. -->

### Ustvarjanje zahtevka za material iz proizvodnega naloga

Zahtevek za material lahko ustvarite neposredno iz [**proizvodnega naloga**](ProizvodniNalogi.md).

1. Odprite proizvodni nalog.
2. Izberite **Ustvari zahtevek za material**.
3. Preverite materiale. Sistem jih prepiše iz vhodov naloga, pred shranjevanjem pa jih lahko spremenite.

Zahtevek za material je povezan s proizvodnim nalogom. Na zahtevku vidite:

- **zahtevano količino** in
- **količino, ki je že premaknjena v proizvodnjo** z dokumenti med-skladiščnega prometa, ustvarjenimi iz tega zahtevka.

To je pomembno, ker lahko en zahtevek izpolnite v več prenosih.

## Ustvarjanje med-skladiščnega prometa iz zahtevka za material

Ko skladišče obdela zahtevek, iz njega ustvari dokument [**Med-skladiščni promet**](../../Logistika/Dokumenti/MedSkladiscniPromet.md). Na zahtevku v razdelku **Povezani dokumenti** izberite **Ustvari med-skladiščni promet**.

- Materiali in količine se prenesejo v dokument med-skladiščnega prometa.
- Izberete **končno skladišče**. Če je organizacijska enota, ki izvaja nalog, v svojih podatkih povezana s skladiščem, se končno skladišče izbere samodejno.
- Z objavo dokumenta med-skladiščnega prometa se zaloga premakne.

<!-- TODO: Potrdite, kdaj zahtevek preide v stanje V zaključevanju ali Zaključen. -->

### Primer: premik polovice naloga v dveh delih

1. Proizvodni nalog potrebuje materiale za celoten zagon, skladišče pa lahko premakne le del naloga naenkrat.
2. Na proizvodnem nalogu izberite **Ustvari zahtevek za material**. Zahtevek se odpre kot osnutek.
3. Vodja izmene zahtevek pregleda in ga objavi.
4. V ponedeljek skladišče iz zahtevka ustvari dokument med-skladiščnega prometa in premakne približno 50 % materialov v proizvodnjo.
5. V sredo skladišče iz istega zahtevka ustvari drug dokument med-skladiščnega prometa in premakne preostanek.

## Meni

Meni ponuja dodatne akcije, ki so na voljo na tej strani.

Razpoložljive akcije:

- **Natisni**
- **Izvoz v PDF**

Za podrobnosti o akcijah v meniju glejte [**Meni dejanja**](../../../Skupno/Koncepti/MeniDejanja.md).
