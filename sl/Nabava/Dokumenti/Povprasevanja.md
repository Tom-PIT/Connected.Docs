# Povpraševanja

**Povpraševanje** je nabavni dokument, ki se uporablja za pridobivanje informacij o **cenah**, **razpoložljivosti** in **dobavnih rokih** pri dobaviteljih, še preden se odda formalno naročilo. Povpraševanja omogočajo primerjavo ponudb dobaviteljev, načrtovanje prihodnjih nabav ter nemoten prehod v nadaljnje dokumente, kot so **[nabavni nalogi](NabavniNalogi.md)**.

Za dostop do **Povpraševanj** pojdite na **Nabava / Dokumenti / Povpraševanja** v [**navigaciji**](../../Skupno/UI/Navigacija.md).

## Kako se povpraševanja vključujejo v nabavni proces

Tipičen potek:

1. Ustvarite **Povpraševanje** in ga pošljete dobavitelju.  
2. Dobavitelj odgovori s cenami, razpoložljivostjo in dobavnimi roki.  
3. Po odobritvi povpraševanje pretvorite v **[Nabavni nalog](NabavniNalogi.md)** prek razdelka **Povezani dokumenti**.  
4. Iz nabavnega naloga lahko nato ustvarite **[Prevzem](../../Logistika/Dokumenti/Prevzemi.md)** (delni ali celotni), ko material prispe.

> [!NOTE]
> Povpraševanja niso obvezna — **nabavne naloge** je mogoče ustvariti tudi neposredno, brez predhodnega povpraševanja. Organizacija lahko uporablja vse ali le nekatere korake, odvisno od nabavnega procesa.

## Shema

<details open>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|------|------|
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran enolični identifikator povpraševanja. |
| **Dobavitelj** | Dobavitelj, ki prejme povpraševanje, izbran iz **[Poslovnega imenika](../../Skupno/Upravljanje/PoslovniImenik.md)** (obvezno). |
| **Datum dokumenta** | Datum nastanka povpraševanja. |
| **Datum opravljene storitve** | Rok, do katerega je povpraševanje veljavno (podobno datumu poteka). |

</details>

<details>
  <summary><strong>Postavke</strong></summary>

| Polje | Opis |
|------|------|
| [**Material**](../../Sredstva/Domena/Materiali.md) | Material, za katerega se zahteva informacija. |
| **Datum opravljene storitve** | Predviden ali ponujen dobavni datum. |
| **Količina** | Zahtevana količina izbranega materiala. |
| **Dobaviteljeva šifra** | Interna oznaka materiala pri dobavitelju (neobvezno). |

</details>

## Upravljanje

### Stanja dokumenta

Dokumenti se v svojem življenjskem ciklu pomikajo skozi več stanj:

- **Osnutki** – povpraševanje še ni objavljeno. Vsa polja je mogoče prosto urejati.
- **Potrjeno** – povpraševanje je objavljeno in ga ni več mogoče izbrisati ali prosto spreminjati.
  - **Na voljo** – povpraševanje je veljavno in pripravljeno za nadaljnjo obdelavo.
  - **V zaključevanju** – povpraševanje je delno obdelano (npr. delno pretvorjeno ali uporabljeno).
  - **Zaključen** – vsa dejanja, povezana s povpraševanjem, so bila v celoti izvedena.

### Seznam dokumentov

Seznam **Povpraševanj** omogoča pregled vseh nabavnih zahtevkov, razdeljenih v poglede **Osnutki**, **Na voljo**, **V obdelavi** in **Zaključeno**.

![Seznam povpraševanj – Na voljo](../Images/InquiriesListAvailable.png "Seznam povpraševanj – Na voljo")

### Indikatorji

Na vrhu seznama sistem prikaže indikator **Zamujena povpraševanja**:

- **Zamujena povpraševanja** – povpraševanja, katerih datum veljavnosti je potekel in še niso zaključena.  
  S klikom na indikator se seznam filtrira tako, da prikaže samo zamujena povpraševanja.

### Filtri

Filtri na levi strani omogočajo zoženje rezultatov po:

- **Datumih dokumentov**
- **Pogledu**
  - Osnutki
- **Objavljeno**
  - Na voljo
  - V zaključevanju
  - Zaključen
- **Dobavitelju**
- Iskalnem polju

Filtri omogočajo hitro navigacijo med povpraševanji različnih dobaviteljev, stanj in časovnih obdobij.

## Dejanja

### Ustvarjanje novega povpraševanja

1. Uporabite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje novega osnutka povpraševanja.

2. Izpolnite polja **Dobavitelj**, **Datum dokumenta** in **Datum veljavnosti**.

   ![Novo povpraševanje](../Images/InquiriesNew.png "Novo povpraševanje")

3. V razdelku **Postavke** vnesite ali skenirajte **serijsko številko**, **EAN** ali **ime materiala**.  
   - Sistem prikaže **vsa ujemanja materialov in serijskih številk**.  
   - Prilagodite količino glede na potrebe.

4. Shranite dodane postavke.

5. Ko ste pripravljeni, kliknite **Objavi**, da zaključite osnutek in premaknete povpraševanje v stanje **Na voljo**.

### Urejanje povpraševanja

Kliknite katerokoli povpraševanje v seznamu, da ga odprete. Povpraševanja v stanju **Osnutek** je mogoče prosto urejati.

Dokument vsebuje več razširljivih razdelkov:
- Povezani dokumenti  
- Priponke  
- Dokument  
- Postavke  

#### Priponke

Na vrhu vsakega dokumenta je na voljo razdelek **Priponke**.

Naložite lahko katerokoli ustrezno datoteko — npr. ponudbe, tehnične liste, fotografije ali drugo spremljevalno dokumentacijo. Vse priloge ostanejo shranjene skupaj z dokumentom.

#### Povezani dokumenti

Razdelek **Povezani dokumenti** omogoča ustvarjanje in sledenje nadaljnjih nabavnih dokumentov.

> [!NOTE]
> Razpoložljiva dejanja v razdelku **Povezani dokumenti** so odvisna od vrste dokumenta in njegovega stanja.

Razpoložljiva dejanja vključujejo:

- **Dodaj projekt** – dodelitev povpraševanja projektu  
- **+ Nabavni nalog** – ustvarjanje **[nabavnega naloga](NabavniNalogi.md)** neposredno iz povpraševanja  

> [!TIP]
> Ko se **nabavni nalog** ustvari iz povpraševanja, se večina pomembnih polj samodejno predizpolni.

### Zaključevanje povpraševanja

Ko je povpraševanje v stanju **Na voljo** odobreno, kliknite **Zaključi** na vrhu strani. Dokument se nato prikaže v pogledu **Zaključeno**.

![Seznam povpraševanj – Zaključeno](../Images/InquiriesListCompleted.png "Seznam povpraševanj – Zaključeno")

> [!NOTE]
> Povpraševanje se samodejno premakne v stanje **Zaključeno**, ko se iz njega neposredno ustvari **[nabavni nalog](NabavniNalogi.md)** prek razdelka **Povezani dokumenti**.

## Meni

**Meni** v zgornjem desnem kotu ponuja naslednja dejanja:

![Meni povpraševanja](../Images/InquiriesMenu.png "Meni povpraševanja")

- **Tiskanje** – tiskanje povpraševanja  
- **Izvoz** – izvoz v PDF  

## Brisanje

Povpraševanja je mogoče izbrisati na zaslonu za urejanje. Za brisanje odprite dokument in kliknite **Izbriši** v zgornjem desnem kotu.

> [!NOTE]
> Izbrisati je mogoče samo povpraševanja v stanju **Osnutek**.
