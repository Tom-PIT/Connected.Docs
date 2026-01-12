# Polizdelki

**Polizdelki** so vmesni materiali, ki se uporabljajo v proizvodnji končnih izdelkov. Nastanejo iz surovin in se nato uporabljajo kot komponente v drugih izdelkih. Primeri polizdelkov so mizna plošča, kovinski okvir, lesena noga ali elektronski modul.

Vsak polizdelek vsebuje ključne podatke – kot so [merske enote](../../Skupno/Sifranti/MerskeEnote.md), [davčna stopnja](../../Skupno/Sifranti/DavcneStopnje.md), način generiranja serijskih številk ali rok uporabe – kar omogoča dosledno obravnavo v proizvodnji, zalogi in skladiščnih procesih. Ta šifrant vsebuje vse polizdelke, uporabljene v vašem proizvodnem procesu.

> [!TIP]
> Za celovit prikaz si oglejte video vodič  
> **[Materiali polizdelkov](https://www.youtube.com/watch?v=Ox2OF8_IwOQ)**.

> [!NOTE]  
> **Predpogoji**  
> Pred upravljanjem polizdelkov zagotovite, da so naslednji šifranti pravilno nastavljeni:  
> - [**Merske enote**](../../Skupno/Sifranti/MerskeEnote.md)  
> - [**Davčne stopnje**](../../Skupno/Sifranti/DavcneStopnje.md)

Za dostop do šifranta **Polizdelki** pojdite na  
**Sredstva / Materiali / Polizdelki** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|-------|------|
| **Koda** | Enolični identifikator polizdelka znotraj seznama materialov. Koda mora biti enolična med vsemi materiali. |
| **Ime** | Ime polizdelka, prikazano v seznamih in dokumentih. |
| **Generiranje serijske številke** | Določa način obravnave serijskih številk in zapisov materiala:<br>• **Samodejno** – vsak kos prejme svojo naraščajočo serijsko številko.<br>• **Enako** – vsi kosi imajo enako serijsko številko, vendar ostanejo ločeni zapisi.<br>• **Identično** – vsi kosi imajo enako serijsko številko in se obravnavajo kot en identičen zapis. |
| **Rok uporabe (dni)** | Število dni do poteka materiala, uporabljeno za pokvarljive ali časovno občutljive materiale. |
| **EAN** | Vrednost črtne kode, uporabljena za skeniranje. |
| **Osnovna merska enota** | Merska enota za izražanje količin, kot sta **kos** ali **meter**. |
| **Davčna stopnja** | Privzeta davčna stopnja, uporabljena v poslovnih dokumentih. |
| **Natančnost** | Privzeto število decimalnih mest za prikaz vrednosti. Na primer **3** za **1,255** ali **1** za **2,5**. |
| **Opis** | Kratek interni opis, ki pojasnjuje uporabo ali lastnosti polizdelka. |
| **Oznake** | Oznake za kategorizacijo in filtriranje. |
| **URL informacij** | URL povezava do zunanjih informacij ali dokumentacije o materialu. |
| **URL slike** | Javna povezava do slike materiala. |
| **Zunanji ključ** | Identifikator zapisa v zunanjem sistemu za povezovanje med sistemi. |
| **Aktiven** | Označuje, ali je polizdelek na voljo za uporabo v novih dokumentih. Neaktivni polizdelki niso več na voljo za nove vnose, ostanejo pa vidni v zgodovini. |

## Upravljanje

### Seznam polizdelkov

Uporabniški vmesnik vsebuje seznam polizdelkov. Če zapisi še ne obstajajo, je seznam prazen.

![Polizdelki](../Images/SemiProductsList.png "Polizdelki")

Seznam prikazuje ime, kodo in način generiranja serijske številke za vsak polizdelek.

Na levi strani zaslona je na voljo filter po **Oznakah**, v zgornjem desnem kotu pa **iskalno polje** za hitro iskanje določenih polizdelkov.

## Dejanja

Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md), da se prikažejo naslednja dejanja:

- **Uvoz**
- **Kopiraj obstoječe**
- **Novo**

### Uvoz

Dejanje **Uvoz** omogoča hkratni uvoz več polizdelkov z uporabo pravilno strukturirane preglednice.

Za podrobnosti glejte dokumentacijo  
[**Uvoz materialov**](UvozMaterialov.md).

### Kopiraj obstoječe

Kliknite **Kopiraj obstoječi polizdelek**, da ustvarite nov zapis na podlagi že obstoječega.

![Kopiranje polizdelka](../Images/CopySemiproduct.png "Kopiranje polizdelka")

Po izbiri osnovnega polizdelka so vsa polja predizpolnjena in jih je mogoče urediti pred shranjevanjem.

### Novo

Kliknite **Novo**, da odprete obrazec za dodajanje novega polizdelka.

![Nov polizdelek](../Images/NewSemiproduct.png "Nov polizdelek")

Obrazec vključuje polja, kot so **Koda**, **Ime**, **Generiranje serijske številke**, **Osnovna merska enota**, **Davčna stopnja** in druga, odvisno od konfiguracije sistema.

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

Po vnosu zahtevanih podatkov kliknite **Dodaj**, da shranite polizdelek, ali **Prekliči**, da se vrnete na seznam.

## Urejanje

Za urejanje obstoječega polizdelka kliknite njegovo **Ime** v seznamu.  
Vmesnik se preklopi v način urejanja, kjer so prikazana vsa polja.

![Urejanje polizdelka](../Images/EditSemiproduct.png "Urejanje polizdelka")

Kliknite **Shrani** za potrditev sprememb ali **Prekliči** za zavrnitev.

## Brisanje

Kliknite **Izbriši** na zaslonu za urejanje, da odprete potrditveno pogovorno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se polizdelek trajno odstrani; v nasprotnem primeru sistem ohrani zapis nespremenjen.

> [!NOTE]
> Polizdelek je mogoče izbrisati le, če ni referenciran v odvisnih zapisih, kot so premiki zaloge, dokumenti, proizvodne strukture ali drugi odnosi materialov.

---
