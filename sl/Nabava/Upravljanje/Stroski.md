# Stroški

Šifrant **Stroški** vsebuje vse stroške, ki jih organizacija želi evidentirati kot vnaprej določene stroške. Ti lahko vključujejo ponavljajoče se storitve, stroške, povezane z opremo, stroške podizvajalcev ali katerikoli drug **ne-materialni strošek**, ki se uporablja v procesih nabave ali proizvodnje.

Ta seznam zagotavlja doslednost, saj so vsi stroški shranjeni na enem mestu in na voljo za uporabo v dokumentih ter operativnih delovnih tokovih.

Za dostop do **Stroškov** pojdite na **Nabava / Šifranti / Stroški** v [navigaciji](../../Skupno/UI/Navigacija.md).

## Shema

| Polje | Opis |
|------|------|
| [**Šifra**](../../Skupno/UI/SifreDokumentov.md) | Enolični identifikator stroška. |
| **Naziv** | Opisni naziv stroška. |
| [**Davek**](../../Skupno/Upravljanje/DavcneStopnje.md) | Davčna stopnja, ki se uporablja za strošek. |
| **Omogočeno** | Označuje, ali je strošek na voljo za uporabo v dokumentih. |
| **Kooperant** | Poslovni partner, ki izvaja podizvajalsko storitev, izbran iz **[Poslovnega imenika](../../Skupno/Upravljanje/PoslovniImenik.md)**. |
| **Znesek na enoto v (€)** | Cena te podizvajalske storitve na enoto. |
| **Operacija** | Seznam operacij, povezanih s tem stroškom podizvajalca. |

### Polja operacije (pogovorno okno *Dodaj operacijo*)

| Polje | Opis |
|------|------|
| [**Procesi**](../../Proizvodnja/Upravljanje/Procesi.md) | Proces, v katerem se operacija uporablja. |
| **Verzija** | Različica izbranega procesa. |
| **Operacija** | Posamezna operacija, ki pripada izbranemu procesu in različici. |

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

Kliknite [**akcijski gumb**](../../Skupno/UI/AkcijskiGumb.md) za ustvarjanje novega stroška. Vnosni obrazec vključuje polja:

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

---
