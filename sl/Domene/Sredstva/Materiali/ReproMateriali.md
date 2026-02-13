# Repro materiali

**Repro materiali** so ponovno uporabni ali pomožni materiali, ki se uporabljajo za podporo proizvodnji ali drugim internim dejavnostim. Ne predstavljajo končnih izdelkov, so pa ključni za vzdrževanje, montažo ali uporabo drugih materialov. Primeri repro materialov so vijaki, trakovi, palete ali stiropor.

Vsak repro material vsebuje pomembne lastnosti – kot so [merske enote](../../../Skupno/Upravljanje/MerskeEnote.md), [davčna stopnja](../../../Skupno/Upravljanje/DavcneStopnje.md), način generiranja serijskih številk ali možnosti [pakiranja](Pakiranje.md) – kar zagotavlja dosledno sledenje in uporabo v vseh skladiščnih in proizvodnih procesih. Ta šifrant vsebuje vse repro materiale, ki jih uporablja organizacija.

> [!TIP]
> Za celovit prikaz si oglejte video vodič **[Repro materiali](https://www.youtube.com/watch?v=ZRUwbQrAolU)**.

> [!NOTE]  
> **Predpogoji**  
> Pred upravljanjem repro materialov zagotovite, da so naslednji šifranti pravilno nastavljeni:  
> - [**Merske enote**](../../../Skupno/Upravljanje/MerskeEnote.md)  
> - [**Davčne stopnje**](../../../Skupno/Upravljanje/DavcneStopnje.md)

Za dostop do šifranta **Repro materiali** pojdite na  
**Sredstva / Materiali / Repro materiali** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Shema

<details open>
<summary><strong>Repro material</strong></summary>

| Polje | Opis |
|------|------|
| **Šifra** | Enolični identifikator repro materiala znotraj seznama materialov. Na primer **REP-VIJ-2**. Šifra mora biti enolična med vsemi materiali. (obvezno) |
| **Naziv** | Ime, prikazano v seznamih in dokumentih. Na primer **Vijak 6 mm**. (obvezno) |
| **Generiranje serijske številke** | Določa način upravljanja serijskih številk in zapisov materialov:<br>• **Auto** – vsak kos prejme svojo naraščajočo serijsko številko.<br>• **Same** – vsi kosi imajo enako serijsko številko, vendar ostanejo ločeni zapisi.<br>• **Identical** – vsi kosi imajo enako serijsko številko in se obravnavajo kot en identičen zapis. |
| **Rok trajanja (dnevi)** | Število dni do poteka, uporabljeno za pokvarljivo blago. Na primer **30** ali **365**. |
| **EAN** | Vrednost črtne šifre, uporabljena za skeniranje. Na primer **3831234567890**. |
| **[Osnovna merska enota](../../../Skupno/Upravljanje/MerskeEnote.md)** | Merska enota za izražanje količin, kot sta **kos** ali **meter**. (obvezno) |
| **Število decimalnih mest** | Privzeto število decimalnih mest za prikaz vrednosti. Na primer **3** za **1,255** ali **1** za **2,5**. |
| **[Davek](../../../Skupno/Upravljanje/DavcneStopnje.md)** | Privzeta davčna stopnja, uporabljena v poslovnih dokumentih. Na primer **22** ali **9,5**. |

</details>

<details>
<summary><strong>Pakiranje</strong></summary>

**Definicija pakiranja** opisuje fizikalne lastnosti materiala in alternativne enote, ki se uporabljajo pri ravnanju z njim v skladišču. To je mogoče nastaviti tudi v razdelku [**Pakiranje**](Pakiranje.md).

| Polje | Opis |
|-------|------|
| **EAN** | Črtna koda pakiranja. |
| **Količina (kos)** | Količina, ki jo predstavlja pakirna enota (npr. 6 kosov na škatlo). |
| **Alternativna merska enota** | Alternativna enota za ravnanje ali poročanje (npr. paket). |
| **Teža** | Vnesite neto in bruto težo pakiranja. |
| **Dimenzije** | Vnesite širino, višino in globino pakirne enote. |

</details>

<details>
<summary><strong>Dodatno</strong></summary>

| Polje | Opis |
|------|------|
| **Opis** | Kratek interni opis, ki pojasnjuje uporabo ali specifikacije izdelka. Na primer **Masiven hrast, oljen**. |
| **Oznake** | Oznake za kategorizacijo in filtriranje. Na primer **pohištvo**, **premium**. |
| **Info povezava** | Povezava do zunanjih informacij ali dokumentacije o izdelku. |
| **URL do slike izdelka** | Javna povezava do slike izdelka. |
| **Zunanji ključ** | Identifikator zapisa v zunanjem sistemu, na primer **SAP-4711**. |

</details>

<details>
<summary><strong>Glavna knjiga in Intrastat</strong></summary>

| Polje | Opis |
|------|------|
| **[Konto zaloge](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md)** | Bilančni konto za vrednost zaloge repromateriala. Nastavi se na ravni materiala in lahko preglasi privzeti konto zaloge za repromateriale.. |
| **[Konto stroška](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md)** | Konto poslovnega izida, ki se uporabi ob porabi ali izdaji repromateriala iz zaloge (npr. strošek materiala v proizvodnji). Lahko preglasi privzeti konto stroška. |
| **[Tarifa](../../Racunovodstvo/Upravljanje/Intrastat/Tarife.md)** | Carinska tarifa za statistično in carinsko poročanje. |
| **[Država porekla](../../../Skupno/Upravljanje/Drzave.md)** | Država porekla za trgovinske in carinske dokumente. |
| **Pretvornik mase** | Faktor za pretvorbo osnovne merske enote v maso (npr. kg). Uporablja se v Intrastatu ali analitiki, ko je potreben podatek o teži. |

</details>

## Upravljanje

### Seznam repro materialov

Uporabniški vmesnik vsebuje seznam repro materialov.

![Repro materiali](../Images/ReproMaterialsList.png "Repro materiali")

Seznam prikazuje ime, šifro in način generiranja serijske številke za vsak repro material.

Na levi strani zaslona je na voljo filter po **Oznakah**, v zgornjem desnem kotu pa **iskalno polje** za hitro iskanje določenih materialov.

## Dejanja

Kliknite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md), da se prikažejo naslednja dejanja:

- **Uvoz**
- **Kopiraj obstoječi**
- **Nov**

### Uvoz

Dejanje **Uvoz** omogoča hkratni uvoz več repro materialov z uporabo pravilno strukturirane preglednice.

Za podrobnosti glejte dokumentacijo  
[**Uvoz materialov**](UvozMaterialov.md).

### Kopiraj obstoječi

Kliknite **Kopiraj obstoječi repro material**, da ustvarite nov zapis na podlagi že obstoječega.

![Kopiranje repro materiala](../Images/CopyReproMaterial.png "Kopiranje repro materiala")

Po izbiri osnovnega materiala so vsa polja predizpolnjena in jih je mogoče urediti pred shranjevanjem.

### Nov

Kliknite **Novo**, da odprete obrazec za ustvarjanje novega repro materiala.

![Nov repro material](../Images/NewReproMaterial.png "Nov repro material")

Obrazec vključuje polja, kot so **Koda**, **Ime**, **Generiranje serijske številke**, **Osnovna merska enota**, **Davčna stopnja** in druga, odvisno od konfiguracije sistema.

Na voljo so dodatni zložljivi razdelki:

#### Pakiranje

Ta razdelek omogoča pregled ali dodajanje enega ali več zapisov [pakiranja](Pakiranje.md), specifičnih za material. Vsak zapis predstavlja eno pakirno enoto z lastno količino in identifikacijo.

Zapisi pakiranja se kasneje uporabljajo v skladiščnih procesih, kot so:
- [**Prevzemi**](../../Logistika/Dokumenti/Prevzemi.md)
- [**Izdajnice**](../../Logistika/Dokumenti/Izdajnice.md)
- [**Medskladiščni promet**](../../Logistika/Dokumenti/MedskladiscniPromet.md)

#### Intrastat in Glavna knjiga

Vnesite podrobnosti za Intrastat in druge računovodske podatke, uporabljene pri poročanju.

![Materiali Intrastat Glavna knjiga](../Images/MaterialsIntrastatLedger.png "Materiali Intrastat in Glavna knjiga")

> [!WARNING]
> V razdelku **Glavna knjiga** vnesite pravilne konte (npr. konto zaloge in stroška). Napačne ali manjkajoče vrednosti lahko povzročijo napake pri knjiženju.

#### Dodatno

Ta razdelek vsebuje neobvezna opisna polja, kot so opis materiala, oznake, slike, povezave ali zunanji identifikatorji. Ta polja zagotavljajo dodaten kontekst, vendar ne vplivajo na izračune zaloge.

![Zložljivi razdelki](../Images/MaterialPackagingAdditional.png "Zložljivi razdelki")

Po vnosu zahtevanih podatkov kliknite **Dodaj**, da shranite repro material, ali **Prekliči**, da se vrnete na seznam.

## Urejanje

Za urejanje obstoječega repro materiala kliknite njegovo **Ime** v seznamu. Vmesnik se preklopi v način urejanja.

![Urejanje repro materiala](../Images/EditReproMaterials.png "Urejanje repro materiala")

Kliknite **Shrani** za potrditev sprememb ali **Prekliči** za zavrnitev.

## Brisanje

Kliknite **Izbriši** na zaslonu za urejanje, da odprete potrditveno pogovorno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se repro material trajno odstrani; v nasprotnem primeru sistem ohrani zapis nespremenjen.

> [!NOTE]
> Repro material je mogoče izbrisati le, če ni referenciran v odvisnih zapisih (npr. premiki zaloge, proizvodni procesi ali dokumenti).
