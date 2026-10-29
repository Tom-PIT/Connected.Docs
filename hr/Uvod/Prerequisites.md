<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Uvod/Prerequisites.md -->
<!-- canonical_source_title: Preduvjeti -->

# Preduvjeti

Dovršite ove korake kako biste pripremili sustav za prvu upotrebu. Ovaj vodič povezuje na prave stranice i izbjegava ponavljanje pojedinosti.

Sustav na početku može biti prazan od osnovnih podataka potrebnih za svakodnevno poslovanje (države, valute, porezne stope, mjerne jedinice, partneri, artikli, skladišta i sl.). Te vrijednosti moraju se unijeti preko odgovarajućih šifrarnika prije nego što se dokumenti i tijekovi rada mogu koristiti.

> [!TIP]
> Slijedite ovaj vodič korak po korak kako biste konfigurirali platformu. Koristite poveznice za otvaranje svakog šifrarnika ili postavke ako trebate dodatne pojedinosti, a zatim se vratite na stranicu Preduvjeti i nastavite sa sljedećim korakom.

### Pregled potrebnih koraka:

1. Izradite osnovne zajedničke šifrarnike: **[Države](../Zajednicko/Upravljanje/Drzave.md)**, **[Valute](../Zajednicko/Upravljanje/Valute.md)**, **[Porezne stope](../Zajednicko/Upravljanje/PorezneStope.md)**, **[Mjerne jedinice](../Zajednicko/Upravljanje/MjerneJedinice.md)**, **[Banke](../Zajednicko/Upravljanje/Banke.md)**
2. Konfigurirajte postavke sustava: **[Konfiguracija sustava](../Domene/Sustav/Postavke/Configuration.md)** (identitet organizacije, zadana država i valuta)
3. Konfigurirajte postavke plaćanja: **[Načini plaćanja](../Domene/Prodaja/Upravljanje/NaciniPlacanja.md)**, **[Bankovni računi organizacije](../Domene/Prodaja/Upravljanje/BankovniRacuniOrganizacije.md)**
4. Dodajte poslovne partnere: **[Poslovni imenik](../Zajednicko/Upravljanje/PoslovniImenik.md)**
5. Dodajte materijale i imovinu: vrste materijala — **[Proizvodi](../Domene/RobaIUsluge/Materijali/Proizvodi.md)**, **[Poluproizvodi](../Domene/RobaIUsluge/Materijali/Poluproizvodi.md)**, **[Sirovine](../Domene/RobaIUsluge/Materijali/Sirovine.md)**, **[Reprodukcijski materijali](../Domene/RobaIUsluge/Materijali/PomocniProizvodi.md)**; ambalaža — **[Ambalaža](../Domene/RobaIUsluge/Materijali/Pakiranje.md)**; imovina — **[Imovina](../Domene/RobaIUsluge/RobaIUsluge/RobaIUsluge.md)**
6. Postavite skladišta i lokacije (ako je primjenjivo): **[Skladišta](../Domene/Logistika/Upravljanje/Skladista.md)**, **[Lokacije](../Domene/Logistika/Upravljanje/Lokacije.md)**, **[Organizacijske jedinice](../Domene/Proizvodnja/Upravljanje/OrganizacijskeJedinice.md)**, **[Lokacije skladišta](../Domene/Proizvodnja/Upravljanje/SkladisneLokacije.md)**

> [!TIP]
> **Šifrarnik** su zajednički glavni podaci koji se koriste u dokumentima i domenama (npr. države, valute, porezne stope, mjerne jedinice). Najprije ih konfigurirajte kako bi obrasci, padajući izbornici i izračuni ispravno radili.

## Koraci preduvjeta

### 1. Izradite osnovne zajedničke šifrarnike

Te zajedničke šifrarnike trebaju **[Prodaja](../Domene/Prodaja/README.md)**, **[Nabava](../Domene/Nabava/README.md)**, **[Logistika](../Domene/Logistika/README.md)**, **[Proizvodnja](../Domene/Proizvodnja/README.md)** i **[Sustav](../Domene/Sustav/Postavke/Configuration.md)**:

- **[Države](../Zajednicko/Upravljanje/Drzave.md)** — popis država za adrese, lokalizaciju i oblikovanje dokumenata  
  Idite na: **Prodaja / Upravljanje / Države**
- **[Valute](../Zajednicko/Upravljanje/Valute.md)** — valute dostupne za cijene, dokumente i financijska izvješća  
  Idite na: **Prodaja / Upravljanje / Valute**
- **[Porezne stope](../Zajednicko/Upravljanje/PorezneStope.md)** — definicije PDV-a i drugih poreza primijenjene na dokumente prodaje i nabave  
  Idite na: **Prodaja / Upravljanje / Porezne stope**
- **[Mjerne jedinice](../Zajednicko/Upravljanje/MjerneJedinice.md)** — osnovne jedinice (kilogrami, metri, komadi i sl.) za količine i izračune  
  Idite na: **Prodaja / Upravljanje / Mjerne jedinice**
- **[Banke](../Zajednicko/Upravljanje/Banke.md)** — popis banaka za evidenciju bankovnih računa organizacije i partnera  
  Idite na: **Prodaja / Upravljanje / Banke**

> [!NOTE]
> Domene i postavke sustava ovise o tim vrijednostima kako bi ispravno radile.

> [!IMPORTANT]
>
> Zajednički šifrarnici moraju biti izrađeni prije nego što ih odaberete u konfiguraciji sustava ili u dokumentima domena. Pojedinosti potražite na stranici **[Zajednička domena](../Zajednicko/README.md)**.

### 2. Konfigurirajte postavke sustava

Postavite organizaciju i globalne zadane vrijednosti koje koriste svi moduli:
- **[Konfiguracija sustava](../Domene/Sustav/Postavke/Configuration.md)** — identitet organizacije, pravni podaci, podnožje; zadana država i valuta  
  Idite na: **Sustav / Konfiguracija**
  - konfigurirajte organizaciju (identitet, pravni podaci, podnožje)
  - postavite zajedničke vrste (zadana država, zadana valuta)

### 3. Konfigurirajte postavke plaćanja (Prodaja)

Ako vaši scenariji uključuju dokumente prodaje, unesite podatke o plaćanju:
- **[Načini plaćanja](../Domene/Prodaja/Upravljanje/NaciniPlacanja.md)** — vrste plaćanja kupaca koje podržavate (bankovni prijenos, kartica, gotovina i sl.)  
  Idite na: **Prodaja / Upravljanje / Načini plaćanja**
- **[Bankovni računi organizacije](../Domene/Prodaja/Upravljanje/BankovniRacuniOrganizacije.md)** — bankovni računi tvrtke prikazani na računima i korišteni za plaćanja  
  Idite na: **Prodaja / Upravljanje / Bankovni računi organizacije**

> [!NOTE]
> Izlazni računi i predujmovi zahtijevaju valjane definicije plaćanja.

### 4. Dodajte poslovne partnere (Poslovni imenik)

Dodajte poslovne partnere (kupce, dobavljače, suradnike) kako biste ih koristili u nabavi, prodaji i logistici:
- **[Poslovni imenik](../Zajednicko/Upravljanje/PoslovniImenik.md)** — centralizirani popis kupaca, dobavljača i partnerskih subjekata  
  Idite na: **Prodaja / Upravljanje / Poslovni imenik**

> [!NOTE]
> Dokumenti trebaju podatke o partneru (kupac, dobavljač) kako bi se mogli izraditi.

### 5. Materijali i imovina

Dodajte materijale i imovinu koji će se koristiti u dokumentima i skladišnim operacijama prema vašem slučaju upotrebe:
- Vrste materijala:
  - **[Proizvodi](../Domene/RobaIUsluge/Materijali/Proizvodi.md)** — gotova roba koju prodajete ili skladištite
  - **[Poluproizvodi](../Domene/RobaIUsluge/Materijali/Poluproizvodi.md)** — međuproizvodi koji se koriste u proizvodnji
  - **[Sirovine](../Domene/RobaIUsluge/Materijali/Sirovine.md)** — osnovni materijali koji se troše u proizvodnji
  - **[Reprodukcijski materijali](../Domene/RobaIUsluge/Materijali/PomocniProizvodi.md)** — potrošni i pomoćni materijali (vijci, ljepilo, lak)

  Idite na: **Roba i usluge / Materijali**
- Ambalaža:
  - **[Ambalaža](../Domene/RobaIUsluge/Materijali/Pakiranje.md)** — određuje kako je materijal upakiran (količina, težina, dimenzije, po želji alternativne mjerne jedinice)
- Imovina:
  - **[Imovina](../Domene/RobaIUsluge/RobaIUsluge/RobaIUsluge.md)** — katalog robe i usluga s cijenama i podacima o porezu  
    Idite na: **Roba i usluge / Imovina**

> [!NOTE]
> Dokumenti prodaje i proizvodnje zahtijevaju definirane artikle i resurse.

### 6. Postavite skladišta i lokacije (ako je primjenjivo)

Za logističke ili proizvodne scenarije koji uključuju zalihe:
- **[Skladišta](../Domene/Logistika/Upravljanje/Skladista.md)** — mjesta skladištenja na kojima se čuvaju zalihe  
  Idite na: **Logistika / Upravljanje / Skladišta**
- **[Lokacije](../Domene/Logistika/Upravljanje/Lokacije.md)** — lokacije u skladištima (police, pregrade) za precizno smještanje  
  Idite na: **Logistika / Upravljanje / Lokacije**
- **[Organizacijske jedinice](../Domene/Proizvodnja/Upravljanje/OrganizacijskeJedinice.md)** — proizvodna područja, linije ili ćelije za planiranje i izvršavanje  
  Idite na: **Proizvodnja / Upravljanje / Organizacijske jedinice**
- **[Lokacije skladišta](../Domene/Proizvodnja/Upravljanje/SkladisneLokacije.md)** — povezuje organizacijske jedinice s fizičkim lokacijama skladišta za privremeno odlaganje ulaza i izlaza  
  Idite na: **Proizvodnja / Upravljanje / Lokacije skladišta**

> [!NOTE]
> Skladišne operacije zahtijevaju definirana skladišta i lokacije.

## Zaključak

Sada ste unijeli minimalne potrebne podatke za izvođenje standardnog poslovnog procesa. S osnovnim šifrarnicima, zadanim postavkama sustava, postavkama plaćanja, partnerima, artiklima i lokacijama skladištenja:
- obrasci i padajući izbornici ispravno se povezuju među domenama
- dokumenti se mogu izraditi bez nedostajućih obaveznih vrijednosti
- kretanje zaliha i računi mogu se izvršiti od početka do kraja

### Sljedeći koraci

Istražite scenarije od početka do kraja kako biste vidjeli kako se ti preduvjeti uklapaju u tijekove rada:
- **[Proces prodaje (s predujmom)](SalesProcessWithPrepayment.md)**
- **[Proces prodaje (bez predujma)](SalesProcessWithoutPrepayment.md)**
