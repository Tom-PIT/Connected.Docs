# Surovine

**Surovine** so osnovni materiali, ki se uporabljajo v proizvodnih procesih ali se kupujejo za interno uporabo. Mednje sodijo les, kovinske plošče, tkanine, kemikalije ali kateri koli drug vhodni material, potreben za izdelavo končnih izdelkov. Vsaka surovina vsebuje ključne podatke – kot so [merske enote](../../Skupno/Upravljanje/MerskeEnote.md), [davčna stopnja](../../Skupno/Upravljanje/DavcneStopnje.md), rok uporabe ali [pakiranje](Pakiranje.md) – kar omogoča dosledno upravljanje v celotnem sistemu.

Ta šifrant predstavlja register vseh surovin znotraj strukture materialov.

> [!TIP]
> Za celovit prikaz si oglejte video vodič  
> **[Surovine](https://www.youtube.com/watch?v=kb6I-eJ0tBU)**.

> [!NOTE]  
> **Predpogoji**  
> Pred upravljanjem surovin zagotovite, da so naslednji šifranti pravilno nastavljeni:  
> - [**Merske enote**](../../Skupno/Upravljanje/MerskeEnote.md)  
> - [**Davčne stopnje**](../../Skupno/Upravljanje/DavcneStopnje.md)

Za dostop do šifranta **Surovine** pojdite na  
**Sredstva / Materiali / Surovine** v [**navigaciji**](../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Šifra** | Enolični identifikator surovine znotraj seznama materialov. Šifra mora biti enolična med vsemi materiali. |
| **Naziv** | Ime surovine, prikazano v seznamih in dokumentih. |
| **Generiranje serijske številke** | Določa način upravljanja serijskih številk in zapisov materialov:<br>• **Auto** – vsak kos prejme svojo naraščajočo serijsko številko.<br>• **Same** – vsi kosi imajo enako serijsko številko, vendar ostanejo ločeni zapisi.<br>• **Identical** – vsi kosi imajo enako serijsko številko in se obravnavajo kot en identičen zapis. |
| **Rok trajanja (dnevi)** | Število dni do poteka, uporabljeno za pokvarljivo blago. Na primer **30** ali **365**. |
| **EAN** | Vrednost črtne šifre, uporabljena za skeniranje. Na primer **3831234567890**. |
| **Osnovna [merska enota](../../Skupno/Upravljanje/MerskeEnote.md)** | Merska enota za izražanje količin, kot sta **kos** ali **meter**. |
| **Število decimalnih mest** | Privzeto število decimalnih mest za prikaz vrednosti. Na primer **3** za **1,255** ali **1** za **2,5**. |
| **Davek** | Privzeta davčna stopnja, uporabljena v poslovnih dokumentih. Na primer **22** ali **9,5**. |
| **Opis** | Kratek interni opis, ki pojasnjuje uporabo ali specifikacije izdelka. Na primer **Masiven hrast, oljen**. |
| **Oznake** | Oznake za kategorizacijo in filtriranje. Na primer **pohištvo**, **premium**. |
| **Info povezava** | Povezava do zunanjih informacij ali dokumentacije o izdelku. |
| **URL do slike izdelka** | Javna povezava do slike izdelka. |
| **Zunanji ključ** | Identifikator zapisa v zunanjem sistemu, na primer **SAP-4711**. |

## Upravljanje

### Seznam surovin

Uporabniški vmesnik vsebuje seznam surovin.

![Surovine](../Images/RawMaterialsList.png "Surovine")

Na levi strani je na voljo filter po **Oznakah**, v zgornjem desnem kotu pa **iskalno polje** za hitro iskanje.

## Dejanja

Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md), da se prikažejo naslednja dejanja:

- **Uvoz**
- **Kopiraj obstoječi**
- **Nov**

### Uvoz

Uporabite funkcionalnost **Uvoz** za hkratni uvoz več surovin.

Za podrobnosti glejte dokumentacijo  
[**Uvoz materialov**](UvozMaterialov.md).

### Kopiraj obstoječi

Omogoča ustvarjanje nove surovine na podlagi že obstoječe.

![Kopiranje surovine](../Images/CopyRawMaterial.png "Kopiranje surovine")

### Nov

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
