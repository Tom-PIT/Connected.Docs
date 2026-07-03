<!-- app_route: /production/documents/consumptions --> 
<!-- app_label: Potrošnje --> 
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/Logistika/Dokumenti/Potrosnje.md --> 
<!-- canonical_source_title: Potrošnje -->

# Potrošnje

Dokument **Potrošnja** evidentira materijal utrošen tijekom izvršavanja **Proizvodnog naloga**. Dokumenti potrošnje automatski se stvaraju iz modula [**Izvedba**](../../Proizvodnja/Dokumenti/Izvedba.md) kada proizvodni radnik evidentira utrošak materijala. Dokument smanjuje stanje zaliha utrošenog materijala i omogućuje praćenje njegove potrošnje.

Za evidentiranje utroška materijala u proizvodnji pogledajte **[Potrošnja](../../Proizvodnja/Dokumenti/Potrosena.md)**. Ta su dva procesa usko povezana jer evidentiranje potrošnje u proizvodnji automatski stvara odgovarajući dokument potrošnje u logistici.

Za pristup dokumentu **Potrošnje** otvorite **Logistika / Dokumenti / Potrošnje** u [navigaciji](../../../Zajednicko/UI/Navigacija.md).

## Shema

<details open markdown="1">
<summary><strong>Dokument</strong></summary>

| Polje | Opis |
|-------|------|
| [**Oznaka**](../../../Zajednicko/UI/OznakeDokumenata.md) | Jedinstvena oznaka dokumenta potrošnje koju automatski generira sustav. |
| **Kreirano** | Datum i vrijeme izrade dokumenta. |
| [**Skladište**](../Upravljanje/Skladista.md) | Skladište iz kojeg je materijal utrošen. |

</details>

<details markdown="1">
<summary><strong>Stavke</strong></summary>

| Polje | Opis |
|-------|------|
| [**Materijal**](../../RobaIUsluge/Materijali/README.md) | Utrošeni materijal ([proizvod](../../RobaIUsluge/Materijali/Proizvodi.md), [poluproizvod](../../RobaIUsluge/Materijali/Poluproizvodi.md), [sirovina](../../RobaIUsluge/Materijali/Sirovine.md) ili [repromaterijal](../../RobaIUsluge/Materijali/ReproMaterijali.md)). |
| **Izvor** | Identifikator izvora utrošenog materijala (primjerice serijski broj ili oznaka pakiranja, ovisno o načinu praćenja materijala). |
| **Količina** | Evidentirana količina utrošenog materijala. |

</details>

## Popis dokumenata potrošnje

Stranica **Potrošnje** prikazuje sve dokumente potrošnje nastale tijekom izvršavanja proizvodnje. Popis možete filtrirati pomoću:

- **Datumi dokumenata**
- **Pogled**
    - *Nacrt* — potrošnja je još u tijeku
    - *Potvrđeno* — dovršeni dokument potrošnje
- **Autor**
- **Skladište**

![Consumptions list](../Images/ConsumptionsList.png)

## Radnje

Dokumenti potrošnje **ne mogu se ručno kreirati** na ovoj stranici (nije dostupan [akcijski gumb](../../../Zajednicko/UI/AkcijskiGumb.md)). Sustav ih automatski stvara iz modula [**Izvedba**](../../Proizvodnja/Dokumenti/Izvedba.md) tijekom evidentiranja potrošnje za proizvodni nalog. Više informacija potražite u dokumentu **[Potrošeno](../../Proizvodnja/Dokumenti/Potroseno.md)**.

Tijek rada:

- Kada proizvodni radnik započne evidentirati potrošnju, sustav automatski kreira dokument u statusu **Nacrt**.
- Nakon završetka procesa [**Izvedbe**](../../Proizvodnja/Dokumenti/Izvedba.md), dokument prelazi u status **Potvrđeno** i prikazuje se u prikazu *Potvrđeno*.

## Pregled dokumenta potrošnje

Dokument potrošnje sadrži:

### Povezani dokumenti

Ako je potrošnja evidentirana za proizvodni nalog, odjeljak **Povezani dokumenti** prikazuje poveznicu na odgovarajući [**Proizvodni nalog**](../../Proizvodnja/Dokumenti/ProizvodniNalozi.md), ako je dostupan.

![Linked production order](../Images/ConsumptionsLinkedDocuments.png)

### Dokument i stavke

Odjeljak **Stavke** prikazuje sve utrošene materijale zajedno s njihovim izvorom i evidentiranim količinama.

![Committed consumption document](../Images/ConsumptionsCommittedDocument.png)

### Brisanje dokumenta potrošnje

Dokumenti potrošnje ne mogu se brisati kako bi se osigurala potpuna sljedivost utroška materijala u proizvodnji. Po potrebi ih je moguće stornirati.

## Izbornik

Izbornik pruža dodatne radnje dostupne na ovoj stranici.

Dostupne radnje:

- **Kreiraj novi storno**

Više informacija potražite u dokumentu [**Radnje izbornika**](../../../Zajednicko/Koncepcije/RadnjeIzbornika.md).