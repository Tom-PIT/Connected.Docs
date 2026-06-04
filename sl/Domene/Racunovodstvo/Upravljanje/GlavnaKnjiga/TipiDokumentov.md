<!-- app_route: /management/ledger/document-types -->
<!-- app_label: Tipi dokumentov -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Racunovodstvo/Upravljanje/GlavnaKnjiga/TipiDokumentov.md -->
<!-- canonical_source_title: Tipi dokumentov -->

# Tipi dokumentov

Å ifrant **Tipi dokumentov** doloÄa vrste raÄunovodskih dokumentov, ki se uporabljajo v glavni knjigi. Vsak tip dokumenta razvrÅ¡Äa temeljnice in druge raÄunovodske knjiÅ¾be glede na njihov poslovni namen, kot so prodaja, nabava, premiki zaloge ali sploÅ¡ne prilagoditve.

Tipi dokumentov so **obvezna konfiguracija** glavne knjige. Na njih se sklicujejo temeljnice in jih sistem uporablja za razvrÅ¡Äanje knjiÅ¾b, uporabo pravil knjiÅ¾enja ter podporo poroÄanju in reviziji.

Za dostop do tega zaslona pojdite na **RaÄunovodstvo / Glavna knjiga / Upravljanje / Tipi dokumentov** v [navigaciji](../../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Å ifra** | TehniÄni identifikator tipa dokumenta. Uporablja se interno v sistemu in v temeljnicah. |
| **Ime** | Berljivo ime, ki opisuje namen tipa dokumenta. |
| **Aktiven** | OznaÄuje, ali je tip dokumenta na voljo pri ustvarjanju novih dokumentov. |

## Seznamski pogled

Seznamski pogled prikazuje vse definirane tipe dokumentov.

Vsaka vrstica vsebuje:
- **Å ifra**
- **Ime**

Neaktivni tipi dokumentov so ohranjeni zaradi zgodovinske sledljivosti, vendar jih ni mogoÄe uporabljati za nove knjiÅ¾be.

![Tipi dokumentov â€“ seznam](../../Images/DocumentTypesList.png "Tipi dokumentov â€“ seznam")

## Dejanja

### Ustvariti tip dokumenta

Za dodajanje novega tipa dokumenta:

1. Kliknite [akcijski gumb](../../../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje novega vnosa.
2. Vnesite:
   - **Å ifra**
   - **Ime**
   - **Aktiven** (privzeto omogoÄeno)
3. Kliknite **Dodaj** za shranjevanje ali **PrekliÄi** za zavrnitev vnosa.

![Tipi dokumentov â€“ nov](../../Images/DocumentTypesNew.png "Tipi dokumentov â€“ nov")

### Urediti tip dokumenta

Kliknite tip dokumenta v seznamu, da ga odprete v naÄinu urejanja, in po potrebi posodobite polja.

Kliknite **Shrani** za uveljavitev sprememb ali **PrekliÄi** za zavrnitev.

## Izbrisati tip dokumenta

Tip dokumenta je mogoÄe izbrisati samo, Äe **ni uporabljen** v obstojeÄih temeljnicah ali konfiguracijskih pravilih.

Za brisanje odprite vnos v naÄinu urejanja in izberite **IzbriÅ¡i**.

> [!WARNING]
> Brisanje tipa dokumenta, ki je potreben za delovanje temeljnic, lahko onemogoÄi pravilno knjiÅ¾enje ali poroÄanje raÄunovodskih podatkov.
