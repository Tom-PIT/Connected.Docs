<!-- app_route: /work-items-costs -->
<!-- app_label: Stroški opravil -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Viri/Pregledi/StroskiOpravil.md -->
<!-- canonical_source_title: Stroški opravil -->

# Stroški opravil
Pogled **Stroški opravil** omogoča vpogled v **dejanske stroške izdelave posameznega opravila**, na podlagi porabljenih materialov, vloženega dela in dodatnih stroškov. Namenjen je predvsem analizi [proizvodnih nalogov](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md) in [vzdrževalnih nalogov](../../Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md) ter razumevanju porazdelitve stroškov in uspešnosti.

Za dostop do **Stroškov opravil** pojdite na **Viri / Stroški opravil** v [navigaciji](../../../Skupno/UI/Navigacija.md).

![Stroški opravil – seznam](../Images/WorkItemsCostsSL.png)

> [!NOTE]
> Če v filtru **Pogled** izberete **Procese**, zaslon prikazuje **[ocenjene stroške verzij procesov](../../Proizvodnja/Analiza/AnalizaStroskaVerzije.md)** namesto dejanskih stroškov proizvodnih ali vzdrževalnih nalogov.

## Seznam stroškov opravil

Seznam prikazuje vsa opravila znotraj izbranega časovnega obdobja.

Vsaka vrstica predstavlja **eno opravilo**, običajno povezano s proizvodnim ali vzdrževalnim nalogom, in prikazuje:
- referenco opravila,
- datum nastanka,
- **strošek na enoto**,
- vizualne indikatorje spremembe stroška glede na prejšnje obdobje.
Filtri omogočajo omejevanje rezultatov glede na:

- **datum**,
- **pogled** (proizvodni nalogi / vzdrževalni nalogi).

Klik na opravilo odpre podroben pregled stroškov.

## Podrobnosti stroškov opravila

Izbira opravila odpre podroben pogled z natančno analizo stroškov.

![Podrobnosti stroškov opravila](../Images/WorkItemsCostsDetailsSL.png)

### Pregled stroškov

Na vrhu zaslona so prikazani ključni kazalniki:

- **Strošek na enoto**,
- **trend stroška** v primerjavi s preteklimi vrednostmi,
- **distribucija stroškov** (material / delo),
- **kazalniki uspešnosti**, kot sta:
  - **Najboljše**,
  - **Najslabši** prispevek.

Prikažejo se tudi vsi povezani dokumenti (npr. proizvodni ali vzdrževalni nalogi) za referenco.

![Stroški opravil – povezani dokumenti](../Images/WorkItemsLinkedDocumentsSL.png "Povezani dokumenti")

### Materiali

Razdelek **Materiali** prikazuje vse materiale, uporabljene pri izdelavi opravila:

- naziv materiala in tip,
- porabljena količina,
- strošek,
- **delež stroškov** v odstotkih.

Razširitev vrstice materiala prikaže dodatne podrobnosti, kjer so na voljo.

### Delo

Razdelek **Delo** prikazuje vložen čas zaposlenih v opravilo:
- zaposleni,
- trajanje dela,
- izraČunan strošek dela,
- **delež stroškov**.

Stroški dela se izraČunajo na podlagi nastavitev **Postavk virov**.

### Stroški

V tem razdelku so prikazani vsi dodatni stroški, povezani z opravilom (na primer namestitev, prevoz, storitve).

Če stroški niso zabeleženi, je razdelek prikazan kot prazen z obvestilom *Ni stroškov*.

## Opombe o uporabi

- Stroški opravil so **samo za branje** in jih sistem izračuna samodejno.
- Natančnost podatkov je odvisna od pravilne konfiguracije:
  - postavk virov,
  - cen materialov,
  - beleženja dela.
- Ta pogled najpogosteje uporabljajo vodje proizvodnje in analitiki.

## Meni

Meni omogoča dodatna dejanja, ki so na voljo na tej strani.

Na voljo so naslednja dejanja:

- **Izvoz v PDF**
- **Ponovno izračunaj** – ponovno izračuna stroške izbranega opravila ali verzije procesa na podlagi trenutnih materialov, virov in stroškov.

Za več informacij o dejanjih v meniju glejte [**Dejanja menija**](../../../Skupno/Koncepti/DejanjaMenija.md).

