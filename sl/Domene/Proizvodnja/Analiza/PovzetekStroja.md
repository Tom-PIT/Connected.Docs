<!-- app_route: /production/analytics/equipment -->
<!-- app_label: Povzetek stroja -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Proizvodnja/Analiza/PovzetekStroja.md -->
<!-- canonical_source_title: Povzetek stroja -->

# Povzetek stroja

Pogled **Povzetek stroja** nudi pregled delovanja posameznega stroja, vključno z zastoji, proizvodnjo, kakovostjo in OEE (Skupna učinkovitost opreme). Namenjen je vodjem in nadzornikom za hitro oceno učinkovitosti strojev skozi čas.

Do tega pogleda dostopate preko **Proizvodnja / Analiza / Povzetek stroja** v [navigaciji](../../../Skupno/UI/Navigacija.md).

![Povzetek stroja](../Images/EquipmentSummaryView2.png)

> [!TIP]
> Za celovit prikaz delovanja si lahko ogledate tudi **[Povzetek stroja – video vodič](https://www.youtube.com/watch?v=PXPXDL5yL4w)**.

## Filtri

### Stroj  
Izberite stroj ali delovno postajo, za katero želite prikazati analitiko.

## Glava povzetka

Prikazuje ime izbranega stroja ter oceno (če je uporabljena).

## Stanje stroja

Prikazuje trenutno obratovalno stanje stroja:

- **V delovanju** – prikazuje čas cikla (npr. `0 s/kos`)  
- **Zastoj** – prikazuje trajanje aktivnega zastoja  

Oznaka stanja se lahko razlikuje glede na dejansko stanje stroja (npr. *Delo*, *Ustavljen*).

## Kazalnik OEE

Krožni prikaz kazalnika **OEE (Skupna učinkovitost opreme)** v odstotkih (%).

Če za izbrano obdobje ni dovolj podatkov, je vrednost lahko prikazana kot **0 %**.

## Pregled proizvodnje in kakovosti

Pod kazalnikom OEE je prikazana zadnja ali trenutno aktivna proizvodna operacija na izbranem stroju.

Prikaz vključuje:

### Proizvodni nalog in operacija  
- Klikljiv [proizvodni nalog](../Dokumenti/ProizvodniNalogi.md) (npr. `PRO-24-000015`)  
- Opis [operacije](../Upravljanje/Operacije.md)  
- [Material](../../Sredstva/Materiali/README.md), ki se proizvaja (izdelek ali polizdelek)

### Slabi kosi  
Prikaz neustreznih kosov glede na celotno proizvodnjo:
- **Količina** – slabi / proizvedeni  
- **Odstotek** – delež slabih kosov

### Proizvodnja  
Prikaz napredka proizvodnje za trenutno operacijo:
- **Proizvedeno / Planirano**  
- **Odstotek dokončanosti**

Ta del omogoča hiter vpogled v produktivnost in kakovost za izbrani stroj.