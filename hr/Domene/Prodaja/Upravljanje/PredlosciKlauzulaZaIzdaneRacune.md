<!-- app_route: /management/sales/issued-invoice-clause-templates -->
<!-- app_label: Predlošci klauzula za izdane račune -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/hr/Domene/Prodaja/Upravljanje/PredlosciKlauzulaZaIzdaneRacune.md -->
<!-- canonical_source_title: Predlošci klauzula za izdane račune -->

# Predlošci klauzula za izdane račune

Šifrarnik **Predlošci klauzula za izdane račune** omogućuje definiranje skupova klauzula (predložaka) koji će se ispisivati na izdanim računima za određene tvrtke. Predložak sadrži jednu ili više klauzula, kao što su pravne napomene, uvjeti plaćanja, izjave o odricanju odgovornosti ili uvjeti obračuna, koje se ispisuju na vrhu ili dnu računa prema definiranom redoslijedu.

Za pristup ovom dokumentu idite na **Prodaja / Upravljanje / Predlošci klauzula za izdane račune** u [navigaciji](../../../Zajednicko/UI/Navigacija.md).

> [!NOTE]
> **Preduvjeti**
>
> Prije izrade predložaka klauzula provjerite sljedeće:
>
> - Tvrtka postoji u [**Poslovnom imeniku**](../../../Zajednicko/Upravljanje/PoslovniImenik.md).
> - Tekst klauzule postoji u šifrarniku [**Unaprijed definirani tekstovi**](../../../Zajednicko/Upravljanje/UnaprijedPripremljeniTekstovi.md) (entitet: **Izdani račun**).

## Shema

### Polja predloška

| Polje | Opis |
|-------|------|
| [**Tvrtka**](../../../Zajednicko/Upravljanje/PoslovniImenik.md) | Tvrtka na koju se predložak klauzula primjenjuje (obavezno). |

### Polja klauzule

| Polje | Opis |
|-------|------|
| **Lokacija** | Određuje prikazuje li se klauzula na vrhu ili dnu računa. |
| **Redoslijed** | Numerički redoslijed prikaza klauzule (npr. 1, 2, 3...). |
| [**Klauzula**](../../../Zajednicko/Upravljanje/UnaprijedPripremljeniTekstovi.md) | Unaprijed definirani tekst za entitet **Izdani račun**. |

## Upravljanje

### Popis predložaka

Na zaslonu je prikazan popis svih predložaka klauzula, grupiranih po tvrtkama.

![Predlošci klauzula za izdane račune](../Images/ClauseTemplatesIssuedInvoicesHR.png "Predlošci klauzula za izdane račune")

Kliknite **Klauzule** za otvaranje popisa klauzula odabranog predloška.

Pomoću polja **Pretraživanje** možete filtrirati predloške prema nazivu tvrtke.

### Popis klauzula

Prikazane su sve klauzule dodijeljene odabranom predlošku prema definiranom redoslijedu.

![Popis klauzula](../Images/ClauseTemplatesIssuedInvoicesClausesListHR.png "Popis klauzula")

Redoslijed klauzula možete promijeniti uređivanjem vrijednosti **Redoslijed**.

## Radnje

### Dodavanje predloška klauzula za izdane račune

Kliknite [akcijski gumb](../../../Zajednicko/UI/AkcijskiGumb.md) za dodavanje novog predloška.

Potrebno je unijeti samo jedno polje:

- [**Tvrtka**](../../../Zajednicko/Upravljanje/PoslovniImenik.md)

![Dodavanje predloška](../Images/ClauseTemplatesIssuedInvoicesNewHR.png "Dodavanje predloška")

Nakon što izradite predložak, kliknite **Klauzule** kako biste otvorili uređivač klauzula.

![Gumb Klauzule](../Images/ClauseTemplatesDeliveryNotesClausesButtonHR.png "Gumb Klauzule")

#### Dodavanje klauzula u predložak

U uređivaču klauzula kliknite [akcijski gumb](../../../Zajednicko/UI/AkcijskiGumb.md) te odaberite:

- **Lokacija**
- **Redoslijed**
- [**Klauzula**](../../../Zajednicko/Upravljanje/UnaprijedPripremljeniTekstovi.md)

![Dodavanje klauzule](../Images/ClauseTemplatesIssuedInvoicesClausesNewHR.png "Dodavanje klauzule")

### Uređivanje predložaka i klauzula

Kliknite na **naziv tvrtke** za otvaranje predloška.

Kliknite na klauzulu koju želite urediti te po potrebi promijenite njezinu lokaciju, redoslijed ili unaprijed definirani tekst.

### Brisanje predložaka i klauzula

Otvorite predložak ili klauzulu, a zatim na zaslonu s pojedinostima kliknite **Izbriši**.

Ako potvrdite brisanje, zapis će biti trajno uklonjen. U suprotnom neće biti promijenjen.

> [!NOTE]
> Predložak klauzula ili pojedinačnu klauzulu moguće je izbrisati samo ako ih ne koriste drugi zapisi u sustavu.