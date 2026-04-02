<!-- app_route: /management/common-types/expenses -->
<!-- app_label: Stroški -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Nabava/Upravljanje/Stroski.md -->
<!-- canonical_source_title: Stroški -->

# Stroški

Šifrant **Stroški** vsebuje vse stroške, ki jih organizacija želi evidentirati kot vnaprej določene stroške. Ti lahko vključujejo ponavljajoče se storitve, stroške, povezane z opremo, stroške podizvajalcev ali katerikoli drug **ne-materialni strošek**, ki se uporablja v procesih nabave ali proizvodnje.

Ta seznam zagotavlja doslednost, saj so vsi stroški shranjeni na enem mestu in na voljo za uporabo v dokumentih ter operativnih delovnih tokovih.

Za dostop do **Stroškov** pojdite na **Nabava / Šifranti / Stroški** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

## Shema

<details open>
  <summary><strong>Dokument</strong></summary>

| Polje | Opis |
|------|------|
| [**Šifra**](../../../Skupno/UI/SifreDokumentov.md) | Enolični identifikator stroška. |
| **Naziv** | Opisni naziv stroška. |
| [**Davek**](../../../Skupno/Upravljanje/DavcneStopnje.md) | Davčna stopnja, ki se uporablja za strošek. |
| **Omogočeno** | Označuje, ali je strošek na voljo za uporabo v dokumentih. |
| **Kooperant** | Poslovni partner, ki izvaja podizvajalsko storitev, izbran iz **[Poslovnega imenika](../../../Skupno/Upravljanje/PoslovniImenik.md)**. |
| **Znesek na enoto v (€)** | Cena te podizvajalske storitve na enoto. |
| **Operacija** | Seznam operacij, povezanih s tem stroškom podizvajalca. |

</details>

<details>
  <summary><strong>Operacija</strong></summary>

| Polje | Opis |
|------|------|
| [**Procesi**](../../Proizvodnja/Upravljanje/Procesi.md) | Proces, v katerem se operacija uporablja. |
| **Verzija** | Različica izbranega procesa. |
| **Operacija** | Posamezna operacija, ki pripada izbranemu procesu in različici. |

</details>


<details>
  <summary><strong>Glavna knjiga</strong></summary>

| Polje | Opis |
|-------|------|
| [**Konto**](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md) | Konto glavne knjige, uporabljen za knjiženja, ki nastanejo iz tega stroška. |
| **Tip davka** | Razvrstitev davčne obravnave stroška (npr. Zaloga, Standardni strošek, Nepremičnine). |
| **Tip sredstva** | Narava nabave za poročanje (npr. Blago, Storitve). |
| **Odbij davek** | Označuje, ali je vstopni davek za ta strošek odbiten (potrditveno polje). |
| **Samoobdavčitev** | Označuje, ali se uporablja mehanizem obrnjene davčne obveznosti/samodobavitev (potrditveno polje). |

</details>

## Upravljanje

### Seznam stroškov

Seznam prikazuje vse definirane stroške skupaj z njihovo davčno stopnjo.

![Seznam stroškov](../Images/ExpensesList.png "Seznam stroškov")

Vsak zapis vključuje indikator stanja na levi strani naziva:
- **Modra** – strošek je **omogočen**
- **Siva** – strošek je **onemogočen**

### Filtri

Leva stranska vrstica vsebuje dva filtra:

- **Omogočeno**
- **Onemogočeno**

Filtri določajo, ali seznam prikazuje aktivne ali neaktivne zapise stroškov.

## Dejanja

Kliknite [**akcijski gumb**](../../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje novega stroška. Vnosni obrazec vključuje polja:

- Koda  
- Naziv  
- Davčna stopnja  
- Omogočeno  

![Nov strošek](../Images/ExpensesNew.png "Nov strošek")

### Strošek podizvajalca

Ta izbirni razdelek omogoča dodajanje stroškov, povezanih s podizvajalci.  
Določite lahko:

- Podizvajalca  
- Ceno na enoto (€)  
- Operacije  

Kliknite **Dodaj operacijo**, da odprete pogovorno okno za izbiro operacije.

![Dodaj operacijo](../Images/ExpensesAddOperation.png "Dodaj operacijo")

Po vnosu podatkov kliknite **Dodaj**, da shranite zapis, ali **Prekliči**, da se vrnete na seznam.

#### Glavna knjiga

V tem razdelku strošek dodelimo ustreznemu kontu glavne knjige. Oglejte si [**Konti**](../../Racunovodstvo/Upravljanje/GlavnaKnjiga/Konti.md).


## Urejanje

Za urejanje stroška kliknite zapis v seznamu. Sistem odpre način urejanja.

Vsa polja – vključno s stroški podizvajalca in operacijami – je mogoče spremeniti. Strošek lahko omogočite ali onemogočite z uporabo potrditvenega polja **Omogočeno**.

Ko zaključite z urejanjem, kliknite **Shrani**. Če sprememb ne želite shraniti, kliknite **Prekliči**.

## Brisanje

Na zaslonu za urejanje kliknite **Izbriši**, da trajno odstranite strošek.

**Ali ste prepričani, da želite izbrisati ta zapis?**

Brisanje je dovoljeno samo, če strošek ni uporabljen v odvisnih zapisih.

> [!NOTE]
> Onemogočeni stroški ostanejo v sistemu, vendar jih ni mogoče izbrati v novih dokumentih.
