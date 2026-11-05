<!-- app_route: /management/materials/repro-materials -->
<!-- app_label: Repro materials -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/RobaIUsluge/Materijali/PomocniProizvodi.md -->
<!-- canonical_source_title: Pomoćni proizvodi -->

# Pomoćni proizvodi

**Pomoćni proizvodi** su višekratne ili pomoćne komponente koje služe za podršku proizvodnji ili internim aktivnostima. Nisu konačni proizvodi, ali su bitni za održavanje ili sastavljanje drugih materijala. Primjeri su vijci, ljepljiva traka, palete ili stiropor.

Svaki pomoćni proizvod sadrži važne atribute, poput [mjernih jedinica](../../../Zajednicko/Upravljanje/MjerneJedinice.md), [porezne stope](../../../Zajednicko/Upravljanje/PorezneStope.md), ponašanja serijskog broja ili mogućnosti [pakiranja](Pakiranje.md), kako bi se osiguralo dosljedno praćenje i korištenje u svim skladišnim i proizvodnim tokovima. Ovaj popis šifara sadrži sve pomoćne proizvode koje koristi vaša organizacija.

> [!TIP]
> Za cjelovitu demonstraciju pogledajte video vodič **[Pomoćni proizvodi](https://www.youtube.com/watch?v=ZRUwbQrAolU)**.

> [!NOTE]  
> **Preduvjeti**  
> Prije upravljanja pomoćnim proizvodima provjerite jesu li ispravno konfigurirani sljedeći popisi šifara:  
> - [**Mjerne jedinice**](../../../Zajednicko/Upravljanje/MjerneJedinice.md)  
> - [**Porezne stope**](../../../Zajednicko/Upravljanje/PorezneStope.md)

Do popisa šifara **Pomoćni proizvodi** dolazite tako da u [navigaciji](../../../Zajednicko/UI/Navigacija.md) odaberete **Roba i Usluge / Materijali / Pomoćni proizvodi**.

## Shema

<details open markdown="1">
<summary><strong>Pomoćni proizvod</strong></summary>

| Polje | Opis |
|-------|------|
| **Oznaka** | Jedinstveni identifikator pomoćnog proizvoda unutar popisa materijala. Na primjer **REP-VIJ-2**. Oznaka mora biti jedinstvena među svim materijalima. (obavezno) |
| **Naziv** | Naziv prikazan na popisima i u dokumentima. Na primjer **Vijak 6 mm**. (obavezno) |
| **Generiranje serijskog broja** | Određuje kako se obrađuju serijski brojevi i zapisi materijala:<br>• **Automatski** – svaka stavka dobiva jedinstveni rastući serijski broj.<br>• **Isti** – sve stavke dijele isti serijski broj, ali ostaju zasebni zapisi.<br>• **Identični** – sve stavke dijele isti serijski broj i tretiraju se kao jedan identičan zapis. |
| **Rok trajanja (u danima)** | Broj dana prije isteka, za kvarljive stavke. Na primjer **30** ili **365**. |
| **EAN** | Vrijednost barkoda koja se koristi za skeniranje. Na primjer **57884441241**. |
| [**Mjerna jedinica**](../../../Zajednicko/Upravljanje/MjerneJedinice.md) | Mjerna jedinica kojom se izražavaju količine, na primjer **komad** ili **metar**. (obavezno) |
| **Broj decimalnih mjesta** | Zadani broj decimalnih mjesta za vrijednosti u ovoj mjernoj jedinici. Na primjer **3** za **1,255** ili **1** za **2,5**. |
| [**Porezna stopa**](../../../Zajednicko/Upravljanje/PorezneStope.md) | Zadana porezna stopa koja se koristi u poslovnim dokumentima. Na primjer **22** ili **9,5**. |
| **Toleranca** | Dopuštena tolerancija za količinu materijala, u postocima. Zadana vrijednost za nove materijale je 1. |

</details>

<details markdown="1">
<summary><strong>Pakiranje</strong></summary>

Definicija pakiranja opisuje fizička svojstva materijala i zamjenske jedinice koje se koriste pri rukovanju u skladištu. Može se postaviti i u [**Pakiranju**](Pakiranje.md).

| Polje | Opis |
|-------|------|
| **Tip materijala** | Klasifikacija materijala (na primjer proizvod, poluproizvod) koja se koristi u kontekstu pakiranja. |
| **Proizvodi / Entitet / Stol od bukovine** | Primjer reference na proizvod ili entitet na koji se pakiranje odnosi. |
| **EAN** | Barkod pakiranja. |
| **Količina (kom)** | Količina koju predstavlja jedinica pakiranja (na primjer 6 komada po kutiji). |
| **Zamjenska mjerna jedinica** | Zamjenska jedinica za rukovanje ili izvještavanje (na primjer paket). |
| **Masa** | Unesite neto i bruto masu jedinice pakiranja. |
| **Dimenzije** | Unesite širinu, visinu i dubinu jedinice pakiranja. |

</details>

<details markdown="1">
<summary><strong>Dodatno</strong></summary>

| Polje | Opis |
|-------|------|
| **Opis** | Kratki opis koji navodi namjenu ili karakteristike materijala. |
| **Oznake** | Oznake koje se koriste za kategorizaciju i filtriranje. |
| **Info URL poveznica** | URL koji vodi na vanjske informacije ili dokumentaciju o materijalu. |
| **URL poveznica slike materijala** | Javni URL koji pokazuje na sliku materijala. |
| **Vanjski ključ** | Identifikator u vanjskom sustavu koji se koristi za povezivanje među sustavima. |
| **Aktivan** | Pokazuje je li materijal dostupan za korištenje u novim dokumentima. Neaktivni materijali ne mogu se dodati u nove unose, ali ostaju vidljivi u povijesti. |

</details>

<details markdown="1">
<summary><strong>Glavna knjiga i Intrastat</strong></summary>

| Polje | Opis |
|-------|------|
| [**Konto zalihe**](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/KontniPlan.md) | Konto bilance na kojem se evidentira vrijednost zaliha ovog materijala. Koristite ga za promjenu zadanog konta zaliha za ovaj određeni materijal. |
| [**Račun troška**](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/KontniPlan.md) | Konto računa dobiti i gubitka koji se koristi kada se materijal potroši, izda iz zaliha ili proda (na primjer nabavna vrijednost prodane robe). Koristite ga za promjenu zadanog konta troška za ovaj materijal. |
| [**Tarifa**](../../Racunovodstvo/Upravljanje/Intrastat/Tarife.md) | Carinska tarifna oznaka koja se koristi za statističko i carinsko izvještavanje. |
| [**Država podrijetla**](../../../Zajednicko/Upravljanje/Drzave.md) | Država podrijetla koja se koristi na trgovinskim i carinskim dokumentima. |
| **Konverter mase** | Faktor za pretvorbu osnovne mjerne jedinice u masu (na primjer u kg). Primjenjuje se u Intrastatu ili analitici kada je potrebna masa. |
| **Konverter mjerne jedinice** | Faktor za pretvorbu osnovne mjerne jedinice materijala u drugu mjernu jedinicu, na primjer iz kilograma u funte, ako se količina u dokumentima ili izvještajima bilježi u drugoj jedinici. |

</details>

## Upravljanje

### Popis pomoćnih proizvoda

Korisničko sučelje sadrži popis pomoćnih proizvoda.

![Popis pomoćnih proizvoda](../Images/ReproMaterialsListHR.png "Popis pomoćnih proizvoda")

Popis prikazuje naziv pomoćnog proizvoda (**Materijal**) i njegovu **Oznaku**.

S lijeve strane ekrana dostupan je filtar **Oznaka**. U gornjem desnom kutu nalazi se polje za pretraživanje.

### Izbornik

Izbornik nudi dodatne radnje dostupne na ekranu popisa.

Dostupne radnje:

- **Preuzmi CSV** – Preuzmite popis materijala kao CSV datoteku. Datoteku možete pregledati, urediti i kasnije uvesti za ažuriranje popisa materijala.

## Radnje

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) da biste prikazali sljedeće radnje:

- [**Uvoz**](#uvoz-pomocnih-proizvoda)
- [**Kopiraj postojeći**](#kopiranje-postojeceg-pomocnog-proizvoda)
- **Novo**

### Dodavanje novog pomoćnog proizvoda

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Novo** da biste otvorili obrazac za stvaranje novog pomoćnog proizvoda.

Obrazac sadrži polja poput **Oznaka**, **Naziv**, **Generiranje serijskog broja**, **Mjerna jedinica**, **Porezna stopa** i druga, ovisno o konfiguraciji.

![Novi pomoćni proizvod](../Images/NewReproMaterialHR.png "Novi pomoćni proizvod")

Dostupni su dodatni sažimajući odjeljci:

#### Pakiranje

Ovaj odjeljak omogućuje pregled ili dodavanje jedne ili više definicija [pakiranja](Pakiranje.md) specifičnih za materijal. Svaki unos predstavlja jedinicu pakiranja s vlastitom količinom i identifikacijom.  

Ti se zapisi pakiranja kasnije mogu koristiti u skladišnim operacijama, poput [primki](../../Logistika/Dokumenti/Primke.md), [izdatnica](../../Logistika/Dokumenti/Izdatnica.md) i [međuskladišnog prometa](../../Logistika/Dokumenti/MeduskladisniPromet.md).

#### Dodatno

Ovaj odjeljak sadrži neobavezna opisna polja, poput opisa materijala, oznaka, slika, poveznica ili vanjskih identifikatora. Ta polja pružaju dodatni kontekst ili reference, ali ne utječu na izračune zaliha.

![Sažimajući odjeljci](../Images/MaterialDodatnoHR.png "Sažimajući odjeljci")

Nakon unosa potrebnih podataka kliknite **Dodaj** da biste spremili materijal ili **Poništi** da biste se vratili na popis.

#### Glavna knjiga i Intrastat

Koristite ove odjeljke za unos Intrastat i carinskih podataka koji se koriste za izvještavanje o trgovini unutar EU te za ostale računovodstvene pojedinosti.

![Intrastat i glavna knjiga materijala](../Images/MaterialsIntrastatLedgerHR.png "Pojedinosti materijala za Intrastat i glavnu knjigu")

> [!WARNING]
> Unesite ispravne konte u odjeljku **Glavna knjiga** (na primjer konte zaliha i troškova). Pogrešne ili nedostajuće vrijednosti uzrokovat će kasnije greške pri knjiženju u računovodstvu.

### Uvoz pomoćnih proizvoda

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Uvoz** da biste uvezli više pomoćnih proizvoda odjednom učitavanjem ispravno strukturirane tablice.

Pogledajte dokumentaciju [**Uvoz materijala**](UvozMaterijala.md) za sve pojedinosti.

### Kopiranje postojećeg pomoćnog proizvoda

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Kopiraj postojeći pomoćni materijal** da biste stvorili novi zapis na temelju postojećeg.

![Kopiranje pomoćnog proizvoda](../Images/CopyReproMaterialHR.png "Kopiranje pomoćnog proizvoda")

Nakon odabira osnovnog materijala sva su polja unaprijed popunjena i mogu se urediti prije spremanja.

## Uređivanje pomoćnog proizvoda

Za uređivanje postojećeg pomoćnog proizvoda kliknite njegov **Naziv** na popisu. Sučelje prelazi u način uređivanja.

![Uređivanje pomoćnog proizvoda](../Images/EditReproMaterialHR.png "Uređivanje pomoćnog proizvoda")

Unesite potrebne izmjene i kliknite **Spremi**.  
Kliknite **Poništi** da biste odbacili promjene.

## Brisanje pomoćnog proizvoda

Kliknite **Izbriši** na ekranu za uređivanje da biste otvorili dijalog za potvrdu:

**Jeste li sigurni da želite izbrisati zapis?**  

Ako potvrdite, pomoćni proizvod se trajno uklanja; u suprotnom sustav zadržava zapis nepromijenjen.

> [!NOTE]
> Pomoćni proizvod se može obrisati samo ako ga ne referenciraju ovisni zapisi (na primjer kretanja zaliha, proizvodni procesi ili dokumenti).
