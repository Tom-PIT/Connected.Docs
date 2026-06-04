<!-- app_route: /work-items-costs -->
<!-- app_label: StroÅ¡ki opravil -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Viri/Pregledi/StroskiOpravil.md -->
<!-- canonical_source_title: StroÅ¡ki opravil -->

# StroÅ¡ki opravil

Pogled **StroÅ¡ki opravil** omogoÄa vpogled v **dejanske stroÅ¡ke izdelave posameznega opravila**, na podlagi porabljenih materialov, vloÅ¾enega dela in dodatnih stroÅ¡kov. Namenjen je predvsem analizi [proizvodnih nalogov](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md) in [vzdrÅ¾evalnih nalogov](../../Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md) ter razumevanju porazdelitve stroÅ¡kov in uspeÅ¡nosti.

Za dostop do **StroÅ¡kov opravil** pojdite na **Viri / StroÅ¡ki opravil** v [navigaciji](../../../Skupno/UI/Navigacija.md).

![StroÅ¡ki opravil â€“ seznam](../Images/WorkItemsCostsSL.png)

## Seznam stroÅ¡kov opravil

Seznam prikazuje vsa opravila znotraj izbranega Äasovnega obdobja.

Vsaka vrstica predstavlja **eno opravilo**, obiÄajno povezano s proizvodnim ali vzdrÅ¾evalnim nalogom, in prikazuje:

- referenco opravila,
- datum nastanka,
- **stroÅ¡ek na enoto**,
- vizualne indikatorje spremembe stroÅ¡ka glede na prejÅ¡nje obdobje.

Filtri omogoÄajo omejevanje rezultatov glede na:

- **datum**,
- **pogled** (proizvodni nalogi / vzdrÅ¾evalni nalogi).

Klik na opravilo odpre podroben pregled stroÅ¡kov.

## Podrobnosti stroÅ¡kov opravila

Izbira opravila odpre podroben pogled z natanÄno analizo stroÅ¡kov.

![Podrobnosti stroÅ¡kov opravila](../Images/WorkItemsCostsDetailsSL.png)

### Pregled stroÅ¡kov

Na vrhu zaslona so prikazani kljuÄni kazalniki:

- **StroÅ¡ek na enoto**,
- **trend stroÅ¡ka** v primerjavi s preteklimi vrednostmi,
- **distribucija stroÅ¡kov** (material / delo),
- **kazalniki uspeÅ¡nosti**, kot sta:
  - **NajboljÅ¡e**,
  - **NajslabÅ¡i** prispevek.

### Materiali

Razdelek **Materiali** prikazuje vse materiale, uporabljene pri izdelavi opravila:

- naziv materiala in tip,
- porabljena koliÄina,
- stroÅ¡ek,
- **deleÅ¾ stroÅ¡kov** v odstotkih.

RazÅ¡iritev vrstice materiala prikaÅ¾e dodatne podrobnosti, kjer so na voljo.

### Delo

Razdelek **Delo** prikazuje vloÅ¾en Äas zaposlenih v opravilo:

- zaposleni,
- trajanje dela,
- izraÄunan stroÅ¡ek dela,
- **deleÅ¾ stroÅ¡kov**.

StroÅ¡ki dela se izraÄunajo na podlagi nastavitev **Postavk virov**.

### StroÅ¡ki

V tem razdelku so prikazani vsi dodatni stroÅ¡ki, povezani z opravilom (na primer namestitev, prevoz, storitve).  
ÄŒe stroÅ¡ki niso zabeleÅ¾eni, je razdelek prikazan kot prazen z obvestilom *Ni stroÅ¡kov*.

### Skupaj

Na dnu pogleda je prikazan **skupni stroÅ¡ek opravila**, ki vkljuÄuje:

- materiale,
- delo,
- dodatne stroÅ¡ke.

Ta vrednost predstavlja konÄni stroÅ¡ek izdelave ene enote.

## Opombe o uporabi

- StroÅ¡ki opravil so **samo za branje** in jih sistem izraÄuna samodejno.
- NatanÄnost podatkov je odvisna od pravilne konfiguracije:
  - postavk virov,
  - cen materialov,
  - beleÅ¾enja dela.
- Ta pogled najpogosteje uporabljajo vodje proizvodnje in analitiki.

---

