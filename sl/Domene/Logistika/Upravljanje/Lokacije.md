<!-- app_route: /management/warehouse/locations -->
<!-- app_label: Lokacije -->
<!-- canonical_source_url: https://tom-pit.github.io/Connected.Docs/sl/Domene/Logistika/Upravljanje/Lokacije/ -->
<!-- canonical_source_title: Lokacije -->

# Lokacije

Ta šifrant predstavlja **skladiščne lokacije** znotraj posameznih [skladišč](Skladisca.md). Vsaka lokacija določa specifično območje ali podrazdelek, kot so regal, polica ali predal, ter omogoča natančno organizacijo in sledenje materialov znotraj skladišča.

Za dostop do tega šifranta pojdite na **Logistika / Upravljanje / Lokacije** v [navigaciji](../../../Skupno/UI/Navigacija.md).

> [!TIP]
> Za celovit prikaz si oglejte video vodič  
> **[Skladišča in skladiščne lokacije](https://www.youtube.com/watch?v=3sEE9Mrtx6M)**.

## Shema

| Polje | Opis |
|-------|------|
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Enolična koda, ki identificira lokacijo. Pogosto je strukturirana tako, da odraža hierarhijo skladišča. |
| **Naziv** | Ime ali oznaka lokacije, na primer **Regal 1** ali **Polica 2**. |
| **Nadrejena lokacija** | Določa drugo lokacijo, znotraj katere je ta lokacija umeščena. Na primer: polica lahko pripada določenemu regalu. |
| **Opis** | Neobvezen opis z dodatnimi informacijami o lokaciji. |

## Upravljanje

### Seznam lokacij

Uporabniški vmesnik prikazuje seznam vseh lokacij za izbrano skladišče. Uporabite izbirnik skladišča na levi strani za spremembo skladišča. Če zapisi še ne obstajajo, je seznam prazen.

![Seznam lokacij](../Images/LocationsListSL.png "Seznam lokacij")

Vsak zapis vsebuje oznako **Zaloga**, ki odpre vmesnik za upravljanje zaloge, povezane z izbrano lokacijo.

Za več podrobnosti glejte **[Pogled zaloge po lokacijah](../Pregledi/PogledZalogePoLokacijah.md)**.

## Dejanja

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md), da se prikaÅ¾ejo naslednja dejanja:

- **Uvoz**
- **Novo**

### Uvoziti lokacije

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Uvoz** za nalaganje lokacij iz datoteke.

Lokacije lahko uvozite iz **CSV** datoteke. To je uporabno pri vzpostavljanju skladiščnih struktur z več regali, policami in predali.

![Uvoz lokacij](../Images/LocationsImportSL.png "Uvoz lokacij")

Datoteko povlecite v območje za nalaganje ali kliknite območje, da odprete pogovorno okno za izbiro datoteke. Datoteka mora vsebovati zahtevana polja v veljavni strukturi.

Po uvozu lahko lokacije pregledate in po potrebi prilagodite na zaslonu za upravljanje lokacij.

Kliknite **Prekliči**, da se vrnete na seznam brez uvoza.
> [!NOTE]
> Vsaka lokacija je vezana na **skladišče**, zato se prepričajte, da vsa referencirana [**skladišča**](Skladisca.md) že obstajajo v sistemu.

#### Primer strukture CSV

```csv
WarehouseCode,Code,Name,ParentLocationCode,Description
MAIN,CR01,Centralni regal,,Glavni centralni regal v skladišču
MAIN,CR01-SH01,Polica 1,CR01,Prva polica v centralnem regalu
MAIN,CR01-SH02,Polica 2,CR01,Druga polica v centralnem regalu
SEC,SEC-R1,Regal 1,,Regal v sekundarnem skladišču
```
### Ustvariti novo lokacijo

Kliknite [akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md) in izberite **Novo** za ročno ustvarjanje nove lokacije.

V obrazcu je potrebno vnesti naslednja polja:

- **Šifra** – enolična identifikacijska koda lokacije  
- **Naziv** – prikazno ime lokacije  
- **Nadrejena lokacija** – lokacija, znotraj katere se ta lokacija nahaja (neobvezno)  
- **Opis** – dodatne informacije o lokaciji (neobvezno)  
- **Aktiven** – določa, ali je lokacija na voljo za uporabo v novih dokumentih  

![Nova lokacija](../Images/NewLocationSL.png)

Kliknite **Dodaj**, da shranite novo lokacijo, ali **Prekliči**, da zaprete obrazec brez shranjevanja.

### Urediti lokacijo

Za urejanje obstoječe lokacije kliknite njeno **Ime** v seznamu.

Odpre se obrazec za urejanje, kjer lahko spremenite vse lastnosti lokacije.

Kliknite **Shrani** za potrditev sprememb ali **Prekliči** za zavrnitev.
### Izbrisati lokacijo

Kliknite ime lokacije, da odprete zaslon za urejanje, nato kliknite **Izbriši**. Po potrditvi se lokacija trajno odstrani.

> [!NOTE]
> Lokacije ni mogoče izbrisati, če je uporabljena v zalogovnih zapisih ali logističnih dokumentih.

## Meni

Meni omogoča dodatna dejanja, ki so na voljo na tej strani.
Na voljo je naslednje dejanje:

- **Natisni šifro skladiščne lokacije z nalepko**

Za podrobnosti o dejanjih menija glejte [**Dejanja menija**](../../../Skupno/Koncepti/MeniDejanja.md).
