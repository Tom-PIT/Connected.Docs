# Dnevnice

Dnevnice določajo **dnevne zneske**, ki se izplačujejo zaposlenim ob službenih poteh.
Najpogosteje se uporabljajo v dokumentih [**Potni nalogi**](../Dokumenti/PotniNalogi.md) za samodejni izračun prehranskih in drugih dnevnih nadomestil glede na destinacijo.

Za dostop do **Dnevnic** pojdite na **Viri / Upravljanje / Dnevnice** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Država** | Država, za katero velja dnevnica. |
| **Poštna številka** | Neobvezna poštna številka ali referenca mesta (na primer: *1010 – Dunaj*). |
| **Znesek** | Polni dnevni znesek dnevnice. |
| **Znesek polovične** | Znižani znesek, ki se običajno uporablja pri delnih dnevih potovanja. |
| **Znesek znižane** | Dodatno znižan znesek dnevnice, odvisen od zakonskih ali internih pravil podjetja. |

## Pregled

Zaslon **Dnevnice** prikazuje seznam vseh definiranih dnevnic.
Vsak vnos predstavlja državo (in po potrebi mesto ali poštno številko) s pripadajočimi zneski dnevnic.

Seznam omogoča iskanje in hitro navigacijo.

Klik na vnos ga odpre za urejanje.

![Seznam dnevnic](../Images/SubsistenceAllowancesList.png "Seznam dnevnic")

## Ustvarjanje dnevnice

Za ustvarjanje nove dnevnice:

1. Kliknite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md).
2. Izberite **Državo**.
3. Po potrebi določite **Poštno številko** ali mesto.
4. Vnesite **Znesek**, **Znesek polovične** in **Znesek znižane**.
5. Kliknite **Dodaj** za shranjevanje.

![Dodaj dnevnico](../Images/SubsistenceAllowancesNew.png "Dodaj dnevnico")

## Urejanje dnevnic

Klik na obstoječo dnevnico jo odpre v načinu urejanja, kjer je mogoče prilagoditi zneske glede na spremembe zakonodaje ali pravil podjetja.

Spremembe stopijo v veljavo takoj in se uporabljajo pri izračunu dnevnic v dokumentih, povezanih s službenimi potmi.

## Brisanje

Dnevnice je mogoče izbrisati v pogledu za urejanje.  
Za brisanje kliknite **Izbriši** in potrdite dejanje.

## Uporaba v drugih modulih

Dnevnice se primarno uporabljajo v:

- **[Potni nalogi](../Dokumenti/PotniNalogi.md)** — samodejni izračun dnevnic med službenimi potmi

To zagotavlja dosledno in centralizirano upravljanje pravil za povračila stroškov službenih poti v celotnem sistemu.