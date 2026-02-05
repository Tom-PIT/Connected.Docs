# Intrastat

Pogled **Intrastat** omogoča pregled transakcij, ki so predmet poročanja Intrastat. Združuje podatke iz računovodskih in prodajnih dokumentov ter jih prikazuje v obliki, primerni za pregled in poročanje o blagovnem toku med državami članicami EU.

Za dostop do tega zaslona pojdite na **Računovodstvo / Pregledi / Intrastat** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

![Intrastat pogled](../Images/IntrastatView.png)

> [!NOTE]
> Ta pogled je samo za branje. Popravke je treba opraviti v izvornih dokumentih ali ustreznih šifrantih, nato pa se pogled Intrastat samodejno ponovno izračuna.

> [!IMPORTANT]
> Vključene so samo transakcije, ki zajemajo premik blaga med državami članicami EU. Domače transakcije in transakcije z državami zunaj EU niso vključene v poročanje Intrastat.

## Namen pogleda

Ta pogled je namenjen:

- pregledu transakcij, pomembnih za Intrastat
- preverjanju količin, vrednosti in klasifikacij pred poročanjem
- podpori pri pripravi uradnih Intrastat poročil

Vsaka postavka predstavlja združeno Intrastat vrstico, primarno grupirano po **tarifni številki** in **državi partnerici**.

## Filtri

Levi stranski meni omogoča filtriranje Intrastat postavk:

- **Datum**  
  Izbira obdobja poročanja (od–do).

- **Tok blaga**  
  - **Izdaja** – blago poslano v drugo državo članico EU  
  - **Prejem** – blago prejeto iz druge države članice EU  

Ti filtri vplivajo tako na seznam kot tudi na prikazane agregirane vrednosti.

## Pregled seznama

Glavni seznam je grupiran po [**Tarifi**](../Upravljanje/Intrastat/Tarife.md).

Za vsako tarifno številko je mogoče razširiti pogled za prikaz držav partneric in podrobnih podatkov o transakcijah.

### Agregirane vrednosti

Na ravni tarife in države so prikazane naslednje vrednosti:

- **Količina**  
  Prikazana v ustrezni dopolnilni merski enoti (npr. kos).

- **Masa v kilogramih**  
  Skupna neto masa blaga.

- **Fakturirani znesek**  
  Skupna fakturirana vrednost transakcij.

- **Statistična vrednost**  
  Vrednost, uporabljena za statistično poročanje Intrastat.

## Podrobnosti postavke

Razširitev postavke prikaže podrobne informacije za vsako Intrastat vrstico:

- **Dokument** - Sklic na izvorni računovodski dokument.

- **Vrsta posla** - Klasifikacija na podlagi izbrane šifre vrste posla (glej [Vrste poslov](../Upravljanje/Intrastat/VrstaPosla.md)).

- **Vrsta transporta** - Način transporta, uporabljen pri transakciji (glej [Vrsta transporta](../../../Skupno/Upravljanje/VrstaTransporta.md)).

- **Pogoj dobave** - Dobavni pogoj (Incoterms klasifikacija) (glej [Pogoji dobave](../../../Skupno/Upravljanje/PogojiDobave.md)).

- **Lega kraja** - Klasifikacija kraja dobave (glej [Lega kraja](../Upravljanje/Intrastat/LegaKraja.md)).

## Viri podatkov

Intrastat postavke se samodejno ustvarijo iz objavljenih dokumentov, ki izpolnjujejo Intrastat kriterije, kot so:

- izdani računi
- dobavnice
- drugi računovodski dokumenti, ki vključujejo premik blaga med državami članicami EU

Pravilnost tega pogleda je odvisna od pravilne konfiguracije:

- tarif
- dopolnilnih merskih enot
- vrst poslov
- pogojev dobave
- vrst transporta
- lege kraja
