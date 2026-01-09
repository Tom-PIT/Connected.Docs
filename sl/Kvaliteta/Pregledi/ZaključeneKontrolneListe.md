# Zaključene kontrolne liste

Pogled **Zaključene kontrolne liste** ponuja analitični pregled vseh **izvajanj kontrolnih seznamov, ki so bila zaključena** v izbranem časovnem obdobju. Omogoča nadzornikom in vodjem kakovosti pregled rezultatov, preverjanje kakovosti izvajanja ter vpogled v poročila zaključenih kontrolnih seznamov.

Za dostop do tega pogleda se pomaknite na **Kvaliteta / Pogledi / Zaključene kontrolne liste** v [navigaciji](../../Skupno/UI/Navigacija.md).

### Pregled

Na vrhu zaslona več kazalnikov povzema trenutno stanje zaključenih kontrolnih seznamov:

- **Vsi kontrolni seznami**  
  Prikazuje skupno število zaključenih izvajanj kontrolnih seznamov in **stopnjo uspešnosti kontrolnih seznamov** (odstotek v celoti potrjenih kontrolnih seznamov).

- **Veljavni**  
  Število zaključenih kontrolnih seznamov, pri katerih so bile **vse kontrolne točke potrjene**.

- **Neveljavni**  
  Število zaključenih kontrolnih seznamov, pri katerih **vsaj ena kontrolna točka ni bila potrjena**.

Klik na posamezni kazalnik ustrezno filtrira seznam.

## Seznam zaključenih kontrolnih seznamov

Seznam prikazuje zaključena izvajanja kontrolnih seznamov z njihovimi glavnimi kontekstnimi informacijami. Vsaka vrstica predstavlja **eno zaključno izvajanje kontrolnega seznama**. Za hitro filtriranje rezultatov uporabite iskalno vrstico v zgornjem desnem kotu.

![Seznam zaključenih kontrolnih seznamov](../Images/CompletedChecklistsList.png)

Prikazane informacije običajno vključujejo:

- **Kontrolni seznam** — koda in ime kontrolnega seznama (npr. `CHL-25-00000003` · Potrebni materiali)
- **Dokument** — izvorni dokument in koda (npr. Proizvodni nalog `PRO-25-000026`)
- **Operacija** — koda in ime operacije (npr. `OPR-25-000017, Montaža`)
- **Izdelek** — ime in koda izdelka
- **Organizacijska enota** — odgovorna enota
- **Preveril** — uporabnik, ki je zaključil kontrolni seznam
- **Datum in čas zaključka**

Vrstice **niso razširljive**. Za ogled podrobnosti kontrolnega seznama odprite poročilo kontrolnega seznama.

### Interakcije vrstic

- Kliknite **kodo kontrolnega seznama**, da odprete **poročilo kontrolnega seznama**.
- Kliknite **kodo proizvodnega naloga**, da odprete povezani dokument [proizvodni nalog](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md).

## Meni

**Meni** v zgornjem desnem kotu ponuja:

- **Tiskanje**
- **Izvoz CSV**

## Filtri

Uporabite filtre v levi stranski vrstici za zoženje seznama:

- **Datumi kontrolnih seznamov** — filtriranje po časovnem obdobju zaključka kontrolnega seznama
- **Vrsta dokumenta** — omejitev rezultatov na:
  - [Proizvodni nalog](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md)
  - [Vzdrževalni nalog](../../Vzdrževanje/Dokumenti/VzdrževalniNalogi.md)
- **Dokument** — filtriranje po določenem dokumentu
- **Človeški viri** — filtriranje po uporabniku, ki je zaključil kontrolni seznam
- **Kontrolni seznam** — filtriranje po definiciji kontrolnega seznama

Vsi filtri so neobvezni in jih je mogoče kombinirati.

## Poročilo kontrolnega seznama

Klik na kodo kontrolnega seznama odpre zaslon **Poročilo kontrolnega seznama**, ki prikazuje celoten rezultat zaključenega izvajanja kontrolnega seznama.

![Poročilo kontrolnega seznama](../Images/CompletedChecklistReport.png)

Poročilo vključuje:

- **Informacije o kontrolnem seznamu**
  - Koda in ime
  - Datum in čas zaključka
  - Preveril (uporabnik, ki je zaključil kontrolni seznam)

- **Pregled kontrolnega seznama**
  - Seznam kontrolnih točk
  - Končno stanje vsake kontrolne točke (potrjeno / nepotrjeno)
  - Vse zabeležene **komentarje**, **meritve** ali **priloge**, če so bile del definicije kontrolnega seznama

Poročilo kontrolnega seznama je **samo za branje** in ga po zaključku ni mogoče urejati.

> [!NOTE]
> - V tem pogledu so prikazana samo zaključena izvajanja kontrolnih seznamov.  
> - Kontrolni seznam se šteje za **veljaven** samo, če so potrjene vse kontrolne točke.  
> - **Neveljavni** kontrolni seznami pomenijo, da ena ali več kontrolnih točk ni bila potrjena.  
> - Komentarji, meritve in priloge so prikazani le, če so bili definirani v predlogi kontrolnega seznama.

## Povezani pogledi

- **[Aktivne kontrolne liste](AktivneKontrolneListe.md)** — spremljanje kontrolnih seznamov, ki so trenutno v teku
- **[Proizvodni nalogi](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md)** — pregled proizvodnih dokumentov, povezanih s kontrolnimi seznami
- **[Vzdrževalni nalogi](../../Vzdrževanje/Dokumenti/VzdrževalniNalogi.md)** — pregled vzdrževalnih dokumentov, povezanih s kontrolnimi seznami

---