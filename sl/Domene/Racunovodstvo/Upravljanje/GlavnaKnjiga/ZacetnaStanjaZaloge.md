# Začetna stanja zaloge

Pogled **Začetna stanja zaloge** se uporablja za določitev začetnih količin in vrednosti zaloge v skladišču. Predstavlja začetno izhodišče za vrednotenje zalog ob začetku uporabe sistema ali ob vključitvi finančnega spremljanja zaloge.

Začetna stanja zaloge so **dokumentna** in neposredno povezana z računovodstvom. Ob objavi se inicializira finančna vrednost zaloge v glavni knjigi in ustvari začetno stanje kontov zaloge.

Za dostop do tega zaslona pojdite na **Računovodstvo / Glavna knjiga / Upravljanje / Začetna stanja zaloge** v [**navigaciji**](../../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Šifra** | Samodejno generirana enolična identifikacija dokumenta začetnega stanja. |
| **Skladišče** | Skladišče, za katerega se določa začetno stanje zaloge. |
| **Datum dokumenta** | Datum nastanka dokumenta. |
| **Material** | Material ali artikel, ki je na zalogi. |
| **Serijska številka** | Serijska številka artikla, kadar je omogočeno serijsko sledenje. |
| **Količina** | Dejanska količina artikla na zalogi. |
| **Znesek (na enoto)** | Sistemom izračunana vrednost na enoto, prikazana informativno. |
| **Dejanski znesek (na enoto)** | Uredljivo polje za vnos začetne knjigovodske vrednosti na enoto. |

### Polja zneskov

- **Znesek (na enoto)** prikazuje sistemsko izračunano vrednost, če je na voljo. Ob inicializaciji je lahko ta vrednost nič ali določena na podlagi nastavitev vrednotenja materiala.
- **Dejanski znesek (na enoto)** se uporablja za ročni vnos začetne vrednosti zaloge. Pri materialih z več serijskimi številkami se praviloma vnese enaka vrednost na enoto za vse serije istega materiala.

![Urejanje začetnega stanja – vnos vrednosti](../../Images/StockInitialStatesDocumentDraftEdit.png "Urejanje začetnega stanja – vnos vrednosti")

## Seznam dokumentov

Seznam prikazuje po en dokument začetnega stanja na skladišče, v stanju **Osnutek** ali **Objavljeno**. Na voljo sta iskanje in filtriranje.

![Seznam začetnih stanj zaloge](../../Images/StockInitialStatesList.png "Seznam začetnih stanj zaloge")

Vsaka vrstica prikazuje:
- **Šifro**
- **Skladišče**
- **Datum dokumenta**

Seznam je mogoče filtrirati glede na stanje dokumenta (**Osnutek** ali **Objavljeno**).

## Dejanja

### Ustvarjanje začetnega stanja

Za ustvarjanje novega začetnega stanja zaloge:

1. Kliknite [**akcijski gumb**](../../../../Skupno/UI/AkcijskiGumb.md).
2. Izberite **Skladišče**.

   ![Izbira skladišča](../../Images/StockInitialStatesWarehouse.png "Izbira skladišča")

3. Kliknite **Ustvari**.

Sistem ustvari nov dokument v stanju osnutka za izbrano skladišče.

![Dokument začetnega stanja (osnutek)](../../Images/StockInitialStatesDocumentDraft.png "Dokument začetnega stanja (osnutek)")

### Urejanje začetnega stanja

Kliknite dokument v seznamu osnutkov za odprtje v urejanju. Vnesite ali posodobite **Dejanski znesek (na enoto)** pri postavkah in preverite podatke v glavi dokumenta.

Kliknite **Shrani** za potrditev sprememb ali **Prekliči** za zavrnitev.

### Objava začetnega stanja

Ko so vse zahtevane vrednosti vnesene, kliknite **Objavi**, da se inicializira vrednost zaloge v glavni knjigi in ustvarijo začetna stanja kontov zaloge. Objava zaklene dokument pred nadaljnjimi spremembami.

> [!NOTE]
> Za objavo mora biti v glavni knjigi omogočeno **finančno spremljanje zaloge**.  
> Če ta možnost ni omogočena, sistem prepreči objavo in prikaže napako.
>
> Finančno zalogo omogočite v **Sistem / Nastavitve / Nastavitve glavne knjige** z vklopom možnosti **Finančna zaloga omogočena**.

### Brisanje začetnega stanja

Dokumente v stanju **Osnutek** je mogoče izbrisati iz zaslona za urejanje.

> [!NOTE]
> Objavljenih dokumentov ni mogoče izbrisati, saj bi to porušilo celovitost zaloge in računovodskih podatkov.

## Uporaba

Ta pogled se običajno uporablja enkrat – ob začetni uvedbi sistema ali ob prvi aktivaciji računovodskega spremljanja zaloge.

Začetna stanja niso običajni premiki zaloge in jih je treba vnesti **pred** knjiženjem prevzemov, izdaj ali proizvodnih premikov. Točnost vnesenih vrednosti neposredno vpliva na vrednotenje zaloge in strošek prodanega blaga.
