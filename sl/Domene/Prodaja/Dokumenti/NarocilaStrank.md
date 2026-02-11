# Naročila strank

**Naročilo stranke** predstavlja potrjeno namero stranke za nakup blaga ali storitev. Najpogosteje se ustvari na podlagi potrjene **Ponudbe**, lahko pa se ustvari tudi samostojno.  
Naročila strank določajo, *kaj* bo stranka prejela, *kdaj* in *pod kakšnimi pogoji*, ter predstavljajo osnovo za procese dostave, proizvodnje, nabave in izdajanja računov.

Za dostop do tega dokumenta pojdite na **Prodaja / Dokumenti / Naročila strank** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Vloga naročil strank v prodajnem procesu

Naročila strank so eden ključnih korakov v prodajni verigi:

1. Ponudba se pripravi v dokumentu **[Ponudba](Ponudbe.md)**.  
2. Ko stranka potrdi ponudbo, se iz nje ustvari **Naročilo stranke** (prek razdelka [*Povezani dokumenti*](Ponudbe.md#povezani-dokumenti)).  
3. Naročilo stranke sproži nadaljnje operativne procese:
   - [**Dobavnice**](Dobavnice.md)
   - [**Proizvodni nalogi**](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md)
   - [**Vzdrževalni nalogi**](../../Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md)
   - [**Nabavni nalogi**](../../Nabava/Dokumenti/NabavniNalogi.md)
   - [**Izdani računi**](IzdaniRacuni.md)

Ko je naročilo stranke v celoti izpolnjeno in obračunano, se premakne v zaključeno stanje.

> [!NOTE]
> Podjetje lahko uporablja vse ali le nekatere korake, odvisno od vrste dejavnosti (npr. storitvena podjetja morda ne uporabljajo dobavnic).

## Shema

<details open>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|------|------|
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran identifikator naročila stranke. |
| **Stranka** | Stranka, ki odda naročilo, izbrana iz šifranta [Poslovni imenik](../../../Skupno/Upravljanje/PoslovniImenik.md) (obvezno). |
| **Datum dokumenta** | Datum nastanka naročila stranke. |
| **Datum prodaje** | Predviden datum dobave naročila (obvezno). |
| **Rabat** | Neobvezen popust na celotno naročilo stranke. |
| **Številka naročilnice** | Neobvezna povezava na povezani [nabavni nalog](../../Nabava/Dokumenti/NabavniNalogi.md). |
| [**Način plačila**](../Upravljanje/NacinPlacila.md) | Načini plačila, povezani z naročilom stranke. |

</details>

<details>
  <summary><strong>Transport, alternativna valuta in dostava</strong></summary>

| Polje | Opis |
|--------|-------------|
| **[Pogoj dobave](../../../Skupno/Upravljanje/PogojiDobave.md)** | Dobavni pogoji, dogovorjeni s stranko. |
| **[Vrsta transporta](../../../Skupno/Upravljanje/VrstaTransporta.md)** | Način transporta, dogovorjen s stranko. |
| [**Alternativna valuta**](../../../Skupno/Upravljanje/Valute.md) | Alternativna valuta glede na privzeto valuto, uporabljeno v dokumentu. |
| [**Tečaj**](../Upravljanje/MenjalniTecaji.md) | Tečaj alternativne valute glede na privzeto valuto. |
| **Dobava – Podjetje / Naslov** | Dobavni podatki stranke, povzeti iz [Poslovnega imenika](../../../Skupno/Upravljanje/PoslovniImenik.md). |
</details>

<details>
  <summary><strong>Intrastat</strong></summary>

| Polje | Opis |
|------|------|
| [**Država odpošiljanja**](../../../Skupno/Upravljanje/Drzave.md) | Država, iz katere je bilo blago odposlano. Ta vrednost je običajno določena na podlagi Intrastat konfiguracije materiala. |
| [**Vrsta posla**](../../Racunovodstvo/Upravljanje/Intrastat/VrstaPosla.md) | Klasifikacija vrste transakcije za Intrastat poročanje (npr. neposredna prodaja ali nakup). |
| [**Lega kraja**](../../Racunovodstvo/Upravljanje/Intrastat/LegaKraja.md) | Označuje kraj dostave blaga v skladu z Intrastat definicijami. |

</details>

<details>
  <summary><strong>Postavke</strong></summary>

| Polje | Opis |
|------|------|
| **Sredstvo** | Izdelek ali storitev, ki se prodaja. |
| **Datum dobave** | Načrtovan datum dobave za posamezno postavko. |
| **Količina** | Količina izbranega sredstva. |
| **Cena brez DDV (na enoto)** | Uporabljena cena na enoto (iz nastavitev sredstva ali cenikov). |
| **Popust (%)** | Popust za posamezno postavko. |
| [**Davčna stopnja**](../../../Skupno/Upravljanje/DavcneStopnje.md) | Uporabljena davčna stopnja. |
| **Vrednost** | Končna vrednost postavke (količina × cena − popust). |
| **[Intrastat – Tarifa](../../Racunovodstvo/Upravljanje/Intrastat/Tarife.md)** | Tarifna oznaka blaga, uporabljena za Intrastat poročanje. |
| **Intrastat – Država porekla** | Država, iz katere blago izvira. |
| **Intrastat – Neto teža (kg)** | Neto teža, uporabljena za statistično poročanje. |
| **Intrastat – Statistična vrednost** | Prijavljena statistična vrednost blaga za Intrastat poročanje. |

</details>

## Upravljanje

### Statusi dokumenta

Dokumenti v svojem življenjskem ciklu prehajajo skozi naslednje statuse:

- **Osnutki** – Dokument še ni objavljen; vsa polja so prosto uredljiva.
- **Obdelan** – Dokument je objavljen; ni ga mogoče izbrisati ali prosto spreminjati.
  - **Na voljo** – Dokument je veljaven in pripravljen za nadaljnjo obdelavo.
  - **V zaključevanju** – Dokument je delno obdelan (npr. delno dobavljen).
  - **Zaključen** – Vsa dejanja, povezana z dokumentom, so zaključena.

### Seznam

Seznam prikazuje vsa naročila strank z njihovim trenutnim statusom in datumi dobave.

Na vrhu seznama sistem prikazuje povzetne kazalnike glede na trenutno uporabljene filtre:

- **Zamujena naročila** – Naročila strank, katerih predviden datum dobave je potekel in še niso zaključena.
- **Skupna cena vseh naročil** – Skupna cena vseh naročil strank v aktivnem filtru.

**Osnutki:**

![Naročila strank – Osnutki](../Images/SalesOrdersListDrafts.png "Naročila strank – Osnutki")

**Na voljo (potrjena):**

![Naročila strank – Na voljo](../Images/SalesOrdersListAvailable.png "Naročila strank – Na voljo")

Filtri vključujejo:
- **Datumi dokumentov**
- **Osnutki**
- **Obdelan:** Na voljo, V zaključevanju, Zaključen
- **Stranka**
- **Poslovni vnos**
- **Iskalno polje**

## Dejanja

### Ustvarjanje novega naročila stranke

Naročila strank je mogoče ustvariti na dva načina:

- Neposredno na zaslonu **Naročila strank** z uporabo [**akcijskega gumba**](../../../Skupno/UI/AkcijskiGumb.md)
- Iz potrjene [**Ponudbe**](Ponudbe.md) prek *Povezani dokumenti → + Naročilo stranke*. V tem primeru se večina polj (stranka, dobava, postavke) samodejno izpolni na podlagi ponudbe.

  ![Ustvari naročilo stranke iz ponudbe](../Images/SalesOrdersOfferLink.png "Ustvari naročilo stranke iz ponudbe")

Za ustvarjanje novega naroila stranke sledite korakom:

1. Kliknite **akcijski gumb** za novo naročilo stranke.  
2. Vnesite ali preverite **Stranko**, **Datum dokumenta** in **Datum dobave**.

   ![Naročilo stranke – dokument](../Images/SalesOrdersNewTop.png "Naročilo stranke – dokument")

3. Dodajte postavke v razdelek Postavke. Vnesite ali skenirajte **serijsko številko**, **EAN** ali **naziv materiala**.
   - Sistem prikaže **vsa ujemajoča se sredstva in serijske številke**.

   ![Naročilo stranke – dodaj postavko](../Images/SalesOrdersNewDetails.png "Naročilo stranke – dodaj postavko")

4. Po potrebi prilagodite **Količino**, **Datum dobave** ali druga polja.  
5. Kliknite **Shrani**, da potrdite dodane postavke.  
6. Preglejte ali prilagodite podatke v razdelku **Dobava**.  
7. (Neobvezno) Dodajte priloge ali povežite naročilo s projektom preko **Povezanih dokumentov**.  
8. Kliknite **Objavi**, ko je naročilo pripravljeno.

Po objavi se naročilo stranke premakne v stanje **Potrjeno → Na voljo** in omogoči nadaljnja dejanja.

### Urejanje naročila stranke

Naroilo stranke je razdeljeno v več razširljivih razdelkov.

#### Priponke

Na vrhu dokumenta je razdelek **Priponke**, kjer lahko naložite spremljajoče datoteke.

#### Povezani dokumenti

Razdelek **Povezani dokumenti** omogoča ustvarjanje in pregled povezanih dokumentov.

![Naročilo stranke – povezani dokumenti](../Images/SalesOrdersLinkedDocuments.png "Naročilo stranke – povezani dokumenti")

> [!NOTE]
> Razpoložljiva dejanja v razdelku **Povezani dokumenti** so odvisna od tipa in statusa dokumenta.

Razpoložljiva dejanja vključujejo:

- [**+ Dobavnica**](Dobavnice.md)
- **+ Prazna dobavnica**
- **Poveži obstoječo dobavnico**
- [**+ Proizvodni nalog**](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md)
- [**+ Vzdrževalni nalog**](../../Vzdrzevanje/Dokumenti/VzdrzevalniNalogi.md)
- [**+ Izdani račun**](IzdaniRacuni.md)
- **Poveži s projektom**
- **Kopiraj naročilo stranke**

#### Dokument

![Naročilo stranke – dokument](../Images/SalesOrdersNewTop.png)

Vključuje osnovna polja:

- Šifra  
- Stranka  
- Datum dokumenta  
- Datum dobave  
- Rabat  
- Številka naročilnice  

#### Alternativna valuta

Razdelek Alternativna valuta omogoča izražanje cen v dokumentu v valuti, ki je različna od privzete sistemske valute. To se običajno uporablja pri mednarodni prodaji. Tečaji se povzemajo iz šifranta [Devizni tečaji](../Upravljanje/MenjalniTecaji.md).

![Alternativna valuta](../Images/SalesAlternativeCurrency.png "Alternativna valuta")

Ko je izbrana alternativna valuta, se cene v dokumentu samodejno preračunajo z uporabo navedenega deviznega tečaja.

#### Razdelka Transport in Intrastat

Ko je **Intrastat** nastavljen na **Obvezno** v **Sistem / Konfiguracija / Intrastat**, se v obrazcu dokumenta prikažeta dodatna razdelka.

![Razdelka Transport in Intrastat](../../Logistika/Images/ReceiveTransportInstrastat.png "Razdelka Transport in Intrastat")

- **Transport** – Uporablja se za zajem logističnih informacij o načinu dostave blaga.
- **Intrastat** – Uporablja se za zbiranje podatkov, potrebnih za Intrastat poročanje. Ta polja so prikazana samo, kadar je Intrastat poročanje omogočeno v sistemu.

> [!NOTE]  
> Več vrednosti, povezanih z Intrastat, je prevzetih iz **šifrantov materialov** (Intrastat konfiguracija), kot sta država in vrsta posla. Ta polja niso prosto nastavljiva na ravni dokumenta in so odvisna od predhodno definiranih matičnih podatkov.

#### Dobava

Razdelek Dobava določa naslov dostave. Privzeto se izpolni iz podatkov stranke, vendar ga je mogoče prilagoditi.

#### Postavke

Postavke določajo naročene izdelke ter njihove količine, cene, davke in popuste. Vsaka postavka predstavlja določen izdelek, storitev ali sredstvo.

Dodaj novo postavko:

![Prodajni nalog – Dodaj postavko](../Images/SalesOrdersNewDetailsV2.png "Prodajni nalog – Dodaj postavko")

Shranjena postavka:

![Prodajni nalog – Urejanje postavke](../Images/SalesOrdersNewDetailsSaved.png "Shranjene postavke")

> [!NOTE]
> Ko je omogočen Intrastat, se v razdelku Postavke prikažejo dodatna polja, kot so **Tarifa**, **Država porekla**, **Neto teža (kg)** in **Statistična vrednost**. Ta polja so potrebna za Intrastat poročanje, vendar ne vplivajo na obdelavo prodajnega naloga.

#### Načini plačila

Načini plačila so prikazani na dnu dokumenta.

![Naročilo stranke – načini plačila](../Images/SalesOrdersNewBottom.png "Naročilo stranke – načini plačila")

### Objavljanje in zaključevanje naročila stranke

S klikom na **Objavi** se dokument potrdi in premakne v stanje **Potrjeno → Na voljo**.

> [!NOTE]
> Objavljanje dokumenta ne povzroči dodatnih premikov zaloge ali finančnih knjiženj – ti se izvajajo v povezanih dokumentih.

Ko je naročilo stranke zaključeno (npr. po izdaji dobavnice ali računa), kliknite **Zaključi**:

![Gumb Zaključi naročilo stranke](../Images/SalesOrdersCompleteButton.png "Gumb Zaključi naročilo stranke")

## Meni

Kontekstni meni omogoča:
- tiskanje  
- izvoz (PDF)  
- uvoz postavk (za osnutke)  
- brisanje vseh postavk (za osnutke)  
- vrnitev v osnutek (za zaključene dokumente)

![Meni naročil strank](../Images/SalesOrderMenu.png "Meni naročil strank")

## Brisanje

Osnutke je mogoče izbrisati le, če **ne vsebujejo postavk**.

Če osnutek vsebuje postavke:
1. Odprite **Uredi postavko**.  
2. Kliknite **Izbriši** za vsako postavko.  

Ko dokument ne vsebuje več postavk, ga lahko izbrišete.

> [!NOTE]
> - Izbrisati je mogoče samo **osnutke**.  
> - Po objavi naročila stranke ni več mogoče izbrisati; uporabite **Vrni v osnutek**.
