# Izhodi

Izhodi določajo materiale, ki nastanejo med **operacijo** znotraj verzije procesa. Vsak izhod opredeljuje nastali material, njegovo količino in morebitne oznake za razvrščanje.

Za dostop do te strani odprite verzijo procesa v **Proizvodnja / Upravljanje / [Procesi](Procesi.md)**, nato kliknite **[Operacije](Operacije.md)** in pri izbrani operaciji izberite **Izhodi**.

![Gumb Izhodi](../Images/OutputsButton.png "Gumb Izhodi")

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Vhodi in izhodi](https://www.youtube.com/watch?v=647sT70tNZc)**.

## Shema

| Polje | Opis |
|------|------|
| **Entiteta** | Izberite, ali se izhod nanaša na **[Material](../../Sredstva/Domena/Materiali.md)** ali na oznako materiala. |
| **Tip** | Kategorija materiala, ki nastane: <br>• **[Izdelki](../../Sredstva/Materiali/Izdelki.md)**<br>• **[Surovine](../../Sredstva/Materiali/Surovine.md)**<br>• **[Repro materiali](../../Sredstva/Materiali/ReproMateriali.md)**<br>• **[Polizdelki](../../Sredstva/Materiali/Polizdelki.md)** |
| **Material** | Konkreten material ali izdelek, ki nastane v operaciji. |
| **Tip kalkulacije** | Določa način izračuna količine: **Dinamično** ali **Statično**. |
| **Količina** | Nastala količina. Merska enota je odvisna od izbranega materiala (kos, kg, m itd.). |
| **Tip izhoda** | Dodatna razvrstitev izhoda (spustni seznam). |
| **Oznake** | Neobvezne oznake za kategorizacijo izhoda. |
| **Vrstni red** | Določa zaporedje prikaza izhodov. |

## Seznamski pogled

Seznam prikazuje vse izhode, ki pripadajo izbrani operaciji. Vsaka vrstica prikazuje material, njegov tip in količino.

![Seznam izhodov](../Images/OutputsList.png "Seznam izhodov")

## Ustvarjanje novega izhoda

1. Kliknite **akcijski gumb** v spodnjem desnem kotu in izberite eno izmed možnosti:

    ![Akcijski gumb izhodov](../Images/OutputsActionButton.png "Akcijski gumb izhodov")

    - **Kopiraj iz obstoječega izhoda**
    - **Nov**

2. Izpolnite zahtevana polja.

    ![Dodaj izhod](../Images/OutputsNew.png "Dodaj izhod")

3. Kliknite **Dodaj**, da shranite izhod.

## Urejanje izhoda

1. Kliknite obstoječi izhod na seznamu.  
2. Spremenite želena polja.  
3. Kliknite **Shrani**.

## Brisanje

Vnos izhoda lahko izbrišete na strani za urejanje s klikom na **Izbriši**. Po potrditvi se izhod odstrani iz operacije.