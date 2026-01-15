# Dobropisi

**Dobropis** je prodajni dokument, ki se uporablja za zmanjšanje ali razveljavitev celotnega ali dela že izdanega računa. Običajno se ustvari ob vračilu blaga, napačnem obračunu ali kadar je po izdaji računa potrebna korekcija.

Dobropisi zmanjšujejo odprto obveznost stranke. Za povečanja ali dodatne zaračune glejte **[Bremepise](Bremepisi.md)**.

> [!TIP]
> Za hiter pregled trenutnih **bremenitev in dobropisov** po posameznih strankah uporabite pregled **[Kartice podjetij](../Pregledi/PoslovneKartice.md)**.

Za dostop do tega dokumenta pojdite na **Prodaja / Dokumenti / Dobropisi** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Vloga dobropisov v prodajnem procesu

Dobropisi se uporabljajo po tem, ko je bil račun že izdan:

1. Izdajte **[Izdani račun](IzdaniRacuni.md)** za dobavljeno blago ali storitve.  
2. Ugotovite potrebo po popravku (vračilo, popust ali napaka v ceni).  
3. Ustvarite **Dobropis**, povezan z izdanim računom ali kot samostojen dokument.  
4. Preglejte in objavite dobropis, s čimer preide v stanje **Potrjeno**.  
5. Dobropisani znesek zmanjša obveznost stranke ali se povrne skladno s plačilnimi pogoji.  
6. Če je bil dobropis ustvarjen pomotoma, ga stornirajte (glejte **[Storno](../../Logistika/Dokumenti/Storno.md)**).

Dobropisi vplivajo izključno na računovodstvo in ne vplivajo na zalogo.

## Shema

| Polje | Opis |
|------|------|
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Sistemsko generiran identifikator dobropisa. |
| **Številka naročilnice** | Neobvezna referenca na naročilo stranke. |
| **Stranka** | Stranka, ki prejme dobropis, izbrana iz šifranta [**Poslovni imenik**](../../Skupno/Sifranti/PoslovniImenik.md) (obvezno). |
| **Datum dokumenta** | Datum izdaje dobropisa. |
| **Datum opravljene storitve** | Prvotni datum dobave zaračunanega blaga ali storitev. |
| **Datum zapadlosti** | Datum, ko dobropis stopi v veljavo (obvezno). |
| **Tip reference** | Vrsta uporabljenega plačilnega sklica (obvezno). |
| **Sklic** | Sklicna številka glede na izbrano vrsto sklica. |
| [**Bančni račun organizacije**](../Sifranti/BancniRacuniOrganizacije.md) | Bančni račun za vračila ali računovodsko obdelavo (obvezno). |
| [**Stroškovno mesto**](../../Skupno/Sifranti/StroskovnaMesta.md) | Neobvezna razporeditev na stroškovno mesto. |
| **Koda namena** | Neobvezna oznaka ali razlog za dobropis. |
| **Rabat** | Skupni rabat, uporabljen na dobropis. |
| **Vsebina zgoraj** | Uvodno besedilo iz [**Vnaprej določenih besedil**](../../Skupno/Sifranti/VnaprejDolocenaBesedila.md). |
| **Dostava** | Podatki o podjetju in naslovu dobave. |
| **Vsebina spodaj** | Zaključna ali pravna besedila iz [**Vnaprej določenih besedil**](../../Skupno/Sifranti/VnaprejDolocenaBesedila.md). |

### Polja postavk

| Polje | Opis |
|------|------|
| [**Sredstvo**](../../Sredstva/Sifranti/Izdelki.md) | Dobropisano blago ali storitev. |
| **Količina** | Dobropisana količina (običajno negativna). |
| **Cena brez DDV** | Neto cena na enoto. |
| **Popust (%)** | Neobvezen popust na ravni postavke. |
| **Vrednost** | Izračunane vrednosti (neto, davek, bruto) z negativnimi zneski. |

## Upravljanje

Dobropisi imajo lahko status **Osnutek** ali **Potrjeno**.

### Seznam

Seznam dobropisov je mogoče filtrirati po:
- **Datumih dokumentov**
- **Pogledu** (Osnutki / Potrjeno)
- **Stranki**

Vsaka vrstica prikazuje:
- Stranko  
- Kodo dokumenta  
- Datum dokumenta  
- Znesek dobropisa (negativna vrednost)

Osnutke je mogoče urejati, potrjeni dobropisi pa so dokončni, razen če so stornirani.

![Seznam dobropisov](../Images/CreditNotesList.png "Seznam dobropisov")

## Dejanja

### Ustvarjanje novega dobropisa

Dobropise je mogoče ustvariti na dva načina:

- Z uporabo [**akcijskega gumba**](../../Skupno/UI/AkcijskiGumb.md) na zaslonu **Dobropisi**  
- Iz obstoječega **[Izdanega računa](IzdaniRacuni.md)** prek *Povezani dokumenti → + Dobropis*

Po začetku novega dobropisa sledite korakom:

1. Ustvarite nov osnutek dobropisa.

   ![Nov dobropis](../Images/CreditNoteNew.png "Nov dobropis")

2. Izpolnite zahtevana polja, kot so **Stranka**, **Datumi**, **Tip reference** in **Bančni račun organizacije**.

3. V razdelku **Postavke** dodajte postavke z vnosom ali skeniranjem **naziva sredstva**, **EAN** ali **serijske številke**.

   ![Postavke dobropisa](../Images/CreditNoteNewDetails.png "Postavke dobropisa")

4. Prilagodite količine in vrednosti ter kliknite **Shrani**.

> [!NOTE]
> Ob dodajanju nove postavke v **Dobropis** je **količina privzeto nastavljena na `-1`**, saj dobropisi predstavljajo zmanjšanje zaračunanega zneska.

5. Ko je dobropis pripravljen, kliknite **Objavi**.  
   Dokument preide iz stanja **Osnutek** v **Potrjeno** in postane finančno veljaven.

> [!NOTE]
> Po objavi dobropisa ga ni več mogoče urejati. Vse popravke je treba izvesti s storniranjem.

### Urejanje dobropisa

Urejati je mogoče samo dobropise v stanju **Osnutek**.

Uredite lahko:
- Glavna polja  
- Postavke  
- Besedila (zgoraj in spodaj)

Potrjeni dobropisi so samo za branje.

#### Priponke

V razdelku **Priponke** lahko shranite podporne dokumente, kot so potrdila o vračilu ali dogovori.

#### Povezani dokumenti

Razdelek **Povezani dokumenti** omogoča povezavo s predhodno ustvarjenim **[Izdanim računom](IzdaniRacuni.md)**.

![Povezani dokumenti dobropisa](../Images/CreditDebitNoteLinkedDocuments.png "Povezani dokumenti dobropisa")

Potrjeni dobropisi razdelka **Povezani dokumenti** ne prikazujejo.

## Meni

Meni dokumenta omogoča dodatna dejanja:

- **Tiskanje**
- **Izvoz**
- **Pošlji po e-pošti**
- **Storniraj dokument**
- **Vrni v osnutek** (če je dovoljeno)

![Meni dobropisa](../Images/CreditDebitNoteMenu.png "Meni dobropisa")

Storniranje dobropisa izniči njegov finančni učinek. Za podrobnosti glejte **[Storno](../../Logistika/Dokumenti/Storno.md)**.

## Brisanje

Dobropise v stanju **Osnutek** je mogoče izbrisati le, če **ne vsebujejo postavk**.  
Postavke lahko odstranite preko menija → **Izbriši vse postavke**.

Za brisanje posameznih postavk:
1. Odprite postavko s klikom nanjo.  
2. Kliknite **Izbriši**.  
3. Postopek ponovite po potrebi.

Ko je dobropis brez postavk, lahko izvedete **Izbriši**.

Potrjenih dobropisov **ni mogoče** izbrisati, mogoče pa jih je **stornirati** ali **vrniti v osnutek**.

---
