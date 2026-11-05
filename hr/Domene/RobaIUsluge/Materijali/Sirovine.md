<!-- app_route: /management/materials/raw-materials -->
<!-- app_label: Raw materials -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/RobaIUsluge/Materijali/Sirovine.md -->
<!-- canonical_source_title: Sirovine -->

# Sirovine

**Sirovine** su osnovne stavke koje se koriste u proizvodnim procesima ili kupuju za internu uporabu. Mogu uključivati drvo, metalne limove, tkanine, kemikalije ili bilo koji drugi ulazni materijal potreban za izradu gotovih proizvoda. Svaka sirovina pohranjuje ključne podatke, poput [mjernih jedinica](../../../Zajednicko/Upravljanje/MjerneJedinice.md), [porezne stope](../../../Zajednicko/Upravljanje/PorezneStope.md), roka trajanja ili [pakiranja](Pakiranje.md), kako bi se njome moglo dosljedno upravljati u cijelom sustavu.

Ovaj popis šifara služi kao registar svih sirovina unutar strukture materijala.

> [!TIP]
> Za cjelovitu demonstraciju pogledajte video vodič **[Sirovine](https://www.youtube.com/watch?v=kb6I-eJ0tBU)**.

> [!NOTE]  
> **Preduvjeti**  
> Prije upravljanja sirovinama provjerite jesu li ispravno konfigurirani sljedeći popisi šifara:  
> - [**Mjerne jedinice**](../../../Zajednicko/Upravljanje/MjerneJedinice.md)  
> - [**Porezne stope**](../../../Zajednicko/Upravljanje/PorezneStope.md)

Do popisa šifara **Sirovine** dolazite tako da u [navigaciji](../../../Zajednicko/UI/Navigacija.md) odaberete **Roba i Usluge / Materijali / Sirovine**.

## Shema

<details open markdown="1">
<summary><strong>Sirovina</strong></summary>

| Polje | Opis |
|-------|------|
| **Oznaka** | Jedinstveni identifikator sirovine unutar popisa materijala. Oznaka mora biti jedinstvena među svim materijalima. (obavezno) |
| **Naziv** | Naziv sirovine prikazan na popisima i u dokumentima. (obavezno) |
| **Generiranje serijskog broja** | Određuje kako se obrađuju serijski brojevi i zapisi materijala:<br>• **Automatski** – svaka stavka dobiva jedinstveni rastući serijski broj.<br>• **Isti** – sve stavke dijele isti serijski broj, ali ostaju zasebni zapisi.<br>• **Identični** – sve stavke dijele isti serijski broj i tretiraju se kao jedan identičan zapis. |
| **Rok trajanja (u danima)** | Broj dana prije isteka materijala (korisno za kvarljivu robu). |
| **EAN** | Vrijednost barkoda koja se koristi za skeniranje. |
| [**Osnovna mjerna jedinica**](../../../Zajednicko/Upravljanje/MjerneJedinice.md) | Mjerna jedinica kojom se izražavaju količine (na primjer komad, kg, metar). (obavezno) |
| **Broj decimalnih mjesta** | Zadani broj decimalnih mjesta za vrijednosti u ovoj mjernoj jedinici. Na primjer **3** za **1,255** ili **1** za **2,5**. |
| [**Porezna stopa**](../../../Zajednicko/Upravljanje/PorezneStope.md) | Zadana porezna stopa koja se koristi u poslovnim dokumentima. |
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
| **Opis** | Kratki interni opis sirovine. |
| **Oznake** | Oznake koje se koriste za kategorizaciju i filtriranje. |
| **Info URL poveznica** | URL koji vodi na vanjske informacije ili dokumentaciju. |
| **URL poveznica slike materijala** | Javni URL koji pokazuje na sliku materijala. |
| **Vanjski ključ** | Identifikator koji povezuje sirovinu s vanjskim sustavima. |
| **Aktivan** | Pokazuje je li sirovina dostupna za korištenje u novim dokumentima. |

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

### Popis sirovina

Korisničko sučelje sadrži popis sirovina.

![Popis sirovina](../Images/RawMaterialsListHR.png "Popis sirovina")

Popis prikazuje naziv sirovine (**Materijal**) i njezinu **Oznaku**.

S lijeve strane ekrana dostupan je filtar **Oznaka**. U gornjem desnom kutu nalazi se polje za pretraživanje.

### Izbornik

Izbornik nudi dodatne radnje dostupne na ekranu popisa.

Dostupne radnje:

- **Preuzmi CSV** – Preuzmite popis materijala kao CSV datoteku. Datoteku možete pregledati, urediti i kasnije uvesti za ažuriranje popisa materijala.

## Radnje

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) da biste prikazali sljedeće radnje:

- [**Uvoz**](#uvoz-sirovina)
- [**Kopiraj postojeću**](#kopiranje-postojece-sirovine)
- **Novo**

## Dodavanje nove sirovine

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Novo** da biste otvorili obrazac za dodavanje nove sirovine. Obrazac sadrži polja poput **Oznaka**, **Naziv**, **Generiranje serijskog broja**, **Osnovna mjerna jedinica**, **Porezna stopa** i druga, ovisno o konfiguraciji.

![Nova sirovina](../Images/NewRawMaterialHR.png "Nova sirovina")

Dostupni su dodatni sažimajući odjeljci:

#### Pakiranje
Ovaj odjeljak omogućuje pregled ili dodavanje jedne ili više definicija [pakiranja](Pakiranje.md) specifičnih za materijal. Svaki unos predstavlja jedinicu pakiranja s vlastitom količinom i identifikacijom.  

Ti se zapisi pakiranja kasnije mogu koristiti u skladišnim operacijama, poput [primki](../../Logistika/Dokumenti/Primke.md), [izdatnica](../../Logistika/Dokumenti/Izdatnica.md) i [međuskladišnog prometa](../../Logistika/Dokumenti/MeduskladisniPromet.md).

#### Dodatno
Ovaj odjeljak sadrži neobavezna opisna polja, poput opisa materijala, oznaka, slika, poveznica ili vanjskih identifikatora. Ta polja pružaju dodatni kontekst ili reference, ali ne utječu na izračune zaliha.

![Sažimajući odjeljci](../Images/MaterialDodatnoHR.png "Sažimajući odjeljci")

Nakon unosa potrebnih podataka kliknite **Dodaj** da biste spremili sirovinu ili **Poništi** da biste se vratili na popis.

#### Glavna knjiga i Intrastat
Koristite ove odjeljke za unos Intrastat i carinskih podataka koji se koriste za izvještavanje o trgovini unutar EU te za ostale računovodstvene pojedinosti.

![Intrastat i glavna knjiga materijala](../Images/MaterialsIntrastatLedgerHR.png "Pojedinosti materijala za Intrastat i glavnu knjigu")

> [!WARNING]
> Unesite ispravne konte u odjeljku **Glavna knjiga** (na primjer konte zaliha i troškova). Pogrešne ili nedostajuće vrijednosti uzrokovat će kasnije greške pri knjiženju u računovodstvu.

### Uvoz sirovina

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite funkciju uvoza da biste učitali više sirovina odjednom.

Pogledajte dokumentaciju [**Uvoz materijala**](UvozMaterijala.md) za sve pojedinosti.

### Kopiranje postojeće sirovine

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Kopiraj postojeću** da biste stvorili novu sirovinu na temelju postojeće.

![Kopiranje sirovine](../Images/CopyRawMaterialHR.png "Kopiranje sirovine")

## Uređivanje sirovine

Kliknite naziv sirovine na popisu da biste uredili zapis.

![Uređivanje sirovine](../Images/EditRawMaterialHR.png "Uređivanje sirovine")

## Brisanje sirovine

Kliknite **Izbriši** na ekranu za uređivanje da biste otvorili dijalog za potvrdu:

**Jeste li sigurni da želite izbrisati zapis?**  

Ako potvrdite, sirovina se trajno uklanja; u suprotnom sustav zadržava zapis nepromijenjen.

> [!NOTE]
> Sirovina se može obrisati samo ako je ne referenciraju drugi zapisi.
