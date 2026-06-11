<!-- app_route: /accounting/documents/received-invoices -->
<!-- app_label: Prejeti računi -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Racunovodstvo/Dokumenti/PrejetiRacuni.md -->
<!-- canonical_source_title: Prejeti računi -->

# Prejeti računi

**Prejeti računi** so finančni dokumenti, ki predstavljajo račune, prejete od dobaviteljev za kupljeno blago ali storitve.  
Uporabljajo se za evidentiranje računov dobaviteljev, ustvarjanje računovodskih knjižb in sprožanje izhodnih plačil.

Za dostop do tega zaslona pojdite na **Računovodstvo / Računi / Prejeti računi** v [navigaciji](../../../Skupno/UI/Navigacija.md).

> [!NOTE]
> Prejeti računi so običajno povezani z enim ali več **nabavnimi nalogi**.  Povezava z nabavnimi nalogi omogoča, da sistem predizpolni podatke in predlaga knjižbe na podlagi prejetega blaga.
>
> Za knjiženje postavk na prejetem računu mora biti za vsako postavko izbran [**Strošek**](../../Nabava/Upravljanje/Stroski.md). Ta določa konto glavne knjige, davčno stopnjo in logiko knjiženja, ki se uporabi ob potrditvi dokumenta.


## Življenjski cikel

Ko od dobavitelja prejmemo račun, ta sledi naslednjemu poteku:

1. Ustvari se nov prejeti račun v stanju **Osnutek**.
2. En ali več **[nabavnih nalogov](../../Nabava/Dokumenti/NabavniNalogi.md)** se poveže prek **Povezav dokumentov**.
3. Vnesejo se podatki glave dokumenta in skupni znesek.
4. Pregledajo in ustvarijo se predlagane knjižbe.
5. Račun se **Objavi**, kar pomeni knjiženje v glavno knjigo.
6. Dokument preide v stanje **Zaključeno**.
7. V ozadju se ustvari **temeljnica** (glejte [**Dvostavno knjigovodstvo**](DvostavnoKnjigovodstvo.md)).
8. Iz prejetega računa se lahko ustvari **[plačilni nalog](../../Racunovodstvo/Dokumenti/PlacilniNalogi.md)**.

## Shema

<details open>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|-----|-----|
| **Interna šifra** | Sistemsko generirana enolična oznaka prejetega računa. |
| **Zunanja šifra** | Referenčna številka računa dobavitelja (obvezno). |
| **Dobavitelj** | Dobavitelj, ki je izdal račun (obvezno). Prevzeto iz **[Poslovnega imenika](../../../Skupno/Upravljanje/PoslovniImenik.md)**. |
| [**Bančni račun**](../../../Skupno/Upravljanje/BancniRacuni.md) | Bančni račun dobavitelja za plačilo (obvezno). |
| **Datum izdaje** | Datum, naveden na računu dobavitelja. |
| **Datum dobave** | Datum, ko je bilo blago ali storitev dobavljena. |
| **Datum prejema** | Datum, ko je bil račun prejet. |
| **Datum zapadlosti** | Rok za plačilo računa (obvezno). |
| **Znesek** | Skupni neto znesek računa. |
| [**Valuta**](../../../Skupno/Upravljanje/Valute.md) | Valuta računa. |
| **Referenca** | Sklic za plačilo, ki ga določi dobavitelj (obvezno). |
| **Način plačila** | Način poravnave (npr. plačilni nalog). |
| [**Stroškovno mesto**](../../../Skupno/Upravljanje/StroskovnaMesta.md) | Neobvezna dodelitev stroškovnega mesta. |
| [**Konto**](../Upravljanje/GlavnaKnjiga/Konti.md) | Konto glavne knjige za knjiženje (obvezno). |
| [**Predloga**](../Upravljanje/GlavnaKnjiga/PredlogeZaTemeljnice.md) | Predloga knjiženja, uporabljena za račun. |

</details>

<details>
  <summary><strong>Postavke</strong></summary>

| Polje | Opis |
|-----|-----|
| [**Strošek**](../../Nabava/Upravljanje/Stroski.md) | Stroškovna ali zalogovna kategorija postavke. |
| [**Konto**](../Upravljanje/GlavnaKnjiga/Konti.md) | Konto glavne knjige za posamezno postavko. |
| [**Davčna stopnja**](../../../Skupno/Upravljanje/DavcneStopnje.md) | Uporabljena davčna stopnja. |
| **Znesek** | Neto znesek postavke. |
| **Znesek DDV** | Izračunan znesek davka. |
| **Predplačilo** | Označuje, ali gre za predplačilo. |
| **Samoobdavčitev** | Označuje uporabo samoobdavčitve. |
| **Odbitek DDV** | Označuje, ali je DDV odbiten. |

</details>

## Upravljanje

### Seznam

Seznam prikazuje vse prejete račune skupaj s povzetnimi kazalniki. Obstajajo stolpci za **šifro dokumenta**, **datum zapadlosti** in **znesek**, ki jih lahko razvrstite s klikom na glavo stolpca. Iskalno polje omogoča filtriranje po imenu dobavitelja ali datumu.

![Seznam prejetih računov](../Images/ReceivedInvoicesListV2.png "Seznam prejetih računov")

Na voljo so naslednji filtri:

- **Datum izdaje**
- **Datum dobave**
- **Pogled**
  - Osnutek
  - Na voljo
  - Zaključeno
- **Podjetje**
- **Način plačila**

Seznam prikazuje tudi agregirane kazalnike, kot so število dokumentov in skupni znesek glede na trenutne filtre.

### Stanja dokumentov

Prejeti računi prehajajo skozi naslednja stanja:

- **Osnutek** – dokument je v urejanju in še ni knjižen.
- **Na voljo** – dokument je objavljen, vendar vsebuje neusklajene zneske.
- **Zaključeno** – dokument je objavljen in vsi zneski so usklajeni.

Stanje dokumenta določa razpoložljiva dejanja in nadaljnje postopke.

#### Neusklajeni zneski

Do neusklajenosti pride, kadar znesek v glavi dokumenta ne ustreza vsoti postavk (neto in/ali DDV).  
To se lahko zgodi, kadar je DDV vključen ali izključen nepravilno ali so zneski vneseni previsoko ali prenizko.

Za odpravo:
- z uporabo menija dokument **Vrnete v osnutek** in prilagodite glavo ali postavke (priporočeno),
- pri dokumentu v stanju *Na voljo* je mogoče urejati samo razdelek **Postavke**.

## Dejanja

### Ustvariti prejeti račun

Za ustvarjanje prejetega računa uporabite potek dela, ki je razložen v **[Kako ustvariti prejeti račun](PrejetiRacuniUstvarjanje.md)**.

### Vrnitev v osnutek

Če so po objavi potrebne spremembe:

1. Odprite dokument.
2. Odprite meni v zgornjem levem kotu.
3. Izberite **Vrni v osnutek**.

To omogoča popravljanje datumov ali kontov pred ponovnim objavljanjem.

### Ustvari plačilni nalog

Pri zaključenih dokumentih razdelek **Povezave dokumentov** omogoča ustvarjanje plačilnega naloga iz prejetega računa.

![Povezani dokumenti](../Images/ReceivedInvoicesCommitedTop.png)

Za podrobnosti o povezavah med dokumenti, sledljivosti in ustvarjanju povezanih dokumentov glejte [**Povezani dokumenti**](../../../Skupno/Koncepti/PovezaniDokumenti.md).

## Izbrisati prejeti račun

Dokumente v stanju **Osnutek** lahko izbrišete v urejanju, vendar **le, če ne vsebujejo postavk**.

Če osnutek še vsebuje postavke:

1. Kliknite modro polje stroška v razdelku **Postavke**, da odprete urejanje.
2. V oknu za urejanje kliknite **Izbriši**, da odstranite postavko.
3. Postopek ponovite za vse preostale postavke.

Ko dokument ne vsebuje več postavk, ga lahko izbrišete.

Za informacije o delu s postavkami dokumenta glejte [**Postavke dokumenta**](../../../Skupno/Koncepti/PostavkeDokumenta.md).

> [!NOTE]
> - Izbris je mogoč samo za **osnutke**.  
> - Objavljenih dokumentov ni mogoče izbrisati; uporabite **Vrni v osnutek**.  
> - Če so bila zabeležena plačila, dokumenta ni mogoče izbrisati, dokler plačila niso odstranjena in dokument vrnjen v osnutek.

## Meni

Na tej strani so dejanja menija na voljo na dveh mestih.

### Meni seznama

Meni seznama omogoča dejanja za trenutno prikazan seznam.

Na voljo so naslednja dejanja:

- **Odpri masovno procesiranje**
- **Uvozi e-račun**

### Meni dokumenta

Meni dokumenta omogoča dejanja za trenutno odprt dokument.

Na voljo so naslednja dejanja:

- **Povrni stanje**

Za podrobnosti o dejanjih menija glejte [**Dejanja menija**](../../../Skupno/Koncepti/MeniDejanja.md).
