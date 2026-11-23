<!-- app_route: /management/check-lists -->
<!-- app_label: Kontrolne točke -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Kvaliteta/Upravljanje/KontrolneTocke.md -->
<!-- canonical_source_title: Kontrolne točke -->

# Kontrolne točke

Kontrolne točke pripadaju određenom **[Kontrolnom popisu](KontrolniPopisi.md)** i definiraju pojedinačne korake, provjere ili kontrole koje operateri moraju izvršiti tijekom proizvodnje ili postupaka kontrole kvalitete. Time se osigurava dosljedno izvođenje procesa te prikupljaju strukturirani podaci za reviziju i izvještavanje.

Za pristup kontrolnim točkama otvorite **Proizvodnja / Upravljanje / Kontrolni popisi** i kliknite gumb **Kontrolne točke** željenog kontrolnog popisa.

![Kontrolne točke](../Images/CheckpointButtonHR.png "Kontrolne točke")

> [!TIP]
> Za potpuni prikaz funkcionalnosti pogledajte video vodič **[Quality checkpoints](https://www.youtube.com/watch?v=EB7WktBCFC4)**.

> [!TIP]
> Za primjer izrade i korištenja kontrolnog popisa korak po korak pogledajte **[Izrada kontrolnih popisa](KontrolniPopisiIzrada.md)**.

## Shema

<details open markdown="1">
<summary><strong>Dokument</strong></summary>

| Polje | Opis |
|-------|------|
| [**Oznaka**](../../../Zajednicko/UI/OznakeDokumenata.md) | Automatski generirana jedinstvena oznaka kontrolne točke. |
| **Naziv** | Naziv kontrolne točke (obavezno). |
| **Opis** | Dodatni opis ili informacije o kontrolnoj točki. |
| **Redoslijed** | Redni broj koji određuje položaj kontrolne točke unutar kontrolnog popisa. |
| **Kategorija** | Kategorija za grupiranje ili filtriranje kontrolnih točaka. |
| **Neobvezno** | Označava može li se kontrolna točka preskočiti tijekom izvršavanja. |
| **Tip** | Određuje vrstu unosa koji operater mora izvršiti. |
| **Upute** | Upute prikazane operateru tijekom izvršavanja kontrolne točke. |

</details>

## Pregled popisa

Popis prikazuje sve kontrolne točke odabranog kontrolnog popisa, sortirane prema polju **Redoslijed**.

![Kontrolne točke](../Images/CheckpointsListHR.png "Kontrolne točke")

Za pretraživanje kontrolnih točaka prema nazivu ili oznaci koristite polje **Pretraživanje**.

## Izrada nove kontrolne točke

1. Kliknite [akcijski gumb](../../../Zajednicko/UI/AkcijskiGumb.md) u donjem desnom kutu.
2. Ispunite sljedeća polja:

    ![Nova kontrolna točka](../Images/CheckpointNewHR.png "Nova kontrolna točka")

    - **Naziv** – Naziv kontrolne točke.
    - **Opis** – Dodatni opis kontrolne točke.
    - **Redoslijed** – Određuje položaj kontrolne točke unutar kontrolnog popisa.
    - **Kategorija** – Po potrebi odaberite kategoriju.
    - **Neobvezno** – Označite ako izvršavanje kontrolne točke nije obavezno.
    - **Tip** – Odaberite vrstu unosa koju operater mora izvršiti.
    - **Upute** – Unesite upute za izvršavanje kontrolne točke.

3. Kliknite **Dodaj**.

> [!NOTE]
> Ovisno o odabranom **Tipu**, mogu se prikazati dodatna polja. Više informacija potražite u odjeljku [Posebnosti prema tipu](#posebnosti-prema-tipu).

## Uređivanje kontrolne točke

Za uređivanje postojeće kontrolne točke:

1. Odaberite kontrolnu točku s popisa.
2. Po potrebi izmijenite bilo koje polje, uključujući **Tip**, **Kategoriju** ili **Upute**.
3. Kliknite **Spremi**.

## Brisanje kontrolne točke

Kontrolnu točku možete obrisati na njezinoj stranici za uređivanje klikom na **Izbriši**, osim ako je to ograničeno konfiguracijom tijeka rada.

## Posebnosti prema tipu

Ovisno o odabranom **Tipu**, prikazuju se dodatna polja ili postavke. Za sve tipove potvrdni okvir **Neobvezno** određuje mora li operater ispuniti kontrolnu točku.

### Tip: Označi

Tip **Označi** koristite za korak koji operater potvrđuje oznakom, na primjer „Zaštitna ograda je postavljena“ ili „Naljepnica je pričvršćena“. Operater označi potvrdni okvir uz **Tekst za potvrđivanje**, a kontrolna točka je time ispunjena. Tekst za potvrđivanje treba jasno reći što operater potvrđuje.

Kod tipa **Označi** prikazuje se dodatno polje:

| Atribut | Vrsta | Opis |
|---------|------|------|
| **Tekst za potvrđivanje** | Tekst | Tekst prikazan uz potvrdni okvir. |

### Tip: Popis

Tip **Popis** koristite kada operater bira između unaprijed definiranih opcija, na primjer „Izgled: dobar / ogrebano / oštećeno“. Postavite **Broj valjanih vrijednosti** na **Jedna** ako se može odabrati samo jedna opcija, ili na **Više** ako može vrijediti više opcija. Opcija označena kao **Valjano** predstavlja prihvatljiv rezultat. U kontroli kvalitete opcija koja nije valjana ukazuje na problem, na primjer ogrebanu površinu.

Kod tipa **Popis** prikazuju se dodatne postavke:

| Atribut | Vrsta | Opis |
|---------|------|------|
| **Broj valjanih vrijednosti** | Padajući popis | Određuje može li se odabrati **jedna** ili **više** valjanih vrijednosti. Ako je odabrana opcija **Jedna**, samo jedna vrijednost može biti označena kao valjana. Ako je odabrana opcija **Više**, više vrijednosti može biti označeno kao valjano. |

Vrijednosti popisa dodaju se klikom na **Dodaj novu vrijednost**.

Za svaku vrijednost potrebno je unijeti:

- **Tekst** – Tekst prikazan korisniku.
- **Valjano** – Označava smatra li se vrijednost valjanom.

Dodane vrijednosti prikazuju se u tablici.

![Vrijednosti popisa](../Images/CheckpointListTableHR.png "Vrijednosti popisa")

### Tip: Broj

Tip **Broj** koristite kada operater mora unijeti brojčanu vrijednost, na primjer očitanje ili mjerenje. Primjer: kontrolna točka „Unesite temperaturu“ s mjernom jedinicom °C, zadanom vrijednosti 23, **Donja granica** >= 5 i **Gornja granica** <= 35. Operater upisuje izmjerenu temperaturu, a kontrolni popis prihvaća je samo ako je unutar granica.

Kod tipa **Broj** prikazuju se dodatna polja:

| Atribut | Vrsta | Opis |
|---------|------|------|
| [**Mjerna jedinica**](../../../Zajednicko/Upravljanje/MjerneJedinice.md) | Padajući popis | Mjerna jedinica za unesenu vrijednost. |
| **Donja granica** | Padajući popis i broj | Donja granica dopuštenih vrijednosti. Odaberite **>=** (vrijednost na granici je dopuštena) ili **>** (dopuštene su samo vrijednosti iznad granice), zatim unesite vrijednost granice. |
| **Gornja granica** | Padajući popis i broj | Gornja granica dopuštenih vrijednosti. Odaberite **<=** (vrijednost na granici je dopuštena) ili **<** (dopuštene su samo vrijednosti ispod granice), zatim unesite vrijednost granice. |
| **Zadana vrijednost** | Broj | Zadana vrijednost kontrolne točke. |

Na primjer, uz **Donju granicu** postavljenu na **>= 5**, vrijednost 5 je dopuštena. Uz **> 5** vrijednost 5 nije dopuštena, a najmanja dopuštena vrijednost je iznad 5.

![Kontrolna točka tipa Broj](../Images/CheckpointNumberHR.png "Kontrolna točka tipa Broj")

> [!NOTE]
> Za lakše upravljanje mjernim jedinicama dostupna je poveznica na stranicu **[Mjerne jedinice](../../../Zajednicko/Upravljanje/MjerneJedinice.md)**.
>
> ![Mjerne jedinice](../Images/CheckpointMeasureUnitsHR.png)

### Tip: Privitak

Tip **Privitak** koristite kada operater mora priložiti dokaz, na primjer fotografiju gotovog proizvoda ili PDF certifikata o ispitivanju. Operater prilaže datoteku tijekom popunjavanja kontrolnog popisa. Ako nije označeno **Neobvezno**, kontrolnu točku nije moguće dovršiti dok se ne priloži datoteka.

### Tip: Tekst

Tip **Tekst** koristite kada operater mora upisati slobodnu bilješku, na primjer opis nedostatka ili ime inspektora serije. Operater upisuje odgovor u polje, a on se sprema uz kontrolni popis.