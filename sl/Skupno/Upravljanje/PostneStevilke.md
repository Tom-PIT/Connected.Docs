<!-- app_route: /management/common-types/countries -->
<!-- app_label: Države -->
<!-- app_navigation_hint: Odprite zaslon Države in kliknite oznako Poštne številke pod imenom države. -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Skupno/Upravljanje/PostneStevilke.md -->
<!-- canonical_source_title: Poštne številke -->

# Poštne številke

**Poštne številke** pripadajo določeni **državi** in se upravljajo znotraj šifranta [**Države**](Drzave.md). Določajo razpoložljiva poštna območja, ki se uporabljajo pri vnosu naslovov v Poslovnem imeniku ali logističnih dokumentih.

Poštne številke so prikazane kot oznaka pod vsakim vnosom države. Kliknite to oznako, da odprete vmesnik za upravljanje poštnih številk, povezanih z izbrano državo.

![Gumb poštne številke](../Images/PostalCodesButton.png "Gumb poštne številke")

## Shema

| Polje | Opis |
|------|------|
| **Številka** | Vrednost poštne številke (npr. **1000**). |
| **Ime** | Pripadajoče mesto, kraj ali poštno območje. |
| **Aktiven** | Označuje, ali je poštna številka na voljo za izbiro pri vnosu naslovov. |

## Seznamski pogled

Seznam poštnih številk prikazuje vse šifre, definirane za izbrano državo.

![Seznam poštnih številk](../Images/PostalCodesList.png)

Uporabite filtre **Omogočeno / Onemogočeno** na levi strani za prikaz aktivnih ali neaktivnih poštnih številk.

## Dejanja

Kliknite [akcijski gumb](../UI/AkcijskiGumb.md) za prikaz naslednjih dejanj:
- **Uvoz**
- **Nov**

### Uvoziti novo poštno številko

Za dodanjem posameznih poštnih številk lahko uporabite tudi funkcijo **Uvoz**, ki omogoča množični uvoz poštnih številk iz CSV datoteke. 

1. Kliknite [akcijski gumb](../UI/AkcijskiGumb.md) in izberite **Uvoz**.
2. Izberite CSV datoteko, ki vsebuje poštne številke.
3. Kliknite **Uvozi**, da začnete postopek.

### Dodati novo poštno številko

Za dodajanje nove poštne številke: 

1. Kliknite [akcijski gumb](../UI/AkcijskiGumb.md) in izberite **Nov**.
2.Izpolnite vsa obvezna polja. Neobvezna polja izpolnite, če so relevantna. 
3. Kliknite **Dodaj**, da shranite novo poštno številko.

![Dodaj poštno številko](../Images/PostalCodesNew.png)

> [!NOTE]
> Za več podrobnosti o poljih si oglejte zgoraj omenjeno razdelitev [**Shema**](#shema).

### Urediti poštno številko

Za urejanje obstoječe poštne številke:

1. Odprite vnos države.  
2. Kliknite oznako **Poštne številke**.  
3. Izberite poštno številko s seznama.  
4. Posodobite številko, ime ali stanje aktivnosti.  
5. Kliknite **Shrani**.

### Izbrisati poštno številko

Za brisanje poštne številke:

1. Odprite vnos države.  
2. Kliknite oznako **Poštne številke**.  
3. Izberite poštno številko s seznama.  
4. Kliknite **Izbriši** in potrdite dejanje. 

Poštno številko je mogoče izbrisati na strani za urejanje, vendar le, če ni uporabljena v drugih zapisih (npr. naslovih kupcev ali dobaviteljev).
