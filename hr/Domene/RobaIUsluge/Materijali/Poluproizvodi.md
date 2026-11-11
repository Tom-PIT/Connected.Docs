<!-- app_route: /management/materials/semi-products -->
<!-- app_label: Semi products -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/RobaIUsluge/Materijali/Poluproizvodi.md -->
<!-- canonical_source_title: Poluproizvodi -->

# Poluproizvodi

**Poluproizvodi** su međumaterijali koji se koriste u proizvodnji gotove robe. Izrađuju se od sirovina, a zatim se koriste kao komponente drugih stavki. Primjeri su ploča za stolnu površinu, metalni okvir, drvena noga ili modul sklopa.

Svaki poluproizvod sadrži ključne podatke, poput [mjernih jedinica](../../../Zajednicko/Upravljanje/MjerneJedinice.md), [porezne stope](../../../Zajednicko/Upravljanje/PorezneStope.md), ponašanja serijskog broja ili roka trajanja, kako bi se osiguralo dosljedno rukovanje u proizvodnji, zalihama i skladišnim operacijama. Ovaj popis šifara sadrži sve poluproizvode koji se koriste u vašem proizvodnom procesu.

> [!TIP]
> Za cjelovitu demonstraciju pogledajte video vodič **[Poluproizvodi](https://www.youtube.com/watch?v=Ox2OF8_IwOQ)**.

> [!NOTE]  
> **Preduvjeti**  
> Prije upravljanja poluproizvodima provjerite jesu li ispravno konfigurirani sljedeći popisi šifara:  
> - [**Mjerne jedinice**](../../../Zajednicko/Upravljanje/MjerneJedinice.md)  
> - [**Porezne stope**](../../../Zajednicko/Upravljanje/PorezneStope.md)

Do popisa šifara **Poluproizvodi** dolazite tako da u [navigaciji](../../../Zajednicko/UI/Navigacija.md) odaberete **Roba i Usluge / Materijali / Poluproizvodi**.

## Shema

<details open markdown="1">
<summary><strong>Poluproizvod</strong></summary>

| Polje | Opis |
|-------|------|
| **Oznaka** | Jedinstveni identifikator poluproizvoda unutar popisa materijala. Oznaka mora biti jedinstvena među svim materijalima. (obavezno) |
| **Naziv** | Naziv poluproizvoda prikazan na popisima i u dokumentima. (obavezno) |
| **Generiranje serijskog broja** | Određuje kako se obrađuju serijski brojevi i zapisi materijala:<br>• **Automatski** – svaka stavka dobiva jedinstveni rastući serijski broj.<br>• **Isti** – sve stavke dijele isti serijski broj, ali ostaju zasebni zapisi.<br>• **Identični** – sve stavke dijele isti serijski broj i tretiraju se kao jedan identičan zapis. |
| **Rok trajanja (u danima)** | Broj dana prije isteka, za kvarljive ili vremenski osjetljive materijale. |
| **EAN** | Vrijednost barkoda koja se koristi za skeniranje. |
| [**Osnovna mjerna jedinica**](../../../Zajednicko/Upravljanje/MjerneJedinice.md) | Mjerna jedinica kojom se izražavaju količine, na primjer **komad** ili **metar**. (obavezno) |
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
| **Opis** | Kratki interni opis koji objašnjava namjenu ili specifikacije poluproizvoda. |
| **Oznake** | Oznake koje se koriste za kategorizaciju i filtriranje. |
| **Info URL poveznica** | URL koji vodi na vanjske informacije ili dokumentaciju o materijalu. |
| **URL poveznica slike materijala** | Javni URL koji pokazuje na sliku materijala. |
| **Vanjski ključ** | Identifikator u vanjskom sustavu koji se koristi za povezivanje zapisa među sustavima. |
| **Aktivan** | Pokazuje je li poluproizvod dostupan za korištenje u novim dokumentima. Neaktivne stavke ne mogu se koristiti u novim unosima, ali ostaju vidljive u povijesti. |

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

### Popis poluproizvoda

Korisničko sučelje sadrži popis poluproizvoda. Ako još nema zapisa, popis je prazan.

![Popis poluproizvoda](../Images/SemiProductsListHR.png "Popis poluproizvoda")

Popis prikazuje naziv poluproizvoda (**Poluproizvodi**) i njegovu **Oznaku**.

S lijeve strane ekrana dostupan je filtar **Oznaka**. Polje za pretraživanje u gornjem desnom kutu pomaže filtrirati popis.

### Izbornik

Izbornik nudi dodatne radnje dostupne na ekranu popisa.

Dostupne radnje:

- **Preuzmi CSV** – Preuzmite popis materijala kao CSV datoteku. Datoteku možete pregledati, urediti i kasnije uvesti za ažuriranje popisa materijala.

## Radnje

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) da biste prikazali sljedeće radnje:

- [**Uvoz**](#uvoz-poluproizvoda)
- [**Kopiraj postojeći**](#kopiranje-postojeceg-poluproizvoda)
- **Novo**

### Dodavanje novog poluproizvoda

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Novo** da biste otvorili obrazac za stvaranje novog poluproizvoda.

Obrazac sadrži polja poput **Oznaka**, **Naziv**, **Generiranje serijskog broja**, **Osnovna mjerna jedinica**, **Porezna stopa** i druga, ovisno o konfiguraciji.

![Novi poluproizvod](../Images/NewSemiproductHR.png "Novi poluproizvod")

Dostupni su dodatni sažimajući odjeljci:

#### Pakiranje

Ovaj odjeljak omogućuje pregled ili dodavanje jedne ili više definicija [pakiranja](Pakiranje.md) specifičnih za materijal. Svaki unos predstavlja jedinicu pakiranja s vlastitom količinom i identifikacijom.  

Ti se zapisi pakiranja kasnije mogu koristiti u skladišnim operacijama, poput [primki](../../Logistika/Dokumenti/Primke.md), [izdatnica](../../Logistika/Dokumenti/Izdatnica.md) i [međuskladišnog prometa](../../Logistika/Dokumenti/MeduskladisniPromet.md).

#### Dodatno

Ovaj odjeljak sadrži neobavezna opisna polja, poput opisa materijala, oznaka, slika, poveznica ili vanjskih identifikatora. Ta polja pružaju dodatni kontekst ili reference, ali ne utječu na izračune zaliha.

![Sažimajući odjeljci](../Images/MaterialDodatnoHR.png "Sažimajući odjeljci")

Nakon unosa potrebnih podataka kliknite **Dodaj** da biste spremili poluproizvod ili **Poništi** da biste se vratili na popis.

#### Glavna knjiga i Intrastat

Koristite ove odjeljke za unos Intrastat i carinskih podataka koji se koriste za izvještavanje o trgovini unutar EU te za ostale računovodstvene pojedinosti.

![Intrastat i glavna knjiga materijala](../Images/MaterialsIntrastatLedgerHR.png "Pojedinosti materijala za Intrastat i glavnu knjigu")

> [!WARNING]
> Unesite ispravne konte u odjeljku **Glavna knjiga** (na primjer konte zaliha i troškova). Pogrešne ili nedostajuće vrijednosti uzrokovat će kasnije greške pri knjiženju u računovodstvu.

### Uvoz poluproizvoda

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Uvoz** da biste uvezli više poluproizvoda odjednom pripremom i učitavanjem ispravno strukturirane tablice.  

Pogledajte dokumentaciju [**Uvoz materijala**](UvozMaterijala.md) za sve pojedinosti.

### Kopiranje postojećeg poluproizvoda

Kliknite [gumb radnji](../../../Zajednicko/UI/AkcijskiGumb.md) i odaberite **Kopiraj postojeći poluproizvod** da biste stvorili novi poluproizvod na temelju postojećeg. Pojavljuje se popis dostupnih osnovnih poluproizvoda.

![Kopiranje poluproizvoda](../Images/CopySemiproductHR.png "Kopiranje poluproizvoda")

Nakon odabira osnovnog poluproizvoda sva su polja unaprijed popunjena i mogu se urediti prije spremanja.

## Uređivanje poluproizvoda

Za uređivanje postojećeg poluproizvoda kliknite njegov **Naziv** na popisu.  
Sučelje prelazi u način uređivanja i prikazuje sva polja za izmjenu.

![Uređivanje poluproizvoda](../Images/EditSemiproductHR.png "Uređivanje poluproizvoda")

Kliknite **Spremi** da biste primijenili promjene ili **Poništi** da ih odbacite.

## Brisanje poluproizvoda

Kliknite **Izbriši** na ekranu za uređivanje da biste otvorili dijalog za potvrdu:

**Jeste li sigurni da želite izbrisati zapis?**  

Ako potvrdite, poluproizvod se trajno uklanja; u suprotnom sustav zadržava zapis nepromijenjen.

> [!NOTE]
> Poluproizvod se može obrisati samo ako ga ne referenciraju ovisni zapisi, poput kretanja zaliha, dokumenata, proizvodnih struktura ili drugih veza materijala.
