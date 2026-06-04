<!-- app_route: /management/materials/semi-products -->
<!-- app_label: Polizdelki -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Sredstva/Materiali/Polizdelki.md -->
<!-- canonical_source_title: Polizdelki -->

# Polizdelki

**Polizdelki** so vmesni materiali, ki se uporabljajo v proizvodnji konÄnih izdelkov. Nastanejo iz surovin in se nato uporabljajo kot komponente v drugih izdelkih. Primeri polizdelkov so mizna ploÅ¡Äa, kovinski okvir, lesena noga ali elektronski modul.

Vsak polizdelek vsebuje kljuÄne podatke â€“ kot so [merske enote](../../../Skupno/Upravljanje/MerskeEnote.md), [davÄna stopnja](../../../Skupno/Upravljanje/DavcneStopnje.md), naÄin generiranja serijskih Å¡tevilk ali rok uporabe â€“ kar omogoÄa dosledno obravnavo v proizvodnji, zalogi in skladiÅ¡Änih procesih. Ta Å¡ifrant vsebuje vse polizdelke, uporabljene v vaÅ¡em proizvodnem procesu.

> [!TIP]
> Za celovit prikaz si oglejte video vodiÄ  
> **[Materiali polizdelkov](https://www.youtube.com/watch?v=Ox2OF8_IwOQ)**.

> [!NOTE]  
> **Predpogoji**  
> Pred upravljanjem polizdelkov zagotovite, da so naslednji Å¡ifranti pravilno nastavljeni:  
> - [**Merske enote**](../../../Skupno/Upravljanje/MerskeEnote.md)  
> - [**DavÄne stopnje**](../../../Skupno/Upravljanje/DavcneStopnje.md)

Za dostop do Å¡ifranta **Polizdelki** pojdite na  
**Sredstva / Materiali / Polizdelki** v [navigaciji](../../../Skupno/UI/Navigacija.md).

## Shema

<details open>
<summary><strong>Polizdelek</strong></summary>

| Polje | Opis |
|-------|------|
| **Å ifra** | EnoliÄni identifikator izdelka znotraj seznama materialov. Na primer **2625001** ali **MIZ-ÄŒLS**. Å ifra mora biti enoliÄna med vsemi materiali. (obvezno) |
| **Naziv** | Ime izdelka, prikazano v seznamih in dokumentih. Na primer **Miza â€“ hrast**. (obvezno) |
| **Generiranje serijske Å¡tevilke** | DoloÄa naÄin upravljanja serijskih Å¡tevilk in zapisov materialov:<br>â€¢ **Auto** â€“ vsak kos prejme svojo naraÅ¡ÄajoÄo serijsko Å¡tevilko.<br>â€¢ **Same** â€“ vsi kosi imajo enako serijsko Å¡tevilko, vendar ostanejo loÄeni zapisi.<br>â€¢ **Identical** â€“ vsi kosi imajo enako serijsko Å¡tevilko in se obravnavajo kot en identiÄen zapis. |
| **Rok trajanja (dnevi)** | Å tevilo dni do poteka, uporabljeno za pokvarljivo blago. Na primer **30** ali **365**. |
| **EAN** | Vrednost Ärtne Å¡ifre, uporabljena za skeniranje. Na primer **3831234567890**. |
| **[Osnovna merska enota](../../../Skupno/Upravljanje/MerskeEnote.md)** | Merska enota za izraÅ¾anje koliÄin, kot sta **kos** ali **meter**. (obvezno) |
| **Å tevilo decimalnih mest** | Privzeto Å¡tevilo decimalnih mest za prikaz vrednosti. Na primer **3** za **1,255** ali **1** za **2,5**. |
| **[Davek](../../../Skupno/Upravljanje/DavcneStopnje.md)** | Privzeta davÄna stopnja, uporabljena v poslovnih dokumentih. Na primer **22** ali **9,5**. |

</details>

<details>
<summary><strong>Pakiranje</strong></summary>

**Definicija pakiranja** opisuje fizikalne lastnosti materiala in alternativne enote, ki se uporabljajo pri ravnanju z njim v skladiÅ¡Äu. To je mogoÄe nastaviti tudi v razdelku [**Pakiranje**](Pakiranje.md).

| Polje | Opis |
|-------|------|
| **EAN** | ÄŒrtna koda pakiranja. |
| **KoliÄina (kos)** | KoliÄina, ki jo predstavlja pakirna enota (npr. 6 kosov na Å¡katlo). |
| **Alternativna merska enota** | Alternativna enota za ravnanje ali poroÄanje (npr. paket). |
| **TeÅ¾a** | Vnesite neto in bruto teÅ¾o pakiranja. |
| **Dimenzije** | Vnesite Å¡irino, viÅ¡ino in globino pakirne enote. |

</details>

<details>
<summary><strong>Dodatno</strong></summary>

| Polje | Opis |
|-------|------|
| **Opis** | Kratek interni opis, ki pojasnjuje uporabo ali specifikacije izdelka. Na primer **Masiven hrast, oljen**. |
| **Oznake** | Oznake za kategorizacijo in filtriranje. Na primer **pohiÅ¡tvo**, **premium**. |
| **Info povezava** | Povezava do zunanjih informacij ali dokumentacije o izdelku. |
| **URL do slike izdelka** | Javna povezava do slike izdelka. |
| **Zunanji kljuÄ** | Identifikator zapisa v zunanjem sistemu, na primer **SAP-4711**. |

</details>

<details>
<summary><strong>Glavna knjiga in Intrastat</strong></summary>

| Polje | Opis |
|------|------|
| **[Konto zaloge](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md)** | BilanÄni konto za vrednost zaloge tega izdelka. Nastavi se na ravni materiala in lahko preglasi privzeti konto zaloge. |
| **[Konto stroÅ¡ka](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md)** | Konto poslovnega izida (npr. stroÅ¡ek prodanega blaga), ki se uporabi ob porabi, izdaji iz zaloge ali prodaji izdelka. Lahko preglasi privzeti konto stroÅ¡ka. |
| **[Tarifa](../../Racunovodstvo/Upravljanje/Intrastat/Tarife.md)** | Carinska tarifa za statistiÄno in carinsko poroÄanje. |
| **[DrÅ¾ava porekla](../../../Skupno/Upravljanje/Drzave.md)** | DrÅ¾ava porekla za trgovinske in carinske dokumente. |
| **Pretvornik mase** | Faktor za pretvorbo osnovne merske enote v maso (npr. kg). Uporablja se v Intrastatu ali analitiki, ko je potreben podatek o teÅ¾i. |

</details>

## Upravljanje

### Seznam polizdelkov

UporabniÅ¡ki vmesnik vsebuje seznam polizdelkov. ÄŒe zapisi Å¡e ne obstajajo, je seznam prazen.

![Polizdelki](../Images/SemiProductsList.png "Polizdelki")

Seznam prikazuje ime, Å¡ifro in naÄin generiranja serijske Å¡tevilke za vsak polizdelek.

Na levi strani zaslona je na voljo filter po **Oznakah**, v zgornjem desnem kotu pa **iskalno polje** za hitro iskanje doloÄenih polizdelkov.

## Dejanja

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md), da se prikaÅ¾ejo naslednja dejanja:

- **Uvoz**
- **Kopiraj obstojeÄi**
- **Nov**

### Ustvariti novo polizdelek

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Novo**, da odprete obrazec za dodajanje novega polizdelka.

![Nov polizdelek](../Images/NewSemiproduct.png "Nov polizdelek")

Obrazec vkljuÄuje polja, kot so **Koda**, **Ime**, **Generiranje serijske Å¡tevilke**, **Osnovna merska enota**, **DavÄna stopnja** in druga, odvisno od konfiguracije sistema.

Na voljo so dodatni zloÅ¾ljivi razdelki:

#### Pakiranje

Ta razdelek omogoÄa pregled ali dodajanje enega ali veÄ zapisov [pakiranja](Pakiranje.md), specifiÄnih za material. Vsak zapis predstavlja eno pakirno enoto z lastno koliÄino in identifikacijo.

Zapisi pakiranja se kasneje uporabljajo v skladiÅ¡Änih procesih, kot so:
- [**Prevzemi**](../../Logistika/Dokumenti/Prevzemi.md)
- [**Izdajnice**](../../Logistika/Dokumenti/Izdajnice.md)
- [**MedskladiÅ¡Äni promet**](../../Logistika/Dokumenti/MedskladiscniPromet.md)

#### Intrastat in Glavna knjiga

Vnesite podrobnosti za Intrastat in druge raÄunovodske podatke, uporabljene pri poroÄanju.

![Materiali Intrastat Glavna knjiga](../Images/MaterialsIntrastatLedger.png "Materiali Intrastat in Glavna knjiga")

> [!WARNING]
> V razdelku **Glavna knjiga** vnesite pravilne konte (npr. konto zaloge in stroÅ¡ka). NapaÄne ali manjkajoÄe vrednosti lahko povzroÄijo napake pri knjiÅ¾enju.


#### Dodatno

Ta razdelek vsebuje neobvezna opisna polja, kot so opis materiala, oznake, slike, povezave ali zunanji identifikatorji. Ta polja zagotavljajo dodaten kontekst, vendar ne vplivajo na izraÄune zaloge.

![ZloÅ¾ljivi razdelki](../Images/MaterialPackagingAdditional.png "ZloÅ¾ljivi razdelki")

Po vnosu zahtevanih podatkov kliknite **Dodaj**, da shranite polizdelek, ali **PrekliÄi**, da se vrnete na seznam.

### Uvoziti polizdelke

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Uvoz**, da omogoÄite hkratni uvoz veÄ polizdelkov z uporabo pravilno strukturirane preglednice.

Za podrobnosti glejte dokumentacijo  
[**Uvoz materialov**](UvozMaterialov.md).

### Kopiraj obstojeÄi poizdelek

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Kopiraj obstojeÄi**, da ustvarite nov zapis na podlagi Å¾e obstojeÄega.

![Kopiranje polizdelka](../Images/CopySemiproduct.png "Kopiranje polizdelka")

Po izbiri osnovnega polizdelka so vsa polja predizpolnjena in jih je mogoÄe urediti pred shranjevanjem.

## Urediti polizdelek

Za urejanje obstojeÄega polizdelka kliknite njegovo **Ime** v seznamu.  
Vmesnik se preklopi v naÄin urejanja, kjer so prikazana vsa polja.

![Urejanje polizdelka](../Images/EditSemiproduct.png "Urejanje polizdelka")

Kliknite **Shrani** za potrditev sprememb ali **PrekliÄi** za zavrnitev.

## Izbrisati polizdelek

Kliknite **IzbriÅ¡i** na zaslonu za urejanje, da odprete potrditveno pogovorno okno:

**Ali ste prepriÄani, da Å¾elite izbrisati ta zapis?**

ÄŒe potrdite, se polizdelek trajno odstrani; v nasprotnem primeru sistem ohrani zapis nespremenjen.

> [!NOTE]
> Polizdelek je mogoÄe izbrisati le, Äe ni referenciran v odvisnih zapisih, kot so premiki zaloge, dokumenti, proizvodne strukture ali drugi odnosi materialov.
