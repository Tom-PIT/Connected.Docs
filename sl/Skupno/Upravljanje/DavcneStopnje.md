<!-- app_route: /management/common-types/tax-rates -->
<!-- app_label: Davčne stopnje -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Skupno/Upravljanje/DavcneStopnje.md -->
<!-- canonical_source_title: Davčne stopnje -->

# Davčne stopnje
Šifrant **Davčne stopnje** določa vse davčne stopnje, uporabljene v sistemu. Davčne stopnje določajo odstotek davka, ki se uporablja za izdelke, materiale in storitve v poslovnih dokumentih. Vsak zapis vsebuje opisno ime in številčno vrednost, kar zagotavlja dosledno obračunavanje davkov v vseh digitalnih vsebinah.

Do šifranta **Davčne stopnje** lahko dostopate iz različnih domen v [**navigaciji**](../UI/Navigacija.md). V vseh primerih delate z istimi skupnimi podatki.

Za odpiranje seznama pojdite v razdelek **Upravljanje / Davčne stopnje** v naslednjih domenah:

- **Sredstva**
- **Prodaja**
- **Nabava**

## Shema
| Polje | Opis |
|------|------|
| **Naziv** | Opisno ime davčne stopnje (npr. *Standardna davčna stopnja 22* ali *Znižana davčna stopnja 9,5*). |
| **Davčna stopnja (%)** | Številčni odstotek davka (npr. **22** ali **9,5**). |
| **Aktivna** | Označuje, ali je davčna stopnja trenutno v uporabi. Neaktivnih stopenj ni mogoče izbrati v novih vnosih, ostanejo pa vidne v zgodovini. |
| **Glavna knjiga – Debet/Kredit** | Konto glavne knjige, izbran iz **[Konti](../../Domene/Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md)**, ki se bremeni oziroma odobri, ko se davčni znesek knjiži z uporabo te davčne stopnje. |

## Upravljanje

### Seznam davčnih stopenj
Uporabniški vmesnik vsebuje seznam davčnih stopenj. Če zapisi še ne obstajajo, je seznam prazen.

Vsak zapis vključuje indikator stanja levo od imena:
- **Modra** označuje, da je davčna stopnja aktivna
- **Siva** označuje, da je davčna stopnja neaktivna

![Seznam davčnih stopenj](../Images/TaxRates.png "Seznam davčnih stopenj")

Seznam prikazuje ime davčne stopnje in pripadajoči odstotek. V zgornjem desnem kotu je na voljo iskalno polje.

## Dejanja

### Dodaj novo davčno stopnjo
Kliknite [**akcijski gumb**](../UI/AkcijskiGumb.md), da dodate novo davčno stopnjo.

Izpolnite vsa obvezna polja. Neobvezna polja izpolnite, če so relevantna. Za več podrobnosti o poljih si oglejte zgoraj omenjeno razdelitev [**Shema**](#shema).

Kliknite **Dodaj** za shranjevanje ali **Prekliči** za vrnitev na seznam.

![Dodaj novo davčno stopnjo](../Images/TaxRatesNew.png "Dodaj novo davčno stopnjo")

#### Glavna knjiga
Razdelek **Glavna knjiga** določa, kateri konti glavne knjige se uporabijo za knjiženje davčnih zneskov, ko je ta davčna stopnja uporabljena v poslovnih dokumentih.

Polji **Debet** in **Kredit** omogočata izbor kontov iz šifranta **[Konti](../../Domene/Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md)**. Ti konti določajo, kam se davčni zneski knjižijo med računovodskimi transakcijami.

> [!NOTE]
Nastavitev glavne knjige je potrebna za natančno davčno računovodstvo, poročanje in skladnost s predpisi.

### Urejanje obstoječe davčne stopnje
Za urejanje obstoječe davčne stopnje kliknite njeno **Ime** na seznamu.  
Kliknite **Shrani** za potrditev sprememb ali **Prekliči** za zavrnitev.

### Brisanje
Kliknite **Izbriši** na zaslonu za urejanje, da odprete potrditveno pogovorno okno:

**Ali ste prepričani, da želite izbrisati ta zapis?**

Če potrdite, se zapis trajno odstrani; sicer sistem ohrani obstoječe stanje.

> [!NOTE]
> Davčno stopnjo je mogoče izbrisati le, če ni uporabljena v nobenem od odvisnih zapisov.
