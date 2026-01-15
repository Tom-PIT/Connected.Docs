# Človeški viri

Človeški viri določajo, katere osebe ali vloge so potrebne za izvajanje posamezne operacije v procesu. Vsak vnos predstavlja planirani čas za osebo, delovno mesto ali vir, ki sodeluje pri delu.

Za dostop do te strani odprite različico procesa v **Proizvodnja / Upravljanje / [Procesi](Procesi.md)**, kliknite **[Operacije](Operacije.md)** in nato za izbrano operacijo izberite **Človeški viri**.

![Gumb Človeški viri](../Images/HumanResourcesButton.png "Gumb Človeški viri")

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Human and Non-human resources](https://www.youtube.com/watch?v=iq7fQiPh_i4)**.

## Shema

| Polje | Opis |
|------|------|
| **Tip** | Določa vrsto vira, ki se uporablja:<br>• **Kompetenca**<br>• [**Delovno mesto**](../Sifranti/SistematizacijaDelovnihMest.md)<br>• [**Vir**](../Sifranti/Viri.md) |
| **Vir** | Izbrana kompetenca, delovno mesto ali vir glede na izbrani **Tip**. |
| **Tip kalkulacije** | Določa način izračuna planiranega časa:<br>• **Dinamično** – čas se izračuna glede na količino proizvodnje ali druge parametre procesa.<br>• **Dinamično na serijo** – čas se izračuna glede na posamezno serijo.<br>• **Statično** – količina je fiksna. |
| **Količina** | Planirani čas za ta človeški vir, vnesen kot trajanje (dnevi, ure, minute, sekunde, milisekunde). |
| **Oznake** | Neobvezne oznake za razvrščanje ali filtriranje človeških virov. |
| **Neobvezno** | Če je omogočeno, vir ni obvezen za izvedbo operacije. |

## Seznam

Seznam človeških virov prikazuje vse dodelitve človeških virov za izbrano operacijo, vključno z:

- **Vir** – ime kompetence, delovnega mesta ali vira  
- **Tip** – izbrani tip vira  
- **Tip kalkulacije**  
- **Količina** – planirano trajanje  

Za filtriranje po imenu vira uporabite polje **Iskanje**.

![Seznam človeških virov](../Images/HumanResourcesList.png "Seznam človeških virov")

## Ustvarjanje novega človeškega vira

1. Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md) v spodnjem desnem kotu in izberite **Nov** (ali možnost kopiranja, če je na voljo).
2. Izpolnite polja:

   - **Tip** – Kompetenca, Delovno mesto ali Vir  
   - **Vir** – konkreten element glede na izbrani tip  
   - **Tip kalkulacije** – način izračuna časa (npr. Dinamično)  
   - **Količina** – planirano trajanje (d / h / min / s / ms)  
   - **Oznake** – (neobvezno) klasifikacijske oznake  
   - **Neobvezno** – omogočite, če vir ni obvezen

   ![Dodaj človeški vir](../Images/HumanResourcesNew.png "Dodaj človeški vir")

3. Kliknite **Dodaj**, da shranite vnos.

## Urejanje človeškega vira

1. Kliknite vrstico vira v seznamu, da odprete stran za urejanje.
2. Po potrebi prilagodite **Tip**, **Vir**, **Tip kalkulacije**, **Količino**, **Oznake** ali **Neobvezno**.
3. Kliknite **Shrani**.

## Brisanje

Vnos človeškega vira lahko izbrišete na strani za urejanje s klikom na **Izbriši**. Po potrditvi je vnos odstranjen iz operacije.
