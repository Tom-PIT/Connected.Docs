<!-- app_route: /production/documents/productions --> 
<!-- app_label: Proizvodnje --> 
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Dokumenti/Proizvodnje.md --> 
<!-- canonical_source_title: Proizvodnje -->

# Proizvodnje

Dokument **Proizvodnja** beleži postavke, ki so bile proizvedene med izvajanjem **proizvodnega naloga**. Dokumenti proizvodnje se ustvarijo **samodejno** v modulu [**Izvajanje**](../../Proizvodnja/Dokumenti/Izvedba.md), ko proizvodni delavec zabeleži proizvedene količine. Proizvodnje povečujejo zalogo proizvedenih izdelkov in zagotavljajo sledljivost tega, kar je bilo izdelano.

Za vnos proizvedenih količin na proizvodni strani glejte **[Izvajanje](../../Proizvodnja/Dokumenti/Izvedba.md)** (Izhodi). Izhodi so tesno povezani s to stranjo: beleženje proizvedenih postavk v proizvodnji ustvari ustrezen dokument proizvodnje v logistiki. Za določanje izhodov v procesih glejte **[Izhodi](../../Proizvodnja/Upravljanje/Izhodi.md)**.

Za dostop do **Proizvodnje** pojdite na **Logistika / Dokumenti / Proizvodnje** v [navigaciji](../../../Skupno/UI/Navigacija.md).

## Shema

<details open>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|------|------|
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran enolični identifikator dokumenta proizvodnje. |
| **Ustvarjeno** | Datum in čas, ko je bil dokument ustvarjen. |
| [**Skladišče**](../Upravljanje/Skladisca.md) | Skladišče, v katerem so bile knjižene proizvedene postavke. |

</details>

<details>
  <summary><strong>Postavke</strong></summary>

| Polje | Opis |
|------|------|
| [**Material**](../../Sredstva/Materiali.md) | Proizvedena postavka (najpogosteje [izdelek](../../Sredstva/Materiali/Izdelki.md) ali [polizdelek](../../Sredstva/Materiali/Polizdelki.md)). |
| **Količina** | Zabeležena proizvedena količina za posamezno postavko. |

</details>

## Seznam dokumentov proizvodnje

Stran **Proizvodnje** prikazuje vse dokumente proizvodnje, ustvarjene prek izvajanja. Seznam lahko filtrirate z:

- **Datumi dokumentov**
- **Pogled**
  - *Osnutki* — proizvodnja v teku (še se beleži v izvajanju)
  - *Potrjeni* — zaključen dokument proizvodnje
- **Skladišče**

![Seznam proizvodnje](../Images/ProductionsList.png "Seznam proizvodnje")

## Dejanja

Dokumentov proizvodnje **ni mogoče ustvariti ročno** na tej strani (ni [akcijskega gumba](../../../Skupno/UI/AkcijskiGumb.md)). Ustvarijo se v modulu [**Izvajanje**](../../Proizvodnja/Dokumenti/Izvedba.md) med beleženjem izhodov za proizvodni nalog.

Delovni tok:
- Ko proizvodni delavec začne beležiti izhode, se samodejno ustvari **osnutek** dokumenta proizvodnje.
- Ko je postopek **Izvajanja** zaključen, se dokument premakne v stanje **Objavljeno** in je na voljo za pregled.

## Pregled dokumenta proizvodnje

Klik na šifro dokumenta proizvodnje v seznamu prikaže njegove podrobnosti. Dokument proizvodnje vsebuje:

### Povezani dokumenti

Če je bil izhod zabeležen za proizvodni nalog, razdelek **Povezani dokumenti** prikaže povezavo do povezanega **[Proizvodnega naloga](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md)**.

![Povezani proizvodni nalog](../Images/ProductionsLinkedDocuments.png "Povezani proizvodni nalog")

### Dokument in postavke

Razdelek **Postavke** prikazuje vse proizvedene postavke z njihovimi zabeleženimi količinami.

![Objavljen dokument proizvodnje](../Images/ProductionsCommittedDocument.png "Objavljen dokument proizvodnje")

## Izbrisati dokumente proizvodnje

Dokumentov proizvodnje **ni mogoče izbrisati** iz sistema, saj je potrebno zagotoviti sledljivost proizvedenih postavk. Dokumente je mogoče samo **stornirati**, kot je opisano zgoraj.

## Meni

Meni omogoča dodatna dejanja, ki so na voljo na tej strani.

Na voljo je naslednje dejanje:

- **Ustvari storno** (samo za objavljene dokumente)

Za podrobnosti o dejanjih menija glejte [**Dejanja menija**](../../../Skupno/Koncepti/MeniDejanja.md).
