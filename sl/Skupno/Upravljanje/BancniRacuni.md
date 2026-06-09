<!-- app_route: /management/contacts/companies -->
<!-- app_label: Poslovni imenik -->
<!-- app_navigation_hint: Odprite Poslovni imenik in kliknite oznako Bančni računi pod imenom podjetja. -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Skupno/Upravljanje/BancniRacuni.md -->
<!-- canonical_source_title: Bančni računi -->

# Bančni računi
Bančni računi pripadajo določenemu **kupcu** ali **dobavitelju** in se upravljajo znotraj [**Poslovnega imenika**](PoslovniImenik.md). Določajo finančne podatke računa, ki se kasneje uporabljajo v dokumentih, kot so izdani računi ali plačila.

Vsak račun je povezan z **banko**, izbrano iz vnaprej definiranega šifranta [**Banke**](Banke.md).

Bančni računi so prikazani kot oznaka pod vsakim vnosom v poslovnem imeniku. Kliknite to oznako, da odprete vmesnik za upravljanje bančnih računov, povezanih z izbranim partnerjem.

![Oznaka bančnih računov](../Images/BankAccountsButtonSL.png)

## Shema
| Polje | Opis |
|-------|------|
| [**Banka**](Banke.md) | Finančna institucija, ki zagotavlja račun. Izbrana iz šifranta **Banke** (obvezno). |
| **IBAN** | Celotna mednarodna številka bančnega računa (obvezno). |
| **Aktiven** | Označuje, ali se lahko račun uporablja v dokumentih. |
| **Uporabljaj IBAN masko** | Vizualno oblikuje IBAN (presledki in skupine) brez spreminjanja vrednosti. |

## Seznamski pogled
Seznam bančnih računov prikazuje vse račune, povezane z izbranim vnosom v Poslovnem imeniku.

![Seznam bančnih računov](../Images/BankAccountsListSL.png)

Uporabite filtre na levi strani (Omogočeno / Onemogočeno) za prikaz samo aktivnih ali neaktivnih računov.

## Dejanja

### Dodati nov bančni račun

Za ustvarjanje novega bančnega računa:

1. Kliknite [akcijski gumb](../UI/AkcijskiGumb.md) v spodnjem desnem kotu.
2. Izpolnite vsa obvezna polja. Neobvezna polja izpolnite, če so relevantna.
![Dodaj bančni račun](../Images/BankAccountsNewSL.png)
3. Kliknite **Dodaj**, da shranite nov račun.

> [!NOTE]
> Za več podrobnosti o poljih si oglejte zgoraj omenjeno razdelitev [**Shema**](#shema).

### Urediti bančni račun

Za urejanje bančnega računa:

1. Odprite vnos v Poslovnem imeniku.  
2. Kliknite oznako **Bančni računi**.  
3. Izberite račun s seznama.  
4. Posodobite IBAN, stanje aktivnosti ali možnost maske.  
5. Kliknite **Shrani**.

### Izbrisati bančni račun

Za brisanje bančnega računa:

1. Odprite vnos v Poslovnem imeniku.
2. Kliknite oznako **Bančni računi**.
3. Izberite račun s seznama.
4. Kliknite **Izbriši**. Pojavi se potrditveno okno. Če potrdite, bo bančni račun izbrisan.

Bančni račun je mogoče izbrisati na strani za urejanje, vendar le, če ni uporabljen v drugih dokumentih (npr. izdanih računih ali plačilih).