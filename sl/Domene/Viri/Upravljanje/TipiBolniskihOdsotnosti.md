<!-- app_route: /management/resources/sick-leave-types -->
<!-- app_label: Tipi bolniških odsotnosti -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Viri/Upravljanje/TipiBolniskihOdsotnosti.md -->
<!-- canonical_source_title: Tipi bolniških odsotnosti -->

# Tipi bolniških odsotnosti

Tipi bolniških odsotnosti določajo **razloge za bolniško odsotnost**, ki jih lahko zaposleni izberejo pri ustvarjanju vnosa bolniške odsotnosti. Omogočajo standardizirano poročanje o bolniških odsotnostih in zagotavljajo dosledno kategorizacijo v časovnih evidencah, spremljanju prisotnosti in upravljanju odsotnosti.

Za dostop do **Tipov bolniških odsotnosti** pojdite na **Viri / Upravljanje / Tipi bolniških odsotnosti** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| **Ime** | Ime razloga za bolniško odsotnost, ki je prikazano uporabnikom pri beleženju bolniške odsotnosti (na primer: *Poškodba pri delu*, *Gripa*, *Nega otroka*). |

## Seznamski pogled

Seznam prikazuje vse definirane tipe bolniških odsotnosti.

- Vsaka vrstica predstavlja en razlog za bolniško odsotnost  
- Klik na vrstico odpre pogled za urejanje  
- **Akcijski gumb** omogoča ustvarjanje novega tipa bolniške odsotnosti  

![Seznam tipov bolniških odsotnosti](../Images/SickLeaveTypesList.png "Seznam tipov bolniških odsotnosti")

Ta seznam običajno vzdržujejo administratorji ali kadrovski skrbniki.

## Dejanja

### Ustvariti nov tip bolniške odsotnosti

1. Kliknite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md), da ustvarite nov vnos.
2. Vnesite **Naziv** in nastavite **Status** (omogočeno ali onemogočeno) za tip bolniške odsotnosti.
3. Kliknite **Shrani**, da bo tip na voljo v celotnem sistemu.

Spremembe začnejo veljati takoj in se uporabljajo povsod, kjer se evidentira bolniška odsotnost.

### Urejati tip bolniške odsotnosti

Za spreminjanje obstoječega tipa bolniške odsotnosti kliknite njegov **Naziv** na seznamu. Na zaslonu za urejanje lahko spremenite **Naziv** in **Status** tipa.

Kliknite **Shrani**, da uveljavite spremembe. Posodobitve se takoj odražajo na vseh ustreznih mestih v sistemu.

### Izbrisati tip bolniške odsotnosti

Kliknite tip bolniške odsotnosti na seznamu, da odprete zaslon za urejanje, nato kliknite **Izbriši** in potrdite dejanje.

> [!NOTE]
> Brisanje je lahko omejeno, če je tip uporabljen v obstoječih zapisih (npr. časovnih evidencah, evidencah prisotnosti ali odsotnosti). V takšnih primerih tip raje onemogočite namesto brisanja, da ohranite skladnost zgodovinskih podatkov.