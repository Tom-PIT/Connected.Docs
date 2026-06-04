# Dejanja menija

Številni zasloni omogočajo dodatna dejanja prek **menija**, ki se nahaja v zgornjem desnem kotu strani.

Razpoložljiva dejanja so odvisna od trenutnega zaslona in od tega, ali je meni odprt na **seznamu** ali v **podrobnostih dokumenta**.

## Meni na seznamih

Ko je meni uporabljen na seznamu, se dejanja izvajajo nad zapisi, ki so trenutno prikazani.

Primeri:

* Tiskanje filtriranega seznama računov
* Izvoz trenutnega seznama v CSV ali PDF
* Odpiranje masovnega procesiranja za več zapisov

Rezultat je odvisen od trenutno uporabljenih filtrov in prikazanih podatkov.

## Meni v podrobnostih dokumenta

Ko je meni uporabljen v podrobnostih dokumenta, se dejanja izvajajo samo nad trenutno odprtim dokumentom.

Primeri:

* Tiskanje dokumenta
* Izvoz dokumenta
* Pošiljanje dokumenta po e-pošti
* Vrnitev dokumenta v osnutek
* Storniranje dokumenta

## Pogosta dejanja menija

### Tiskanje

Natisne trenutni dokument ali seznam.

### Izvoz

Izvozi trenutni dokument ali seznam.

Odvisno od zaslona so lahko na voljo naslednje izvozne oblike:

* PDF
* CSV
* XML

> [!NOTE]
> Izvozi seznamov običajno vključujejo vse zapise, ki se ujemajo s trenutnimi filtri, izvozi dokumentov pa vključujejo podrobnosti o trenutno odprtem dokumentu.

### Uvoz postavk

Uvozi postavke dokumenta iz zunanje datoteke.

### Izbris vseh postavk

Odstrani vse postavke iz trenutnega dokumenta.

### Vrni v osnutek

Vrne potrjen dokument v stanje **Osnutek**, kar omogoča nadaljnje urejanje.

Razpoložljivost je odvisna od vrste dokumenta in njegovega trenutnega stanja.

### Storniraj dokument

Ustvari [storno dokument](../../Domene/Logistika/Dokumenti/Storno.md), ki razveljavi učinke izvornega dokumenta.

Razpoložljivost je odvisna od vrste dokumenta.

### Pošlji po e-pošti

Pošlje trenutni dokument po e-pošti.

### Odpri masovno procesiranje

Omogoča izvajanje dejanj nad več izbranimi zapisi hkrati.

Razpoložljiva dejanja so odvisna od vrste dokumenta.

Odpre način, v katerem je mogoče izbrati več zapisov za paketno obdelavo. Po izboru zapisov je nad njimi mogoče izvajati različna dejanja prek [akcijskega gumba](../UI/AkcijskiGumb.md).

### Stanje zaloge po povprečnem znesku

Izvozi trenutno stanje zaloge v datoteko CSV.

Izvoz vključuje količine in vrednosti zaloge za posamezen material skupaj s povprečnim zneskom, uporabljenim za vrednotenje zaloge.

Izvoz običajno vključuje:

- Skladišče
- Šifro in naziv materiala
- Tip materiala
- Količine (začetna, prejeta, izdana, končna)
- Vrednosti (začetna, prejeta, izdana, končna)
- Povprečni znesek

Izvoz je namenjen analizi zaloge, poročanju in vrednotenju zaloge.

## Dodatna dejanja

Nekateri dokumenti vsebujejo dodatna dejanja menija, ki so specifična za posamezno vrsto dokumenta. Ta dejanja so opisana v dokumentaciji posameznega dokumenta.
