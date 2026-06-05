<!-- app_route: /management/warehouse/stock-boundaries -->
<!-- app_label: Meje zaloge -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Logistika/Upravljanje/MejeZaloge.md -->
<!-- canonical_source_title: Meje zaloge -->

# Meje zaloge

Ta šifrant predstavlja **meje zaloge** za posamezne materiale ali izdelke v sistemu. Vsak zapis določa **minimalno** in **maksimalno** dovoljeno količino zaloge za izbran tip materiala, kar pomaga zagotavljati optimalne zalogovne ravni ter preprečuje pomanjkanje ali presežke zaloge.

Za dostop do šifranta **Meje zaloge** pojdite na  **Logistika / Upravljanje / Meje zaloge** v [navigaciji](../../../Skupno/UI/Navigacija.md).

> [!TIP]
> Za celovit prikaz si oglejte video vodič  
> **[Meje zaloge](https://www.youtube.com/watch?v=rcbxvffOBdM)**.

## Shema

| Polje | Opis |
|-------|------|
| **Entiteta** | Material ali izdelek, za katerega veljajo meje zaloge. Prikazan je s šifro in imenom. |
| **Najmanj** | Minimalna dovoljena količina zaloge za izbran material ali izdelek. Ko količina pade pod to vrednost, sistem stanje poudari na **[Nadzorni plošči](../Pregledi/NadzornaPlosca.md)**. |
| **Največ** | Maksimalna dovoljena količina zaloge za izbran material ali izdelek. Ko je ta vrednost presežena, sistem stanje poudari na **[Nadzorni plošči](../Pregledi/NadzornaPlosca.md)**. |

## Upravljanje


### Seznam mej zaloge

Uporabniški vmesnik prikazuje seznam vseh materialov in njihovih določenih mej zaloge. Na levi strani uporabite izbirnik **Tip materiala** za filtriranje po kategorijah, filter **Oznake** pa omogoča dodatno zoženje prikazanih zapisov.

Vsak zapis prikazuje **Entiteto**, **Najmanj** in **Največ** količino zaloge.  
Če vrednost za **Najmanj** ali **Največ** ni določena, sistem privzeto prikaže **0**.

Meje zaloge lahko urejate **neposredno v seznamu** — kliknite številsko vrednost v stolpcu **Najmanj** ali **Največ**, vnesite novo vrednost, sprememba pa se samodejno shrani.

![Meje zaloge](../Images/StockBoundaries.png "Meje zaloge")

Vsaka količina zaloge, ki pade **pod minimalno** ali preseže **maksimalno** vrednost, je vizualno označena na **[Nadzorni plošči](../Pregledi/NadzornaPlosca.md)**.

## Dejanja

### Uvoz

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md), da se prikaže dejanje **Uvoz**.

Dejanje **Uvoz** omogoča množično ustvarjanje ali posodabljanje zapisov mej zaloge z uporabo **CSV** datoteke. Pripravite datoteko z zahtevanimi polji (**Entiteta**, **Najmanj**, **Največ**) in jo naložite za samodejno zapolnitev seznama.

![Uvoz mej zaloge](../Images/StockBoundariesImport.png "Uvoz mej zaloge")

Kliknite **Prekliči**, da se vrnete na seznam brez uvoza.

#### Primer strukture CSV

```csv
Material Code;Material type;Min;Max;
M-0001;1;10;100;
M-0002;2;0;250;
M-0003;3;50;0;
M-0004;4;20;80;
```

## Meni

Meni omogoča dodatna dejanja, ki so na voljo na tej strani.

Na voljo je naslednje dejanje:

- **Izvoz v CSV**

Za podrobnosti o dejanjih menija glejte [**Dejanja menija**](../../../Skupno/Koncepti/MeniDejanja.md).
