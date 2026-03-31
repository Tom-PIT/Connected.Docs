# Relacije

Relacije določajo **vnaprej definirane poti**, ki se uporabljajo pri ustvarjanju potnih nalogov.  
Shranjujejo začetni in ciljni naslov skupaj s podatki o razdalji, kar omogoča dosledno in ponovljivo ustvarjanje potnih nalogov.

Za dostop do **Relacij** pojdite na **Viri / Upravljanje / Relacije** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Ime** | Opisni naziv relacije (na primer: *Glavna pisarna – Alpine Timber Supply d.o.o.*). |
| **Začetek** | Začetni naslov poti, običajno glavna lokacija podjetja. |
| **Relacija** | Ciljni naslov poti. |
| **Razdalja** | Razdalja med začetkom in ciljem. |
| [**Merska enota**](../../../Skupno/Upravljanje/MerskeEnote.md) | Enota, uporabljena za razdaljo (na primer kilometri). |

## Seznamski pogled

Seznamski pogled prikazuje vse konfigurirane relacije.

![Seznam relacij](../Images/TravelDestinationsList.png "Seznam relacij")

Vsaka vrstica prikazuje:
- naziv relacije,
- začetni in ciljni naslov,
- izračunano razdaljo z enoto.

Klik na relacijo jo odpre za urejanje.

## Dejanja

### Dodaj relacijo

1. Kliknite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje nove relacije.
2. Izpolnite polja, opisana v razdelku [**Shema**](#shema).
3. Kliknite **Dodaj** za shranjevanje.

![Dodaj relacijo](../Images/TravelDestinationsNew.png "Dodaj relacijo")

### Uredi relacijo

1. Kliknite relacijo na seznamu.
2. Spremenite zahtevana polja.
3. Kliknite **Shrani**.

> [!NOTE]
> - Relacije je mogoče ponovno uporabiti v več potnih nalogih.
> - Spremembe relacije vplivajo na prihodnje potne naloge, ne pa na že ustvarjene.

## Brisanje

Relacije je mogoče izbrisati v pogledu za urejanje. Izbrisane relacije niso več na voljo pri ustvarjanju novih potnih nalogov.