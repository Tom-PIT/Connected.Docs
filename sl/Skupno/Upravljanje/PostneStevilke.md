<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Skupno/Upravljanje/PostneStevilke.md -->
<!-- canonical_source_title: Poštne številke -->

# Poštne številke
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
**Poštne številke** pripadajo določeni **državi** in se upravljajo znotraj šifranta [**Države**](Drzave.md). Določajo razpoložljiva poštna območja, ki se uporabljajo pri vnosu naslovov v Poslovnem imeniku ali logističnih dokumentih.

## Dostop do poštnih številk
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
Poštne številke so prikazane kot oznaka pod vsakim vnosom države. Kliknite to oznako, da odprete vmesnik za upravljanje poštnih številk, povezanih z izbrano državo.

![Gumb poštne številke](../Images/PostalCodesButton.png "Gumb poštne številke")

## Shema
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
| Polje | Opis |
|------|------|
| **Številka** | Vrednost poštne številke (npr. **1000**). |
| **Ime** | Pripadajoče mesto, kraj ali poštno območje. |
| **Aktiven** | Označuje, ali je poštna številka na voljo za izbiro pri vnosu naslovov. |

## Seznamski pogled
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
Seznam poštnih številk prikazuje vse šifre, definirane za izbrano državo.

![Seznam poštnih številk](../Images/PostalCodesList.png)

Uporabite filtre **Omogočeno / Onemogočeno** na levi strani za prikaz aktivnih ali neaktivnih poštnih številk.

## Dejanja
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
Kliknite [**akcijski gumb**](../UI/AkcijskiGumb.md) za prikaz naslednjih dejanj:
- **Uvoz**
- **Nov**

### Ustvarjanje nove poštne številke
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
Za dodajanje nove poštne številke kliknite [**akcijski gumb**](../UI/AkcijskiGumb.md) v spodnjem desnem kotu in izberite **Nov**.

![Dodaj poštno številko](../Images/PostalCodesNew.png)

Izpolnite vsa obvezna polja. Neobvezna polja izpolnite, če so relevantna. Za več podrobnosti o poljih si oglejte zgoraj omenjeno razdelitev [**Shema**](#shema).

Kliknite **Dodaj**, da shranite novo poštno številko.

### Uvoz novih poštnih številk
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
Akcijski gumb vključuje tudi možnost **Uvoz**, ki omogoča množični uvoz poštnih številk iz CSV datoteke. To je uporabno pri nastavitvi nove države z večjim številom poštnih številk.

### Urejanje obstoječe poštne številke
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
1. Odprite vnos države.  
2. Kliknite oznako **Poštne številke**.  
3. Izberite poštno številko s seznama.  
4. Posodobite številko, ime ali stanje aktivnosti.  
5. Kliknite **Shrani**.

### Brisanje
<!-- app_route: management/common-types/countries -->
<!-- app_label: Države -->
Poštno številko je mogoče izbrisati na strani za urejanje, vendar le, če ni uporabljena v drugih zapisih (npr. naslovih kupcev ali dobaviteljev).

> [!NOTE]  
> Brisanje poštne številke **ne izbriše** pripadajočega vnosa države.
