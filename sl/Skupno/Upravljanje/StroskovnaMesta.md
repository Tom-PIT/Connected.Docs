<!-- app_route: /management/common-types/cost-centers -->
<!-- app_label: Stroškovna mesta -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Skupno/Upravljanje/StroskovnaMesta.md -->
<!-- canonical_source_title: Stroškovna mesta -->

# Stroškovna mesta
Šifrant **Stroškovna mesta** opredeljuje oddelke ali funkcije, ki ustvarjajo stroške, vendar ne prihodkov, kot so kadrovska služba ali podporne ekipe. Čeprav te enote ne ustvarjajo dobička, imajo ključno vlogo pri nemotenem delovanju podjetja. Z definiranjem stroškovnih mest in dodeljevanjem stroškov sistem zagotavlja preglednost porazdelitve stroškov po podjetju.

Ta stran je na voljo v domenah **Prodaja** in **Nabava**. Za dostop pojdite na **Upravljanje / Stroškovna mesta** v [**navigaciji**](../../Skupno/UI/Navigacija.md).

## Shema
| Polje | Opis |
|------|------|
| **Šifra** | Kratek interni identifikator stroškovnega mesta (obvezno). Na primer **HR** za kadrovsko službo. |
| **Ime** | Polno opisno ime stroškovnega mesta (obvezno). |

## Upravljanje

### Seznamski pogled
Seznamski pogled prikazuje vsa evidentirana stroškovna mesta skupaj z njihovim **imenom** in **šifro**.

![Stroškovna mesta](../Images/CostCenters.png "Seznam stroškovnih mest")

Za filtriranje stroškovnih mest po imenu ali kodi lahko uporabite **iskalno vrstico**.

## Dejanja

### Dodaj novo stroškovno mesto
Kliknite [**akcijski gumb**](../UI/AkcijskiGumb.md), da odprete obrazec za ustvarjanje in dodate novo stroškovno mesto.

![Dodaj novo stroškovno mesto](../Images/CostCentersNew.png "Dodaj stroškovno mesto")

### Urejanje stroškovnega mesta
Kliknite katerikoli vnos na seznamu, da odprete zaslon za urejanje, kjer lahko prilagodite **šifro** ali **ime**.

### Brisanje
Kliknite **Izbriši** na zaslonu za urejanje, da odprete potrditveno pogovorno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se zapis trajno odstrani; sicer sistem ohrani obstoječe stanje.

> [!NOTE]  
> Stroškovno mesto je mogoče izbrisati le, če ni uporabljeno v dokumentih ali drugih sistemskih entitetah.
