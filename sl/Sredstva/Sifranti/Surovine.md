# Surovine

**Surovine** so osnovni materiali, ki se uporabljajo v proizvodnih procesih ali se kupujejo za interno uporabo. Mednje sodijo les, kovinske plošče, tkanine, kemikalije ali kateri koli drug vhodni material, potreben za izdelavo končnih izdelkov. Vsaka surovina vsebuje ključne podatke – kot so [merske enote](../../Skupno/Sifranti/MerskeEnote.md), [davčna stopnja](../../Skupno/Sifranti/DavcneStopnje.md), rok uporabe ali [pakiranje](Pakiranje.md) – kar omogoča dosledno upravljanje v celotnem sistemu.

Ta šifrant predstavlja register vseh surovin znotraj strukture materialov.

> [!TIP]
> Za celovit prikaz si oglejte video vodič  
> **[Surovine](https://www.youtube.com/watch?v=kb6I-eJ0tBU)**.

> [!NOTE]  
> **Predpogoji**  
> Pred upravljanjem surovin zagotovite, da so naslednji šifranti pravilno nastavljeni:  
> - [**Merske enote**](../../Skupno/Sifranti/MerskeEnote.md)  
> - [**Davčne stopnje**](../../Skupno/Sifranti/DavcneStopnje.md)

Za dostop do šifranta **Surovine** pojdite na  
**Sredstva / Materiali / Surovine** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Koda** | Enolični identifikator surovine znotraj seznama materialov. Koda mora biti enolična med vsemi materiali. |
| **Ime** | Ime surovine, prikazano v seznamih in dokumentih. |
| **Generiranje serijske številke** | Določa način obravnave serijskih številk in zapisov materiala:<br>• **Samodejno** – vsak kos prejme svojo naraščajočo serijsko številko.<br>• **Enako** – vsi kosi imajo enako serijsko številko, vendar ostanejo ločeni zapisi.<br>• **Identično** – vsi kosi imajo enako serijsko številko in se obravnavajo kot en identičen zapis. |
| **Rok uporabe (dni)** | Število dni do poteka materiala (uporabno za pokvarljivo blago). |
| **EAN** | Vrednost črtne kode, uporabljena za skeniranje. |
| **Osnovna merska enota** | Merska enota za izražanje količin (npr. kos, kg, meter). |
| **Davčna stopnja** | Privzeta davčna stopnja, uporabljena v poslovnih dokumentih. |
| **Natančnost** | Privzeto število decimalnih mest za prikaz vrednosti v tej merski enoti. Na primer **3** za **1,255** ali **1** za **2,5**. |
| **Opis** | Kratek interni opis surovine. |
| **Oznake** | Oznake za kategorizacijo in filtriranje. |
| **URL informacij** | URL povezava do zunanjih informacij ali dokumentacije. |
| **URL slike** | Javna povezava do slike materiala. |
| **Zunanji ključ** | Identifikator za povezavo surovine z zunanjimi sistemi. |
| **Aktiven** | Označuje, ali je surovina na voljo za uporabo v novih dokumentih. |

## Upravljanje

### Seznam surovin

Uporabniški vmesnik vsebuje seznam surovin.

![Surovine](../Images/RawMaterialsList.png "Surovine")

Na levi strani je na voljo filter po **Oznakah**, v zgornjem desnem kotu pa **iskalno polje** za hitro iskanje.

## Dejanja

Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md), da se prikažejo naslednja dejanja:

- **Uvoz**
- **Kopiraj obstoječe**
- **Novo**

### Uvoz

Uporabite funkcionalnost **Uvoz** za hkratni uvoz več surovin.

Za podrobnosti glejte dokumentacijo  
[**Uvoz materialov**](UvozMaterialov.md).

### Kopiraj obstoječe

Omogoča ustvarjanje nove surovine na podlagi že obstoječe.

![Kopiranje surovine](../Images/CopyRawMaterial.png "Kopiranje surovine")

### Novo

Kliknite **Novo**, da odprete obrazec za dodajanje nove surovine.  
Obrazec vključuje polja, kot so **Koda**, **Ime**, **Generiranje serijske številke**, **Osnovna merska enota**, **Davčna stopnja** in druga, odvisno od konfiguracije sistema.

![Nova surovina](../Images/NewRawMaterial.png "Nova surovina")

Na voljo so dodatni zložljivi razdelki:

#### Pakiranje

Ta razdelek omogoča pregled ali dodajanje enega ali več zapisov [pakiranja](Pakiranje.md), specifičnih za material. Vsak zapis predstavlja eno pakirno enoto z lastno količino in identifikacijo.

Zapisi pakiranja se kasneje uporabljajo v skladiščnih procesih, kot so:
- [**Prevzemi**](../../Logistika/Dokumenti/Prevzemi.md)
- [**Izdajnice**](../../Logistika/Dokumenti/Izdajnice.md)
- [**Medskladiščni promet**](../../Logistika/Dokumenti/MedskladiscniPromet.md)

#### Dodatno

Ta razdelek vsebuje neobvezna opisna polja, kot so opis materiala, oznake, slike, povezave ali zunanji identifikatorji. Ta polja zagotavljajo dodaten kontekst, vendar ne vplivajo na izračune zaloge.

![Zložljivi razdelki](../Images/MaterialPackagingAdditional.png "Zložljivi razdelki")

Po vnosu zahtevanih podatkov kliknite **Dodaj**, da shranite surovino, ali **Prekliči**, da se vrnete na seznam.

## Urejanje

Kliknite ime surovine v seznamu, da odprete zaslon za urejanje.

![Urejanje surovine](../Images/EditRawMaterial.png "Urejanje surovine")

## Brisanje

Kliknite **Izbriši** na zaslonu za urejanje, da odprete potrditveno pogovorno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se surovina trajno odstrani; v nasprotnem primeru sistem ohrani zapis nespremenjen.

> [!NOTE]
> Surovino je mogoče izbrisati le, če ni referencirana v drugih zapisih.

---
