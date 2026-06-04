<!-- app_route: /customer-support/sla -->
<!-- app_label: SLA prijave -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Stranke/Prijave/SLAPrijave.md -->
<!-- canonical_source_title: SLA prijave -->

# SLA prijave

Zaslon **SLA prijave** omogoča pregled prijav, za katere veljajo pravila **Sporazuma o ravni storitev (SLA)**, določena na posameznih **področjih**. Ta pogled uporabnikom pomaga spremljati prijave, pri katerih se:

- **SLA čas za aktiviranje** ali
- **SLA čas za resolucijo**

bliža izteku ali je že presežen.

Za dostop do tega zaslona pojdite na **Stranke / Prijave / SLA prijave** v [navigaciji](../../../Skupno/UI/Navigacija.md).

## Razpoložljivost

Funkcionalnost SLA je odvisna od konfiguracije podjetja.  
Če SLA nastavitve niso omogočene ali če na področjih niso določena SLA pravila, je lahko ta stran prazna.

Prikazane so samo prijave, ki pripadajo področjem z omogočeno SLA konfiguracijo.

> [!IMPORTANT]
> Če področje nima definiranih SLA pravil, se njegove prijave ne bodo prikazale v tem pogledu. Če ne vidite nobenih podatkov, se obrnite na skrbnika sistema.

## Shema

| Polje | Opis |
|------|------|
| **Prijava** | Identifikator in naslov prijave |
| **Področje** | Področje, kateremu prijava pripada |
| **SLA tip** | Aktiviranje ali Resolucija |
| **Čas** | Preostali ali preseženi SLA čas |

## SLA kazalniki

Na vrhu zaslona so prikazane povzetne kartice, ki prikazujejo trenutno stanje SLA:

- **Iztekanje SLA**  
  Prijave, pri katerih se SLA čas približuje meji.

- **Neuspeli SLA**  
  Prijave, pri katerih je bil SLA čas že presežen.

S klikom na posamezni kazalnik se seznam ustrezno filtrira.

> [!NOTE]
> SLA prijave se izračunavajo dinamično glede na nastavitve področij in časovne žige prijav.

## Seznamski pogled

Seznam prikazuje prijave, na katere vplivajo SLA pravila, razvrščene glede na stanje SLA.

Vsaka vrstica vsebuje:

- številko in naslov prijave
- področje
- preostali ali preseženi SLA čas

Seznam je lahko prazen, če ni definiranih SLA pravil ali če nobena prijava ne ustreza kriterijem.

## Filtri

Levi stranski meni omogoča filtriranje seznama:

- **Področje** – omejitev na izbrano področje
- **Pogled**
  - **Aktiviranje**
  - **Resolucija**
- **Iskanje** – iskanje po številki ali naslovu prijave

## Dostop do prijave

S klikom na ime prijave odprete njen podrobni pogled.  Tam lahko prijavo pregledate, dodate komentarje ali spremenite njen status.

Ko je prijava rešena ali ponovno odprta, se samodejno odstrani iz seznama SLA prijav ali prerazvrsti glede na novo stanje.
