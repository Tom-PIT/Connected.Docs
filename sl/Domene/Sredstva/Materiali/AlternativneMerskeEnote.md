<!-- app_route: /management/materials/alternative-measure-units -->
<!-- app_label: Alternativne merske enote -->
<!-- canonical_source_url: https://github.com/Tom-PIT/Connected.Docs/blob/main/sl/Domene/Sredstva/Materiali/AlternativneMerskeEnote.md -->
<!-- canonical_source_title: Alternativne merske enote -->

# Alternativne merske enote

**Alternativne merske enote** omogočajo obravnavo materiala z mersko enoto, ki je drugačna od njegove osnovne merske enote.  
To je uporabno v primerih, ko se materiali skladiščijo, pakirajo ali prevzemajo v praktičnih enotah (na primer kosih), zaloga pa se vodi v fizični enoti (na primer metrih).

Za dostop do tega zaslona pojdite na **Sredstva / Materiali / Alternativne merske enote** v [**navigaciji**](../../../Skupno/UI/Navigacija.md).

> [!TIP]
> Za podrobno predstavitev si oglejte video vodič **[Alternativne merske enote](https://www.youtube.com/watch?v=wPmLquFm8fY)**.

## Shema

| Polje | Opis |
|------|------|
| **Tip materiala** | Tip materiala (na primer surovina ali izdelek). |
| **Entiteta** | Konkreten material, za katerega je definirana alternativna merska enota. |
| **Osnovna merska enota** | Privzeta merska enota materiala (samo za branje). |
| **Merska enota** | Alternativna merska enota (na primer kos). |
| **Delilnik** | Količina, izražena v **osnovni merski enoti**. |
| **Množilnik** | Količina, izražena v **alternativni merski enoti**. |

## Upravljanje

Alternativne merske enote se definirajo **na nivoju posameznega materiala**.

V levi stranski vrstici izberite:
- **Tip materiala**
- **Entiteto**

Prikazane so samo alternativne merske enote za izbrani material.

### Seznamski pogled

Seznam prikazuje:
- **Ime** (alternativna merska enota)
- **Delilnik**
- **Množilnik**

![Seznam alternativnih merskih enot](../Images/AlternativeMeasureUnitsList.png)

## Dejanja

### Ustvariti nove alternativne merske enote

1. Izberite **Vrsto materiala** in **Entiteto**.
2. Kliknite **[akcijski gumb](../../../Skupno/UI/AkcijskiGumb.md)**.
3. Izberite alternativno **Mersko enoto**.
4. Vnesite **Delilnik** in **Množilnik**.
5. Kliknite **Shrani**.

![Nova alternativna merska enota](../Images/AlternativeMeasureUnitsNew.png)

#### Kako delujejo alternativne merske enote

Vsaka alternativna merska enota določa **fiksno pretvorbo** v osnovno mersko enoto materiala.  
Pretvorba je definirana z dvema obveznima vrednostma:

**Števec alternativne merske enote = Imenovalec osnovne merske enote**

### Primer

Imamo material, ki se v zalogi vodi v metrih, vendar se skladišči in pakira v kosih.

Če velja **1 kos = 2 metra**, vnesite:
- **Imenovalec**: `2`
- **Števec**: `1`

### Urediti alternativne merske enote

Kliknite obstoječi vnos na seznamu, da ga uredite, uporabite spremembe in kliknite **Shrani**. Lahko pa kliknete **Prekliči**, da zavržete spremembe in se vrnete na seznam.

### Izbrisati alternativne merske enote

Na seznamu izberite alternativno mersko enoto in uporabite **Izbriši** za njeno odstranitev. Po potrditvi bo alternativna merska enota izbrisana iz sistema.

## Uporaba v drugih funkcionalnostih

### Pakiranje

Alternativne merske enote se uporabljajo v **[Pakiranju](Pakiranje.md)** za določanje količin pakiranja v alternativni merski enoti, medtem ko sistem samodejno izračuna ustrezno količino v osnovni merski enoti.

![Alternativna merska enota v pakiranju](../Images/AlternativeMeasureUnitsPackaging.png)

### Prevzemni dokumenti

V **prevzemnih dokumentih** se količine, vnesene v alternativni merski enoti, samodejno pretvorijo v osnovno mersko enoto pri posodabljanju zaloge.

![Alternativna merska enota v prevzemu](../Images/AlternativeMeasureUnitsDetails.png)

> [!IMPORTANT]
>
> - Alternativne merske enote so vezane na posamezen material  
> - Osnovne merske enote ni mogoče spreminjati na tem zaslonu  
> - Pretvorbena razmerja se dosledno uporabljajo v celotnem sistemu  
> - Sprememba ali odstranitev alternativne merske enote lahko vpliva na poteke pakiranja in prevzema  
