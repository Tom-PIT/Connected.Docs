# Aktivne kontrolne liste

Pogled **Aktivne kontrolne liste** prikazuje vsa izvajanja kontrolnih seznamov, ki so trenutno v teku. Operaterji ga uporabljajo za spremljanje in dokončanje tekočih nalog kakovosti ali vzdrževanja. Ko je kontrolni seznam zaključen, se v tem pogledu ne prikazuje več in se premakne v pogled Zaključene kontrolne liste.

Za dostop do tega pogleda se pomaknite na **Kvaliteta / Pogledi / Aktivne kontrolne liste** v [navigaciji](../../Skupno/UI/Navigacija.md).

### Pregled

Ta pogled ponuja seznam vseh trenutno aktivnih (nedokončanih) kontrolnih seznamov v realnem času. Namenjen je osebju v proizvodnji, vzdrževalnemu osebju in nadzornikom za hiter pregled, kateri kontrolni seznami zahtevajo pozornost.

## Shema

| Polje | Opis |
|------|------|
| **Kontrolni seznam** | Koda in ime kontrolnega seznama, ki se izvaja; prikazuje trenutno fazo prek statusne oznake (npr. Na začetku). |
| **Dokument** | Vrsta in koda izvornega dokumenta: [Proizvodni nalog](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md) ali [Vzdrževalni nalog](../../Vzdrževanje/Dokumenti/VzdrževalniNalogi.md). |
| **Operacija** | Koda in ime operacije, povezane z izvajanjem kontrolnega seznama. |
| **Izdelek** | Ime in koda izdelka, povezana z operacijo (v proizvodnih kontekstih). |
| [**Organizacijska enota**](../../Proizvodnja/Sifranti/OrganizacijskeEnote.md) | Enota, odgovorna za izvajanje (npr. Montaža, Elektro vzdrževanje). |
| **Oprema** | Prikazano za kontrolne sezname, povezane z vzdrževanjem; oprema, ki se vzdržuje ali preverja. |

## Seznam aktivnih kontrolnih seznamov

![Seznam aktivnih kontrolnih seznamov](../Images/ActiveChecklistsList.png "Seznam aktivnih kontrolnih seznamov")

Na vrhu strani dva kazalnika povzemata trenutno stanje:
- **Aktivni kontrolni seznami** — skupno število aktivnih izvajanj kontrolnih seznamov.
- **Moji kontrolni seznami** — število aktivnih izvajanj kontrolnih seznamov, dodeljenih trenutno prijavljenemu uporabniku.

## Filtri

Uporabite filtre za zoženje seznama:
- **Datumi kontrolnih seznamov** — filtriranje po datumu začetka, roku ali časovnem obdobju aktivnosti.
- **Vrsta dokumenta** — omejitev rezultatov na določen izvorni dokument:
  - [Vzdrževalni nalog](../../Vzdrževanje/Dokumenti/VzdrževalniNalogi.md)
  - [Proizvodni nalog](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md)

## Interakcije vrstic

- Kliknite **kodo kontrolnega seznama**, da odprete izvajanje kontrolnega seznama na strani [Urejanje kontrolnega seznama](#urejanje-kontrolnega-seznama).
- Kliknite **kodo dokumenta**, da odprete povezani dokument:
  - [Proizvodni nalog](../../Proizvodnja/Dokumenti/ProizvodniNalogi.md), kadar je vrsta dokumenta Proizvodni nalog
  - [Vzdrževalni nalog](../../Vzdrževanje/Dokumenti/VzdrževalniNalogi.md), kadar je vrsta dokumenta Vzdrževalni nalog
- Kliknite **kodo operacije**, da odprete stran [Izvajanje proizvodnje](../../Proizvodnja/Dokumenti/Izvajanje.md), osredotočeno na trenutno izvajanje.

## Meni

**Meni** v zgornjem desnem kotu ponuja:

- **Tiskanje**
- **Izvoz CSV**
- **Izvoz PDF**

## Urejanje kontrolnega seznama

Stran za urejanje kontrolnega seznama prikazuje trenutno **kodo** in **ime** kontrolnega seznama, nato pa pregled kontrolnih točk.

![Urejanje kontrolnega seznama – aktivne kontrolne liste](../Images/ActiveChecklistsChecklistEdit.png "Urejanje kontrolnega seznama")

Tipična postavitev vključuje seznam kontrolnih točk z zahtevanimi vnosi (potrditve, meritve, tolerance).

## Opombe

- Tukaj so prikazani samo kontrolni seznami, ki so trenutno v teku; zaključeni elementi so na voljo v pogledu Zaključeni kontrolni seznami.
- Osveževanje podatkov poteka samodejno v rednih intervalih ali ob ročni osvežitvi.

---