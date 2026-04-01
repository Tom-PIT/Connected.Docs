# Zaloga glavne knjige

Pogled **Zaloga glavne knjige** omogoča **finančni posnetek vrednosti zaloge** na določen dan, na podlagi **knjiženih temeljnic, povezanih z zalogo**. Prikazuje **denarno vrednost zaloge**, ne pa fizičnih količin.

Gre za **analitični pogled samo za branje**, namenjen računovodstvu in poročanju.

Do tega pogleda dostopate prek **Računovodstvo / Glavna knjiga / Pregledi / Zaloga** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

![Zaloga glavne knjige](../Images/StockViewLedger.png "Zaloga glavne knjige")

> [!NOTE]  
> Ta pogled predstavlja **vrednotenje zaloge na podlagi glavne knjige** in je ločen od pogledov zaloge v logističnem modulu.

## Uporaba pogleda

Pogled **Zaloga glavne knjige** se običajno uporablja za:

- pregled **finančne vrednosti zaloge** na določen dan,
- preverjanje **knjižb zaloge v glavni knjigi**,
- podporo pri **zaključkih obdobij in usklajevanjih**,
- primerjavo vrednosti zaloge med različnimi datumi.

Prikazani zneski temeljijo na **knjiženih premikih zaloge** in pripadajočih računovodskih temeljnicah.

## Vrednotenje po datumu

Koledar na vrhu zaslona omogoča izbiro določenega datuma.

- Izbrani datum določa **rez preseka vrednotenja**
- Ob spremembi datuma se vrednosti **ponovno izračunajo na izbrani dan**
- Upoštevane so samo knjižbe **do vključno izbranega datuma**

To omogoča pregled **zgodovinskih vrednosti zaloge** in primerjave med obdobji.

## Filtri

Filtri na levi strani omogočajo natančnejši prikaz podatkov:

- **Izbira datuma (koledar)** – določa datum vrednotenja zaloge.
- **Pogled** – filtriranje po tipu materiala:
  - Izdelki
  - Polizdelki
  - Surovine
  - Repro materiali
- **Oznake** – filtriranje materialov glede na dodeljene oznake.

## Povzetki

Na vrhu zaslona so prikazane povzetne kartice:

- **Skupni znesek** – skupna vrednost zaloge na izbrani datum.
- **Skupni znesek po tipu materiala** – združena vrednost po kategorijah materialov.

## Vsebina seznama

Seznam prikazuje:

- **Material** – šifra in naziv materiala.
- **Znesek** – knjigovodska vrednost materiala na izbrani datum.

S klikom na **naziv materiala** se odpre pripadajoč pogled **[Zaloga po materialu](../../Logistika/Pregledi/Zaloga.md#pogled-zaloge-po-materialu)**.

> [!NOTE]  
> Ker ta pogled temelji na glavni knjigi, se lahko vrednosti razlikujejo od logistične zaloge, če knjižbe manjkajo, so zakasnjene ali še niso potrjene.

## Meni

**Meni** v zgornjem desnem kotu omogoča:

- **Tiskanje** – izpis trenutnega pogleda.
- **Izvoz CSV** – izvoz podatkov v CSV datoteko za nadaljnjo analizo.
