# Ceniki materialov

**Ceniki materialov** so osrednji vir resnice za **neto cene materialov** v določenem obdobju veljavnosti. Omogočajo:
- dosledno cenitev v procesih **nabave, proizvodnje in upravljanja zalog**
- časovno odvisne spremembe cen z uporabo **Velja od** / **Velja do**
- neobvezne **količinske razpone**, ki na osnovno ceno uporabijo odstotkovne prilagoditve

Ta zaslon se uporablja za ustvarjanje in vzdrževanje cenikov po vrsti materiala, nastavitev osnovne neto cene (100 %) ter konfiguracijo razponov, ki samodejno izračunajo dejansko neto ceno za določene količine naročila.

Za dostop do tega zaslona pojdite na  
**Sredstva / Materiali / Ceniki materialov** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Shema

### Glava cenika

| Polje | Opis |
|------|------|
| **Ime** | Prikazno ime cenika materialov (obvezno). |
| **Velja od** | Datum začetka veljavnosti cenika. |
| **Velja do** | Datum konca veljavnosti cenika. |

### Podrobnosti cenika

| Polje | Opis |
|------|------|
| **Tip** | Razvrstitev materiala (npr. *Surovine*, *Polizdelki*, *Repro materiali*). |
| [**Material**](../Domena/Materiali.md) | Konkreten material, za katerega velja cena. |
| **Neto cena postavke 100 %** | Osnovna neto cena materiala brez popustov. |
| **Razponi** | Neobvezna pravila količinske cenitve, ki določajo popuste ali prilagoditve. |
| **Razpon od / Razpon do** | Količinski interval, za katerega velja pravilo. |
| **Odstotek (%)** | Odstotek osnovne cene, ki se uporabi za razpon. |
| **Neto cena postavke** | Izračunana neto cena za določen razpon. |

## Upravljanje

Za dostop do seznama cenikov materialov pojdite na:

**Sredstva / Materiali / Ceniki materialov**

Seznam prikazuje:
- vse obstoječe cenike materialov
- njihova **obdobja veljavnosti**
- gumb **Podrobnosti** za upravljanje cen materialov

Seznam je mogoče filtrirati po:
- **Tipu**
- **Vrednosti**

![Ceniki materialov](../Images/MaterialsPriceListsList.png "Ceniki materialov")

Klik na **ime cenika** odpre zaslon za **urejanje**.

![Urejanje cenika materialov](../Images/MaterialsPriceListsNew.png "Urejanje cenika materialov")

Klik na gumb **Podrobnosti** odpre stran s podrobnostmi cenitve.

![Podrobnosti cenika materialov](../Images/MaterialsPriceListsDetailsList.png "Podrobnosti cenika materialov")

## Dejanja

Glede na trenutni zaslon [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md) ponuja različne možnosti.

### Na strani Ceniki materialov
- **Novo**
- **Kopiraj**

### Na strani Podrobnosti
- **Novo**
- **Uvoz**

## Ustvarjanje novega cenika materialov

1. Kliknite **Novo** na zaslonu *Ceniki materialov*.
2. Vnesite:
   - **Ime**
   - **Velja od**
   - **Velja do**
3. Kliknite **Dodaj**, da shranite glavo cenika.

   ![Nov cenik materialov](../Images/MaterialsPriceListsNew.png)

4. Kliknite gumb **Podrobnosti**, da upravljate cene materialov.

   ![Gumb Podrobnosti](../Images/MaterialsPriceListsDetailsButton.png)

5. Z uporabo akcijskega gumba dodajte enega ali več **materialov**.

   ![Dodajanje podrobnosti cenika materialov](../Images/MaterialsPriceListsDetailsNew.png)

6. Vnesite:
   - **Tip**
   - **Material**
   - **Neto cena postavke 100 %**

7. (Neobvezno) Dodajte **Razpone**, da določite količinske popuste.  
   Na primer: pri naročilu med *10 in 50 enotami* se cena zmanjša na *95 %* osnovne cene.

8. Shranite podrobnosti.  
   Cenik materialov je zdaj aktiven za izbrano obdobje.

## Meni

Meni v pogledu **Podrobnosti** omogoča:
- izvoz podrobnosti cen materialov (vključno z razponi) v **CSV**

## Brisanje

Cenik materialov je mogoče izbrisati **samo, če ne vsebuje nobenih podrobnosti materialov**.

Če v razdelku **Podrobnosti** obstajajo materiali:

1. Odprite **Podrobnosti**
2. Kliknite vrstico materiala
3. Izbrišite podrobnost cenitve materiala
4. Postopek ponovite, dokler ne ostane nobena podrobnost

Ko je cenik prazen, ga lahko izbrišete na zaslonu za urejanje.

---
