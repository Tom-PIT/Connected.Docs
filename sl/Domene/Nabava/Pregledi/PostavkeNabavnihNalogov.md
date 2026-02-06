# Postavke nabavnih nalogov

Pogled **Postavke nabavnih nalogov** prikazuje agregiran seznam vseh postavk iz vhodnih dokumentov [**Nabavni nalogi**](../Dokumenti/NabavniNalogi.md).
Ta pogled je izključno analitičen — **ne omogoča** ustvarjanja ali spreminjanja nabavnih nalogov.

Za dostop do tega pregleda pojdite na **Nabava / Pregledi / Postavke nabavnih nalogov** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

![Postavke nabavnih nalogov](../Images/SupplyOrderDetailsView.png "Postavke nabavnih nalogov")

## Kazalniki

Na vrhu seznama **Postavke nabavnih nalogov** sistem prikazuje ključne kazalnike, ki povzemajo trenutno filtrirane postavke. Ti kazalniki omogočajo hiter pregled stanja postavk nabavnih nalogov, kar je posebej uporabno pri upravljanju večjih količin vhodnih materialov.

S klikom na posamezen kazalnik se seznam samodejno filtrira tako, da prikaže samo ustrezne postavke.

![Kazalniki postavk nabavnih nalogov](../Images/SupplyOrderDetailsViewIndicators.png "Kazalniki postavk nabavnih nalogov")

Prikazani so naslednji kazalniki:

- **Število vseh postavk** – Skupno število postavk nabavnih nalogov, ki ustrezajo trenutnim filtrom.
- **Število zaprtih postavk** – Postavke, ki so bile v celoti dobavljene, ali postavke, katerih dobavni rok je potekel in se zato štejejo kot zaključene.
- **Število odprtih postavk** – Postavke, ki še čakajo na dobavo, bodisi niso bile dobavljene ali pa so bile dobavljene le delno.

## Seznam postavk nabavnih nalogov

Vsaka vrstica v seznamu predstavlja **eno posamezno postavko nabavnega naloga**, vključno z naslednjimi podatki:

- **Material** – Material, ki se nabavlja (naziv, šifra in povezava do dokumenta nabavnega naloga)
- **Podatki o dobavi** – Dobavitelj in predviden datum dobave
- **Količina** – Naročena količina
- **Dostavljena količina** – Prikaz potrjene in nepotrjene dobave  
  - Primer: *50 m (Potrjeno: 50 m / Nepotrjeno: 0 m)*

![Vrstica postavke nabavnega naloga](../Images/SupplyOrderDetailsViewRow.png "Vrstica postavke nabavnega naloga")

Na ta način lahko hitro preverite, kaj je bilo že dobavljeno, kaj je še odprto ter katere postavke so dosegle ali presegle datum dobave.

## Filtri

Leva stranska vrstica vsebuje filtre, ki omogočajo analizo in lažje iskanje postavk nabavnih nalogov:

- **Datum dobave** – Filtriranje po predvidenem datumu dobave
- **Datumi dokumentov** – Filtriranje po časovnem obdobju datumov nabavnih nalogov
- **Stanje postavke**  
  - *Vsi*  
  - *Na voljo*  
  - *V zaključevanju*  
  - *Zaključen*
- **Stanje dokumenta**  
  - *Na voljo*  
  - *Zaključen*
- **Dobavitelj** – Filtriranje postavk po dobavitelju

Ti filtri omogočajo zoženje rezultatov na materiale, dobavne roke in statuse, ki so relevantni za vaše planiranje.

## Namen

Ta pregled je namenjen:

- Spremljanju prihajajočih dobav  
- Preverjanju, katere postavke nabavnih nalogov so v celoti ali delno dobavljene  
- Pregledu razmerja med potrjenimi in nepotrjenimi dobavljenimi količinami  
- Sledenju vhodnim materialom po posameznih dobaviteljih  
- Podpori planiranju nabave in pripravi skladišča  

Pregled dopolnjuje zaslon dokumentov [**Nabavni nalogi**](../Dokumenti/NabavniNalogi.md), saj se osredotoča na **postavke**, ne na dokumente.