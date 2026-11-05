<!-- app_route: /management/materials/import -->
<!-- app_label: Import materials -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/RobaIUsluge/Materijali/UvozMaterijala.md -->
<!-- canonical_source_title: Uvoz materijala -->

# Uvoz materijala

Ovaj dokument opisuje kako istodobno uvesti više materijala u sustav pomoću tablične datoteke. To omogućuje brzo masovno stvaranje ili ažuriranje zapisa materijala.

Uvoz podržava sljedeće vrste materijala:

- [Proizvodi](Proizvodi.md)  
- [Poluproizvodi](Poluproizvodi.md)  
- [Pomoćni proizvodi](PomocniProizvodi.md)  
- [Sirovine](Sirovine.md)

Na ekranu je dostupna i datoteka s primjerom koju možete preuzeti; ona prikazuje potrebnu strukturu tablice. Prije uvoza možete pokrenuti **Test import**, koji provjerava podatke i prijavljuje greške bez primjene promjena.

> [!NOTE]  
> **Preduvjeti**  
> Prije uvoza materijala provjerite sljedeće popise šifara:  
> - [**Mjerne jedinice**](../../../Zajednicko/Upravljanje/MjerneJedinice.md)  
> - [**Porezne stope**](../../../Zajednicko/Upravljanje/PorezneStope.md)  
> Ako nedostaje referencirana mjerna jedinica ili porezna stopa, ona će se tijekom uvoza automatski stvoriti. Pregled ovih popisa unaprijed pomaže osigurati ispravne nazive i povezivanja.

Do popisa šifara **Uvoz materijala** dolazite tako da u [navigaciji](../../../Zajednicko/UI/Navigacija.md) odaberete **Roba i Usluge / Materijali / Uvoz materijala**.

## Shema

| Polje | Opis |
|--------|------|
| **Created** | Datum i vrijeme kada je tablična datoteka učitana. |
| **Status** | Pokazuje rezultat provjere ili uvoza, uz broj ispravnih redaka i redaka s greškama. |
| **File type** | Format učitane datoteke, CSV ili XLSX. |
| **Applied changes** | Pokazuje jesu li promjene stvarno uvezene (označeno) ili je riječ samo o probnom uvozu (nije označeno). |

## Vrsta datoteke

Sustav prihvaća uvoze u formatu **CSV** ili **XLSX**. Padajućim izbornikom odabire se format **datoteke s primjerom** koju možete preuzeti. Kliknite gumb **Download** da biste preuzeli primjer datoteke za odabrani format. Ova datoteka s primjerom sadrži sve obavezne stupce ispravnim redoslijedom.

![Uvoz materijala – početni ekran](../Images/ImportMaterialsHR.png "Uvoz materijala – početni ekran")

## Struktura tablice

Datoteka za uvoz mora sadržavati stupce navedene u nastavku. Svaki redak predstavlja jedan materijal koji će se uvesti.

> [!IMPORTANT]
> - Nemojte mijenjati redoslijed stupaca. Primjer datoteke koristite kao referencu za točan slijed stupaca.
> - Materijali moraju imati jedinstvene vrijednosti u stupcu Code kako ne bi nastali sukobi.
> - Prazna neobavezna polja uvoze se kao prazne vrijednosti.
> - URL-ovi (Image link URL, Info link URL) moraju biti ispravni ili ostati prazni.

| Stupac | Opis |
|--------|------|
| **Type** | Vrsta materijala: [**Products**](Proizvodi.md), [**Semi products**](Poluproizvodi.md), [**Repro materials**](PomocniProizvodi.md), [**Raw materials**](Sirovine.md). |
| **Code** | Jedinstveni identifikator materijala. Ako materijal s istom oznakom već postoji, uvoz ga ažurira. |
| **Name** | Puni naziv materijala. |
| **Measure unit** | Mjerna jedinica za količine. Mora odgovarati postojećoj [mjernoj jedinici](../../../Zajednicko/Upravljanje/MjerneJedinice.md). |
| **Tags** | Neobavezne oznake za kategorizaciju. Više oznaka odvojite zarezima. |
| **Description** | Neobavezni tekst koji opisuje materijal. |
| **EAN** | Vrijednost barkoda materijala. |
| **Expiration (days)** | Broj dana do isteka materijala. |
| **Image link URL** | URL koji pokazuje na sliku materijala. |
| **Info link URL** | URL koji pokazuje na vanjsku informacijsku stranicu o materijalu. |
| **Precision** | Broj decimalnih mjesta koji se koristi pri prikazu vrijednosti. |
| **Tax rate name** | Naziv porezne stope. Mora odgovarati postojećoj [poreznoj stopi](../../../Zajednicko/Upravljanje/PorezneStope.md). |
| **Tax rate** | Postotak poreza koji se primjenjuje na materijal. |
| **Tolerance** | Dopuštena tolerancija za količinu materijala, u postocima. Zadana vrijednost za nove materijale je 1. |
| **External key** | Identifikator vanjskog sustava. |

> [!NOTE]
> Nazivi stupaca i vrijednosti u stupcu **Type** moraju ostati u obliku u kojem se nalaze u primjeru datoteke.

## Primjer retka

```
Product,C0000001,Acme product 1,Kg,ACME,Acme product 1,C000EAN1,0,https://google.com;https://google.com,0,DDV,22,EXT01
```

## Uređivanje datoteke

Tablicu možete pripremiti ili izmijeniti u uređivaču tablica:

![Uređivanje u Excelu](../Images/ImportMaterialsExcel.png "Uređivanje u Excelu")

## Učitavanje datoteke

1. Za početak uvoza povucite datoteku **CSV** ili **XLSX** u područje za učitavanje ili kliknite na njega da biste otvorili dijalog za odabir datoteke.

2. Nakon učitavanja datoteke pojavljuje se **pregled podataka** sa svim obrađenim zapisima. Dostupne su sljedeće radnje:

    - **Test import** – provodi probni uvoz bez stvarnog spremanja podataka, tako da se greške mogu otkriti prije uvoza  
    - **Uvoz** – uvozi i sprema podatke te primjenjuje sve ispravne promjene u sustavu  


    ![Uvoz materijala – pregled podataka](../Images/ImportMaterialsPreviewHR.png "Uvoz materijala – pregled podataka")
   
   Preporučuje se da prvo izvedete **Test import** kako biste osigurali da je struktura podataka ispravna i da biste spriječili probleme prije primjene uvoza. Ispod područja za učitavanje nalazi se popis svih prethodno učitanih datoteka. Retci s greškama označeni su **crvenom** bojom, a ispravni retci **zelenom** bojom u stupcu **Status**.

   ![Uvoz materijala – pregled grešaka](../Images/ImportMaterialsResultsHR.png "Uvoz materijala – pregled grešaka")

3. Da biste dovršili cijeli uvoz nakon provjere podataka s **Test import**, ponovno učitajte tablicu i odaberite **Uvoz**.

Tijekom uvoza:

- Stvaraju se novi materijali.  
- Postojeći materijali (podudaranje prema **Code**) se ažuriraju.  
- Ovisnosti (oznake, mjerne jedinice, porezne stope) povezuju se automatski.  
- Vrsta materijala dodjeljuje se prema stupcu **Type**.

Nakon dovršetka uvoza status se ažurira u tablici i pokazuje koji su retci uspješno obrađeni.

## Popis rezultata

Kliknite bilo koji uvoz u stupcu **Created** na popisu uvoza da biste pregledali rezultate i moguće greške. U stupcu **Status** vidi se broj ispravnih redaka (zeleno) i redaka s greškama (crveno).

![Izvješće o uvozu materijala](../Images/ImportMaterialsReportHR.png "Izvješće o uvozu materijala")
